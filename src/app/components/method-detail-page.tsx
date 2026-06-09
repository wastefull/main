import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  AlertTriangle,
  ListChecks,
  ClipboardList,
  Github,
  Copy,
  Check,
} from "lucide-react";
import { PATHWAY } from "./site-chrome";

type MethodArticle = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  cost: string;
  output: string;
  time: string;
  lineage: string;
  Icon: typeof Microscope;
  markdown: string;
};

const SOIL_MICROSCOPY_MARKDOWN = `## 00 — What this method can and can't tell you

A $300 compound microscope and a smartphone eyepiece adapter can resolve roughly 400× magnification reliably. That is enough to see most soil bacteria as motile dots, fungal hyphae as branching threads, and many protozoa as recognizable shapes. It is *not* enough to species-level ID anything, and the bacteria-to-fungi ratio you produce here is qualitative — a relative call between bacterially dominated, fungally dominated, or roughly balanced. That is still useful: it answers the question "is this compost behaving the way I expected for my crop" far better than guessing from smell and color.

> **What this is not.** This is not a soil-health certification. It cannot replace a lab assay for pathogens, heavy metals, or nutrient content. If you are making claims to a customer or a regulator, send a sample to a lab.

## 01 — Equipment

- Compound microscope, 40×–400× range, with a mechanical stage if possible.
- Glass slides and #1.5 cover slips.
- One 1 mL plastic pipette per sample (disposable, prevents cross-contamination).
- Distilled water. Tap water introduces chlorine artifacts on motile organisms.
- Small kitchen scale that reads to 0.1 g.
- A timer.
- Optional: smartphone eyepiece adapter for photo logging.

## 02 — Sample preparation

1. Weigh out 1.0 g of compost or soil. Take from at least three points in the pile and combine; surface-only samples skew bacterial.
2. Suspend in 4.0 mL distilled water in a small jar. Cap and shake for 30 seconds.
3. Let the suspension settle for 60 seconds so the largest mineral particles drop out. Draw from the upper two-thirds with the pipette — you want the water with organisms in it, not the sediment.
4. Place a single drop on a slide, lower a cover slip at an angle to avoid air bubbles, and bring the lowest objective into focus first.

> **Tip — saves you twenty minutes.** If your first slide shows nothing moving, your sample is probably too dilute or too cold. Warm the suspension to room temperature and try again before you blame the compost.

## 03 — Scoring procedure

Move to 400×. Scan five non-overlapping fields of view. For each field, do two things:

- Estimate **bacterial density** on a 0–3 scale. 0 = none visible, 1 = sparse motile dots, 2 = many motile dots throughout, 3 = the field is alive with movement.
- Estimate **fungal hyphae** on a 0–3 scale. 0 = no hyphae, 1 = a single fragment, 2 = clear hyphal segments in most fields, 3 = a network visible in most fields.

Average each across the five fields. The pair of scores — e.g. \`B 2.4 / F 0.8\` — is your call.

## 04 — Interpreting the call

A rough field-rule that holds up against published Ingham material:

- **B > F by 1.0 or more:** bacterially dominated. Suits annual vegetables, brassicas, and most lawns.
- **Within 0.5 of each other:** roughly balanced. Suits perennials, berries, and most fruiting shrubs.
- **F > B by 1.0 or more:** fungally dominated. Suits forest systems, orchards, and most native woody plants.

These are *directional* recommendations, not prescriptions. A pile that scores bacterially dominated is not "wrong" for a forest garden — it just suggests more fungal foods (woody chips, leaf mold) on the next turn.

## 05 — Logging and reporting

Every assessment goes in a single row of a CSV with these columns: \`date, sample_id, source, B_avg, F_avg, call, notes\`. If you took photos, name them \`{sample_id}_{field#}.jpg\` so they line up with the row. Three runs of the same pile over a season tell you far more than one snapshot.

> **Reporting back to Wastefull.** If you want your run included in the public methods log, send the CSV plus three representative photos to *methods@wastefull.org*. We don't need your location precise to the address — a county or zip is enough.

## 06 — Failure modes we've seen

- **Tap water on the slide.** Chlorine kills motile organisms within seconds; you score a dead pile that was actually fine.
- **Surface-only sampling.** The top inch of any pile reads bacterially dominant. Take the cores.
- **One-shot calls.** A single assessment after a turn or watering event is not representative. Wait 48 hours minimum.
- **Conflating motion with bacteria.** Brownian motion makes mineral particles jiggle; bacteria swim in directional bursts. Watch a field for ten seconds before you score it.

## 07 — Lineage and credit

Adapted from Dr. Elaine Ingham's Soil Food Web School protocols, simplified for hobbyist microscopes and without the formal certification claims.

We've removed the certification framing because we are not credentialed to offer it, and because the protocol is more useful to communities when the output is treated as evidence-among-evidence rather than a verdict.
`;

