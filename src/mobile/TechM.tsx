import { useState } from "react";

const A = "/assets";
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const icon = (slug: string, v = "original") => `${DEV}/${slug}/${slug}-${v}.svg`;
const MIN = 350;
const MAX = 712;
const blue = "rgba(8,0,255,0.6)";

type Item = [string, string | null];

const languages: Item[] = [["TypeScript", icon("typescript")], ["JavaScript", icon("javascript")], ["C#", icon("csharp")], ["C", icon("c")], ["C++", icon("cplusplus")], ["Python", icon("python")], ["PHP", icon("php")], ["SQL", icon("azuresqldatabase")], ["HTML5", icon("html5")], ["CSS3", icon("css3")], ["Bash", icon("bash")]];
const frameworks: Item[] = [["React", icon("react")], ["Next.js", icon("nextjs")], ["Vue.js", icon("vuejs")], ["React Native", icon("react")], ["Vite", icon("vitejs")], ["Tailwind CSS", icon("tailwindcss")], ["shadcn/ui", null], ["Docker", icon("docker")], ["Expo", null], ["Mapbox", null], ["Recharts", null], ["Git", icon("git")], ["GitHub", icon("github")], ["Figma", icon("figma")]];
const backend: Item[] = [["PostgreSQL", icon("postgresql")], ["Supabase", icon("supabase")], ["Node.js", icon("nodejs")], ["Express.js", icon("express")], [".NET / EF Core", icon("dotnetcore")], ["Prisma ORM", icon("prisma")], ["REST APIs", null], ["MySQL", icon("mysql")], ["MongoDB", icon("mongodb")]];
const ai: Item[] = [["Claude Code", "https://www.google.com/s2/favicons?sz=64&domain=claude.ai"], ["GitHub Copilot", "https://www.google.com/s2/favicons?sz=64&domain=github.com"], ["Codex", "https://www.google.com/s2/favicons?sz=64&domain=openai.com"]];

function Group({ title, note, items, glyph, style }: { title: string; note?: string; items: Item[]; glyph: string; style?: React.CSSProperties }) {
  return (
    <section style={style} className="min-w-0 self-start transition-[width] duration-150">
      <div className="mb-[8px] flex items-center gap-[10px] pl-[6px]">
        <img alt="" src={glyph} className="h-[24px] w-[28px] object-contain" />
        <h2 className="font-['Poppins:Regular'] text-[clamp(17px,4.8vw,20px)] font-normal tracking-[1px]" style={{ color: blue }}>{title}</h2>
      </div>
      <div className="relative p-[22px] sm:p-[30px]">
        <div className="pointer-events-none absolute inset-[12px] border-2 border-dashed" style={{ borderColor: blue }} />
        {["left-[4px] top-[4px]", "right-[4px] top-[4px]", "left-[4px] bottom-[4px]", "right-[4px] bottom-[4px]"].map((pos) => (
          <span key={pos} className={`pointer-events-none absolute size-[20px] border-4 ${pos}`} style={{ background: blue, borderColor: blue }} />
        ))}
        <div className="relative px-[6px] py-[6px]">
          {note && <p className="mb-[12px] font-['Poppins:Regular'] text-[14px] tracking-[0.5px]" style={{ color: blue }}>{note}</p>}
          <ul className="flex flex-wrap content-start gap-[8px] sm:gap-[10px]">
            {items.map(([t, src]) => (
              <li key={t} className="flex items-center gap-[8px] rounded-full border border-dashed bg-white px-[12px] py-[4px] font-['Poppins:Regular'] text-[clamp(14px,4vw,18px)] tracking-[0.5px] text-[rgba(8,0,255,0.75)] sm:px-[16px] sm:py-[5px]" style={{ borderColor: blue }}>
                {src && <img src={src} alt="" className="size-[22px]" onError={(e) => (e.currentTarget.style.display = "none")} />}
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function TechM() {
  const [level, setLevel] = useState(MAX);
  const t = (level - MIN) / (MAX - MIN);
  // below sm columns stack and the slider scales the width of the left-hand containers; from sm up it splits them side by side
  const leftW = `${Math.round(70 + t * 30)}%`;
  const splitW = `${(33 + t * 34).toFixed(1)}%`;

  return (
    <main className="mx-auto max-w-[900px] px-[clamp(10px,4vw,40px)] pb-[48px] pt-[clamp(24px,7vw,48px)]">
      <h1 className="mb-[clamp(20px,6vw,40px)] origin-left rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(38px,12vw,72px)] font-normal leading-[1.1] tracking-[0.05em]" style={{ color: blue }}>My Tech Stack</h1>

      <div className="flex flex-col gap-[20px] sm:flex-row sm:items-start">
        <div className="flex min-w-0 flex-col gap-[20px] max-sm:[width:var(--lw)] sm:[width:var(--sw)]" style={{ "--lw": leftW, "--sw": splitW } as React.CSSProperties}>
          <Group title="Programming Languages" note="Languages and core syntax used across my software projects." items={languages} glyph={`${A}/e387b.svg`} style={{ width: "100%" }} />
          <Group title="Frameworks & Tools" note="Frontend libraries, mobile frameworks, and developer tooling." items={frameworks} glyph={`${A}/4b7af.svg`} style={{ width: "100%" }} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[20px]">
          <Group title="Data & Backend" note="Relational databases, ORMs, and backend runtime environments." items={backend} glyph={`${A}/f0f03.svg`} />
          <Group title="AI Workflow" items={ai} glyph={`${A}/80746.svg`} />
        </div>
      </div>

      <div className="mt-[28px] rounded-[25px] bg-[#ffd000] px-[18px] pb-[14px] pt-[10px]">
        <p className="mb-[6px] font-['Poppins:Regular'] text-[clamp(16px,4.6vw,20px)] tracking-[1px]" style={{ color: blue }}>Adjust me!</p>
        <div className="relative flex h-[28px] items-center">
          <div className="absolute inset-x-0 h-[4px] rounded-full bg-[rgba(76,50,249,0.84)] opacity-20" />
          <div className="relative h-[4px] rounded-full bg-[rgba(76,50,249,0.84)]" style={{ width: `${t * 100}%` }}>
            <div className="absolute right-[-6px] top-1/2 flex size-[12px] -translate-y-1/2 items-center justify-center">
              <img alt="" src={`${A}/9b7f6.svg`} className="absolute inset-[-25%_-42%_-58%_-42%] h-[183%] w-[184%] max-w-none" />
              <span className="absolute bottom-[15px] right-[-7px] flex h-[24px] w-[26px] items-center justify-center font-['Inter:Regular'] text-[12px] text-white">
                <img alt="" src={`${A}/13fd3.svg`} className="absolute inset-0 h-full w-full" />
                <span className="relative">↔</span>
              </span>
            </div>
          </div>
          <input type="range" min={MIN} max={MAX} step={1} value={level} onChange={(e) => setLevel(Number(e.target.value))} aria-label="Adjust width" className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" />
        </div>
      </div>
    </main>
  );
}
