import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../pages/Projects";
import { bevel, bevelWin, sunken } from "./win";
import { CloseGlyph, MinGlyph, PushButton, TitleBtn } from "./WinButton";

const A = "/assets";
const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const icons: Record<string, string> = { "Next.js": "nextjs/nextjs-original", "TypeScript": "typescript/typescript-original", "Tailwind CSS": "tailwindcss/tailwindcss-original", "Node.js": "nodejs/nodejs-original", "PostgreSQL": "postgresql/postgresql-original", "React": "react/react-original", "Vite": "vitejs/vitejs-original", "C#": "csharp/csharp-original", "Vue.js": "vuejs/vuejs-original", "Express.js": "express/express-original", "React Native": "react/react-original", "Docker": "docker/docker-original", "Prisma ORM": "prisma/prisma-original", "Supabase": "supabase/supabase-original", "ASP.NET Core Web API": "dotnetcore/dotnetcore-original", "Entity Framework Core": "dotnetcore/dotnetcore-original", "Vue Router": "vuejs/vuejs-original" };

const font = "font-['Pixelify_Sans:Regular']";
const anim = (dir: number) => ({ animation: `${dir > 0 ? "slideNext" : "slidePrev"} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards` });

function DesktopItem({ label, icon, onClick }: { label: string; icon: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex w-[96px] cursor-pointer flex-col items-center gap-[8px] text-center">
      <img alt="" src={icon} className="size-[56px] [image-rendering:pixelated]" />
      <span className={`${font} text-[18px] leading-[1.1] text-white`}>{label}</span>
    </button>
  );
}

