import treatments from "@/data/treatments.json";

export default function Marquee() {
  const items = treatments.map((t) => t.title);

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-brand-900/15 py-5 font-serif text-3xl italic text-brand-700 sm:text-4xl"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((title) => (
              <li key={title} className="flex items-center whitespace-nowrap">
                <span className="px-6">{title}</span>
                <span className="text-brand-500">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
