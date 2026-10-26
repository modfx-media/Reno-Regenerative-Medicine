import type { CollectionConfig } from "payload";

import { authenticated } from "./access";
import { optionalUniqueText } from "./hooks";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    optionalUniqueText("slug", "Slug"),
  ],
};
