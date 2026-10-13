import hero from "@/data/hero.json";
import Accented from "./Accented";

export default function Hero() {
  const [primary, secondary] = hero.cta;

  return (
    <section
      id="top"
      className="container-page grid grid-cols-1 items-center gap-12 pb-16 pt-12 lg:grid-cols-12 lg:pb-24 lg:pt-20"
    >
      <div className="lg:col-span-7">
        <p className="eyebrow animate-fade-up">Skincare &amp; aesthetics</p>
        <h1 className="mt-6 animate-fade-up text-display [animation-delay:100ms]">
          <Accented text={hero.title} />
        </h1>
        <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-brand-900/75 [animation-delay:200ms]">
          {hero.description}
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:300ms]">
          <a href={primary.href} className="btn btn-primary">
            {primary.title}
          </a>
          <a href={secondary.href} className="btn btn-outline">
            {secondary.title}
          </a>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
        <img
          src="/images/backgrounds/hero.webp"
          alt="A client relaxing during a facial treatment"
          width={1600}
          height={1066}
          fetchPriority="high"
          className="aspect-4/5 w-full rounded-t-full rounded-b-3xl object-cover object-[35%_50%]"
        />
      </div>
    </section>
  );
}
