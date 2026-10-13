import { useEffect, useState, type FocusEvent, type ReactNode } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type Props<T> = {
  items: T[];
  render: (item: T) => ReactNode;
  label: string;
  interval?: number;
};

export default function Carousel<T>({
  items,
  render,
  label,
  interval = 7000,
}: Props<T>) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const count = items.length;
  const paused = hovered || focused;

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, count, interval]);

  const go = (next: number) => setIndex((next + count) % count);
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={onBlur}
    >
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              inert={i !== index}
              className="w-full shrink-0"
            >
              {render(item)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="btn btn-outline size-12 !px-0"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="btn btn-outline size-12 !px-0"
          >
            →
          </button>
        </div>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className="grid size-6 place-items-center"
            >
              <span
                className={`block size-2 rounded-full transition ${
                  i === index ? "scale-125 bg-brand-900" : "bg-brand-900/25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
