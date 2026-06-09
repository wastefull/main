import {
  ArrowRight,
  Database,
  BookOpen,
  FlaskConical,
  Heart,
  Users,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { PATHWAY } from "./site-chrome";

function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const styles =
    variant === "primary"
      ? { background: PATHWAY.compost.bg, color: PATHWAY.compost.color }
      : variant === "secondary"
        ? { background: "white" }
        : { background: PATHWAY.recycle.bg };
  return (
    <a
      href={href}
      className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink text-[15px] arcade-shadow-lg"
      style={{ ...styles }}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export function HomePage() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="border-b-[1.5px] border-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-6">
            Wastefull, Inc. — A 501(c)(3) nonprofit
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
              Large systems often make people feel powerless. We start from the
              opposite premise: communities can understand, repair, adapt, and
              build.
            </p>

            <div className="md:col-span-5 flex flex-col gap-3 md:items-end md:justify-end">
              <CTA href="https://db.wastefull.org" variant="primary">
                Explore WastefullDB
              </CTA>
              <CTA href="/about" variant="secondary">
                Read our philosophy
              </CTA>
              <CTA href="/donate" variant="ghost">
                Support the work
              </CTA>
            </div>
          </div>
        </div>
      </section>

      <section id="explore" className="border-b-[1.5px] border-ink bg-paper-2">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-4">
                What we&rsquo;re building
              </p>
              <h2
                className="font-display font-medium leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Practical tools, not perfect ideology.
              </h2>
            </div>
            <p className="font-body md:col-span-5 text-ink/75 leading-7">
              Three programs that share one goal: give communities information,
              methods, and capacity that actually work where they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProgramCard
              kind="recycle"
              title="WastefullDB"
              icon={<Database className="w-5 h-5" />}
              body="An open materials database for understanding how things are made, reused, recycled, composted, and recovered."
              link="Explore the database"
              href="https://db.wastefull.org"
            />
            <ProgramCard
              kind="reuse"
              title="Practical education"
              icon={<BookOpen className="w-5 h-5" />}
              body="Clear explainers on waste, regenerative agriculture, citizen science, ecology, and material circularity."
              link="Read the guides"
            />
            <ProgramCard
              kind="science"
              title="Community science"
              icon={<FlaskConical className="w-5 h-5" />}
              body="Research notes, experiments, and shared methods that help people test ideas locally instead of waiting for distant institutions."
              link="See the methods"
            />
          </div>
        </div>
      </section>

      <section className="border-b-[1.5px] border-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-4">
                What we believe
              </p>
              <h2
                className="font-display font-medium leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Healthy communities are built through knowledge, resilience, and
                sovereignty.
              </h2>
            </div>

            <ul className="md:col-span-7 grid sm:grid-cols-2 gap-3 self-start">
              {[
                { k: "Evidence", v: "over purity", c: PATHWAY.science },
                { k: "Stewardship", v: "over shame", c: PATHWAY.compost },
                { k: "Local capacity", v: "over dependency", c: PATHWAY.reuse },
                {
                  k: "Practical tools",
                  v: "over perfect ideology",
                  c: PATHWAY.recycle,
                },
                {
                  k: "Science",
                  v: "communities can actually use",
                  c: PATHWAY.science,
                },
                {
                  k: "Honest tradeoffs",
                  v: "and visible limits",
                  c: PATHWAY.reuse,
                },
              ].map((b) => (
                <li
                  key={b.k}
                  className="rounded-xl border-[1.5px] border-ink bg-white px-4 py-4 arcade-shadow"
                >
                  <div
                    className="text-[11px] uppercase tracking-widest mb-1"
                    style={{ color: b.c.color }}
                  >
                    {b.k}
                  </div>
                  <div className="font-body text-[15px] text-ink">{b.v}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-3xl">
            <p
              className="font-display font-normal leading-[1.3] tracking-tight text-ink"
              style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
            >
              Waste is not just trash. It is a design failure, a logistics
              problem, a justice problem, and sometimes an overlooked resource.
              <br />
              <span className="text-ink/55">
                We are here to help people see the system clearly enough to
                change it.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="donate" className="bg-paper-3">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-4">
            Get involved
          </p>
          <h2
            className="font-display font-medium leading-[1.05] tracking-tight max-w-[20ch] mb-10"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Four ways to put your hands on the work.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InvolveCard
              icon={<Database className="w-4 h-4" />}
              title="Visit WastefullDB"
              body="Look up a material. Submit one we&rsquo;re missing."
              accent={PATHWAY.recycle}
              href="https://db.wastefull.org"
            />
            <InvolveCard
              icon={<Users className="w-4 h-4" />}
              title="Join the community"
              body="Contribute notes, methods, and local knowledge."
              accent={PATHWAY.reuse}
            />
            <InvolveCard
              icon={<Heart className="w-4 h-4" />}
              title="Donate"
              body="Tax-deductible. Funds open public infrastructure."
              accent={PATHWAY.compost}
            />
            <InvolveCard
              icon={<Mail className="w-4 h-4" />}
              title="Read updates"
              body="A short, infrequent letter on what we&rsquo;re learning."
              accent={PATHWAY.science}
            />
          </div>
        </div>
      </section>

      <section className="border-t-[1.5px] border-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p
            className="font-display font-medium leading-[1.1] tracking-tight max-w-[24ch]"
            style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}
          >
            We&rsquo;re building a wastefull world.
          </p>
          <Link
            to="/about"
            className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
          >
            Read about Wastefull <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  kind,
  title,
  icon,
  body,
  link,
  href = "#",
}: {
  kind: keyof typeof PATHWAY;
  title: string;
  icon: React.ReactNode;
  body: string;
  link: string;
  href?: string;
}) {
  void kind;
  return (
    <article className="p-6 rounded-xl bg-white border-[1.5px] border-ink arcade-shadow flex flex-col">
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-md border-[1.5px] border-ink bg-paper-2 text-ink">
        {icon}
      </div>
      <h3
        className="font-display font-medium mt-4 leading-tight"
        style={{ fontSize: "26px" }}
      >
        {title}
      </h3>
      <p className="font-body mt-2 text-[14px] leading-6 text-ink/75">{body}</p>
      <a
        href={href}
        className="font-button font-medium mt-5 inline-flex items-center gap-1.5 text-sm hover:underline text-ink"
      >
        {link} <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </article>
  );
}

function InvolveCard({
  icon,
  title,
  body,
  accent,
  href = "#",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  accent: { color: string; bg: string };
  href?: string;
}) {
  return (
    <a
      href={href}
      className="block p-5 rounded-xl bg-white border-[1.5px] border-ink arcade-shadow"
    >
      <div
        className="inline-flex items-center justify-center w-8 h-8 rounded-md border-[1.5px] border-ink"
        style={{ background: accent.bg, color: accent.color }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-medium mt-3 leading-snug"
        style={{ fontSize: "20px" }}
      >
        {title}
      </h3>
      <p className="font-body mt-1 text-[13px] leading-5 text-ink/70">{body}</p>
    </a>
  );
}
