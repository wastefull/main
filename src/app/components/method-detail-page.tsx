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

const SOIL_MICROSCOPY_MARKDOWN = `# Soil food web microscopy: a beginner's field protocol

How to use a modest compound microscope to look at compost and soil biology, make a careful qualitative call, and know when the honest answer is: “I need more evidence.”

Category: Soil & ecology  
Difficulty: Intermediate  
Cost: ~$300 microscope, ~$30 supplies  
Output: Qualitative bacterial/fungal dominance screen + photo log  
Time: ~90 minutes per sample, including write-up  
Lineage: Inspired by soil food web microscopy traditions, including the work of Dr. Elaine Ingham and the Soil Food Web School, but simplified for community use. This is not a certification protocol and does not claim equivalence with professional lab assessment.[^1]

## 00 — What this method can and can't tell you

A basic compound microscope in the 40×–400× range can open up a world most people never see: fungal hyphae, protozoa, nematodes, organic fragments, mineral particles, and sometimes bacteria-like motion. That alone is powerful. A community that can observe its soil is less dependent on guessing, marketing claims, and fear.

But this protocol has limits.

At 400×, unstained bacteria are difficult to see clearly because they are small and low-contrast. Some visible motion may be living bacteria or protozoa; some may be Brownian motion, water current, or mineral particles shifting in suspension.[^2] So this method should not claim a precise bacteria-to-fungi ratio. A true B:F biomass estimate requires more controlled sampling, calibrated observation, and often staining or lab-grade methods.[^3]

What this protocol can produce is a defensible qualitative screen:

- Does this sample show obvious fungal structure?
- Is the field dominated by tiny moving particles?
- Are protozoa or nematodes present?
- Does the biology look active, sparse, disturbed, or diverse?
- Do repeated observations move in the direction expected after a management change?

That is still useful. It will not tell you everything, but it can help you ask better questions.

> What this is not. This is not a soil-health certification, pathogen test, nutrient analysis, compost safety test, or regulatory report. If you are making claims to a customer, selling compost, applying material to food crops at scale, or dealing with suspected contamination, send samples to an appropriate lab.

## 01 — Equipment

- Compound microscope with 40×, 100×, and 400× total magnification.
- Mechanical stage, strongly preferred.
- Glass slides and #1.5 cover slips.
- One clean 1 mL plastic pipette per sample.
- Distilled or dechlorinated water.
- Small scale that reads to 0.1 g.
- Small clean jar or vial with lid.
- Timer.
- Notebook or CSV log.
- Optional: smartphone eyepiece adapter for photo logging.

Avoid using the same pipette across samples. Cross-contamination ruins the whole exercise.

## 02 — Sample preparation

1. Collect a mixed sample from at least three points in the pile, bed, or test area. Avoid using only the surface crust unless the surface is the thing you are intentionally testing.
2. Weigh 1.0 g of compost or soil into a clean jar.
3. Add 4.0 mL distilled or dechlorinated water.
4. Cap and shake for 30 seconds. Do not blend, froth, or beat the sample into sludge. You are trying to suspend organisms and fragments, not destroy structure.
5. Let the suspension settle for 60 seconds so larger mineral particles drop out.
6. Draw liquid from the upper two-thirds of the jar. Avoid the heavy sediment at the bottom.
7. Place one small drop on a slide.
8. Lower the cover slip at an angle to reduce air bubbles.
9. Start at low power. Find the sample, focus, then move up to 100× and 400× as needed.

> Field note. If the first slide shows no activity, do not immediately declare the compost dead. Check the basics: Is the sample cold? Too diluted? Too dry? Too much sediment? Bad lighting? Poor focus? Try a second slide before making a call.

## 03 — Observation procedure

Scan at least five non-overlapping fields of view. Ten is better if you have time.

For each field, record four observations:

### 1. Bacteria-like activity

Use this as a cautious visual category, not a precise bacterial count.

- 0 = no visible bacteria-like motion.
- 1 = sparse tiny moving dots or particles.
- 2 = frequent tiny moving dots throughout the field.
- 3 = dense bacteria-like activity across much of the field.

Before scoring, watch the field for at least ten seconds. Brownian motion usually looks like vibration or jittering in place. True motility is more directional, though not always cleanly so.[^2]

### 2. Fungal hyphae

Look for threadlike structures, often branching, sometimes septate, sometimes pigmented.

- 0 = no hyphae observed.
- 1 = one or two possible fragments.
- 2 = clear hyphal segments in several fields.
- 3 = obvious hyphal presence or network-like structure in most fields.

Do not score every fiber as fungus. Plant hairs, textile fibers, and debris can fool beginners. Fungal hyphae usually have more biological structure than random fibers.

### 3. Larger organisms

Record presence or absence of:

- protozoa
- nematodes
- rotifers
- mites or microarthropod fragments
- spores
- obvious organic debris

Do not over-identify. “Protozoa present” is better than a confident but wrong species-level claim.

### 4. Confidence

Add a confidence score:

- High: clear images, repeated patterns across fields, low sediment interference.
- Medium: usable, but some ambiguity.
- Low: too much sediment, poor focus, weak light, cold sample, few fields, or uncertain motion.

If confidence is low, the result is not a result. It is a note to improve the method.

## 04 — Scoring

Average your bacteria-like activity score and fungal hyphae score across the fields.

Example:

B-like activity 2.2 / Fungal structure 0.8 / Confidence medium

Then make one of four calls:

- Bacteria-leaning visual profile: bacteria-like activity is much higher than fungal structure.
- Fungi-leaning visual profile: fungal structure is much higher than bacteria-like activity.
- Mixed visual profile: both are clearly present.
- Inconclusive: visibility, sampling, or confidence is too weak.

Avoid presenting this as a numerical B:F ratio. A visual dominance screen is not the same thing as biomass measurement.

## 05 — Interpreting the call

Soil food webs vary by ecosystem, plant community, management, moisture, season, organic matter, disturbance, and sampling method. In broad terms, agricultural and grassland soils often have more bacterial-dominated food webs, while forest systems tend to be more fungal-dominated. Productive agricultural soils are often near 1:1 fungal:bacterial biomass or somewhat bacterial-leaning, while forests can be much more fungal-dominated.[^4]

Use that as context, not dogma.

A bacteria-leaning compost is not “bad.” It may be young, green, nitrogen-rich, recently turned, or appropriate for certain annual systems.

A fungi-leaning compost is not automatically “better.” It may be more mature, woody, slower-cycling, or more appropriate for perennial and woody plant systems.

The real question is:

What are you trying to grow, what is the soil already doing, and what evidence do you have besides this slide?

Suggested directional interpretation:

- Annual vegetables, brassicas, and many disturbed garden beds: often tolerate or benefit from more bacterial activity.
- Perennials, berries, shrubs, orchards, and forest gardens: often benefit from more fungal structure and less disturbance.
- Restoration sites: interpret carefully. Native plant community, soil history, compaction, contamination, hydrology, and organic matter may matter more than a single microscopy call.

## 06 — Logging and reporting

Every assessment should go in one CSV row:

date, sample_id, source, sample_type, water_type, dilution, fields_counted, B_like_avg, F_avg, larger_organisms, confidence, call, notes

If you took photos, name them:

{sample_id}\_field-{field#}.jpg

Three runs from the same pile over a season are more useful than one dramatic slide. The pattern matters more than the snapshot.

> Reporting back to Wastefull. If you want your run included in the public methods log, send the CSV plus three representative photos to methods@wastefull.org. We do not need your exact address. County, watershed, or zip code is enough.

## 07 — Failure modes we've seen

### Tap water as an uncontrolled variable

Tap water may contain chlorine or chloramine, and water chemistry varies by municipality. Do not use it unless you are intentionally testing its effect. Use distilled or properly dechlorinated water so your slide reflects the sample, not your water supply.

### Surface-only sampling

The top layer of compost or soil can differ sharply from the interior. Surface samples may be drier, more oxygenated, more UV-exposed, or more recently contaminated by fresh inputs. Sample the zone you actually care about.

### Calling one slide “the soil”

One wet mount is a tiny, disturbed window into a heterogeneous system. It can teach you something, but it cannot represent an entire pile, bed, farm, or restoration site by itself.

### Confusing Brownian motion with life

Tiny particles jiggle. Water currents drift. Bacteria may move directionally, but the distinction is not always easy in a dirty wet mount. Watch before scoring.

### Treating fungi as a moral category

More fungi is not always better. More bacteria is not always worse. Biology should match context, crop, succession stage, and management goal.

### Using microscopy to replace chemistry

Microscopy will not tell you whether the soil has lead, arsenic, pesticide residues, excess salts, nutrient imbalance, or pathogens. Biology is one layer of evidence, not the whole stack.

## 08 — Practical next steps after a call

If the sample is bacteria-leaning and you want more fungal structure:

- reduce disturbance
- add woody compost, leaf mold, ramial wood chips, or fungal-rich mulch
- keep soil covered
- maintain moisture without waterlogging
- avoid repeatedly turning the same material

If the sample is fungi-leaning but plants look nitrogen-starved or stalled:

- check moisture, temperature, and compaction
- consider whether nutrients are tied up in high-carbon material
- compare against a standard soil test
- avoid assuming the microscope has answered the whole question

If the sample is inconclusive:

- improve slide preparation
- run more fields
- repeat with a fresh sample
- photograph what you see
- ask another trained observer to review the images

## 09 — Lineage and credit

This protocol is influenced by soil food web microscopy education, especially the work of Dr. Elaine Ingham and the broader soil biology tradition. It is also shaped by a community-science constraint: most people do not have a professional lab, but they can still learn to observe carefully.

We removed certification framing because we are not credentialed to offer it, and because the method is more useful when treated as evidence-among-evidence rather than a verdict.

The goal is not to turn a $300 microscope into a laboratory. The goal is to help communities see the living system beneath their feet, record observations honestly, and make better land-care decisions over time.

## Footnotes

[^1]: Soil Food Web School teaches microscopy-based identification of soil organisms including bacteria, fungi, protozoa, and nematodes, but its training and assessment framework should not be implied by a simplified hobbyist protocol. [Soil Food Web School — Soil Microscopy course](https://school.soilfoodweb.com/courses/soil-microscopy)

[^2]: Brownian motion can make small particles and cells appear to vibrate or jitter. True microbial motility is more directional, but wet mounts can still be ambiguous. [Rice University — Observing Living Bacteria](https://www.ruf.rice.edu/~bioslabs/BIOC318/living_bacteria.asp)

[^3]: More quantitative soil microbial methods often use controlled preparation, replicate smears, staining, or other lab procedures. A simple unstained wet mount should not be represented as equivalent to those methods. [Kellogg Biological Station LTER — Microbial biomass/biovolume protocol](https://lter.kbs.msu.edu/protocols/18)

[^4]: The USDA/NRCS Soil Biology Primer describes bacterial-dominated food webs as common in grasslands and agricultural soils, highly productive agricultural soils as often near 1:1 fungal:bacterial biomass or somewhat less, and forests as generally fungal-dominated. [USDA/NRCS — Soil Biology Primer](https://www.envirothonpa.org/wp-content/uploads/2014/04/7-Soil-Biology-Primer.pdf)

## Sources

| #   | Source                                                                                                               | What it supports                                                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Soil Food Web School — Soil Microscopy course](https://school.soilfoodweb.com/courses/soil-microscopy)              | Soil Food Web School teaches microscopy-based identification of bacteria, fungi, protozoa, nematodes, and related organisms; a simplified Wastefull protocol should not imply formal certification equivalence.                  |
| 2   | [Rice University — Observing Living Bacteria](https://www.ruf.rice.edu/~bioslabs/BIOC318/living_bacteria.asp)        | Brownian motion can make cells or particles appear to vibrate in place; true motility is different and wet mounts can be ambiguous.                                                                                              |
| 3   | [Kellogg Biological Station LTER — Microbial biomass/biovolume protocol](https://lter.kbs.msu.edu/protocols/18)      | Quantitative microbial biomass/biovolume methods use controlled suspensions, replicate smears, staining, and defined lab procedures, unlike a simple unstained hobby wet mount.                                                  |
| 4   | [USDA/NRCS — Soil Biology Primer](https://www.envirothonpa.org/wp-content/uploads/2014/04/7-Soil-Biology-Primer.pdf) | Agricultural and grassland soils are generally more bacterial-dominated; forest soils tend to be more fungal-dominated; productive agricultural soils are often near 1:1 fungal:bacterial biomass or somewhat bacterial-leaning. |
`;

