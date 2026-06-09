import { ArrowRight, Database, BookOpen, FlaskConical, Heart, Users, Mail } from "lucide-react";
import { Link } from "react-router";
import {
  PATHWAY,
  arcadeShadow,
  arcadeShadowLg,
  display,
  bodyFont,
  buttonFont,
} from "./site-chrome";

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
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] text-[15px] ${arcadeShadowLg}`}
      style={{ ...buttonFont, ...styles }}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export function HomePage() {
  return (
    <div style={bodyFont}>
      {/* HERO */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <p
            className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-6"
            style={bodyFont}
          >
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
              <CTA href="#explore" variant="primary">
                Explore WastefullDB
              </CTA>
              <CTA href="/about" variant="secondary">
                Read our philosophy
              </CTA>
              <CTA href="#donate" variant="ghost">
                Support the work
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section id="explore" className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <div className="grid md:grid-cols-12 gap-8 mb-12 items-end">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
                What we&rsquo;re building
              </p>
              <h2
                className="leading-[1.05] tracking-tight"
                style={{ ...display, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Practical tools, not perfect ideology.
              </h2>
            </div>
            <p className="md:col-span-5 text-[#211f1c]/75 leading-7" style={bodyFont}>
              Three programs that share one goal: give communities information, methods, and
              capacity that actually work where they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProgramCard
              kind="recycle"
              title="WastefullDB"
              icon={<Database className="w-5 h-5" />}
              body="An open materials database for understanding how things are made, reused, recycled, composted, and recovered."
              link="Explore the database"
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

      {/* WHAT WE BELIEVE */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
                What we believe
              </p>
              <h2
                className="leading-[1.05] tracking-tight"
                style={{ ...display, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                Healthy communities are built through knowledge, resilience, and sovereignty.
              </h2>
            </div>

            <ul className="md:col-span-7 grid sm:grid-cols-2 gap-3 self-start">
              {[
                { k: "Evidence", v: "over purity", c: PATHWAY.science },
                { k: "Stewardship", v: "over shame", c: PATHWAY.compost },
                { k: "Local capacity", v: "over dependency", c: PATHWAY.reuse },
                { k: "Practical tools", v: "over perfect ideology", c: PATHWAY.recycle },
                {
                  k: "Science",
                  v: "communities can actually use",
                  c: PATHWAY.science,
                },
                { k: "Honest tradeoffs", v: "and visible limits", c: PATHWAY.reuse },
              ].map((b) => (
                <li
                  key={b.k}
                  className="rounded-xl border-[1.5px] border-[#211f1c] bg-white px-4 py-4 shadow-[2px_2px_0px_0px_#211f1c]"
                >
                  <div
                    className="text-[11px] uppercase tracking-widest mb-1"
                    style={{ color: b.c.color }}
                  >
                    {b.k}
                  </div>
                  <div className="text-[15px] text-[#211f1c]" style={bodyFont}>
                    {b.v}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-3xl">
            <p
              className="leading-[1.3] tracking-tight text-[#211f1c]"
              style={{ ...display, fontWeight: 400, fontSize: "clamp(22px, 2.6vw, 32px)" }}
            >
              Waste is not just trash. It is a design failure, a logistics problem, a justice
              problem, and sometimes an overlooked resource.
              <br />
              <span className="text-[#211f1c]/55">
                We are here to help people see the system clearly enough to change it.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="donate" className="bg-[#f6f1e6]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
            Get involved
          </p>
          <h2
            className="leading-[1.05] tracking-tight max-w-[20ch] mb-10"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Four ways to put your hands on the work.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InvolveCard
              icon={<Database className="w-4 h-4" />}
              title="Visit WastefullDB"
              body="Look up a material. Submit one we&rsquo;re missing."
              accent={PATHWAY.recycle}
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

      {/* CLOSING LINE */}
      <section className="border-t-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p
            className="leading-[1.1] tracking-tight max-w-[24ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 40px)" }}
          >
            We&rsquo;re building a wastefull world.
          </p>
          <Link
            to="/about"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
            style={buttonFont}
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
}: {
  kind: keyof typeof PATHWAY;
  title: string;
  icon: React.ReactNode;
  body: string;
  link: string;
}) {
  void kind;
  return (
    <article
      className={`p-6 rounded-xl bg-white border-[1.5px] border-[#211f1c] ${arcadeShadow} flex flex-col`}
    >
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-md border-[1.5px] border-[#211f1c] bg-[#f1ece1] text-[#211f1c]">
        {icon}
      </div>
      <h3
        className="mt-4 leading-tight"
        style={{ ...display, fontWeight: 500, fontSize: "26px" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-6 text-[#211f1c]/75" style={bodyFont}>
        {body}
      </p>
      <a
        href="#"
        className="mt-5 inline-flex items-center gap-1.5 text-sm hover:underline"
        style={{ ...buttonFont, color: "#211f1c" }}
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
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  accent: { color: string; bg: string };
}) {
  return (
    <a
      href="#"
      className={`block p-5 rounded-xl bg-white border-[1.5px] border-[#211f1c] ${arcadeShadow}`}
    >
      <div
        className="inline-flex items-center justify-center w-8 h-8 rounded-md border-[1.5px] border-[#211f1c]"
        style={{ background: accent.bg, color: accent.color }}
      >
        {icon}
      </div>
      <h3 className="mt-3 leading-snug" style={{ ...display, fontWeight: 500, fontSize: "20px" }}>
        {title}
      </h3>
      <p className="mt-1 text-[13px] leading-5 text-[#211f1c]/70" style={bodyFont}>
        {body}
      </p>
    </a>
  );
}
