import { ArrowUpRight, FlaskConical, Megaphone, Database } from "lucide-react";
import {
  PATHWAY,
  arcadeShadow,
  arcadeShadowLg,
  display,
  bodyFont,
  buttonFont,
  LOGO_INK,
} from "./site-chrome";

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
    <div style={bodyFont} className="text-[#211f1c]">
      {/* HERO */}
      <section className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-6">
            Support the work
          </p>
          <h1
            className="max-w-[20ch] leading-[0.98] tracking-tight"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Donate your way.
          </h1>

          <p
            className="mt-8 max-w-[60ch] leading-[1.55] text-[#211f1c]/85"
            style={{ ...bodyFont, fontSize: "clamp(17px, 1.5vw, 21px)" }}
          >
            Wastefull is a science-powered, community-driven nonprofit on a mission to turn
            everyday waste into valuable resources. Choose the campaign that speaks to you,
            or split a gift across all three.
          </p>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-10">
            Three active campaigns
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CAMPAIGNS.map((c) => {
              const { Icon } = c;
              return (
                <article
                  key={c.key}
                  className={`p-6 rounded-xl bg-white border-[1.5px] border-[#211f1c] ${arcadeShadow} flex flex-col`}
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border-[1.5px] border-[#211f1c]"
                    style={{ background: c.accent.bg, color: c.accent.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <p
                    className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/55"
                  >
                    {c.eyebrow}
                  </p>
                  <h3
                    className="mt-2 leading-tight"
                    style={{ ...display, fontWeight: 500, fontSize: "26px" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-3 text-[14.5px] leading-6 text-[#211f1c]/75 flex-1"
                    style={bodyFont}
                  >
                    {c.body}
                  </p>

                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadow}`}
                    style={{
                      ...buttonFont,
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

      {/* TRANSPARENCY / WHY */}
      <section className="bg-[#faf7f2]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
            Where it goes
          </p>
          <h2
            className="leading-[1.05] tracking-tight max-w-[22ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)", color: LOGO_INK }}
          >
            Knowledge infrastructure, not a lifestyle.
          </h2>

          <p
            className="mt-8 max-w-[62ch] leading-[1.7] text-[#211f1c]/85"
            style={{ ...bodyFont, fontSize: "clamp(16px, 1.3vw, 19px)" }}
          >
            Wastefull is a 501(c)(3) nonprofit. Donations support public-interest tools,
            research, educational resources, hosting costs, compliance, outreach, and
            community science. Our goal is not to sell people a lifestyle — it is to build
            knowledge infrastructure that communities can use.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CAMPAIGNS[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadowLg}`}
              style={{
                ...buttonFont,
                background: PATHWAY.compost.bg,
                color: PATHWAY.compost.color,
              }}
            >
              Donate to general fund
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:ideas@wastefull.org"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
              style={buttonFont}
            >
              Other ways to give
            </a>
          </div> */}

        </div>
      </section>
    </div>
  );
}
