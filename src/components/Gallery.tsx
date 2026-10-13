import gallery from "@/data/gallery.json";
import Accented from "./Accented";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="results" className="container-page py-24 lg:py-32">
      <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="text-h2">
            <Accented text={gallery.title} />
          </h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-brand-900/75">
            {gallery.description}
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 md:pb-10">
        {gallery.images.map((img, i) => (
          <li key={img.id} className={i % 2 ? "md:translate-y-10" : ""}>
            <Reveal delay={i * 100}>
              <figure className="group aspect-3/4 overflow-hidden rounded-2xl">
                <img
                  src={img.image}
                  alt={img.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                />
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
