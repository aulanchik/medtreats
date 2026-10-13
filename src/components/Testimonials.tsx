import testimonials from "@/data/testimonials.json";
import Accented from "./Accented";
import Carousel from "./Carousel";
import Reveal from "./Reveal";

type Feedback = (typeof testimonials.feedbacks)[number];

function Card({ feedback }: { feedback: Feedback }) {
  const [headline, ...body] = feedback.feedback;
  return (
    <figure className="h-full rounded-3xl bg-cream p-8 sm:p-12">
      <blockquote>
        <p className="font-serif text-3xl leading-tight sm:text-4xl">
          {headline}
        </p>
        <p className="mt-6 leading-relaxed text-brand-900/75">
          {body.join(" ")}
        </p>
      </blockquote>
      <figcaption className="mt-8 text-sm font-semibold">
        {feedback.author}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-h2">
            <Accented text={testimonials.title} />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-900/75">
            {testimonials.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {testimonials.actions.map((action, i) => (
              <a
                key={action.id}
                href={action.href}
                className={`btn ${i === 0 ? "btn-primary" : "btn-outline"}`}
              >
                {action.title}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="min-w-0 lg:col-span-7">
          <Carousel
            label="Client testimonials"
            items={testimonials.feedbacks}
            render={(feedback) => <Card feedback={feedback} />}
          />
        </div>
      </div>
    </section>
  );
}
