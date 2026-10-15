import type { MetadataRoute } from "next";
import { CLIENT_BLOGS_HIDDEN } from "./lib/posts";

const SITE = "https://www.renoregen.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/thank-you/",
          "/what-can-we-improve/",
          ...(CLIENT_BLOGS_HIDDEN
            ? ["/blog/", "/category/blog/", "/category/regenerative-medicine/"]
            : []),
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
