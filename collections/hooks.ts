import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  FieldHook,
  TextField,
} from "payload";

import { normalizePath } from "@/lib/cms/paths";

export const emptyStringToNull: FieldHook = ({ value }) => {
  if (value === "") return null;
  return value;
};

type StatusDoc = {
  path?: unknown;
  _status?: unknown;
};

function publicPath(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  return normalizePath(value) ?? undefined;
}

/** Paths whose cached HTML must be dropped after a publish, unpublish, move, or delete. */
export function pathsToRevalidate(doc?: StatusDoc | null, previousDoc?: StatusDoc | null): string[] {
  const path = publicPath(doc?.path);
  const prev = publicPath(previousDoc?.path);
  const paths: string[] = [];
  if (doc?._status === "published" && path) paths.push(path);
  if (
    previousDoc?._status === "published" &&
    prev &&
    (prev !== path || doc?._status !== "published")
  ) {
    paths.push(prev);
  }
  return paths;
}

export function pathToRevalidateOnDelete(doc?: StatusDoc | null): string[] {
  const path = publicPath(doc?.path);
  return path ? [path] : [];
}

async function safeRevalidate(path: string) {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath(path);
  } catch {
    // Payload CLI and tests have no Next.js static generation store.
  }
}

export const revalidatePublished: CollectionAfterChangeHook = async ({ doc, previousDoc }) => {
  for (const path of pathsToRevalidate(doc, previousDoc)) await safeRevalidate(path);
  return doc;
};

export const revalidateDeleted: CollectionAfterDeleteHook = async ({ doc }) => {
  for (const path of pathToRevalidateOnDelete(doc)) await safeRevalidate(path);
  return doc;
};

/** Unique text that stores null instead of "" so Postgres allows many blanks. */
export function optionalUniqueText(name: string, label?: string): TextField {
  return {
    name,
    type: "text",
    label,
    unique: true,
    index: true,
    required: false,
    hooks: {
      beforeValidate: [emptyStringToNull],
    },
  };
}
