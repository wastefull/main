import { PATHWAY } from "../site-chrome";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
export function BigLink({
  href,
  children,
  tone,
  asLink = false,
}: {
  href: string;
  children: React.ReactNode;
  tone: "compost" | "ink" | "ghost" | "recycle";
  asLink?: boolean;
}) {
  const palette =
    tone === "compost"
      ? { background: PATHWAY.compost.bg, color: PATHWAY.compost.color }
      : tone === "ink"
        ? { background: "white", color: "var(--ink)" }
        : tone === "recycle"
          ? { background: PATHWAY.recycle.bg, color: "var(--ink)" }
          : { background: PATHWAY.recycle.bg, color: "var(--ink)" };

  const cls =
    "inline-flex items-center sm:text-[17px]! gap-2.5 px-2 sm:px-5 py-2 sm:py-3 w-full rounded-md border-[1.5px] border-ink arcade-shadow overflow-x-clip";
  const style = {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: 500,
    fontSize: "13px",
    alignSelf: "flex-start",
    ...palette,
  } as React.CSSProperties;

  if (asLink) {
    return (
      <Link to={href} className={cls} style={style}>
        {children} <ArrowRight className="w-4 h-4" />
      </Link>
    );
  }
  return (
    <a href={href} className={cls} style={style}>
      {children} <ArrowRight className="w-4 h-4" />
    </a>
  );
}
