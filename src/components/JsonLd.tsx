/**
 * Renders a JSON-LD structured-data script. Escapes "<" to avoid breaking out
 * of the script tag. Data is app-controlled (no user input).
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
