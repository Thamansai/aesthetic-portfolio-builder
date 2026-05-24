import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Études" },
      {
        name: "description",
        content:
          "Start a project, ask a question, or say hello. We answer every email.",
      },
      { property: "og:title", content: "Contact — Études" },
      {
        property: "og:description",
        content: "Start a project or say hello.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Sent. We'll be in touch within two business days.");
    }, 700);
  }

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-10 md:pt-32 md:pb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          ⌘ Contact
        </p>
        <h1 className="mt-6 font-display text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.88] tracking-[-0.04em]">
          Let's <span className="italic font-medium">talk.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Tell us about the project. The more specific the better — budget,
          timeline, the problem you're trying to solve.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-24">
          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-10 md:col-span-7">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company / Project" name="company" />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                The brief
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-3 block w-full resize-none border-0 border-b border-foreground bg-transparent pb-3 font-display text-xl outline-none placeholder:text-muted-foreground/50 focus:border-foreground"
                placeholder="Tell us what you're working on…"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 bg-foreground px-10 py-5 font-display text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send the brief"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>

          {/* Aside */}
          <aside className="space-y-12 md:col-span-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Direct
              </p>
              <a
                href="mailto:hello@etudes.studio"
                className="mt-3 block font-display text-3xl font-semibold md:text-4xl"
              >
                hello@etudes.studio
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Studio
              </p>
              <p className="mt-3 font-display text-xl">
                14 rue du Faubourg
                <br />
                75011 Paris, France
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Hours
              </p>
              <p className="mt-3 font-display text-xl">
                Monday — Friday
                <br />
                10h00 — 19h00 CET
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Elsewhere
              </p>
              <ul className="mt-3 space-y-2 font-display text-xl">
                <li><a href="#">Instagram ↗</a></li>
                <li><a href="#">Are.na ↗</a></li>
                <li><a href="#">LinkedIn ↗</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 block w-full border-0 border-b border-foreground bg-transparent pb-3 font-display text-xl outline-none placeholder:text-muted-foreground/50 focus:border-foreground"
      />
    </div>
  );
}
