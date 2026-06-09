import { useEffect, useState } from "react";
import { ArrowRight, Sprout, Recycle, Lightbulb, FlaskConical, Wrench, BookOpen } from "lucide-react";
import {
  PATHWAY,
  arcadeShadow,
  display,
  bodyFont,
  buttonFont,
  LOGO_INK,
} from "./site-chrome";

const GUIDES_ENDPOINT =
  "https://bdvfwjmaufjeqmxphmtv.supabase.co/functions/v1/make-server-17cae920/guides?status=published&limit=6";
const GUIDES_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdmZ3am1hdWZqZXFteHBobXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MzM2NzksImV4cCI6MjA3NjMwOTY3OX0.az1bWoqcbaGrk7klMqYTbV6juUOljqPOZ69VAIDaaIU";

type ApiGuide = {
  slug: string;
  title: string;
  description: string;
  category: string | null;
  read_time_estimate: number | null;
  permalink: string;
};

type GuideCategory = "compost" | "recycle" | "reuse" | "science" | "repair";

type Guide = {
  slug: string;
  category: GuideCategory;
  title: string;
  blurb: string;
  meta: string;
  permalink?: string;
};

const CATEGORY_FROM_API: Record<string, GuideCategory> = {
  composting: "compost",
  compost: "compost",
  recycling: "recycle",
  recycle: "recycle",
  reuse: "reuse",
  reusing: "reuse",
  upcycle: "reuse",
  upcycling: "reuse",
  repair: "repair",
  science: "science",
  ecology: "science",
};

function mapApiGuide(g: ApiGuide): Guide {
  const key = (g.category ?? "").toLowerCase();
  const category: GuideCategory = CATEGORY_FROM_API[key] ?? "science";
  const minutes = g.read_time_estimate ?? 1;
  const label = CATEGORY_META[category].label;
  return {
    slug: g.slug,
    category,
    title: g.title,
    blurb: g.description,
    meta: `${label} · ${minutes} min read`,
    permalink: g.permalink,
  };
}

const FALLBACK_GUIDES: Guide[] = [
  {
    slug: "pla-curbside",
    category: "recycle",
    title: "PLA bioplastics at curbside: what actually happens",
    blurb:
      "PLA is technically compostable in industrial conditions. In a curbside recycling stream it is a contaminant, and in a backyard pile it usually doesn't break down at all.",
    meta: "Materials · 9 min read",
  },
  {
    slug: "coffee-grounds",
    category: "compost",
    title: "Coffee grounds: beyond the garden bed",
    blurb:
      "What spent grounds actually do to soil pH, nitrogen availability, and microbial life — and where the common advice breaks down.",
    meta: "Soil & compost · 14 min read",
  },
  {
    slug: "textile-offcuts",
    category: "reuse",
    title: "Textile offcuts in acoustic panel manufacture",
    blurb:
      "A practical look at what small fabric scraps can become — what works at hobbyist scale, what works at workshop scale, and what doesn't scale at all.",
    meta: "Reuse · 22 min read",
  },
  {
    slug: "compost-myths",
    category: "compost",
    title: "Five composting claims that need an asterisk",
    blurb:
      "&ldquo;Compostable,&rdquo; &ldquo;hot pile,&rdquo; &ldquo;balanced C:N&rdquo; — useful concepts, often misapplied. We unpack the conditions each one assumes.",
    meta: "Soil & compost · 11 min read",
  },
  {
    slug: "plastic-id",
    category: "recycle",
    title: "Reading the resin code without believing it",
    blurb:
      "Resin codes describe chemistry, not recyclability. Here's how to translate a #5 PP tub into what your local program will actually do with it.",
    meta: "Materials · 8 min read",
  },
  {
    slug: "soil-food-web",
    category: "science",
    title: "The soil food web, the short version",
    blurb:
      "Why the bacteria-to-fungi ratio matters more than NPK in regenerative systems, and what a microscope can and cannot tell you about it.",
    meta: "Soil & ecology · 18 min read",
  },
  {
    slug: "repair-cafe",
    category: "repair",
    title: "Starting a repair café that survives year two",
    blurb:
      "Insurance, tooling, volunteer burnout, and the social work that keeps a community repair space running long after the launch event.",
    meta: "Reuse · 16 min read",
  },
  {
    slug: "citizen-science-basics",
    category: "science",
    title: "Citizen science without the LARP",
    blurb:
      "How to design a local experiment that produces evidence, not vibes — and how to write it up so other communities can replicate it.",
    meta: "Methods primer · 12 min read",
  },
];

const CATEGORY_META: Record<Guide["category"], { label: string; Icon: typeof Sprout; tone: { color: string; bg: string } }> = {
  compost: { label: "Soil & compost", Icon: Sprout, tone: PATHWAY.compost },
  recycle: { label: "Materials", Icon: Recycle, tone: PATHWAY.recycle },
  reuse: { label: "Reuse", Icon: Lightbulb, tone: PATHWAY.reuse },
  science: { label: "Science & ecology", Icon: FlaskConical, tone: PATHWAY.science },
  repair: { label: "Repair", Icon: Wrench, tone: PATHWAY.reuse },
};