const ARTICLES: Record<string, MethodArticle> = {
  "soil-microscopy-starter": {
    slug: "soil-microscopy-starter",
    category: "Soil & ecology",
    title: "Soil food web microscopy: a beginner's field protocol",
    subtitle:
      "How to use a modest compound microscope to look at compost and soil biology, make a careful qualitative call, and know when the honest answer is: \u201cI need more evidence.\u201d",
    difficulty: "Intermediate",
    cost: "~$300 microscope, ~$30 supplies",
    output: "Qualitative bacterial/fungal dominance screen + photo log",
    time: "~90 minutes per sample, including write-up",
    lineage:
      "Inspired by soil food web microscopy traditions, including the work of Dr. Elaine Ingham and the Soil Food Web School, but simplified for community use. This is not a certification protocol and does not claim equivalence with professional lab assessment.",
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
          id="s00"
          n="00"
          title="What this method can &mdash; and can&rsquo;t &mdash; tell you"
        />
        <p>
          A basic compound microscope in the 40&times;&ndash;400&times; range
          can open up a world most people never see: fungal hyphae, protozoa,
          nematodes, organic fragments, mineral particles, and sometimes
          bacteria-like motion. That alone is powerful. A community that can
          observe its soil is less dependent on guessing, marketing claims, and
          fear.
        </p>
        <p>But this protocol has limits.</p>
        <p>
          At 400&times;, unstained bacteria are difficult to see clearly because
          they are small and low-contrast. Some visible motion may be living
          bacteria or protozoa; some may be Brownian motion, water current, or
          mineral particles shifting in suspension.
          <Fn n={2} id="fnref-2" /> So this method should not claim a precise
          bacteria-to-fungi ratio. A true B:F biomass estimate requires more
          controlled sampling, calibrated observation, and often staining or
          lab-grade methods.
          <Fn n={3} id="fnref-3" />
        </p>
        <p>
          What this protocol can produce is a defensible qualitative screen:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Does this sample show obvious fungal structure?</li>
          <li>Is the field dominated by tiny moving particles?</li>
          <li>Are protozoa or nematodes present?</li>
          <li>Does the biology look active, sparse, disturbed, or diverse?</li>
          <li>
            Do repeated observations move in the direction expected after a
            management change?
          </li>
        </ul>
        <p>
          That is still useful. It will not tell you everything, but it can help
          you ask better questions.
        </p>
        <Callout tone="warning" Icon={AlertTriangle} title="What this is not">
          This is not a soil-health certification, pathogen test, nutrient
          analysis, compost safety test, or regulatory report. If you are making
          claims to a customer, selling compost, applying material to food crops
          at scale, or dealing with suspected contamination, send samples to an
          appropriate lab.
        </Callout>

        <SectionHead id="s01" n="01" title="Equipment" />
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Compound microscope with 40&times;, 100&times;, and 400&times; total
            magnification.
          </li>
          <li>Mechanical stage, strongly preferred.</li>
          <li>Glass slides and #1.5 cover slips.</li>
          <li>One clean 1&nbsp;mL plastic pipette per sample.</li>
          <li>Distilled or dechlorinated water.</li>
          <li>Small scale that reads to 0.1&nbsp;g.</li>
          <li>Small clean jar or vial with lid.</li>
          <li>Timer.</li>
          <li>Notebook or CSV log.</li>
          <li>Optional: smartphone eyepiece adapter for photo logging.</li>
        </ul>
        <p>
          Avoid using the same pipette across samples. Cross-contamination ruins
          the whole exercise.
        </p>

        <SectionHead id="s02" n="02" title="Sample preparation" />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Collect a mixed sample from at least three points in the pile, bed,
            or test area. Avoid using only the surface crust unless the surface
            is the thing you are intentionally testing.
          </li>
          <li>Weigh 1.0&nbsp;g of compost or soil into a clean jar.</li>
          <li>Add 4.0&nbsp;mL distilled or dechlorinated water.</li>
          <li>
            Cap and shake for 30 seconds. Do not blend, froth, or beat the
            sample into sludge. You are trying to suspend organisms and
            fragments, not destroy structure.
          </li>
          <li>
            Let the suspension settle for 60 seconds so larger mineral particles
            drop out.
          </li>
          <li>
            Draw liquid from the upper two-thirds of the jar. Avoid the heavy
            sediment at the bottom.
          </li>
          <li>Place one small drop on a slide.</li>
          <li>Lower the cover slip at an angle to reduce air bubbles.</li>
          <li>
            Start at low power. Find the sample, focus, then move up to
            100&times; and 400&times; as needed.
          </li>
        </ol>
        <Callout tone="tip" Icon={ListChecks} title="Field note">
          If the first slide shows no activity, do not immediately declare the
          compost dead. Check the basics: Is the sample cold? Too diluted? Too
          dry? Too much sediment? Bad lighting? Poor focus? Try a second slide
          before making a call.
        </Callout>

        <SectionHead id="s03" n="03" title="Observation procedure" />
        <p>
          Scan at least five non-overlapping fields of view. Ten is better if
          you have time.
        </p>
        <p>For each field, record four observations:</p>
        <div className="space-y-8 mt-2">
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              1. Bacteria-like activity
            </h3>
            <p className="mb-3">
              Use this as a cautious visual category, not a precise bacterial
              count.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>0 = no visible bacteria-like motion.</li>
              <li>1 = sparse tiny moving dots or particles.</li>
              <li>2 = frequent tiny moving dots throughout the field.</li>
              <li>
                3 = dense bacteria-like activity across much of the field.
              </li>
            </ul>
            <p className="mt-3">
              Before scoring, watch the field for at least ten seconds. Brownian
              motion usually looks like vibration or jittering in place. True
              motility is more directional, though not always cleanly so.
              <Fn n={2} />
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              2. Fungal hyphae
            </h3>
            <p className="mb-3">
              Look for threadlike structures, often branching, sometimes
              septate, sometimes pigmented.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>0 = no hyphae observed.</li>
              <li>1 = one or two possible fragments.</li>
              <li>2 = clear hyphal segments in several fields.</li>
              <li>
                3 = obvious hyphal presence or network-like structure in most
                fields.
              </li>
            </ul>
            <p className="mt-3">
              Do not score every fiber as fungus. Plant hairs, textile fibers,
              and debris can fool beginners. Fungal hyphae usually have more
              biological structure than random fibers.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              3. Larger organisms
            </h3>
            <p className="mb-3">Record presence or absence of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>protozoa</li>
              <li>nematodes</li>
              <li>rotifers</li>
              <li>mites or microarthropod fragments</li>
              <li>spores</li>
              <li>obvious organic debris</li>
            </ul>
            <p className="mt-3">
              Do not over-identify. &ldquo;Protozoa present&rdquo; is better
              than a confident but wrong species-level claim.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              4. Confidence
            </h3>
            <p className="mb-3">Add a confidence score:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>High:</strong> clear images, repeated patterns across
                fields, low sediment interference.
              </li>
              <li>
                <strong>Medium:</strong> usable, but some ambiguity.
              </li>
              <li>
                <strong>Low:</strong> too much sediment, poor focus, weak light,
                cold sample, few fields, or uncertain motion.
              </li>
            </ul>
            <p className="mt-3">
              If confidence is low, the result is not a result. It is a note to
              improve the method.
            </p>
          </div>
        </div>

        <SectionHead id="s04" n="04" title="Scoring" />
        <p>
          Average your bacteria-like activity score and fungal hyphae score
          across the fields.
        </p>
        <p>Example:</p>
        <p>
          <code className="px-2 py-1 rounded bg-ink/5">
            B-like activity 2.2 / Fungal structure 0.8 / Confidence medium
          </code>
        </p>
        <p>Then make one of four calls:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Bacteria-leaning visual profile:</strong> bacteria-like
            activity is much higher than fungal structure.
          </li>
          <li>
            <strong>Fungi-leaning visual profile:</strong> fungal structure is
            much higher than bacteria-like activity.
          </li>
          <li>
            <strong>Mixed visual profile:</strong> both are clearly present.
          </li>
          <li>
            <strong>Inconclusive:</strong> visibility, sampling, or confidence
            is too weak.
          </li>
        </ul>
        <p>
          Avoid presenting this as a numerical B:F ratio. A visual dominance
          screen is not the same thing as biomass measurement.
        </p>

        <SectionHead id="s05" n="05" title="Interpreting the call" />
        <p>
          Soil food webs vary by ecosystem, plant community, management,
          moisture, season, organic matter, disturbance, and sampling method. In
          broad terms, agricultural and grassland soils often have more
          bacterial-dominated food webs, while forest systems tend to be more
          fungal-dominated. Productive agricultural soils are often near 1:1
          fungal:bacterial biomass or somewhat bacterial-leaning, while forests
          can be much more fungal-dominated.
          <Fn n={4} id="fnref-4" />
        </p>
        <p>Use that as context, not dogma.</p>
        <p>
          A bacteria-leaning compost is not &ldquo;bad.&rdquo; It may be young,
          green, nitrogen-rich, recently turned, or appropriate for certain
          annual systems.
        </p>
        <p>
          A fungi-leaning compost is not automatically &ldquo;better.&rdquo; It
          may be more mature, woody, slower-cycling, or more appropriate for
          perennial and woody plant systems.
        </p>
        <p>The real question is:</p>
        <p className="pl-4 border-l-[3px] border-ink/20 italic text-ink/75">
          What are you trying to grow, what is the soil already doing, and what
          evidence do you have besides this slide?
        </p>
        <p>Suggested directional interpretation:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>
              Annual vegetables, brassicas, and many disturbed garden beds:
            </strong>{" "}
            often tolerate or benefit from more bacterial activity.
          </li>
          <li>
            <strong>
              Perennials, berries, shrubs, orchards, and forest gardens:
            </strong>{" "}
            often benefit from more fungal structure and less disturbance.
          </li>
          <li>
            <strong>Restoration sites:</strong> interpret carefully. Native
            plant community, soil history, compaction, contamination, hydrology,
            and organic matter may matter more than a single microscopy call.
          </li>
        </ul>

        <SectionHead id="s06" n="06" title="Logging and reporting" />
        <p>Every assessment should go in one CSV row:</p>
        <p>
          <code className="px-2 py-1 rounded bg-ink/5 text-[14px] break-all">
            date, sample_id, source, sample_type, water_type, dilution,
            fields_counted, B_like_avg, F_avg, larger_organisms, confidence,
            call, notes
          </code>
        </p>
        <p>
          If you took photos, name them{" "}
          <code className="px-1 py-0.5 rounded bg-ink/5">
            {"{sample_id}_field-{field#}.jpg"}
          </code>
          .
        </p>
        <p>
          Three runs from the same pile over a season are more useful than one
          dramatic slide. The pattern matters more than the snapshot.
        </p>
        <Callout
          tone="note"
          Icon={ClipboardList}
          title="Reporting back to Wastefull"
        >
          If you want your run included in the public methods log, send the CSV
          plus three representative photos to <em>methods@wastefull.org</em>. We
          do not need your exact address. County, watershed, or zip code is
          enough.
        </Callout>

        <SectionHead id="s07" n="07" title="Failure modes we&rsquo;ve seen" />
        <div className="space-y-6">
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Tap water as an uncontrolled variable
            </h3>
            <p>
              Tap water may contain chlorine or chloramine, and water chemistry
              varies by municipality. Do not use it unless you are intentionally
              testing its effect. Use distilled or properly dechlorinated water
              so your slide reflects the sample, not your water supply.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Surface-only sampling
            </h3>
            <p>
              The top layer of compost or soil can differ sharply from the
              interior. Surface samples may be drier, more oxygenated, more
              UV-exposed, or more recently contaminated by fresh inputs. Sample
              the zone you actually care about.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Calling one slide &ldquo;the soil&rdquo;
            </h3>
            <p>
              One wet mount is a tiny, disturbed window into a heterogeneous
              system. It can teach you something, but it cannot represent an
              entire pile, bed, farm, or restoration site by itself.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Confusing Brownian motion with life
            </h3>
            <p>
              Tiny particles jiggle. Water currents drift. Bacteria may move
              directionally, but the distinction is not always easy in a dirty
              wet mount. Watch before scoring.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Treating fungi as a moral category
            </h3>
            <p>
              More fungi is not always better. More bacteria is not always
              worse. Biology should match context, crop, succession stage, and
              management goal.
            </p>
          </div>
          <div>
            <h3
              className="font-display font-medium leading-snug tracking-tight mb-2"
              style={{ fontSize: "clamp(18px, 1.8vw, 22px)" }}
            >
              Using microscopy to replace chemistry
            </h3>
            <p>
              Microscopy will not tell you whether the soil has lead, arsenic,
              pesticide residues, excess salts, nutrient imbalance, or
              pathogens. Biology is one layer of evidence, not the whole stack.
            </p>
          </div>
        </div>

        <SectionHead
          id="s08"
          n="08"
          title="Practical next steps after a call"
        />
        <p>
          If the sample is bacteria-leaning and you want more fungal structure:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>reduce disturbance</li>
          <li>
            add woody compost, leaf mold, ramial wood chips, or fungal-rich
            mulch
          </li>
          <li>keep soil covered</li>
          <li>maintain moisture without waterlogging</li>
          <li>avoid repeatedly turning the same material</li>
        </ul>
        <p>
          If the sample is fungi-leaning but plants look nitrogen-starved or
          stalled:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>check moisture, temperature, and compaction</li>
          <li>
            consider whether nutrients are tied up in high-carbon material
          </li>
          <li>compare against a standard soil test</li>
          <li>avoid assuming the microscope has answered the whole question</li>
        </ul>
        <p>If the sample is inconclusive:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>improve slide preparation</li>
          <li>run more fields</li>
          <li>repeat with a fresh sample</li>
          <li>photograph what you see</li>
          <li>ask another trained observer to review the images</li>
        </ul>

        <SectionHead id="s09" n="09" title="Lineage and credit" />
        <p>
          This protocol is influenced by soil food web microscopy education,
          especially the work of Dr. Elaine Ingham and the broader soil biology
          tradition. It is also shaped by a community-science constraint: most
          people do not have a professional lab, but they can still learn to
          observe carefully.
          <Fn n={1} id="fnref-1" />
        </p>
        <p>
          We removed certification framing because we are not credentialed to
          offer it, and because the method is more useful when treated as
          evidence-among-evidence rather than a verdict.
        </p>
        <p>
          The goal is not to turn a $300 microscope into a laboratory. The goal
          is to help communities see the living system beneath their feet,
          record observations honestly, and make better land-care decisions over
          time.
        </p>

        <div id="footnotes" className="pt-6 border-t border-ink/15 mt-4">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/45 mb-5">
            Footnotes
          </p>
          <ol className="space-y-4 list-none pl-0">
            <FootnoteEntry n={1}>
              Soil Food Web School teaches microscopy-based identification of
              soil organisms including bacteria, fungi, protozoa, and nematodes,
              but its training and assessment framework should not be implied by
              a simplified hobbyist protocol.{" "}
              <a
                href="https://school.soilfoodweb.com/courses/soil-microscopy"
                className="text-ink/60 hover:text-ink underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soil Food Web School &mdash; Soil Microscopy course
              </a>
            </FootnoteEntry>
            <FootnoteEntry n={2}>
              Brownian motion can make small particles and cells appear to
              vibrate or jitter. True microbial motility is more directional,
              but wet mounts can still be ambiguous.{" "}
              <a
                href="https://www.ruf.rice.edu/~bioslabs/BIOC318/living_bacteria.asp"
                className="text-ink/60 hover:text-ink underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rice University &mdash; Observing Living Bacteria
              </a>
            </FootnoteEntry>
            <FootnoteEntry n={3}>
              More quantitative soil microbial methods often use controlled
              preparation, replicate smears, staining, or other lab procedures.
              A simple unstained wet mount should not be represented as
              equivalent to those methods.{" "}
              <a
                href="https://lter.kbs.msu.edu/protocols/18"
                className="text-ink/60 hover:text-ink underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kellogg Biological Station LTER &mdash; Microbial
                biomass/biovolume protocol
              </a>
            </FootnoteEntry>
            <FootnoteEntry n={4}>
              The USDA/NRCS Soil Biology Primer describes bacterial-dominated
              food webs as common in grasslands and agricultural soils, highly
              productive agricultural soils as often near 1:1 fungal:bacterial
              biomass or somewhat less, and forests as generally
              fungal-dominated.{" "}
              <a
                href="https://www.envirothonpa.org/wp-content/uploads/2014/04/7-Soil-Biology-Primer.pdf"
                className="text-ink/60 hover:text-ink underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDA/NRCS &mdash; Soil Biology Primer
              </a>
            </FootnoteEntry>
          </ol>
        </div>
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

function SectionHead({
  n,
  title,
  id,
}: {
  n: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="pt-6" id={id}>
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

function Fn({ n, id }: { n: number; id?: string }) {
  return (
    <sup id={id}>
      <a
        href={`#fn-${n}`}
        className="text-ink/50 hover:text-ink font-mono text-[11px]"
        aria-label={`Footnote ${n}`}
      >
        [{n}]
      </a>
    </sup>
  );
}

function FootnoteEntry({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <li
      id={`fn-${n}`}
      className="flex gap-3 text-[14px] leading-[1.65] text-ink/70"
    >
      <span className="font-mono shrink-0 text-ink/40">[{n}]</span>
      <span>
        {children}{" "}
        <a
          href={`#fnref-${n}`}
          className="text-ink/35 hover:text-ink"
          aria-label="Back to reference"
        >
          &#8617;
        </a>
      </span>
    </li>
  );
}
