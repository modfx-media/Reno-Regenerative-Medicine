import type { GlobalConfig } from "payload";

import { authenticated } from "../collections/access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    { name: "siteName", type: "text" },
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
    { name: "address", type: "textarea" },
    { name: "defaultMetaDescription", type: "textarea" },
    { name: "siteUrl", type: "text" },
  ],
};
