import {
  ArrowRight,
  Database,
  FlaskConical,
  BookOpen,
  MessagesSquare,
} from "lucide-react";
import { Link } from "react-router";
import { LOGO_ACCENT, LOGO_INK } from "./site-chrome";

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="md:col-span-4">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-3">
        {eyebrow}
      </p>
      <h2
        className="font-display font-medium leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
      >
        {title}
      </h2>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-body md:col-span-7 md:col-start-6 leading-[1.7] text-ink/85 space-y-5"
      style={{ fontSize: "17px" }}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t-[1.5px] border-ink/15">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 md:py-20 grid md:grid-cols-12 gap-8">
        {children}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="font-body">
      <section className="border-b-[1.5px] border-ink">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-6">
            About Wastefull
          </p>
          <h1
            className="font-display font-medium max-w-[22ch] leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
          >
            Communities deserve better than shame.
          </h1>

          <div
            className="font-body mt-10 max-w-[62ch] leading-[1.65] text-ink/85 space-y-5"
            style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
          >
            <p>
              Wastefull exists because people are tired of being told that the
              world is broken and that their only role is to feel guilty about
              it.
            </p>
            <p>
              A healthier future will not come from purity culture, expensive
              green consumerism, or waiting for powerful institutions to fix
              everything. It will come from practical knowledge, local capacity,
              scientific curiosity, and communities that believe they can
              improve the conditions around them.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <Row>
        <SectionHeader
          eyebrow="01 — Our mission"
          title="Public tools for healthier material systems."
        />
        <Prose>
          <p>
            Wastefull builds public tools and educational resources for
            communities working toward healthier waste, soil, food, and material
            systems.
          </p>
          <p>
            Our work centers on recycling, regenerative agriculture, citizen
            science, and material circularity. We study what happens to
            materials after people are done with them &mdash; and how
            communities can recover value, reduce harm, and build resilience
            using the tools available to them.
          </p>
        </Prose>
      </Row>

      {/* OUR PHILOSOPHY */}
      <Row>
        <SectionHeader
          eyebrow="02 — Our philosophy"
          title={<>We reject purity framing.</>}
        />
        <Prose>
          <p>
            That does not mean we reject ethics. It means we take ethics
            seriously enough to deal with reality.
          </p>
          <p>
            A solution that only works for wealthy households is not enough. A
            sustainability model that depends on perfect consumer behavior is
            not enough. A public health message that ignores cost, logistics,
            labor, infrastructure, culture, and local ecology is not enough.
          </p>
          <p>
            Communities make tradeoffs every day. Our role is not to impose one
            universal answer. Our role is to make those tradeoffs clearer, more
            honest, and more navigable.
          </p>
        </Prose>
      </Row>

      {/* COMMUNITY SOVEREIGNTY */}
      <Row>
        <SectionHeader
          eyebrow="03 — Community sovereignty"
          title="Healthy systems are adaptive, local, and diverse."
        />
        <Prose>
          <p>
            Wastefull believes communities should have access to transparent
            information and practical tools while retaining the authority to
            decide what works for their own region, culture, ecology, and needs.
          </p>
          <p
            className="font-display font-medium leading-[1.3] tracking-tight text-ink"
            style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
          >
            Science can inform decisions. It cannot replace values.
          </p>
          <p>
            A farming community, an urban neighborhood, a school garden, a
            mutual aid group, and a rural waste district may all need different
            solutions. That is not failure. That is ecology.
          </p>
        </Prose>
      </Row>

      {/* SCIENCE AS A PUBLIC TOOL */}
      <Row>
        <SectionHeader
          eyebrow="04 — Science as a public tool"
          title="Pro-science. Not blindly pro-industry."
        />
        <Prose>
          <p>
            We are pro-science, but not blindly pro-industry. We are
            pro-technology, but not blindly pro-centralization. We are
            pro-innovation, but not when innovation becomes dependency.
          </p>
          <p>
            We care less about whether a tool sounds pure and more about what it
            does in context:
          </p>
          <ul className="space-y-2 list-none">
            {[
              "Who benefits?",
              "Who bears the risk?",
              "What does it cost?",
              "Does it increase or reduce local capacity?",
              "Does it preserve future options?",
              "What happens when it scales?",
              "What happens when it fails?",
            ].map((q) => (
              <li key={q} className="flex gap-3">
                <span
                  className="mt-2 inline-block w-2 h-2 rounded-full border-[1.5px] border-ink shrink-0"
                  style={{ background: LOGO_ACCENT }}
                />
                <span className="text-ink/85">{q}</span>
              </li>
            ))}
          </ul>
          <p>
            This is how we approach questions about recycling, composting,
            plastics, soil remediation, biotechnology, pesticides, food systems,
            and waste infrastructure.
          </p>
        </Prose>
      </Row>

      <section className="border-t-[1.5px] border-ink bg-paper-2">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-3">
            05 — What we build
          </p>
          <h2
            className="font-display font-medium leading-[1.05] tracking-tight max-w-[20ch]"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
          >
            Knowledge infrastructure communities can use.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <BuildCard
              icon={<Database className="w-4 h-4" />}
              title="WastefullDB"
              body="Our open materials database. It helps people understand materials in practical and scientific terms: how they are made, how they break down, how they can be reused, and what tradeoffs different recovery pathways involve."
            />
            <BuildCard
              icon={<FlaskConical className="w-4 h-4" />}
              title="Research and lab notes"
              body="We publish research notes, experiments, and methods so that community members, students, gardeners, educators, and citizen scientists can learn from the process — not just the conclusion."
            />
            <BuildCard
              icon={<BookOpen className="w-4 h-4" />}
              title="Public education"
              body="Accessible explainers about waste, ecology, material recovery, regenerative agriculture, and community resilience."
            />
            <BuildCard
              icon={<MessagesSquare className="w-4 h-4" />}
              title="Community discussion"
              body="Open conversations for people who want to learn, contribute, challenge assumptions, and build practical knowledge together."
            />
          </div>
        </div>
      </section>

      {/* WHY DONATIONS MATTER */}
      <Row>
        <SectionHeader
          eyebrow="06 — Why donations matter"
          title="Knowledge infrastructure, not a lifestyle."
        />
        <Prose>
          <p>
            Wastefull is a nonprofit. Donations support public-interest tools,
            research, educational resources, hosting costs, compliance,
            outreach, and community science.
          </p>
          <p>
            Our goal is not to sell people a lifestyle. Our goal is to build
            knowledge infrastructure that communities can use.
          </p>
          <a
            href="#donate"
            className="font-button font-medium mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink arcade-shadow-lg bg-compost text-compost-fg"
          >
            Support the work <ArrowRight className="w-4 h-4" />
          </a>
        </Prose>
      </Row>

      {/* THE DEEPER REASON */}
      <section className="border-t-[1.5px] border-ink bg-paper">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-4">
            07 — The deeper reason
          </p>
          <h2
            className="font-display font-medium leading-[1.05] tracking-tight max-w-[22ch] text-logo-ink"
            style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
          >
            Communities are not helpless.
          </h2>

          <div
            className="font-body mt-10 max-w-[62ch] leading-[1.7] text-ink/85 space-y-5"
            style={{ fontSize: "clamp(17px, 1.3vw, 19px)" }}
          >
            <p>
              Waste can make people feel powerless. Climate change, pollution,
              food insecurity, soil degradation, and broken recycling systems
              are often presented as problems too large for ordinary people to
              touch.
            </p>
            <p>
              When people have shared knowledge, practical tools, and the
              confidence to experiment, they can change local conditions. They
              can build soil. They can recover materials. They can reduce
              dependency. They can teach each other. They can make better
              choices without pretending any choice is perfect.
            </p>
            <p
              className="font-display font-medium leading-[1.25] tracking-tight text-ink"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
            >
              Wastefull is here to help make that work visible, usable, and
              shared.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-[1.5px] border-ink">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p
            className="font-display font-medium leading-[1.1] tracking-tight max-w-[26ch]"
            style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}
          >
            Ready to put your hands on the work?
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#explore"
              className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
            >
              Explore WastefullDB <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/"
              className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink arcade-shadow bg-compost text-compost-fg"
            >
              Back home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BuildCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article
      className={`p-6 rounded-xl bg-white border-[1.5px] border-ink arcade-shadow`}
    >
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-md border-[1.5px] border-ink"
        style={{ background: LOGO_ACCENT, color: LOGO_INK }}
      >
        {icon}
      </div>
      <h3
        className="font-display font-medium mt-4 leading-tight"
        style={{ fontSize: "24px" }}
      >
        {title}
      </h3>
      <p className="font-body mt-2 text-[14.5px] leading-6 text-ink/75">
        {body}
      </p>
    </article>
  );
}
