import { Link, useLocation } from "react-router";
import { FlaskConical, Sprout, Recycle, Lightbulb } from "lucide-react";
import logo from "../../imports/logo.png";
import wordmark from "../../imports/Wastefullmono.svg?url";

export const INK = "#211f1c";
export const PAPER = "#faf7f2";
export const PAPER_2 = "#f1ece1";
export const PAPER_3 = "#f6f1e6";

export const PATHWAY = {
  compost: { color: "#c74444", bg: "#e6beb5", label: "Compost", Icon: Sprout },
  recycle: { color: "#a08a00", bg: "#e4e3ac", label: "Recycle", Icon: Recycle },
  reuse:   { color: "#4a90a4", bg: "#b8c8cb", label: "Upcycle",  Icon: Lightbulb },
  science: { color: "#5a9a4d", bg: "#bdd4b7", label: "Science",  Icon: FlaskConical },
} as const;

export const arcadeShadow =
  "shadow-[2px_2px_0px_0px_#211f1c] hover:shadow-[3px_3px_0px_0px_#211f1c] hover:-translate-y-px active:translate-y-0.5 active:shadow-none transition-all duration-100";

export const arcadeShadowLg =
  "shadow-[3px_3px_0px_0px_#211f1c] hover:shadow-[5px_5px_0px_0px_#211f1c] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#211f1c] transition-all duration-100";

export const display = { fontFamily: "'Fredoka', 'Fredoka One', sans-serif" } as const;
export const brandFont = { fontFamily: "'Pacifico', 'Fredoka', cursive" } as const;
export const bodyFont = { fontFamily: "'Sniglet', system-ui, sans-serif", fontWeight: 400 } as const;
export const buttonFont = { fontFamily: "'Fredoka', sans-serif", fontWeight: 500 } as const;
export const editorialFont = { fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" } as const;

export const LOGO_INK = "#5b4f47";
export const LOGO_ACCENT = "#92d222";
export const LOGO_OLIVE = "#686f3d";
export const LOGO_PAPER = "#f6f1e3";

export function SiteHeader() {
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/guides", label: "Guides" },
  ];
  return (
    <header className="border-b-[1.5px] border-[#211f1c] bg-[#faf7f2] sticky top-0 z-30 backdrop-blur">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 leading-none" aria-label="Wastefull home">
          <img src={logo} alt="" className="w-9 h-9" />
          <img src={wordmark} alt="Wastefull" className="h-8 w-auto pt-2" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-2" style={bodyFont}>
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-1.5 rounded-md text-sm border-[1.5px] ${
                  active
                    ? "border-[#211f1c] bg-white shadow-[2px_2px_0px_0px_#211f1c]"
                    : "border-transparent hover:border-[#211f1c]/40"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2" style={bodyFont}>
          <a
            href="#"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
            style={buttonFont}
          >
            Explore WastefullDB
          </a>
          <Link
            to="/donate"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadow}`}
            style={{ ...buttonFont, background: PATHWAY.compost.bg, color: PATHWAY.compost.color }}
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-[1.5px] border-[#211f1c] bg-[#f6f1e6] mt-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8" style={bodyFont}>
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 leading-none">
            <img src={logo} alt="" className="w-10 h-10" />
            <img src={wordmark} alt="Wastefull" className="h-8 w-auto pt-2" />
          </div>
          <p className="mt-3 text-sm text-[#211f1c]/70 max-w-md leading-6">
            Wastefull builds open tools and educational resources for communities working toward
            healthier waste, soil, food, and material systems.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-[#211f1c]/60 mb-3">Explore</h4>
          <ul className="space-y-1.5 text-sm">
            <li><a href="#" className="hover:underline">WastefullDB</a></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            {/* <li><a href="#" className="hover:underline">Updates</a></li> */}
            {/* <li><a href="#" className="hover:underline">GitHub</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-[#211f1c]/60 mb-3">Get involved</h4>
          <ul className="space-y-1.5 text-sm">
            <li><a href="#" className="hover:underline">Donate</a></li>
            {/* <li><a href="#" className="hover:underline">Volunteer</a></li> */}
            <li><a href="#" className="hover:underline">Contact</a></li>
            {/* <li><a href="#" className="hover:underline">Press</a></li> */}
          </ul>
        </div>
      </div>

      <div className="border-t-[1.5px] border-[#211f1c]/20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-xs text-[#211f1c]/60" style={bodyFont}>
          <p>Wastefull, Inc. is a registered California 501(c)(3) nonprofit organization. Donations may be tax deductible.</p>
          <p>© {new Date().getFullYear()} Wastefull, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
