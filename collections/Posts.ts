import type { CollectionConfig } from "payload";

import { authenticated, authenticatedOrPublished } from "./access";
import { optionalUniqueText } from "./hooks";
import { draftVersions } from "./versions";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "slug", "_status", "updatedAt"],
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: draftVersions,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    optionalUniqueText("slug", "Slug"),
    {
      ...optionalUniqueText("path", "Path"),
      admin: {
        description: "Public path such as /your-post-slug/. Not required to create a draft.",
      },
    },
    optionalUniqueText("legacyId", "Legacy ID"),
    optionalUniqueText("sourceUrl", "Source URL"),
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "publishedOn",
      type: "date",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "authors",
      hasMany: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heroImagePath",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};
