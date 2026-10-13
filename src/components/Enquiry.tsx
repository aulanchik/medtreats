import { useState, type ChangeEvent } from "react";
import enquiry from "@/data/enquiry.json";
import Accented from "./Accented";
import Field from "./Field";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const messages: Partial<Record<Status, string>> = {
  sent: "Thank you — your enquiry has been sent.",
  error: "Something went wrong. Please try again.",
};

export default function Enquiry() {
  const [status, setStatus] = useState<Status>("idle");

  // Posts to Netlify Forms (the form is registered in public/__forms.html).
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new URLSearchParams();
    for (const [key, value] of new FormData(form)) {
      if (typeof value === "string") body.append(key, value);
    }

    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquiry" className="container-page py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 rounded-[2.5rem] bg-brand-900 p-8 text-cream [--accent:var(--color-brand-300)] sm:p-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-h2">
            <Accented text={enquiry.title} />
          </h2>
        </Reveal>

        <form
          name="enquiry"
          method="POST"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7"
        >
          <input type="hidden" name="form-name" value="enquiry" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          {enquiry.form.map((field) => (
            <Field key={field.name} {...field} />
          ))}

          <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn bg-cream text-brand-900 hover:bg-brand-300 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : enquiry.action.label}
            </button>
            <p role="status" className="text-sm text-cream/80">
              {messages[status]}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
