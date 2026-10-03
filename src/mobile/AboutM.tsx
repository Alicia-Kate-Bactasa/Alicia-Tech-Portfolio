import { useState } from "react";
import { bevelWin } from "./win";
import { CloseGlyph, PushButton, TitleBtn } from "./WinButton";

const A = "/assets";
const hv = "transition-colors duration-300 hover:text-[#d4d422]";

const offered = ["Database Development", "Full-stack web & mobile applications", "UI/UX design and functional testing", "Data analytics & backend architecture"];
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

export default function AboutM() {
  const [open, setOpen] = useState(false);
  const openResume = () => setOpen(true);

  return (
    <main className="relative mx-auto max-w-[900px] overflow-x-clip">
      <section className="relative px-[clamp(16px,5vw,48px)] pb-[32px] pt-[clamp(24px,6vw,48px)]">
        <h1 className="inline-block origin-left rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(44px,14vw,84px)] font-normal leading-[1] tracking-[0.05em] text-[rgba(8,0,255,0.6)] transition-all duration-300 hover:rotate-6 hover:scale-110 hover:brightness-150 hover:hue-rotate-[10deg]">
          About Me!
        </h1>

        <div className="relative mx-auto mt-[8px] aspect-[4/4.6] w-[min(100%,420px)] transition-transform duration-300 hover:scale-105">
          <img alt="" src={`${A}/8ca28.svg`} className="absolute inset-[-8%_-14%_-6%_-14%] h-[114%] w-[128%] max-w-none" />
          <img alt="" src={`${A}/04cfe.png`} className="absolute inset-0 h-full w-full object-contain object-bottom" />
          <img alt="" src={`${A}/895c5.png`} className="absolute inset-0 h-full w-full object-contain object-bottom" />
        </div>

        <div className="mt-[20px] flex flex-col gap-[16px] font-['Inter:Regular'] text-[rgba(8,0,255,0.75)] tracking-[0.05em]">
          <p className={`text-justify text-[16px] leading-[1.6] font-['Poppins:Light'] transition-all duration-300 hover:scale-[1.02] hover:text-[#d4d422]`}>
            Hello! I am Alicia Kate Bactasa and I’m a third-year <b className="font-['Poppins:Medium'] font-normal">BS Information Technology</b> student at the{" "}
            <b className="font-['Poppins:Medium'] font-normal">University of San Carlos</b> with a technical focus on{" "}
            <b className="font-['Poppins:Medium'] font-normal">back-end engineering, database development, and data analytics</b>.
          </p>
          <p className="text-justify text-[16px] font-['Poppins:Light'] leading-[1.6] transition-all duration-300 hover:scale-[1.02] hover:text-[#d4d422]">
            I enjoy turning ideas into functional, well-structured applications while continuously exploring new technologies. Most of my experience comes from{" "}
            <b className="font-['Poppins:Medium'] font-normal">hands-on projects, collaborative development, and building full-stack systems from the ground up.</b>
          </p>
        </div>
      </section>

      <section className="px-[clamp(16px,5vw,48px)] pb-[32px]">
        <div className="group relative mb-[14px] w-fit transition-all duration-300 hover:scale-105">
          <img alt="" src={`${A}/b1042.png`} className="absolute -right-[22px] -top-[12px] w-[72px] rotate-[36deg]" />
          <div className="-rotate-2 bg-white px-[14px] py-[8px] shadow-sm transition-transform duration-300 group-hover:rotate-[2deg]">
            <h2 className="font-['Poppins:Regular'] text-[clamp(28px,8.6vw,56px)] font-normal leading-[1.1] tracking-[0.05em] text-[rgba(8,0,255,0.75)] transition-colors group-hover:text-[#d4d422]">What I Offer</h2>
          </div>
        </div>
        <ul className="flex flex-col gap-[8px] font-['Poppins:Light'] text-[clamp(16px,4.6vw,20px)] tracking-[0.05em] text-[rgba(8,0,255,0.75)]">
          {offered.map((o) => (
            <li key={o} className={hv}>
              <span className="font-['Poppins:ExtraBold']">|</span> {o}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#f7f02e] px-[clamp(16px,5vw,48px)] py-[36px] transition-colors duration-500 hover:bg-[#e6de10]">
        <div className="group relative mb-[18px] w-fit transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-lg">
          <img alt="" src={`${A}/b1042.png`} className="absolute -top-[14px] right-[10px] w-[80px] rotate-[2.5deg]" />
          <div className="rotate-[3deg] -skew-x-[1.5deg] bg-white px-[14px] py-[10px]">
            <h2 className="font-['Poppins:Regular'] text-[clamp(28px,8.6vw,56px)] font-normal leading-[1.1] tracking-[0.05em] text-[rgba(8,0,255,0.75)] transition-colors group-hover:text-[#d4d422]">Relevant Coursework</h2>
          </div>
        </div>
        <ul className="flex flex-col gap-[6px] font-['Poppins:Regular'] text-[clamp(16px,4.6vw,20px)] tracking-[0.05em] text-[rgba(8,0,255,0.75)]">
          {coursework.map((c) => (
            <li key={c} className={hv}>
              <span className="font-['Poppins:Bold']">|</span> {c}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openResume}
          className="group mt-[32px] flex cursor-pointer items-center gap-[14px] text-left"
        >
          <span className="relative block h-[86px] w-[76px] shrink-0 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
            <img alt="" src={`${A}/bef8a.svg`} className="absolute inset-y-0 right-0 h-full w-[85.7%]" />
            <span className="absolute bottom-[15px] left-0 rounded-[4px] bg-[#ff1607] px-[5px] py-[2px] font-['Inter:Bold'] text-[13px] font-bold uppercase leading-[normal] tracking-[-0.26px] text-white">pdf</span>
          </span>
          <span className="font-['Poppins:Medium'] text-[16px] tracking-[0.05em] text-white transition-colors duration-300 group-hover:text-[#ff1607]">View Alicia’s Resume</span>
          <img alt="" src={`${A}/274ce.svg`} className="w-[26px] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
        </button>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-[10px]" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-[600px] bg-[#c3c3c3] shadow-[2px_2px_0px_0px_#000000]" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Resume.pdf">
            <div className={`pointer-events-none absolute inset-0 ${bevelWin}`} />
            <div className="relative mx-[4px] mt-[4px] flex items-center justify-between bg-[#02007f] px-[4px] py-[3px]">
              <p className="ml-[4px] font-['Pixelify_Sans:Regular'] text-[22px] text-white">Resume.pdf</p>
              <TitleBtn label="Close" onClick={() => setOpen(false)}>
                <CloseGlyph />
              </TitleBtn>
            </div>
            <div className="relative mt-[4px] flex flex-col items-center gap-[14px] p-[12px] sm:p-[16px]">
              <div className="h-[min(60vh,420px)] w-full overflow-hidden border border-black bg-white p-[6px] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]">
                <iframe src="/resume.pdf#view=FitH" className="h-full w-full border-none" title="Resume Preview" />
              </div>
              <PushButton onClick={() => window.open("/resume.pdf", "_blank")}>Download Resume</PushButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