export function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>(FALLBACK_GUIDES);

  useEffect(() => {
    let cancelled = false;
    fetch(GUIDES_ENDPOINT, {
      headers: { Authorization: `Bearer ${GUIDES_ANON_KEY}` },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: ApiGuide[]) => {
        if (cancelled || !Array.isArray(data) || data.length === 0) return;
        setGuides(data.map(mapApiGuide));
      })
      .catch(() => {
        // keep fallback guides
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={bodyFont} className="text-[#211f1c]">
      {/* HERO */}
      <section className="border-b-[1.5px] border-[#211f1c] bg-[#f1ece1]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-6">
            Guides
          </p>
          <h1
            className="max-w-[20ch] leading-[0.98] tracking-tight"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Practical guides for imperfect systems.
          </h1>

          <p
            className="mt-8 max-w-[62ch] leading-[1.55] text-[#211f1c]/85"
            style={{ ...bodyFont, fontSize: "clamp(17px, 1.5vw, 21px)" }}
          >
            Plain-language explainers on waste, soil, food, ecology, and material recovery
            — written for households, schools, gardeners, mutual-aid groups, and small
            municipalities. We name what works, what doesn&rsquo;t, and what depends on where
            you live.
          </p>
        </div>
      </section>

      {/* THE WASTEFULL LENS — the four-part frame */}
      <section className="border-b-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-4">
            The Wastefull lens
          </p>
          <h2
            className="leading-[1.05] tracking-tight max-w-[22ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Every guide separates four questions.
          </h2>
          <p className="mt-6 max-w-[62ch] leading-[1.65] text-[#211f1c]/80" style={bodyFont}>
            A material can be technically recoverable and still fail in practice. We don&rsquo;t
            collapse those into one answer. Each guide tells you, separately:
          </p>

          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                k: "01",
                title: "Technical potential",
                body: "What is scientifically or industrially possible under ideal or specialized conditions.",
              },
              {
                k: "02",
                title: "Practical recoverability",
                body: "What actually tends to happen in ordinary community systems today.",
              },
              {
                k: "03",
                title: "Local acceptance",
                body: "What a specific municipal program, compost facility, recycler, or reuse network will accept.",
              },
              {
                k: "04",
                title: "Best available action",
                body: "What a household, school, nonprofit, small business, or community can reasonably do now.",
              },
            ].map((row) => (
              <li
                key={row.k}
                className="rounded-xl border-[1.5px] border-[#211f1c] bg-white p-5 shadow-[2px_2px_0px_0px_#211f1c]"
              >
                <div
                  className="text-[11px] tracking-[0.2em] text-[#211f1c]/45"
                  style={bodyFont}
                >
                  {row.k}
                </div>
                <div
                  className="mt-1 leading-tight"
                  style={{ ...display, fontWeight: 500, fontSize: "22px" }}
                >
                  {row.title}
                </div>
                <p className="mt-2 text-[14.5px] leading-6 text-[#211f1c]/75" style={bodyFont}>
                  {row.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GUIDE INDEX */}
      <section className="bg-[#faf7f2]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-3">
                Browse the guides
              </p>
              <h2
                className="leading-[1.05] tracking-tight max-w-[20ch]"
                style={{ ...display, fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)", color: LOGO_INK }}
              >
                Six of the latest. More on the way.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => {
              const cat = CATEGORY_META[g.category];
              const Icon = cat.Icon;
              return (
                <article
                  key={g.slug}
                  className={`p-6 rounded-xl bg-white border-[1.5px] border-[#211f1c] ${arcadeShadow} flex flex-col`}
                >
                  <div
                    className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full text-[11px] border-[1.5px] border-[#211f1c]"
                    style={{ background: cat.tone.bg, color: cat.tone.color }}
                  >
                    <Icon className="w-3 h-3" />
                    {cat.label}
                  </div>
                  <h3
                    className="mt-4 leading-snug"
                    style={{ ...display, fontWeight: 500, fontSize: "22px" }}
                  >
                    {g.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] leading-6 text-[#211f1c]/75 flex-1"
                    style={bodyFont}
                  >
                    {g.blurb}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#211f1c]/50">
                      {g.meta}
                    </span>
                    <a
                      href={g.permalink ?? `https://db.wastefull.org/guides/${g.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline"
                      style={{ ...buttonFont, color: LOGO_INK, fontSize: "14px" }}
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOURCING POLICY */}
      <section className="border-t-[1.5px] border-[#211f1c] bg-[#f6f1e6]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#211f1c]/60 mb-3">
              How we source
            </p>
            <h2
              className="leading-[1.05] tracking-tight"
              style={{ ...display, fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 38px)" }}
            >
              Evidence first. Caveats always.
            </h2>
          </div>
          <div
            className="md:col-span-7 md:col-start-6 leading-[1.7] text-[#211f1c]/85 space-y-4"
            style={{ ...bodyFont, fontSize: "16px" }}
          >
            <p>
              We prioritize government agencies, standards bodies, peer-reviewed
              literature, university extension programs, transparent NGOs, waste
              authorities, and technical industry groups.
            </p>
            <p>
              We deprioritize SEO blogs, vendor marketing, unsourced sustainability
              claims, outdated local rules presented as universal, and articles that repeat
              recycling myths without evidence.
            </p>
            <p>
              Where evidence is limited, mixed, local, or changing, we say so directly. Every
              guide cites its sources at the bottom and dates the last time we re-checked
              them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-[1.5px] border-[#211f1c]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p
            className="leading-[1.1] tracking-tight max-w-[26ch]"
            style={{ ...display, fontWeight: 500, fontSize: "clamp(26px, 3.4vw, 40px)" }}
          >
            Want a guide that doesn&rsquo;t exist yet? Tell us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ideas@wastefull.org"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] bg-white ${arcadeShadow}`}
              style={buttonFont}
            >
              <BookOpen className="w-4 h-4" /> Suggest a topic
            </a>
            <a
              href="/methods"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-md border-[1.5px] border-[#211f1c] ${arcadeShadow}`}
              style={{ ...buttonFont, background: PATHWAY.science.bg, color: PATHWAY.science.color }}
            >
              See the methods <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
