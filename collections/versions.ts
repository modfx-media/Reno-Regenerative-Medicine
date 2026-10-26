import type { CollectionConfig } from "payload";

/** Drafts with scheduled publish. Autosave stays off. */
export const draftVersions: NonNullable<CollectionConfig["versions"]> = {
  drafts: {
    autosave: false,
    schedulePublish: true,
  },
  maxPerDoc: 50,
};
