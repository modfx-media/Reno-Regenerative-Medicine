import type { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/cms/site-origin";
import { CLIENT_BLOGS_HIDDEN } from "./(site)/lib/posts";

const SITE = publicSiteOrigin();

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
