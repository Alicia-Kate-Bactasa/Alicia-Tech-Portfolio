import { useState } from "react";

const A = "/assets";
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const icon = (slug: string, v = "original") => `${DEV}/${slug}/${slug}-${v}.svg`;
const blue = "rgba(8,0,255,0.6)";

type Item = [string, string | null];

const languages: Item[] = [
  ["TypeScript", icon("typescript")],
  ["JavaScript", icon("javascript")],
  ["C#", icon("csharp")],
  ["C", icon("c")],
  ["C++", icon("cplusplus")],
  ["Python", icon("python")],
  ["PHP", icon("php")],
  ["SQL", icon("azuresqldatabase")],
  ["HTML5", icon("html5")],
  ["CSS3", icon("css3")],
  ["Bash", icon("bash")],
];

const frameworks: Item[] = [
  ["React", icon("react")],
  ["Next.js", icon("nextjs")],
  ["Vue.js", icon("vuejs")],
  ["React Native", icon("react")],
  ["Vite", icon("vitejs")],
  ["Tailwind CSS", icon("tailwindcss")],
  ["shadcn/ui", null],
  ["Docker", icon("docker")],
  ["Expo", null],
  ["Mapbox", null],
  ["Recharts", null],
  ["Git", icon("git")],
  ["GitHub", icon("github")],
  ["Figma", icon("figma")],
];

const backend: Item[] = [
  ["PostgreSQL", icon("postgresql")],
  ["Supabase", icon("supabase")],
  ["Node.js", icon("nodejs")],
  ["Express.js", icon("express")],
  [".NET / EF Core", icon("dotnetcore")],
  ["Prisma ORM", icon("prisma")],
  ["REST APIs", null],
  ["MySQL", icon("mysql")],
  ["MongoDB", icon("mongodb")],
];

const ai: Item[] = [
  ["Claude Code", "https://www.google.com/s2/favicons?sz=64&domain=claude.ai"],
  ["GitHub Copilot", "https://www.google.com/s2/favicons?sz=64&domain=github.com"],
  ["Codex", "https://www.google.com/s2/favicons?sz=64&domain=openai.com"],
];

const TOTAL = languages.length + frameworks.length + backend.length + ai.length;

