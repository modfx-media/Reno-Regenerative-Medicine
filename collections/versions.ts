import type { CollectionConfig, GlobalConfig } from "payload";

/** Drafts with scheduled publish. Autosave stays off. */
export const draftVersions: NonNullable<CollectionConfig["versions"]> = {
  drafts: {
    autosave: false,
    schedulePublish: true,
  },
  maxPerDoc: 50,
};

/** Globals stay drafts until someone publishes them in the admin. */
export const globalDraftVersions: NonNullable<GlobalConfig["versions"]> = {
  drafts: {
    autosave: false,
    schedulePublish: true,
  },
  max: 50,
};
