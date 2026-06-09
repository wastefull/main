import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PATHWAY, arcadeShadow, display, bodyFont, buttonFont } from "./site-chrome";

export function MinimalPage() {
  return (
    <div style={bodyFont} className="text-[#211f1c]">
      {/* HERO — ported from Home */}
      <section className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-6">
            Wastefull, Inc. — A 501(c)(3) nonprofit
          </p>

          <h1
            className="max-w-[18ch] leading-[0.95] tracking-tight"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Build with what we have.
          </h1>

          <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-12">
            <p
              className="md:col-span-7 leading-[1.55] text-[#211f1c]/85"
              style={{ ...bodyFont, fontSize: "clamp(17px, 1.5vw, 21px)" }}
            >
              Wastefull builds open tools and educational resources for communities working
              toward healthier waste, soil, food, and material systems.
              <br />
              <br />
              Large systems often make people feel powerless. We start from the opposite
              premise: communities can understand, repair, adapt, and build.
            </p>

            <div className="md:col-span-5 flex flex-col gap-3 md:items-end md:justify-end">
              <BigLink href="#explore" tone="compost">Explore WastefullDB</BigLink>
              <BigLink href="/about" tone="ink" asLink>Read our philosophy</BigLink>
              <BigLink href="#donate" tone="ghost">Support the work</BigLink>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p
            className="leading-[1.2] tracking-tight"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Communities don&rsquo;t need perfect solutions.
            <br />
            <span className="text-[#211f1c]/55">
              They need useful information, honest tradeoffs, and tools that work where they are.
            </span>
          </p>
        </div>
      </section>

      {/* THREE THINGS — single column list, garys-style */}
      <section className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-12">
            What we&rsquo;re building
          </p>
          <div className="space-y-14">
          <Item
            n="01"
            title="A database"
            body="Open materials reference. What things are made of, where they go, and what they become."
            link="WastefullDB →"
            href="https://db.wastefull.org"
            tone={PATHWAY.recycle}
          />
          <Item
            n="02"
            title="An education"
            body="Plain-language explainers on waste, soil, food, and circular systems."
            link="Read the guides →"
            href="/guides"
            tone={PATHWAY.reuse}
          />
          <Item
            n="03"
            title="A practice"
            body="Shared methods so communities can run their own experiments and produce their own evidence."
            link="See the methods →"
            href="/methods"
            tone={PATHWAY.science}
          />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#faf7f2]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-8">
            Get involved
          </p>
          <p
            className="leading-[1.05] tracking-tight"
            style={{ ...display, fontWeight: 600, fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            See the system clearly.
            <br />
            <span style={{ color: PATHWAY.compost.color }}>Then change it.</span>
          </p>

          <div className="mt-10 flex flex-col items-start gap-3">
            <BigLink href="#donate" tone="compost">Donate</BigLink>
            <BigLink href="/about" tone="ink" asLink>Our philosophy</BigLink>
          </div>

          <p className="mt-16 text-xs text-[#211f1c]/55 leading-6">
            Wastefull, Inc. is a registered California 501(c)(3) nonprofit organization.
            Donations may be tax deductible.
          </p>
        </div>
      </section>
    </div>
  );
}

function BigLink({
  href,
  children,
  tone,
  asLink = false,
}: {
  href: string;
  children: React.ReactNode;
  tone: "compost" | "ink" | "ghost";
  asLink?: boolean;
}) {
  const palette =
    tone === "compost"
      ? { background: PATHWAY.compost.bg, color: PATHWAY.compost.color }
      : tone === "ink"
      ? { background: "white", color: "#211f1c" }
      : { background: PATHWAY.recycle.bg, color: "#211f1c" };

  const cls = `inline-flex items-center gap-2.5 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadow}`;
  const style = { ...buttonFont, fontSize: "17px", ...palette } as React.CSSProperties;

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

function Item({
  n,
  title,
  body,
  link,
  href,
  tone,
}: {
  n: string;
  title: string;
  body: string;
  link: string;
  href: string;
  tone: { color: string };
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <article className="grid grid-cols-[auto_1fr] gap-6 md:gap-8">
      <div
        className="text-[#211f1c]/40 pt-1.5"
        style={{ ...bodyFont, fontSize: "13px", letterSpacing: "0.15em" }}
      >
        {n}
      </div>
      <div>
        <h3
          className="leading-[1.05] tracking-tight"
          style={{ ...display, fontWeight: 600, fontSize: "clamp(28px, 3.4vw, 40px)" }}
        >
          {title}
        </h3>
        <p
          className="mt-3 leading-[1.55] text-[#211f1c]/80 max-w-[52ch]"
          style={{ ...bodyFont, fontSize: "17px" }}
        >
          {body}
        </p>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block hover:underline"
            style={{ ...bodyFont, color: tone.color, fontSize: "15px" }}
          >
            {link}
          </a>
        ) : (
          <Link
            to={href}
            className="mt-4 inline-block hover:underline"
            style={{ ...bodyFont, color: tone.color, fontSize: "15px" }}
          >
            {link}
          </Link>
        )}
      </div>
    </article>
  );
}
