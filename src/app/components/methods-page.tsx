import { Link } from "react-router";
import { ArrowRight, FlaskConical, Microscope, Thermometer, Beaker, ClipboardList, Github } from "lucide-react";
import {
  PATHWAY,
  arcadeShadow,
  arcadeShadowLg,
  display,
  bodyFont,
  buttonFont,
  LOGO_INK,
} from "./site-chrome";

type Method = {
  slug: string;
  title: string;
  blurb: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  cost: string;
  output: string;
  Icon: typeof Microscope;
};

const METHODS: Method[] = [
  {
    slug: "soil-microscopy-starter",
    title: "Soil food web microscopy: a beginner's protocol",
    blurb:
      "A starter procedure for assessing bacteria-to-fungi ratios in compost and soil. Adapted from Elaine Ingham's published methods, with notes on what hobbyist microscopes can and cannot resolve.",
    difficulty: "Intermediate",
    cost: "~$300 microscope, ~$30 supplies",
    output: "Qualitative ratio + photo log",
    Icon: Microscope,
  },
  {
    slug: "compost-temperature-baseline",
    title: "Hot-pile temperature baseline (14-day log)",
    blurb:
      "How to characterize a backyard or community pile's thermal profile, and what failure modes the curve reveals. Includes a CSV template and a worked example from a 1m³ pile.",
    difficulty: "Beginner",
    cost: "~$25 probe thermometer",
    output: "Temperature time-series",
    Icon: Thermometer,
  },
  {
    slug: "pla-disintegration",
    title: "PLA disintegration test, community-scale",
    blurb:
      "A replicable protocol for testing whether &lsquo;compostable&rsquo; PLA items actually disintegrate in a given pile. Calibrated against ASTM D5338 in spirit, not in cost.",
    difficulty: "Intermediate",
    cost: "~$15 mesh bags + scale",
    output: "Mass loss curve",
    Icon: Beaker,
  },
  {
    slug: "plastic-id-by-density",
    title: "Plastic identification by density (no torch required)",
    blurb:
      "A safe, kitchen-table method for distinguishing common polymers when the resin code is missing or melted. Borrows from Precious Plastic's field guides; adds confidence intervals.",
    difficulty: "Beginner",
    cost: "Salt, water, isopropyl",
    output: "Polymer class call",
    Icon: FlaskConical,
  },
  {
    slug: "contamination-audit",
    title: "Curbside recycling contamination audit",
    blurb:
      "How to characterize your neighborhood's recycling stream without a sorting facility. Sampling design, safety notes, and a tally sheet that produces comparable numbers across blocks.",
    difficulty: "Intermediate",
    cost: "Gloves, scale, tarp",
    output: "Contamination % by category",
    Icon: ClipboardList,
  },
  {
    slug: "weed-walk",
    title: "Urban weed walk: ecological survey for non-botanists",
    blurb:
      "A protocol for documenting what is actually growing in disturbed lots and verges. Lineage runs through Joey Santore's field walks &mdash; rigor without snobbery.",
    difficulty: "Beginner",
    cost: "Phone + plant ID app",
    output: "Geo-tagged species list",
    Icon: Microscope,
  },
];

const DIFF_TONE: Record<Method["difficulty"], { bg: string; color: string }> = {
  Beginner: PATHWAY.science,
  Intermediate: PATHWAY.recycle,
  Advanced: PATHWAY.compost,
};

