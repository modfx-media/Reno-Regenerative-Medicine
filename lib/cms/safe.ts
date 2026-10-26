import { getPayload, type Payload } from "payload";

import configPromise from "@payload-config";

let payloadPromise: Promise<Payload> | null = null;
let failedUntil = 0;

function cmsConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.PAYLOAD_SECRET);
}

async function getCachedPayload(): Promise<Payload> {
  if (!payloadPromise) {
    payloadPromise = getPayload({ config: configPromise }).catch((error) => {
      payloadPromise = null;
      throw error;
    });
  }
  return payloadPromise;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("cms timeout")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

/**
 * Run a Payload query for a public page. A down or slow database returns
 * `fallback` so the designed site keeps rendering.
 */
export async function withCMS<T>(fn: (payload: Payload) => Promise<T>, fallback: T): Promise<T> {
  if (!cmsConfigured()) return fallback;
  if (Date.now() < failedUntil) return fallback;

  try {
    const payload = await withTimeout(getCachedPayload(), 2500);
    return await withTimeout(fn(payload), 2500);
  } catch (error) {
    failedUntil = Date.now() + 15_000;
    payloadPromise = null;
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[cms] public fallback: ${message}`);
    return fallback;
  }
}
