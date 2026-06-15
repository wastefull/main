import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PATHWAY } from "./site-chrome";
import { Item } from "./helpers/itemizer";
import { BigLink } from "./ui/biglink";

export function MinimalPage() {
  return (
    <div id="hero">
      <section className="city-drawing">
        <div className="frame">
          <div className="inner">
            <p className="hintro">
              Wastefull, Inc. — 501(c)(3) nonprofit based in San Jose, CA
            </p>
            <h1 className="hero-title">Build with what we have.</h1>
            <div className="hero-inner">
              <p className="hero-body">
                Wastefull builds open tools and educational resources for
                communities working toward healthier waste, soil, food, and
                material systems.
              </p>
              <p className="hero-body">
                Large systems often make people feel powerless. We start from
                the opposite premise: communities can understand, repair, adapt,
                and build.
              </p>

              <div className="cta-btns">
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

      <section className="two-tone">
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

      <section className="bg-paper-2">
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

          <div className="mt-10 flex flex-col gap-3 max-w-[200px]">
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
