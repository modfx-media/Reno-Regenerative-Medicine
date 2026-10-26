import type { CollectionConfig } from "payload";

import { authenticated } from "./access";
import { optionalUniqueText } from "./hooks";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "updatedAt"],
  },
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    optionalUniqueText("slug", "Slug"),
  ],
};
