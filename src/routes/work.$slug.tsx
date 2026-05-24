import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Études" }] };
    return {
      meta: [
        { title: `${p.title} — Études` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Études` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { property: "og:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl font-bold">Project not found</h1>
      <Link to="/work" className="mt-6 inline-block border-b-2 border-foreground pb-1 font-semibold">
        ← Back to work
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      {/* Header */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
        <Link to="/work" className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          ← Index
        </Link>
        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Case Study · {project.index}
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em]">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-snug md:text-2xl">
          {project.summary}
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-y border-border py-8 md:grid-cols-4">
          {[
            ["Client", project.client],
            ["Year", project.year],
            ["Role", project.role],
            ["Tags", project.tags.join(", ")],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-2 font-display text-base font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Cover image */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.cover}
            alt={project.title}
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="space-y-20">
          {project.sections.map((s, i) => (
            <div key={i} className="grid gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  0{i + 1}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  {s.heading}
                </h2>
              </div>
              <p className="font-display text-xl leading-snug tracking-tight md:col-span-9 md:text-3xl">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <section className="border-t border-border">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto block max-w-[1400px] px-6 py-20 md:px-10 md:py-28"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Next project · {next.index}
          </p>
          <p className="mt-4 font-display text-5xl font-bold tracking-tight transition-transform group-hover:translate-x-2 md:text-8xl">
            {next.title} →
          </p>
        </Link>
      </section>
    </article>
  );
}
