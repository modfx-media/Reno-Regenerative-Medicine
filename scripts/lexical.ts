export function paragraphDocument(text: string) {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const children = (blocks.length > 0 ? blocks : [""]).map((block) => ({
    type: "paragraph",
    children: [
      {
        type: "text",
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: block,
        version: 1,
      },
    ],
    direction: "ltr" as const,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: 1,
  }));

  return {
    root: {
      type: "root",
      children,
      direction: "ltr" as const,
      format: "",
      indent: 0,
      version: 1,
    },
  };
}
