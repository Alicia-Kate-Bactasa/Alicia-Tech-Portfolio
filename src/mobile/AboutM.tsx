import { useState } from "react";
import { bevelWin } from "./win";
import { CloseGlyph, PushButton, TitleBtn } from "./WinButton";

const A = "/assets";
const hv = "transition-colors duration-300 hover:text-[#d4d422]";

const offered = [
  "Database Development & Schema Design",
  "Full-stack Web & Mobile Applications",
  "UI/UX Design & Frontend Integration",
  "Data Analytics & Backend Architecture",
];

const coursework = [
  "Data Structures and Algorithms",
  "Object Oriented Programming",
  "Linux Operating System",
  "Information Management",
  "Information Assurance and Security",
  "Systems Analysis and Design",
  "Web Development",
  "Network Security",
];

const quickInfo = [
  { label: "Institution", val: "University of San Carlos" },
  { label: "Program", val: "BS Information Technology (Year 3)" },
  { label: "Location", val: "Cebu City, Philippines" },
  { label: "Focus", val: "Full Stack Development, Database Development, Data Analytics" },
];

export default function AboutM() {
  const [open, setOpen] = useState(false);
  const openResume = () => setOpen(true);

  return (
    <main className="relative mx-auto max-w-[900px] overflow-x-clip pb-[40px]">
      <section className="relative px-[clamp(16px,5vw,48px)] pb-[28px] pt-[clamp(20px,5vw,40px)]">
        <h1 className="inline-block origin-left rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(44px,14vw,84px)] font-normal leading-[1] tracking-[0.05em] text-[rgba(8,0,255,0.6)] transition-all duration-300 hover:rotate-6 hover:scale-110 hover:brightness-150 hover:hue-rotate-[10deg]">
          About Me!
        </h1>

        <div className="relative mx-auto mt-[8px] aspect-[4/4.6] w-[min(100%,420px)] transition-transform duration-300 hover:scale-105">
          <img alt="" src={`${A}/8ca28.svg`} className="absolute inset-[-8%_-14%_-6%_-14%] h-[114%] w-[128%] max-w-none" />
          <img alt="" src={`${A}/04cfe.png`} className="absolute inset-0 h-full w-full object-contain object-bottom" />
          <img alt="" src={`${A}/895c5.png`} className="absolute inset-0 h-full w-full object-contain object-bottom" />
        </div>

        <div className="mt-[20px] flex flex-col gap-[14px] font-['Inter:Regular'] text-[rgba(8,0,255,0.75)] tracking-[0.05em]">
          <p className="text-justify text-[16px] font-['Poppins:Light'] leading-[1.65] transition-all duration-300 hover:scale-[1.01] hover:text-[#d4d422]">
            Hello! I am Alicia Kate Bactasa and I’m a third-year <b className="font-['Poppins:Medium'] font-normal">BS Information Technology</b> student at the{" "}
            <b className="font-['Poppins:Medium'] font-normal">University of San Carlos</b> with a technical focus on{" "}
            <b className="font-['Poppins:Medium'] font-normal">back-end engineering, database development, and data analytics</b>.
          </p>
          <p className="text-justify text-[16px] font-['Poppins:Light'] leading-[1.65] transition-all duration-300 hover:scale-[1.01] hover:text-[#d4d422]">
            I enjoy turning ideas into functional, well-structured applications while continuously exploring new technologies. Most of my experience comes from{" "}
            <b className="font-['Poppins:Medium'] font-normal">hands-on projects, collaborative development, and building full-stack systems from the ground up.</b>
          </p>
        </div>

        {/* Minimalist Facts / Information Card */}
        <div className="mt-[20px] grid grid-cols-1 gap-[8px] rounded-[20px] border border-[#a7d0db]/50 bg-white/70 p-[14px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:grid-cols-2">
          {quickInfo.map((item) => (
            <div key={item.label} className="rounded-[12px] bg-white/80 p-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <span className="font-['Poppins:Medium'] text-[11px] uppercase tracking-[0.5px] text-[rgba(8,0,255,0.55)]">
                {item.label}
              </span>
              <p className="font-['Poppins:SemiBold'] text-[13.5px] leading-snug text-[rgba(8,0,255,0.85)]">
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Offer Section - Centered, No Pink, Tape on Top */}
      <section className="flex flex-col items-center px-[clamp(16px,5vw,48px)] pb-[36px]">
        <div className="group relative mb-[18px] w-fit transition-all duration-300 hover:scale-105">
          <div className="-rotate-2 bg-white px-[16px] py-[8px] shadow-sm transition-transform duration-300 group-hover:rotate-[2deg]">
            <h2 className="font-['Poppins:Regular'] text-[clamp(28px,8.6vw,56px)] font-normal leading-[1.1] tracking-[0.05em] text-[rgba(8,0,255,0.75)] transition-colors group-hover:text-[#d4d422]">
              What I Offer
            </h2>
          </div>
          {/* Tape on top with z-20 */}
          <img
            alt=""
            src={`${A}/b1042.png`}
            className="pointer-events-none absolute -right-[22px] -top-[12px] z-20 w-[72px] rotate-[36deg] drop-shadow-sm"
          />
        </div>

        <div className="flex w-full justify-center">
          <ul className="flex w-fit max-w-full flex-col gap-[8px] font-['Poppins:Light'] text-[clamp(15px,4.4vw,19px)] tracking-[0.05em] text-[rgba(8,0,255,0.75)]">
            {offered.map((o) => (
              <li key={o} className={`${hv} flex items-center gap-[8px]`}>
                <span className="font-['Poppins:ExtraBold'] text-[rgba(8,0,255,0.75)]">|</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Relevant Coursework Section - Centered, No Pink, Tape on Top */}
      <section className="flex flex-col items-center bg-[#f7f02e] px-[clamp(16px,5vw,48px)] py-[36px] transition-colors duration-500 hover:bg-[#e6de10]">
        <div className="group relative mb-[20px] w-fit transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-lg">
          <div className="rotate-[3deg] -skew-x-[1.5deg] bg-white px-[16px] py-[10px]">
            <h2 className="font-['Poppins:Regular'] text-[clamp(28px,8.6vw,56px)] font-normal leading-[1.1] tracking-[0.05em] text-[rgba(8,0,255,0.75)] transition-colors group-hover:text-[#d4d422]">
              Relevant Coursework
            </h2>
          </div>
          {/* Tape on top with z-20 */}
          <img
            alt=""
            src={`${A}/b1042.png`}
            className="pointer-events-none absolute -top-[14px] right-[10px] z-20 w-[80px] rotate-[2.5deg] drop-shadow-sm"
          />
        </div>

        <div className="flex w-full justify-center">
          <ul className="flex w-fit max-w-full flex-col gap-[8px] font-['Poppins:Regular'] text-[clamp(15px,4.4vw,18px)] tracking-[0.05em] text-[rgba(8,0,255,0.75)]">
            {coursework.map((c) => (
              <li key={c} className={`${hv} flex items-center gap-[8px]`}>
                <span className="font-['Poppins:Bold'] text-[rgba(8,0,255,0.75)]">|</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Resume Action Card */}
        <div className="mt-[36px] flex w-full max-w-[500px] flex-wrap items-center justify-between gap-[14px] rounded-[18px] bg-white p-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-[12px]">
            <span className="relative block h-[68px] w-[60px] shrink-0">
              <img alt="" src={`${A}/bef8a.svg`} className="absolute inset-y-0 right-0 h-full w-[85.7%]" />
              <span className="absolute bottom-[10px] left-0 rounded-[4px] bg-[#ff1607] px-[5px] py-[1px] font-['Inter:Bold'] text-[11px] font-bold uppercase leading-[normal] tracking-[-0.26px] text-white">
                pdf
              </span>
            </span>
            <div>
              <p className="font-['Poppins:Bold'] text-[16px] text-[rgba(8,0,255,0.85)]">Alicia's Resume</p>
              <p className="font-['Poppins:Regular'] text-[13px] text-gray-600">Updated Oct 2026 • 115 KB</p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <button
              type="button"
              onClick={openResume}
              className="cursor-pointer rounded-full bg-[#02007f] px-[16px] py-[9px] font-['Poppins:Medium'] text-[13.5px] text-white shadow-[0_2px_8px_rgba(2,0,127,0.2)] transition-all hover:bg-[#0800ff] active:translate-y-[1px]"
            >
              Preview
            </button>
            <a
              href="/bactasa-resume.pdf"
              download="bactasa-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-full border border-black/20 bg-white px-[16px] py-[9px] font-['Poppins:Medium'] text-[13.5px] text-black shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:bg-gray-50 active:translate-y-[1px]"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[10px] backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-[600px] bg-[#c3c3c3] shadow-[3px_3px_0px_0px_#000000]" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Resume.pdf">
            <div className={`pointer-events-none absolute inset-0 ${bevelWin}`} />
            <div className="relative mx-[4px] mt-[4px] flex items-center justify-between bg-[#02007f] px-[6px] py-[4px]">
              <p className="ml-[4px] font-['Pixelify_Sans:Regular'] text-[20px] text-white">bactasa-resume.pdf</p>
              <TitleBtn label="Close" onClick={() => setOpen(false)}>
                <CloseGlyph />
              </TitleBtn>
            </div>
            <div className="relative mt-[4px] flex flex-col items-center gap-[14px] p-[12px] sm:p-[16px]">
              <div className="h-[min(60vh,440px)] w-full overflow-hidden border border-black bg-white p-[4px] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                <iframe src="/bactasa-resume.pdf#view=FitH" className="h-full w-full border-none" title="Resume Preview" />
              </div>
              <div className="flex gap-[10px]">
                <PushButton onClick={() => window.open("/bactasa-resume.pdf", "_blank")}>Open in New Tab</PushButton>
                <PushButton onClick={() => setOpen(false)}>Close</PushButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
