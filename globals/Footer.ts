import type { GlobalConfig } from "payload";

import { authenticated } from "../collections/access";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    { name: "blurb", type: "textarea" },
    { name: "phone", type: "text" },
    { name: "address", type: "textarea" },
    { name: "facebookUrl", type: "text" },
    { name: "youtubeUrl", type: "text" },
  ],
};
