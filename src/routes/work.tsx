import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Études" },
      {
        name: "description",
        content:
          "An index of selected projects across identity, editorial, web, and packaging.",
      },
      { property: "og:title", content: "Work — Études" },
      { property: "og:description", content: "Selected work, 2022 — 2025." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-16 md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            ⌘ Études · Archive
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            The <span className="italic font-medium">Work.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Twenty-eight projects since 2018. Six are listed here. The rest live
            in conversation.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 border-b border-border py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="col-span-1">No.</div>
          <div className="col-span-5 md:col-span-4">Project</div>
          <div className="col-span-4 hidden md:block">Client</div>
          <div className="col-span-3 md:col-span-2">Tags</div>
          <div className="col-span-3 md:col-span-1 text-right">Year</div>
        </div>

        {projects.map((p) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            onMouseEnter={() => setHovered(p.slug)}
            onMouseLeave={() => setHovered(null)}
            className="group relative grid grid-cols-12 items-center border-b border-border py-8 transition-colors hover:bg-surface/50 md:py-10"
          >
            <div className="col-span-1 font-mono text-xs text-muted-foreground">
              {p.index}
            </div>
            <div className="col-span-5 font-display text-2xl font-bold tracking-tight md:col-span-4 md:text-4xl">
              {p.title}
            </div>
            <div className="col-span-4 hidden text-sm md:block">{p.client}</div>
            <div className="col-span-3 text-xs text-muted-foreground md:col-span-2">
              {p.tags.slice(0, 2).join(", ")}
            </div>
            <div className="col-span-3 text-right font-mono text-sm md:col-span-1">
              {p.year}
            </div>

            {/* hover thumbnail */}
            <div
              className={`pointer-events-none absolute right-6 top-1/2 hidden h-48 w-72 -translate-y-1/2 overflow-hidden border border-border bg-surface shadow-2xl transition-all duration-300 md:block ${
                hovered === p.slug
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <img
                src={p.cover}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
