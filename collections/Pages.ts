import type { CollectionConfig } from "payload";

import { authenticated, authenticatedOrPublished } from "./access";
import { optionalUniqueText } from "./hooks";
import { draftVersions } from "./versions";

export const Pages: CollectionConfig = {
  slug: "pages",
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
        description: "Public path such as /about/. Not required to create a draft.",
      },
    },
    optionalUniqueText("legacyId", "Legacy ID"),
    optionalUniqueText("sourceUrl", "Source URL"),
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heroImagePath",
      type: "text",
      admin: {
        description: "Existing public image path, for example /images/services/chiropractic-care.jpg.",
      },
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};
