import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Études — Independent design studio" },
      {
        name: "description",
        content:
          "An independent studio working at the intersection of identity, editorial, and digital craft.",
      },
      { property: "og:title", content: "Études — Independent design studio" },
      {
        property: "og:description",
        content:
          "Selected work in identity, editorial, and digital craft for museums, makers, and quiet brands.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const disciplines = [
  "Identity",
  "Editorial",
  "Art Direction",
  "Digital",
  "Print",
  "Packaging",
  "Type",
];

function Index() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pt-16 pb-24 md:grid-cols-12 md:px-10 md:pt-24 md:pb-32">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              ⌘ Études · Selected works 2018 — 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 font-display text-[clamp(3rem,9vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.04em]"
            >
              Design with
              <br />
              <span className="italic font-medium">conviction,</span>
              <br />
              built to last.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
              >
                View the work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="border-b-2 border-foreground pb-1 font-display text-sm font-semibold"
              >
                Start a project
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative md:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={heroImg}
                alt="Folded cream paper composition"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>Plate 001</span>
              <span>Paper Study, 2025</span>
            </p>
          </motion.div>
        </div>

        {/* discipline marquee */}
        <div className="border-y border-border overflow-hidden">
          <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-5">
            {[...disciplines, ...disciplines, ...disciplines].map((d, i) => (
              <span
                key={i}
                className="flex items-center font-display text-2xl font-medium uppercase tracking-tight md:text-3xl"
              >
                <span className="px-10">{d}</span>
                <span className="text-muted-foreground">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Index · 01
            </p>
            <p className="mt-2 font-display text-sm font-semibold">The Studio</p>
          </div>
          <p className="font-display text-3xl leading-tight tracking-tight md:col-span-9 md:text-5xl">
            We're a small studio with strong opinions. We work with founders,
            museums, and independent makers on identity, editorial, and digital
            projects that <span className="italic">have to mean something.</span>
          </p>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Index · 02
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Selected Work
              </h2>
            </div>
            <Link to="/work" className="hidden font-display text-sm font-semibold md:block">
              All projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-16 md:gap-24">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-6 md:grid-cols-12 md:gap-10"
              >
                <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      width={1400}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-end md:col-span-4">
                  <p className="font-mono text-xs text-muted-foreground">
                    {p.index} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
                  <p className="mt-4 text-base">{p.summary}</p>
                  <span className="mt-6 inline-flex w-fit border-b border-foreground pb-0.5 font-display text-sm font-semibold">
                    Read the case →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link to="/work" className="font-display text-sm font-semibold">
              All projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