export default function ProjectsM() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [open, setOpen] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const openRef = useRef(open);
  const alertOpenRef = useRef(alertOpen);
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    alertOpenRef.current = alertOpen;
  }, [alertOpen]);

  const triggerVibrate = useCallback(() => {
    if (openRef.current) {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {}
      }
      if (sectionRef.current) {
        sectionRef.current.classList.remove("animate-window-vibrate");
        void sectionRef.current.offsetWidth;
        sectionRef.current.classList.add("animate-window-vibrate");
      }
    } else {
      setOpen(true);
    }
  }, []);

  const triggerFolderVibrate = useCallback(() => {
    if (alertOpenRef.current) {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {}
      }
      if (alertRef.current) {
        alertRef.current.classList.remove("animate-window-vibrate");
        void alertRef.current.offsetWidth;
        alertRef.current.classList.add("animate-window-vibrate");
      }
    } else {
      setAlertOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleVibrateEvent = () => {
      triggerVibrate();
    };
    window.addEventListener("vibrate-myprojects", handleVibrateEvent);
    return () => window.removeEventListener("vibrate-myprojects", handleVibrateEvent);
  }, [triggerVibrate]);

  const p = projects[idx];
  const n = projects.length;
  const step = (d: number) => {
    setDir(d);
    setIdx((i) => (i + d + n) % n);
  };
  const github = () => window.open(p.github, "_blank");

  return (
    <main className="relative min-h-[calc(100svh-110px)] overflow-hidden bg-[#008080] bg-cover bg-center" style={{ backgroundImage: `url(${A}/385739.webp)` }}>
      <div className="relative mx-auto flex max-w-[900px] flex-col gap-[16px] px-[8px] pb-[32px] pt-[16px] sm:px-[20px]">
        <div className="flex gap-[12px]">
          <DesktopItem label="My Projects" icon={`${A}/7a2df.png`} onClick={triggerVibrate} />
          <DesktopItem label="My Folder" icon={`${A}/76962.png`} onClick={triggerFolderVibrate} />
        </div>

        {open && (
          <section
            ref={sectionRef}
            onAnimationEnd={() => sectionRef.current?.classList.remove("animate-window-vibrate")}
            className="relative bg-[#c3c3c3] p-[6px] pb-[10px]"
            aria-label="My Projects"
          >
            <div className={`pointer-events-none absolute inset-0 ${bevelWin}`} />
            <div className="relative flex items-center justify-between bg-[#02007f] py-[4px] pl-[8px] pr-[4px]">
              <div className="flex min-w-0 items-center gap-[8px] cursor-pointer" onClick={triggerVibrate}>
                <img alt="" src={`${A}/7a2df.png`} className="size-[26px] shrink-0 [image-rendering:pixelated]" />
                <p className={`${font} truncate text-[clamp(20px,6vw,28px)] text-white`}>My Projects</p>
              </div>
              <div className="flex gap-[4px]">
                <TitleBtn label="Minimize" onClick={() => setOpen(false)}><MinGlyph /></TitleBtn>
                <TitleBtn label="Close" onClick={() => setOpen(false)}><CloseGlyph /></TitleBtn>
              </div>
            </div>

            <div className={`relative flex flex-wrap gap-x-[20px] gap-y-[2px] px-[8px] py-[8px] ${font} text-[clamp(17px,4.8vw,24px)] text-black`}>
              {["View Live Website", "View Github"].map((t) => (
                <button key={t} type="button" onClick={github} className="cursor-pointer leading-[1.2] hover:bg-[#02007f] hover:text-white">
                  <span className="underline">V</span>
                  {t.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative grid grid-cols-[1fr] gap-[4px]">
              <p className={`${font} bg-[#c3c3c3] px-[8px] py-[4px] text-[clamp(16px,4.6vw,22px)] text-black ${sunken}`}>seven featured project(s)</p>
              <p key={idx} className={`${font} bg-[#c3c3c3] px-[10px] py-[8px] text-[clamp(22px,6.4vw,32px)] leading-[1.1] text-black ${sunken}`}>
                ({idx + 1}) {p.name}
              </p>
            </div>

            <div className="group relative mt-[6px] overflow-hidden bg-[#d9d9d9]">
              <div className="relative h-[clamp(190px,50vw,340px)] w-full overflow-hidden">
                {p.image ? (
                  <img
                    key={idx}
                    src={p.image}
                    alt={p.name}
                    className="size-full object-cover object-top select-none"
                    style={{ animation: "fadein 0.25s ease-out forwards" }}
                  />
                ) : (
                  <span className="flex size-full items-center justify-center font-['Poppins:Bold'] text-[clamp(14px,4vw,24px)] text-gray-400">[ Image Placeholder ]</span>
                )}
                {/* Minimalist Blue Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col sm:flex-row items-center justify-center gap-[8px] bg-[#02007f]/70 backdrop-blur-[2px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100">
                  <a
                    href={p.live || p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-[12px] py-[5px] bg-white text-[#02007f] font-['Pixelify_Sans:Regular'] text-[15px] shadow-sm flex items-center gap-[5px] active:scale-95 transition-transform"
                  >
                    <span>View Live Website</span>
                    <span className="text-[12px]">↗</span>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-[12px] py-[5px] bg-black/40 border border-white/70 text-white font-['Pixelify_Sans:Regular'] text-[15px] shadow-sm backdrop-blur-sm flex items-center gap-[5px] active:scale-95 transition-transform"
                  >
                    <span>View Repository</span>
                    <span className="text-[12px]">↗</span>
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_4px_4px_0px_0px_#7e7e7e]" />
            </div>

            <div className="relative mt-[8px] flex items-center justify-between gap-[8px]">
              <button type="button" aria-label="Previous project" onClick={() => step(-1)} className={`${font} h-[44px] w-[56px] cursor-pointer border border-black bg-white text-[32px] leading-none text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),inset_0px_2px_1px_0px_rgba(0,0,0,0.25)] active:translate-y-[2px]`}>{"<"}</button>
              <div className="flex items-center gap-[6px]" aria-hidden>
                {projects.map((_, i) => (
                  <span key={i} className={`size-[8px] ${i === idx ? "bg-[#02007f]" : "bg-[#7e7e7e]"}`} />
                ))}
              </div>
              <button type="button" aria-label="Next project" onClick={() => step(1)} className={`${font} h-[44px] w-[56px] cursor-pointer border border-black bg-white text-[32px] leading-none text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),inset_0px_2px_1px_0px_rgba(0,0,0,0.25)] active:translate-y-[2px]`}>{">"}</button>
            </div>

            <div key={`t${idx}`} className="relative mt-[10px] flex flex-wrap gap-[10px]">
              {p.tech.split(" · ").map((t) =>
                icons[t] ? (
                  <img key={t} src={`${DEV}/${icons[t]}.svg`} alt={t} title={t} className="size-[36px] drop-shadow-sm" onError={(e) => (e.currentTarget.style.display = "none")} />
                ) : null,
              )}
            </div>

            <div
              key={`info-${idx}`}
              className="relative mt-[10px] h-[clamp(200px,52vw,280px)] overflow-y-auto bg-[#d9d9d9] p-[10px] pr-[14px] [&::-webkit-scrollbar]:w-[16px] [&::-webkit-scrollbar-thumb]:bg-[#02007f] [&::-webkit-scrollbar-thumb]:shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.5),inset_2px_2px_0px_rgba(255,255,255,0.3)] [&::-webkit-scrollbar-track]:bg-[#c3c3c3] [&::-webkit-scrollbar-track]:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)]"
              style={{ scrollbarColor: "#02007f #c3c3c3" }}
            >
              <p className="mb-[4px] font-['Poppins:SemiBold'] text-[17px] leading-snug text-black">{p.tagline}</p>
              <p className="mb-[12px] whitespace-pre-wrap font-['Inter:Regular'] text-[14px] leading-relaxed text-black">{p.desc}</p>
              {[
                ["Key Features:", p.features],
                ["Integrations:", p.integrations],
                ["Tech Stack:", p.tech],
              ].map(([k, v]) => (
                <div key={k} className="mb-[8px]">
                  <span className="mr-[8px] font-['Poppins:Bold'] text-[14px] text-[#02007f]">{k}</span>
                  <span className="font-['Inter:Regular'] text-[14px] leading-relaxed text-black">{v}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {alertOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-[12px]" onClick={() => setAlertOpen(false)}>
          <div 
            ref={alertRef}
            onAnimationEnd={() => alertRef.current?.classList.remove("animate-window-vibrate")}
            role="alertdialog" 
            aria-label="Error" 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-[480px] bg-[#c3c3c3] shadow-[2px_2px_0px_0px_#000000]"
          >
            <div className={`pointer-events-none absolute inset-0 ${bevelWin}`} />
            <div className="relative mx-[4px] mt-[4px] flex items-center justify-between bg-[#02007f] px-[4px] py-[3px]">
              <p className={`${font} ml-[4px] text-[22px] text-white`}>Error</p>
              <TitleBtn label="Close" onClick={() => setAlertOpen(false)}><CloseGlyph /></TitleBtn>
            </div>
            <div className="relative mt-[4px] flex flex-col items-center gap-[20px] p-[20px]">
              <div className="flex w-full items-center gap-[16px]">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-red-600 text-[32px] font-bold text-white shadow-[1px_1px_0px_1px_#000]">X</div>
                <p className={`${font} text-[clamp(18px,5.4vw,24px)] leading-tight text-black`}>You don't have the permissions to access this file</p>
              </div>
              <PushButton onClick={() => setAlertOpen(false)}>OK</PushButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
