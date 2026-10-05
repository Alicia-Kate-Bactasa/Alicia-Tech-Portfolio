import { useState } from "react"
import { navigate } from "../router"
import { playKeySound } from "../utils/keySound"
import { assetUrl } from "../utils/asset"

const A = assetUrl("assets", false)
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

const tiles = [
  { c: "bg-[#ff3ba0]", r: "rounded-tl-[24px]" },
  { c: "bg-[#b7d9e1]", r: "" },
  { c: "bg-[#fdb7d4]", r: "" },
  { c: "bg-[#9a94bf]", r: "" },
  { c: "bg-[#ff3ba0]", r: "" },
  { c: "bg-[#b7d9e1]", r: "rounded-br-[24px]" },
]

const pillars = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web applications, responsive interfaces & modern frameworks",
    pillBg: "bg-[#a7d0db]/20",
    border: "border-[#a7d0db]/50",
    accent: "text-[#2d6270]",
  },
  {
    title: "Database Development",
    desc: "Relational database modeling, SQL, PostgreSQL & ORM architecture",
    pillBg: "bg-[#ffadce]/20",
    border: "border-[#ffadce]/50",
    accent: "text-[#d83577]",
  },
  {
    title: "Data Analytics",
    desc: "Data modeling, backend data analytics & structured insights",
    pillBg: "bg-[#857eb1]/20",
    border: "border-[#857eb1]/50",
    accent: "text-[#585186]",
  },
]

const coreTechnologies = [
  { name: "TypeScript", icon: `${DEV}/typescript/typescript-original.svg` },
  { name: "React", icon: `${DEV}/react/react-original.svg` },
  { name: "Next.js", icon: `${DEV}/nextjs/nextjs-original.svg` },
  { name: "PostgreSQL", icon: `${DEV}/postgresql/postgresql-original.svg` },
  { name: "Supabase", icon: `${DEV}/supabase/supabase-original.svg` },
  { name: ".NET", icon: `${DEV}/dotnetcore/dotnetcore-original.svg` },
  { name: "Tailwind CSS", icon: `${DEV}/tailwindcss/tailwindcss-original.svg` },
  { name: "Docker", icon: `${DEV}/docker/docker-original.svg` },
]

