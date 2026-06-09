import { ArrowUpRight, FlaskConical, Megaphone, Database } from "lucide-react";
import { PATHWAY } from "./site-chrome";

const CAMPAIGNS = [
  {
    key: "research",
    eyebrow: "01 — Research Fund",
    title: "Research Fund",
    body: "Contribute directly to our compost and recycling research. Field experiments, lab notes, and the data work that turns observations into shareable methods.",
    href: "https://www.zeffy.com/donation-form/research-fund",
    accent: PATHWAY.science,
    Icon: FlaskConical,
  },
  {
    key: "visibility",
    eyebrow: "02 — Visibility & Integrity Drive",
    title: "Visibility & Integrity Drive",
    body: "Help us advertise. Our research and educational resources are only as useful as the public's awareness of them — this drive funds outreach, media, and the editorial work that keeps our message honest.",
    href: "https://www.zeffy.com/donation-form/visibility-and-integrity-drive",
    accent: PATHWAY.compost,
    Icon: Megaphone,
  },
  {
    key: "digital",
    eyebrow: "03 — Digital Foundations Fund",
    title: "Digital Foundations Fund",
    body: "Developing tools like WasteDB and our educational materials is a critical part of our mission, and while our staff are volunteers, hosting and tooling are not free.",
    href: "https://www.zeffy.com/donation-form/donate-to-make-a-difference-11641",
    accent: PATHWAY.reuse,
    Icon: Database,
  },
] as const;

export function DonatePage() {
  return (
    <div className="font-body text-ink">
      <section className="border-b-[1.5px] border-ink bg-paper-2">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-6">
            Support the work
          </p>
          <h1
            className="font-display font-medium max-w-[20ch] leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Donate your way.
          </h1>

          <p
            className="font-body mt-8 max-w-[60ch] leading-[1.55] text-ink/85"
            style={{ fontSize: "clamp(17px, 1.5vw, 21px)" }}
          >
            Wastefull is a science-powered, community-driven nonprofit on a
            mission to turn everyday waste into valuable resources. Choose the
            campaign that speaks to you, or split a gift across all three.
          </p>
        </div>
      </section>

      <section className="border-b-[1.5px] border-ink">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-10">
            Three active campaigns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CAMPAIGNS.map((c) => {
              const { Icon } = c;
              return (
                <article
                  key={c.key}
                  className="p-6 rounded-xl bg-white border-[1.5px] border-ink arcade-shadow flex flex-col"
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border-[1.5px] border-ink"
                    style={{ background: c.accent.bg, color: c.accent.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-ink/55">
                    {c.eyebrow}
                  </p>
                  <h3
                    className="font-display font-medium mt-2 leading-tight"
                    style={{ fontSize: "26px" }}
                  >
                    {c.title}
                  </h3>
                  <p className="font-body mt-3 text-[14.5px] leading-6 text-ink/75 flex-1">
                    {c.body}
                  </p>

                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-button font-medium mt-6 inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-md border-[1.5px] border-ink arcade-shadow"
                    style={{
                      fontSize: "15px",
                      background: c.accent.bg,
                      color: c.accent.color,
                    }}
                  >
                    Donate
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-4">
            Where it goes
          </p>
          <h2
            className="font-display font-medium leading-[1.05] tracking-tight max-w-[22ch] text-logo-ink"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Knowledge infrastructure, not a lifestyle.
          </h2>

          <p
            className="font-body mt-8 max-w-[62ch] leading-[1.7] text-ink/85"
            style={{ fontSize: "clamp(16px, 1.3vw, 19px)" }}
          >
            Wastefull is a 501(c)(3) nonprofit. Donations support
            public-interest tools, research, educational resources, hosting
            costs, compliance, outreach, and community science. Our goal is not
            to sell people a lifestyle — it is to build knowledge infrastructure
            that communities can use.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CAMPAIGNS[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink arcade-shadow-lg bg-compost text-compost-fg"
            >
              Donate to general fund
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:ideas@wastefull.org"
              className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
            >
              Other ways to give
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
