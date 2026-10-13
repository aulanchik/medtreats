/** Renders "plain *accent* plain" with the starred part in italic serif. */
export default function Accented({ text }: { text: string }) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic text-(--accent,var(--color-brand-600))">
        {part}
      </em>
    ) : (
      part
    ),
  );
}
