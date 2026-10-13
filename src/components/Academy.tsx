import courses from "@/data/courses.json";
import Accented from "./Accented";
import Reveal from "./Reveal";

export default function Academy() {
  return (
    <section
      id="academy"
      className="bg-brand-900 py-24 text-cream [--accent:var(--color-brand-300)] lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <h2 className="text-h2">
            <Accented text="Training *Academy*" />
          </h2>
        </Reveal>

        <ol className="mt-14 grid border-t border-cream/20 md:grid-cols-2 md:gap-x-16">
          {courses.map((course, i) => (
            <li key={course.id} className="border-b border-cream/20 py-8">
              <Reveal className="flex gap-6">
                <span className="pt-2 text-xs tabular-nums text-brand-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3">{course.title}</h3>
                  <div className="mt-3 space-y-3 leading-relaxed text-cream/70">
                    {course.description.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
