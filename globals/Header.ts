import type { GlobalConfig } from "payload";

import { authenticated } from "../collections/access";
import { globalDraftVersions } from "../collections/versions";

export const Header: GlobalConfig = {
  slug: "header",
  versions: globalDraftVersions,
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "announcement",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "bookingUrl",
      type: "text",
    },
    {
      name: "navItems",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
  ],
};
