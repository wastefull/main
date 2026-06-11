import { Link, useLocation } from "react-router";
import { FlaskConical, Sprout, Recycle, Lightbulb } from "lucide-react";
import logo from "../../imports/logo.png";
import wordmark from "../../imports/Wastefullmono.svg?url";

/**
 * PATHWAY — single source of truth for per-pathway label, icon, and CSS-var color references.
 * Colors are defined in src/styles/theme.css (:root) as --compost-bg / --compost-fg etc.
 * Use Tailwind classes (bg-compost, text-compost-fg, …) where the pathway is statically known,
 * or style={{ background: PATHWAY.compost.bg }} for dynamic/computed cases.
 */
export const PATHWAY = {
  compost: {
    color: "var(--compost-fg)",
    bg: "var(--compost-bg)",
    label: "Compost",
    Icon: Sprout,
  },
  recycle: {
    color: "var(--recycle-fg)",
    bg: "var(--recycle-bg)",
    label: "Recycle",
    Icon: Recycle,
  },
  reuse: {
    color: "var(--reuse-fg)",
    bg: "var(--reuse-bg)",
    label: "Upcycle",
    Icon: Lightbulb,
  },
  science: {
    color: "var(--science-fg)",
    bg: "var(--science-bg)",
    label: "Science",
    Icon: FlaskConical,
  },
} as const;

/** Logo-specific accent tones (defined in theme.css --logo-* vars). */
export const LOGO_INK = "var(--logo-ink)";
export const LOGO_ACCENT = "var(--logo-accent)";
export const LOGO_OLIVE = "var(--logo-olive)";
export const LOGO_PAPER = "var(--logo-paper)";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/guides", label: "Guides" },
  { to: "/methods", label: "Methods" },
];
export function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="border-b-[1.5px] border-ink bg-paper sticky top-0 z-30 backdrop-blur pb-0.5 overflow-y-clip">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-16 flex items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 leading-none"
          aria-label="Wastefull home"
        >
          <img src={logo} alt="" className="w-16 h-16 alive" />
          <p className="font-wordmark text-ink/70 mt-4 hidden sm:block">
            Wastefull<span className="hidden lg:inline">, Inc.</span>
          </p>
        </Link>

        <nav className="font-body hidden md:flex items-center gap-1 ml-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-1.5 rounded-md text-sm border-[1.5px] ${
                  active
                    ? "border-ink bg-white arcade-shadow"
                    : "border-transparent hover:border-ink/40"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="font-body ml-auto flex items-center gap-2">
          <a
            href="https://db.wastefull.org"
            className="font-button font-medium hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
          >
            Explore<span className="hidden lg:inline"> WastefullDB</span>
          </a>
          <Link
            to="/donate"
            className="font-button font-medium inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border-[1.5px] border-ink arcade-shadow bg-compost text-compost-fg"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const flinks = links.slice(1);
  return (
    <footer className="border-t-[1.5px] border-ink bg-paper-3">
      <div className="font-body max-w-[1200px] mx-auto px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 leading-none">
            <img src={logo} alt="" className="w-18 h-18" />
            <p className="font-wordmark text-ink/70 text-md mt-4">
              Wastefull, Inc.
            </p>
          </div>
          <p className="mt-3 text-sm text-ink/70 max-w-md leading-6">
            Wastefull builds open tools and educational resources for
            communities working toward healthier waste, soil, food, and material
            systems.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-ink/60 mb-3">
            Explore
          </h4>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href="https://db.wastefull.org" className="hover:underline">
                WastefullDB
              </a>
            </li>
            {flinks.map((l) => {
              return (
                <li>
                  <Link key={l.to} to={l.to}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
            {/* <li><a href="#" className="hover:underline">Updates</a></li> */}
            {/* <li><a href="#" className="hover:underline">GitHub</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-ink/60 mb-3">
            Get involved
          </h4>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link to="/donate" className="hover:underline">
                Donate
              </Link>
            </li>
            {/* <li><a href="#" className="hover:underline">Volunteer</a></li> */}
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            {/* <li><a href="#" className="hover:underline">Press</a></li> */}
          </ul>
        </div>
      </div>

      <div className="border-t-[1.5px] border-ink/20">
        <div className="font-body max-w-[1200px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-xs text-ink/60">
          <p>
            Wastefull, Inc. is a registered California 501(c)(3) nonprofit
            organization. Donations may be tax deductible.
          </p>
          <p>© {new Date().getFullYear()} Wastefull, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
