import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PATHWAY } from "./site-chrome";

export function MinimalPage() {
  return (
    <div className="font-body text-ink">
      <section className="border-b-[1.5px] border-ink bg-paper-2 city-drawing">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24 ">
          <div className="backdrop-blur-sm bg-white/60 p-8 md:p-12 rounded-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-6">
              Wastefull, Inc. — 501(c)(3) nonprofit based in San Jose, CA
            </p>

            <h1
              className="font-display font-medium max-w-[18ch] leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
            >
              Build with what we have.
            </h1>

            <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-12">
              <p
                className="font-body md:col-span-7 leading-[1.55] text-ink/85"
                style={{ fontSize: "clamp(17px, 1.5vw, 21px)" }}
              >
                Wastefull builds open tools and educational resources for
                communities working toward healthier waste, soil, food, and
                material systems.
                <br />
                <br />
                Large systems often make people feel powerless. We start from
                the opposite premise: communities can understand, repair, adapt,
                and build.
              </p>

              <div className="md:col-span-5 flex flex-col gap-3 md:items-end md:justify-end">
                <BigLink href="https://db.wastefull.org" tone="compost">
                  Explore WastefullDB
                </BigLink>
                <BigLink href="/about" tone="ink" asLink>
                  Read our philosophy
                </BigLink>
                <BigLink href="/donate" tone="ghost" asLink>
                  Support the work
                </BigLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[1.5px] border-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p
            className="font-display font-medium leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            People don&rsquo;t need perfect solutions.
            <br />
            <span className="text-ink/55">
              They need useful information, honest tradeoffs, and tools that
              work where they are.
            </span>
          </p>
        </div>
      </section>

      <section className="border-b-[1.5px] border-ink bg-paper-2">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-12">
            What we&rsquo;re building
          </p>
          <div className="space-y-14">
            <Item
              n="01"
              title="A database"
              body="Open materials reference. What things are made of, where they go, and what they become. Learn what your world is made of."
              link="WastefullDB →"
              href="https://db.wastefull.org"
              tone={PATHWAY.recycle}
            />
            <Item
              n="02"
              title="An education"
              body="Our community volunteers provide step-by-step guides relating to waste, soil, food, and circular systems. From community food gardens to innovative recycling techniques to art project showcases, it is amazing what you can make with just some basic skills. Guides range from child friendly to industrial scale (clearly labeled)."
              link="Read the guides →"
              href="/guides"
              tone={PATHWAY.reuse}
            />
            <Item
              n="03"
              title="A practice"
              body="Ready to go a step further? We're developing shared methods so communities can run their own experiments and produce their own evidence, crowdsourcing public science on waste and circular systems."
              link="See the methods →"
              href="/methods"
              tone={PATHWAY.science}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper hero-image">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-24 ">
          <div className="backdrop-blur-sm bg-white/60 p-8 md:p-12 rounded-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-8">
              Get involved
            </p>
            <p
              className="font-display font-semibold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              See the system clearly.
              <br />
              <span style={{ color: PATHWAY.compost.color }}>
                Then change it.
              </span>
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3">
            <BigLink href="/donate" tone="compost" asLink>
              Donate
            </BigLink>
            <BigLink href="/about" tone="ink" asLink>
              Our philosophy
            </BigLink>
          </div>
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
        ? { background: "white", color: "var(--ink)" }
        : { background: PATHWAY.recycle.bg, color: "var(--ink)" };

  const cls =
    "inline-flex items-center gap-2.5 px-5 py-3 rounded-md border-[1.5px] border-ink arcade-shadow";
  const style = {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: 500,
    fontSize: "17px",
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
        className="font-body text-ink/40 pt-1.5"
        style={{ fontSize: "13px", letterSpacing: "0.15em" }}
      >
        {n}
      </div>
      <div>
        <h3
          className="font-display font-semibold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}
        >
          {title}
        </h3>
        <p
          className="font-body mt-3 leading-[1.55] text-ink/80 max-w-[52ch]"
          style={{ fontSize: "17px" }}
        >
          {body}
        </p>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body mt-4 inline-block hover:underline"
            style={{ color: tone.color, fontSize: "15px" }}
          >
            {link}
          </a>
        ) : (
          <Link
            to={href}
            className="font-body mt-4 inline-block hover:underline"
            style={{ color: tone.color, fontSize: "15px" }}
          >
            {link}
          </Link>
        )}
      </div>
    </article>
  );
}
