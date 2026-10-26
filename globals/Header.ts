import type { GlobalConfig } from "payload";

import { authenticated } from "../collections/access";

export const Header: GlobalConfig = {
  slug: "header",
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