function Group({
  title,
  note,
  items,
  glyph,
  startIndex,
  activeCount,
}: {
  title: string;
  note?: string;
  items: Item[];
  glyph: string;
  startIndex: number;
  activeCount: number;
}) {
  return (
    <section className="w-full">
      <div className="mb-[8px] flex items-center gap-[10px] pl-[6px]">
        <img alt="" src={glyph} className="h-[24px] w-[28px] object-contain" />
        <h2 className="font-['Poppins:Regular'] text-[clamp(17px,4.8vw,20px)] font-normal tracking-[1px]" style={{ color: blue }}>
          {title}
        </h2>
      </div>
      <div className="relative p-[18px] sm:p-[28px]">
        <div className="pointer-events-none absolute inset-[10px] border-2 border-dashed" style={{ borderColor: blue }} />
        {["left-[4px] top-[4px]", "right-[4px] top-[4px]", "left-[4px] bottom-[4px]", "right-[4px] bottom-[4px]"].map((pos) => (
          <span key={pos} className={`pointer-events-none absolute size-[18px] border-4 ${pos}`} style={{ background: blue, borderColor: blue }} />
        ))}
        <div className="relative px-[4px] py-[4px]">
          {note && (
            <p className="mb-[12px] font-['Poppins:Regular'] text-[13.5px] tracking-[0.5px]" style={{ color: blue }}>
              {note}
            </p>
          )}
          <ul className="flex flex-wrap content-start gap-[8px] sm:gap-[10px]">
            {items.map(([t, src], i) => {
              const globalIdx = startIndex + i;
              const isFilled = globalIdx < activeCount;

              return (
                <li
                  key={t}
                  className={`flex items-center gap-[8px] rounded-full px-[12px] py-[5px] font-['Poppins:Regular'] text-[clamp(13px,3.8vw,16px)] tracking-[0.5px] transition-all duration-150 sm:px-[16px] sm:py-[6px] ${
                    isFilled
                      ? "border border-solid border-[rgba(8,0,255,0.75)] bg-[rgba(8,0,255,0.72)] text-white shadow-[0_2px_8px_rgba(8,0,255,0.22)]"
                      : "border border-dashed border-[rgba(8,0,255,0.4)] bg-white text-[rgba(8,0,255,0.75)]"
                  }`}
                >
                  {src && (
                    <img
                      src={src}
                      alt=""
                      className="size-[20px] shrink-0 object-contain"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                  <span>{t}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function TechM() {
  // Start with all technologies filled up to Codex by default
  const [level, setLevel] = useState(TOTAL);

  return (
    <main className="relative mx-auto max-w-[900px] overflow-x-clip px-[clamp(12px,4vw,40px)] pb-[48px] pt-[clamp(20px,6vw,44px)]">
      <h1 className="mb-[clamp(18px,5vw,36px)] origin-left rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(38px,12vw,72px)] font-normal leading-[1.1] tracking-[0.05em]" style={{ color: blue }}>
        My Tech Stack
      </h1>

      <div className="flex flex-col gap-[20px]">
        <Group
          title="Programming Languages"
          note="Languages and core syntax used across my software projects."
          items={languages}
          glyph={`${A}/e387b.svg`}
          startIndex={0}
          activeCount={level}
        />
        <Group
          title="Frameworks & Tools"
          note="Frontend libraries, mobile frameworks, and developer tooling."
          items={frameworks}
          glyph={`${A}/4b7af.svg`}
          startIndex={languages.length}
          activeCount={level}
        />
        <Group
          title="Data & Backend"
          note="Relational databases, ORMs, and backend runtime environments."
          items={backend}
          glyph={`${A}/f0f03.svg`}
          startIndex={languages.length + frameworks.length}
          activeCount={level}
        />
        <Group
          title="AI Workflow"
          items={ai}
          glyph={`${A}/80746.svg`}
          startIndex={languages.length + frameworks.length + backend.length}
          activeCount={level}
        />
      </div>

      {/* Adjust Me Slider - Fills Each Technology Container Sequentially */}
      <div className="mt-[28px] rounded-[25px] bg-[#ffd000] px-[18px] pb-[14px] pt-[10px]">
        <div className="mb-[6px] flex items-center justify-between">
          <p className="font-['Poppins:Regular'] text-[clamp(16px,4.6vw,20px)] tracking-[1px]" style={{ color: blue }}>
            Adjust me!
          </p>
          <span className="font-['Poppins:Medium'] text-[13px] text-[rgba(8,0,255,0.85)]">
            {level} / {TOTAL}
          </span>
        </div>
        <div className="relative flex h-[28px] items-center">
          <div className="absolute inset-x-0 h-[4px] rounded-full bg-[rgba(76,50,249,0.84)] opacity-20" />
          <div
            className="relative h-[4px] rounded-full bg-[rgba(76,50,249,0.84)] transition-all duration-75"
            style={{ width: `${(level / TOTAL) * 100}%` }}
          >
            <div className="absolute right-[-6px] top-1/2 flex size-[12px] -translate-y-1/2 items-center justify-center">
              <img alt="" src={`${A}/9b7f6.svg`} className="absolute inset-[-25%_-42%_-58%_-42%] h-[183%] w-[184%] max-w-none" />
              <span className="absolute bottom-[15px] right-[-7px] flex h-[24px] w-[26px] items-center justify-center font-['Inter:Regular'] text-[12px] text-white">
                <img alt="" src={`${A}/13fd3.svg`} className="absolute inset-0 h-full w-full" />
                <span className="relative">↔</span>
              </span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={TOTAL}
            step={1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            aria-label="Adjust active technologies"
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>
    </main>
  );
}
