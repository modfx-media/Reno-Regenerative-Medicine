const DEFAULT_LIVE_ORIGIN = "https://www.renoregen.com";

function hostnameOf(value: string): string | null {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

export function isVercelAppHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host === "vercel.app" || host.endsWith(".vercel.app");
}

/**
 * Accept an absolute origin only when it is the public site.
 * Preview hosts (*.vercel.app) and localhost are rejected.
 */
export function liveOrigin(value: string | undefined | null): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase();
    if (host === "localhost" || host === "127.0.0.1" || host === "::1") return null;
    if (isVercelAppHost(host)) return null;
    return url.origin;
  } catch {
    return null;
  }
}

/**
 * Public SEO origin. `NEXT_PUBLIC_SITE_URL` wins, then `SITE_ORIGIN`.
 * A vercel.app or localhost value is ignored so canonicals stay on the live domain.
 */
export function publicSiteOrigin(): string {
  return liveOrigin(process.env.NEXT_PUBLIC_SITE_URL) || liveOrigin(process.env.SITE_ORIGIN) || DEFAULT_LIVE_ORIGIN;
}

/** Keep a stored canonical on the live domain when it points at a preview host. */
export function toLiveCanonical(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (isVercelAppHost(host) || host === "localhost" || host === "127.0.0.1") {
      return `${publicSiteOrigin()}${url.pathname}${url.search}`;
    }
    return value;
  } catch {
    return value;
  }
}

export function isIgnoredServerHost(value: string | undefined | null): boolean {
  const host = value ? hostnameOf(value) : null;
  if (!host) return true;
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || isVercelAppHost(host);
}
