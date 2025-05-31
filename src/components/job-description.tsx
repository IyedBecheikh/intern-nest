export default function JobDescription({ html }: { html: string }) {
  return (
    <div
      className="max-w-none text text-foreground border p-2 border-dashed prose-strong:text-foreground"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