const ARTICLES: Record<string, MethodArticle> = {
  "soil-microscopy-starter": {
    slug: "soil-microscopy-starter",
    category: "Soil & ecology",
    title: "Soil food web microscopy: a beginner's protocol",
    subtitle:
      "How to look at compost and soil under a $300 microscope and produce a defensible, qualitative bacteria-to-fungi assessment — and how to know when you can't.",
    difficulty: "Intermediate",
    cost: "~$300 microscope, ~$30 supplies",
    output: "Qualitative B:F ratio + photo log",
    time: "~90 minutes per sample, including write-up",
    lineage:
      "Adapted from Dr. Elaine Ingham's Soil Food Web School protocols, simplified for hobbyist microscopes and without the formal certification claims.",
    Icon: Microscope,
    markdown: SOIL_MICROSCOPY_MARKDOWN,
  },
};

export function MethodDetailPage() {
  const { slug } = useParams();
  const article = slug ? ARTICLES[slug] : undefined;

  if (!article) {
    return (
      <div className="font-body text-ink">
        <section className="border-b-[1.5px] border-ink bg-paper-2">
          <div className="max-w-[860px] mx-auto px-5 md:px-10 py-20">
            <Link
              to="/methods"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All methods
            </Link>
            <h1
              className="font-display font-medium mt-6 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              This method is still being written up.
            </h1>
            <p className="font-body mt-6 max-w-[60ch] leading-[1.65] text-ink/80">
              We&rsquo;re drafting the protocol now. In the meantime, the soil
              microscopy starter is fully written up and follows the same
              template every other method on this site uses.
            </p>
            <Link
              to="/methods/soil-microscopy-starter"
              className="font-button font-medium mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
            >
              Read the soil microscopy method <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const Icon = article.Icon;
  const tone = PATHWAY.science;

  const fullMarkdown = buildFullMarkdown(article);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silent */
    }
  };

  return (
    <div className="font-body text-ink">
      {/* HERO */}
      <section className="border-b-[1.5px] border-ink bg-paper-2">
        <div className="max-w-[860px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-16">
          <Link
            to="/methods"
            className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All methods
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border-[1.5px] border-ink"
              style={{ background: tone.bg, color: tone.color }}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/60">
              Method · Soil & ecology
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="font-button font-medium ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-md border-[1.5px] border-ink bg-white arcade-shadow"
              style={{ fontSize: "14px" }}
              aria-label="Copy method as markdown"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied as markdown
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy
                </>
              )}
            </button>
          </div>

          <h1
            className="font-display font-medium mt-5 leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 60px)" }}
          >
            {article.title}
          </h1>

          <p
            className="font-body mt-6 max-w-[60ch] leading-[1.5] text-ink/85"
            style={{ fontSize: "clamp(16px, 1.4vw, 19px)" }}
          >
            {article.subtitle}
          </p>

          {/* Meta strip */}
          <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-[13px]">
            {[
              {
                label: "Difficulty",
                value: article.difficulty,
              },
              { label: "Cost", value: article.cost },
              { label: "Output", value: article.output },
              { label: "Time", value: article.time },
            ].map((row) => (
              <div key={row.label}>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-ink/55">
                  {row.label}
                </dt>
                <dd className="mt-1 text-ink/90 leading-5">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* BODY */}
      <article
        className="font-body max-w-[760px] mx-auto px-5 md:px-10 py-16 leading-[1.7] text-ink/90 space-y-6"
        style={{ fontSize: "17px" }}
      >
        <SectionHead
          n="00"
          title="What this method can &mdash; and can&rsquo;t &mdash; tell you"
        />

        <p>
          A $300 compound microscope and a smartphone eyepiece adapter can
          resolve roughly 400&times; magnification reliably. That is enough to
          see most soil bacteria as motile dots, fungal hyphae as branching
          threads, and many protozoa as recognizable shapes. It is <em>not</em>{" "}
          enough to species-level ID anything, and the bacteria- to-fungi ratio
          you produce here is qualitative &mdash; a relative call between
          bacterially dominated, fungally dominated, or roughly balanced. That
          is still useful: it answers the question &ldquo;is this compost
          behaving the way I expected for my crop&rdquo; far better than
          guessing from smell and color.
        </p>

        <Callout tone="warning" Icon={AlertTriangle} title="What this is not">
          This is not a soil-health certification. It cannot replace a lab assay
          for pathogens, heavy metals, or nutrient content. If you are making
          claims to a customer or a regulator, send a sample to a lab.
        </Callout>

        <SectionHead n="01" title="Equipment" />
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Compound microscope, 40&times;&ndash;400&times; range, with a
            mechanical stage if possible.
          </li>
          <li>Glass slides and #1.5 cover slips.</li>
          <li>
            One 1&nbsp;mL plastic pipette per sample (disposable, prevents
            cross-contamination).
          </li>
          <li>
            Distilled water. Tap water introduces chlorine artifacts on motile
            organisms.
          </li>
          <li>Small kitchen scale that reads to 0.1&nbsp;g.</li>
          <li>A timer.</li>
          <li>Optional: smartphone eyepiece adapter for photo logging.</li>
        </ul>

        <SectionHead n="02" title="Sample preparation" />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Weigh out 1.0&nbsp;g of compost or soil. Take from at least three
            points in the pile and combine; surface-only samples skew bacterial.
          </li>
          <li>
            Suspend in 4.0&nbsp;mL distilled water in a small jar. Cap and shake
            for 30 seconds.
          </li>
          <li>
            Let the suspension settle for 60 seconds so the largest mineral
            particles drop out. Draw from the upper two-thirds with the pipette
            &mdash; you want the water with organisms in it, not the sediment.
          </li>
          <li>
            Place a single drop on a slide, lower a cover slip at an angle to
            avoid air bubbles, and bring the lowest objective into focus first.
          </li>
        </ol>

        <Callout
          tone="tip"
          Icon={ListChecks}
          title="A trick that saves you twenty minutes"
        >
          If your first slide shows nothing moving, your sample is probably too
          dilute or too cold. Warm the suspension to room temperature and try
          again before you blame the compost.
        </Callout>

        <SectionHead n="03" title="Scoring procedure" />
        <p>
          Move to 400&times;. Scan five non-overlapping fields of view. For each
          field, do two things:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Estimate <strong>bacterial density</strong> on a 0&ndash;3 scale. 0
            = none visible, 1 = sparse motile dots, 2 = many motile dots
            throughout, 3 = the field is alive with movement.
          </li>
          <li>
            Estimate <strong>fungal hyphae</strong> on a 0&ndash;3 scale. 0 = no
            hyphae, 1 = a single fragment, 2 = clear hyphal segments in most
            fields, 3 = a network visible in most fields.
          </li>
        </ul>
        <p>
          Average each across the five fields. The pair of scores &mdash; e.g.{" "}
          <code className="px-1 py-0.5 rounded bg-ink/5">B 2.4 / F 0.8</code>{" "}
          &mdash; is your call.
        </p>

        <SectionHead n="04" title="Interpreting the call" />
        <p>
          A rough field-rule that holds up against published Ingham material:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>B &gt; F by 1.0 or more:</strong> bacterially dominated.
            Suits annual vegetables, brassicas, and most lawns.
          </li>
          <li>
            <strong>Within 0.5 of each other:</strong> roughly balanced. Suits
            perennials, berries, and most fruiting shrubs.
          </li>
          <li>
            <strong>F &gt; B by 1.0 or more:</strong> fungally dominated. Suits
            forest systems, orchards, and most native woody plants.
          </li>
        </ul>
        <p>
          These are <em>directional</em> recommendations, not prescriptions. A
          pile that scores bacterially dominated is not &ldquo;wrong&rdquo; for
          a forest garden &mdash; it just suggests more fungal foods (woody
          chips, leaf mold) on the next turn.
        </p>

        <SectionHead n="05" title="Logging and reporting" />
        <p>
          Every assessment goes in a single row of a CSV with these columns:{" "}
          <code className="px-1 py-0.5 rounded bg-ink/5">
            date, sample_id, source, B_avg, F_avg, call, notes
          </code>
          . If you took photos, name them{" "}
          <code className="px-1 py-0.5 rounded bg-ink/5">
            {"{sample_id}_{field#}.jpg"}
          </code>{" "}
          so they line up with the row. Three runs of the same pile over a
          season tell you far more than one snapshot.
        </p>

        <Callout
          tone="note"
          Icon={ClipboardList}
          title="Reporting back to Wastefull"
        >
          If you want your run included in the public methods log, send the CSV
          plus three representative photos to <em>methods@wastefull.org</em>. We
          don&rsquo;t need your location precise to the address &mdash; a county
          or zip is enough.
        </Callout>

        <SectionHead n="06" title="Failure modes we&rsquo;ve seen" />
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tap water on the slide.</strong> Chlorine kills motile
            organisms within seconds; you score a dead pile that was actually
            fine.
          </li>
          <li>
            <strong>Surface-only sampling.</strong> The top inch of any pile
            reads bacterially dominant. Take the cores.
          </li>
          <li>
            <strong>One-shot calls.</strong> A single assessment after a turn or
            watering event is not representative. Wait 48 hours minimum.
          </li>
          <li>
            <strong>Conflating motion with bacteria.</strong> Brownian motion
            makes mineral particles jiggle; bacteria swim in directional bursts.
            Watch a field for ten seconds before you score it.
          </li>
        </ul>

        <SectionHead n="07" title="Lineage and credit" />
        <p>{article.lineage}</p>
        <p>
          We&rsquo;ve removed the certification framing because we are not
          credentialed to offer it, and because the protocol is more useful to
          communities when the output is treated as evidence-among-evidence
          rather than a verdict.
        </p>
      </article>

      {/* FOOTER ACTIONS */}
      <section className="border-t-[1.5px] border-ink bg-paper-3">
        <div className="max-w-[860px] mx-auto px-5 md:px-10 py-14 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p
            className="font-display font-medium leading-[1.15] tracking-tight max-w-[28ch] text-logo-ink"
            style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
          >
            Ran this method? Share what you found.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="relative inline-flex opacity-50 grayscale pointer-events-none select-none">
              <span className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink bg-white arcade-shadow">
                Send your CSV <ArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center rounded-md">
                <span className="font-display text-ink border border-ink/60 px-2.5 py-0.5 rounded-full text-[11px] tracking-wide bg-white/90 shadow-sm">
                  Coming soon
                </span>
              </span>
            </span>
            <span className="relative inline-flex opacity-50 grayscale pointer-events-none select-none">
              <span
                className="font-button font-medium inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-ink arcade-shadow"
                style={{ background: tone.bg, color: tone.color }}
              >
                <Github className="w-4 h-4" /> Method template
              </span>
              <span className="absolute inset-0 flex items-center justify-center rounded-md">
                <span className="font-display text-ink border border-ink/60 px-2.5 py-0.5 rounded-full text-[11px] tracking-wide bg-white/90 shadow-sm">
                  Coming soon
                </span>
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function buildFullMarkdown(a: MethodArticle): string {
  const frontmatter = [
    "---",
    `slug: ${a.slug}`,
    `category: ${a.category}`,
    `title: ${JSON.stringify(a.title)}`,
    `difficulty: ${a.difficulty}`,
    `cost: ${JSON.stringify(a.cost)}`,
    `output: ${JSON.stringify(a.output)}`,
    `time: ${JSON.stringify(a.time)}`,
    "---",
    "",
  ].join("\n");

  const header = [
    `# ${a.title}`,
    "",
    `_${a.subtitle}_`,
    "",
    `**Category:** ${a.category}  `,
    `**Difficulty:** ${a.difficulty}  `,
    `**Cost:** ${a.cost}  `,
    `**Output:** ${a.output}  `,
    `**Time:** ${a.time}  `,
    `**Lineage:** ${a.lineage}`,
    "",
  ].join("\n");

  return frontmatter + header + "\n" + a.markdown;
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="pt-6">
      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/45">
        {n}
      </p>
      <h2
        className="font-display font-medium mt-1 leading-[1.15] tracking-tight"
        style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}

function Callout({
  tone,
  Icon,
  title,
  children,
}: {
  tone: "tip" | "warning" | "note";
  Icon: typeof AlertTriangle;
  title: string;
  children: React.ReactNode;
}) {
  const palette =
    tone === "warning"
      ? PATHWAY.compost
      : tone === "tip"
        ? PATHWAY.science
        : PATHWAY.recycle;
  return (
    <aside
      className={`my-2 p-5 rounded-xl border-[1.5px] border-ink arcade-shadow`}
      style={{ background: palette.bg }}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" style={{ color: palette.color }} />
        <p
          className="font-display font-medium leading-tight"
          style={{ fontSize: "16px", color: palette.color }}
        >
          {title}
        </p>
      </div>
      <div className="font-body mt-2 text-[15px] leading-[1.6] text-ink/90">
        {children}
      </div>
    </aside>
  );
}