export function MethodsPage() {
  return (
    <div style={bodyFont} className="text-[#211f1c]">
      {/* HERO */}
      <section className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-6">
            Methods
          </p>
          <h1
            className="max-w-[20ch] leading-[0.98] tracking-tight"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Methods communities can run.
          </h1>

          <p
            className="mt-8 max-w-[62ch] leading-[1.55] text-[#211f1c]/85"
            style={{ ...bodyFont, fontSize: "clamp(17px, 1.5vw, 21px)" }}
          >
            Replicable protocols, lab notes, and field procedures for people who would
            rather measure than argue. Open by default, designed for kitchen tables and
            community workshops, calibrated against the published literature where the
            literature exists.
          </p>
        </div>
      </section>

      {/* WHAT A METHOD IS */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-3">
              What a Wastefull method is
            </p>
            <h2
              className="leading-[1.05] tracking-tight"
              style={{ ...display, fontWeight: 500, fontSize: "clamp(28px, 3.4vw, 42px)" }}
            >
              A protocol, not a sermon.
            </h2>
          </div>
          <div
            className="md:col-span-7 md:col-start-6 leading-[1.7] text-[#211f1c]/85 space-y-4"
            style={{ ...bodyFont, fontSize: "16px" }}
          >
            <p>
              Each method is a step-by-step procedure another community can follow, adapt,
              and report back on. Every entry includes the equipment list, the safety notes,
              the expected output, and the failure modes we&rsquo;ve seen.
            </p>
            <p>
              We separate what the protocol can measure (a number, a ratio, a curve) from
              what it can&rsquo;t. A backyard PLA test cannot certify a product. A
              contamination tally on one block cannot represent a city. We name those limits
              explicitly so the data stays honest.
            </p>
            <p
              className="leading-[1.3] tracking-tight text-[#211f1c]"
              style={{ ...display, fontWeight: 500, fontSize: "clamp(20px, 2vw, 24px)" }}
            >
              Evidence with humility, by design.
            </p>
          </div>
        </div>
      </section>

      {/* METHOD INDEX */}
      <section className="bg-[#faf7f2]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-3">
            Active methods
          </p>
          <h2
            className="leading-[1.05] tracking-tight max-w-[24ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)", color: LOGO_INK }}
          >
            Things you can run this week.
          </h2>

          <div className="mt-10 space-y-5">
            {METHODS.map((m) => {
              const tone = DIFF_TONE[m.difficulty];
              const Icon = m.Icon;
              return (
                <article
                  key={m.slug}
                  className={`p-6 md:p-7 rounded-xl bg-white border-[1.5px] border-[#211f1c] ${arcadeShadow} grid md:grid-cols-12 gap-5 md:gap-8 items-start`}
                >
                  <div className="md:col-span-1">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-md border-[1.5px] border-[#211f1c]"
                      style={{ background: PATHWAY.science.bg, color: PATHWAY.science.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <h3
                      className="leading-tight"
                      style={{ ...display, fontWeight: 500, fontSize: "22px" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="mt-2 text-[14.5px] leading-6 text-[#211f1c]/75"
                      style={bodyFont}
                    >
                      {m.blurb}
                    </p>
                  </div>

                  <dl
                    className="md:col-span-3 grid grid-cols-1 gap-2 text-[12.5px] leading-5"
                    style={bodyFont}
                  >
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#211f1c]/50">Difficulty</dt>
                      <dd>
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full border-[1.5px] border-[#211f1c] text-[11px] mt-0.5"
                          style={{ background: tone.bg, color: tone.color }}
                        >
                          {m.difficulty}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#211f1c]/50">Cost</dt>
                      <dd className="text-[#211f1c]/80">{m.cost}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#211f1c]/50">Output</dt>
                      <dd className="text-[#211f1c]/80">{m.output}</dd>
                    </div>
                  </dl>

                  <div className="md:col-span-1 flex md:justify-end">
                    <Link
                      to={`/methods/${m.slug}`}
                      className="inline-flex items-center gap-1.5 hover:underline"
                      style={{ ...buttonFont, color: LOGO_INK, fontSize: "14px" }}
                    >
                      Open <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW TO CONTRIBUTE */}
      <section className="border-t-[1.5px] border-[#211f1c] bg-[#f6f1e6]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
            Contribute a method
          </p>
          <h2
            className="leading-[1.05] tracking-tight max-w-[22ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(30px, 4.2vw, 48px)" }}
          >
            Ran something useful? Write it up.
          </h2>

          <p className="mt-6 max-w-[62ch] leading-[1.65] text-[#211f1c]/80" style={bodyFont}>
            Methods are open by default. We use a light protocol template &mdash; what you
            measured, how, what equipment, what you found, and what you wouldn&rsquo;t trust
            it for. Submit a draft and we&rsquo;ll edit it with you, not over you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/wastefull"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
              style={buttonFont}
            >
              <Github className="w-4 h-4" /> Method template on GitHub
            </a>
            <a
              href="mailto:ideas@wastefull.org"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadowLg}`}
              style={{ ...buttonFont, background: PATHWAY.science.bg, color: PATHWAY.science.color }}
            >
              Submit a draft <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CROSSLINK */}
      <section className="border-t-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p
            className="leading-[1.1] tracking-tight max-w-[28ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Looking for the explainer, not the protocol?
          </p>
          <a
            href="/guides"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
            style={buttonFont}
          >
            Read the guides <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
