import { useState } from "react";
import treatments from "@/data/treatments.json";
import Accented from "./Accented";
import Reveal from "./Reveal";

type Treatment = (typeof treatments)[number];

// Hover-to-preview only makes sense when the preview sits beside the list.
const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function Detail({ treatment }: { treatment: Treatment }) {
  return (
    <div className="animate-fade-up">
      <img
        src={treatment.image}
        alt=""
        width={512}
        height={512}
        className="aspect-square w-full max-w-md rounded-3xl object-cover lg:aspect-4/3 lg:max-w-none"
      />
      <h3 className="mt-6 text-h3">{treatment.title}</h3>
      <div className="mt-4 space-y-4 leading-relaxed text-brand-900/75">
        {treatment.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function Treatments() {
  const [selectedId, setSelectedId] = useState(treatments[0].id);
  const selected = treatments.find((t) => t.id === selectedId) ?? treatments[0];

  return (
    <section id="treatments" className="container-page py-24 lg:py-32">
      <Reveal>
        <h2 className="text-h2">
          <Accented text="Our *Treatments*" />
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <ul className="border-t border-brand-900/15 lg:col-span-6">
          {treatments.map((t, i) => {
            const active = t.id === selectedId;
            return (
              <li key={t.id} className="border-b border-brand-900/15">
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedId(t.id)}
                  onMouseEnter={() => isDesktop() && setSelectedId(t.id)}
                  onFocus={() => setSelectedId(t.id)}
                  className={`flex w-full items-baseline gap-5 py-5 text-left transition duration-300 motion-reduce:transition-none ${
                    active
                      ? "translate-x-2 text-brand-900"
                      : "text-brand-900/45 hover:text-brand-900"
                  }`}
                >
                  <span className="font-sans text-xs tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-h3">{t.title}</span>
                </button>
                {active && (
                  <div className="pb-8 lg:hidden">
                    <Detail treatment={t} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-28" aria-live="polite">
            <Detail key={selected.id} treatment={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}