export default function HomeM() {
  const [bouncingIshie, setBouncingIshie] = useState<number | null>(null)

  const tapIshie = (index: number) => {
    playKeySound(index)
    setBouncingIshie(index)
    setTimeout(() => setBouncingIshie(null), 350)
  }

  return (
    <main className="relative mx-auto flex max-w-[900px] flex-col gap-[clamp(24px,6vw,40px)] overflow-hidden px-[clamp(16px,5vw,48px)] pb-[clamp(44px,10vw,72px)] pt-[clamp(20px,5vw,40px)]">
      {/* Top Role Row */}
      <div className="relative flex items-center justify-end">
        <p className="font-['Poppins:Light'] text-[clamp(20px,5.5vw,32px)] leading-[1.1] text-[rgba(8,0,255,0.61)]">
          full stack developer
        </p>
      </div>

      {/* Hero Character Grid */}
      <div className="relative">
        <div className="relative grid grid-cols-3 gap-[10px] sm:gap-[14px] rounded-[24px] border border-[#b7d9e1]/60 bg-white/95 p-[8px] sm:p-[10px] shadow-[0_6px_24px_rgba(39,171,211,0.08)]">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`relative aspect-[248/241] overflow-hidden rounded-[16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.04)] ${t.c} ${t.r} ${
                i === 1 || i === 4
                  ? "border border-[#27abd3]/40"
                  : "border border-black/[0.04]"
              }`}
            />
          ))}

          {/* Interactive Character Sprites */}
          <button
            type="button"
            onClick={() => tapIshie(0)}
            aria-label="Character Sprite 1"
            className={`pointer-events-auto absolute bottom-[8px] left-[3%] h-[74%] w-auto max-w-none cursor-pointer border-none bg-transparent p-0 transition-transform duration-200 sm:bottom-[10px] sm:h-[76%] ${
              bouncingIshie === 0
                ? "scale-110 -translate-y-2"
                : "hover:scale-105 active:scale-95"
            }`}
          >
            <img
              alt=""
              src={`${A}/c9785.png`}
              className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.14)]"
            />
          </button>

          <button
            type="button"
            onClick={() => tapIshie(1)}
            aria-label="Character Sprite 2"
            className={`pointer-events-auto absolute bottom-[8px] left-1/2 h-[70%] w-auto max-w-none -translate-x-1/2 cursor-pointer border-none bg-transparent p-0 transition-transform duration-200 sm:bottom-[10px] sm:h-[72%] ${
              bouncingIshie === 1
                ? "scale-110 -translate-y-2 -translate-x-1/2"
                : "hover:scale-105 active:scale-95"
            }`}
          >
            <img
              alt=""
              src={`${A}/a8100.png`}
              className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.14)]"
            />
          </button>

          <button
            type="button"
            onClick={() => tapIshie(2)}
            aria-label="Character Sprite 3"
            className={`pointer-events-auto absolute bottom-[8px] right-[3%] h-[74%] w-auto max-w-none cursor-pointer border-none bg-transparent p-0 transition-transform duration-200 sm:bottom-[10px] sm:h-[76%] ${
              bouncingIshie === 2
                ? "scale-110 -translate-y-2"
                : "hover:scale-105 active:scale-95"
            }`}
          >
            <img
              alt=""
              src={`${A}/9d327.png`}
              className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.14)]"
            />
          </button>
        </div>
      </div>

      {/* Hero Headline and Bio */}
      <div className="relative">
        <h1 className="font-['Poppins:Light'] font-normal not-italic text-[rgba(8,0,255,0.61)]">
          <span className="block text-[clamp(32px,11.5vw,92px)] leading-[1.12]">
            ALICIA KATE
          </span>
          <span className="block font-['Poppins:ExtraBold'] text-[clamp(40px,15vw,126px)] leading-[1.02]">
            BACTASA<span className="text-[1.15em] leading-[0]">.</span>
          </span>
        </h1>
        <p className="mt-[12px] max-w-[640px] font-['Poppins:Light'] text-[clamp(15px,4vw,18px)] leading-[1.65] text-[rgba(8,0,255,0.76)]">
          Third-year Information Technology student at the{" "}
          <span className="font-['Poppins:Medium'] text-[rgba(8,0,255,0.9)]">
            University of San Carlos
          </span>{" "}
          focused on building resilient backend architectures, full-stack
          systems, and tactile interactive web experiences.
        </p>
      </div>

      {/* Action Buttons - Same Blue as Headline with #fffef8 Text */}
      <div className="relative flex flex-wrap items-center gap-[8px]">
        <button
          type="button"
          onClick={() => {
            playKeySound(2)
            navigate("/projects")
          }}
          className="flex cursor-pointer items-center justify-center gap-[5px] whitespace-nowrap rounded-full bg-[rgba(8,0,255,0.72)] px-[15px] py-[8px] font-['Poppins:Medium'] text-[12.5px] text-[#fffef8] shadow-[0_2px_10px_rgba(8,0,255,0.18)] transition-all duration-150 hover:bg-[rgba(8,0,255,0.88)] active:translate-y-[1px]"
        >
          <span>Featured Projects</span>
          <span className="text-[13px] text-[#fffef8]">→</span>
        </button>

        <a
          href={assetUrl("bactasa-resume.pdf")}
          target="_blank"
          rel="noreferrer"
          onClick={() => playKeySound(1)}
          className="flex cursor-pointer items-center justify-center gap-[5px] whitespace-nowrap rounded-full bg-[rgba(8,0,255,0.72)] px-[15px] py-[8px] font-['Poppins:Medium'] text-[12.5px] text-[#fffef8] shadow-[0_2px_10px_rgba(8,0,255,0.18)] transition-all duration-150 hover:bg-[rgba(8,0,255,0.88)] active:translate-y-[1px]"
        >
          <span>View Resume</span>
        </a>

        <button
          type="button"
          onClick={() => {
            playKeySound(4)
            navigate("/work")
          }}
          className="flex cursor-pointer items-center justify-center gap-[5px] whitespace-nowrap rounded-full bg-[rgba(8,0,255,0.72)] px-[15px] py-[8px] font-['Poppins:Medium'] text-[12.5px] text-[#fffef8] shadow-[0_2px_10px_rgba(8,0,255,0.18)] transition-all duration-150 hover:bg-[rgba(8,0,255,0.88)] active:translate-y-[1px]"
        >
          <span>Contact</span>
        </button>
      </div>

      {/* Cute Soft Blob Pillars (Minimalist filler cards) */}
      <div className="relative grid grid-cols-1 gap-[12px] sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`relative overflow-hidden rounded-[20px] border ${p.border} ${p.pillBg} p-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]`}
          >
            <h3
              className={`font-['Poppins:SemiBold'] text-[16px] leading-tight ${p.accent}`}
            >
              {p.title}
            </h3>
            <p className="mt-[6px] font-['Poppins:Light'] text-[13px] leading-relaxed text-[rgba(8,0,255,0.72)]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Core Technologies with Bordered Dashline and Logos */}
      <div className="relative rounded-[20px] border-2 border-dashed border-[rgba(8,0,255,0.35)] bg-white/60 p-[16px]">
        <div className="mb-[12px] flex items-center justify-between">
          <h3 className="font-['Poppins:SemiBold'] text-[15px] tracking-[0.5px] text-[rgba(8,0,255,0.85)]">
            Core Technologies
          </h3>
          <button
            type="button"
            onClick={() => {
              playKeySound(3)
              navigate("/tech")
            }}
            className="cursor-pointer font-['Poppins:Medium'] text-[12px] text-[rgba(8,0,255,0.7)] hover:underline"
          >
            All Tech Stack →
          </button>
        </div>
        <div className="flex flex-wrap gap-[8px]">
          {coreTechnologies.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-[7px] rounded-full border border-dashed border-[rgba(8,0,255,0.3)] bg-white px-[12px] py-[6px] font-['Poppins:Regular'] text-[13px] text-[rgba(8,0,255,0.85)] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <img
                src={t.icon}
                alt={t.name}
                className="size-[18px] object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
