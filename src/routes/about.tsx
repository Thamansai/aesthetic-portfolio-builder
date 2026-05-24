import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Études" },
      {
        name: "description",
        content:
          "A small studio in Paris making identity, editorial, and digital work for makers who care about craft.",
      },
      { property: "og:title", content: "About — Études" },
      {
        property: "og:description",
        content: "A small studio in Paris. Identity, editorial, and digital.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const services = [
  { n: "01", t: "Identity", d: "Wordmarks, logo systems, type, color, voice." },
  { n: "02", t: "Editorial", d: "Books, magazines, reports, long-form digital." },
  { n: "03", t: "Digital", d: "Portfolio sites, e-commerce, custom CMS." },
  { n: "04", t: "Art Direction", d: "Campaigns, photography, packaging." },
];

const clients = [
  "Maison Noir",
  "Foster & Co.",
  "Studio Hayashi",
  "Aperture",
  "Field Recordings",
  "Hôtel Mira",
  "Tate Modern",
  "MoMA",
  "Wallpaper*",
];

export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-16 md:px-10 md:pt-32 md:pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          ⌘ About
        </p>
        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,9rem)] font-bold leading-[0.88] tracking-[-0.04em]">
          A studio of <span className="italic font-medium">two,</span>
          <br />
          and rarely more.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={portrait}
                alt="Studio founder"
                width={1000}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>Eloise Marchand</span>
              <span>Founder · Director</span>
            </p>
          </div>

          <div className="space-y-8 md:col-span-7">
            <p className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Études is an independent design studio working between Paris and
              everywhere there's good light. We've been at it since 2018.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We come from editorial. That means we treat every brief like a
              feature: research first, opinions second, decoration last. Most of
              our work is identity and print, but we've spent the last three
              years building digital projects that hold the same standard.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We're small on purpose. Two principals, a rotating bench of
              collaborators, and a strict rule about how many projects we run
              in parallel. If we say yes, you'll talk to the people doing the
              work.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Practice
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              What we do
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-10 md:p-12">
                <p className="font-mono text-xs text-muted-foreground">{s.n}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Selected clients
        </p>
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
          {clients.map((c) => (
            <span key={c} className="font-display text-3xl font-medium md:text-5xl">
              {c}<span className="text-muted-foreground">.</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
