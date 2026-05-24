import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Let's make something
              <br />
              <span className="italic">unforgettable.</span>
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block border-b-2 border-foreground pb-1 font-display text-lg font-semibold"
            >
              Start a project →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Studio
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Elsewhere
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" rel="noreferrer">Instagram</a></li>
                <li><a href="#" rel="noreferrer">Are.na</a></li>
                <li><a href="#" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Contact
              </p>
              <ul className="space-y-2 text-sm">
                <li>hello@etudes.studio</li>
                <li>Paris · Remote</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Études Studio. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Built with care · Paris, FR
          </p>
        </div>
      </div>
    </footer>
  );
}
