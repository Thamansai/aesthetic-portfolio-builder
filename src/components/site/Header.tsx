import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            Études<span className="italic">.</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:inline">
            Studio · est. 2018
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-6 bg-foreground" />
            <span className="block h-px w-6 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-border py-4 text-base"
              >
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
