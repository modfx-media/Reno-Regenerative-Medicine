// Renders one or more Schema.org JSON-LD objects in a server component.
// Pass a single object or an array. Uses dangerouslySetInnerHTML for
// the canonical Google-recommended format.

type SchemaObject = Record<string, unknown>;

export default function JsonLd({
  schema,
}: {
  schema: SchemaObject | SchemaObject[];
}) {
  const items = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
