import type { FieldHook, TextField } from "payload";

export const emptyStringToNull: FieldHook = ({ value }) => {
  if (value === "") return null;
  return value;
};

/** Unique text that stores null instead of "" so Postgres allows many blanks. */
export function optionalUniqueText(name: string, label?: string): TextField {
  return {
    name,
    type: "text",
    label,
    unique: true,
    index: true,
    required: false,
    hooks: {
      beforeValidate: [emptyStringToNull],
    },
  };
}
