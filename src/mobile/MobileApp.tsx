import { useEffect, useState } from "react";
import { navigate, useRoute, type Route } from "../router";
import { playKeySound } from "../utils/keySound";
import HomeM from "./HomeM";
import AboutM from "./AboutM";
import ProjectsM from "./ProjectsM";
import TechM from "./TechM";
import WorkM from "./WorkM";

const keys: { label: string; line1?: string; line2?: string; to: Route; bg: string; fg: string; grow: number }[] = [
  { label: "Home", line1: "Home", to: "/", bg: "#a7d0db", fg: "#376a76", grow: 1 },
  { label: "About Me", line1: "About", line2: "Me", to: "/about", bg: "#ffadce", fg: "#ff4691", grow: 1.05 },
  { label: "Featured Projects", line1: "Featured", line2: "Projects", to: "/projects", bg: "#009bca", fg: "#c2f1ff", grow: 1.25 },
  { label: "Tech Stack", line1: "Tech", line2: "Stack", to: "/tech", bg: "#857eb1", fg: "#f1efff", grow: 1.05 },
  { label: "Work with Me", line1: "Work with", line2: "Me", to: "/work", bg: "#ffc100", fg: "#ffffff", grow: 1.55 },
];

const bgs: Record<Route, string> = {
  "/": "#fffef8",
  "/about": "#fcfcfc",
  "/projects": "#fcfcfc",
  "/tech": "#fcfcfc",
  "/work": "#ffcc2a",
};

function KeyNav({ route }: { route: Route }) {
  const [pressed, setPressed] = useState<number | null>(null);
  const release = () => setPressed(null);

  return (
    <nav aria-label="Main" className="sticky top-0 z-40 px-[4px] pt-[4px] sm:px-[12px] sm:pt-[8px]">
      <div className="rounded-[13px] bg-[#ececec] p-[4px] shadow-[0_5px_16px_rgba(38,38,38,0.16),inset_0_-2px_0_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.95)] sm:p-[7px]">
        {/* Milkier switch plate with minimal 1px padding so keycaps cover virtually all of it */}
        <div className="flex h-[clamp(72px,19.5vw,110px)] items-stretch gap-[1.5px] rounded-[7px] border border-[#8a8f9f]/40 bg-[#72778a] p-[1px] shadow-[inset_0px_1px_2px_rgba(0,0,0,0.08)]">
          {keys.map((k, i) => {
            const isActive = route === k.to;
            const isDown = pressed === i;

            return (
              <a
                key={k.to}
                href={`#${k.to}`}
                aria-label={k.label}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (k.to === "/projects" && route === "/projects") {
                    window.dispatchEvent(new CustomEvent("vibrate-myprojects"));
                  }
                  navigate(k.to);
                }}
                onPointerDown={() => {
                  setPressed(i);
                  playKeySound(i);
                }}
                onPointerUp={release}
                onPointerLeave={release}
                onPointerCancel={release}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    setPressed(i);
                    playKeySound(i);
                  }
                }}
                onKeyUp={release}
                onBlur={release}
                style={{
                  flexGrow: k.grow,
                  flexBasis: 0,
                  backgroundColor: k.bg,
                  color: k.fg,
                  transform: isDown ? "translateY(2px)" : "translateY(0)",
                }}
                className={`relative flex h-full min-w-0 cursor-pointer select-none flex-col items-center justify-center rounded-[5.5px] px-[1px] text-center font-['Silkscreen',monospace] text-[clamp(9.5px,2.55vw,13px)] leading-[1.2] tracking-[0.03em] transition-transform duration-75 focus-visible:outline-2 focus-visible:outline-[#0800ff] [touch-action:manipulation] ${
                  isActive
                    ? "shadow-[inset_0_2px_0_rgba(255,255,255,0.85),inset_0_-2px_3px_rgba(0,0,0,0.22),0_2px_4px_rgba(0,0,0,0.18)] ring-1 ring-white/40"
                    : "shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.16),0_1px_2px_rgba(0,0,0,0.1)]"
                }`}
              >
                {/* 3D Keycap bevel & inner shadow overlays */}
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[5.5px] shadow-[inset_-1px_0px_7px_0px_rgba(0,0,0,0.38)] mix-blend-overlay opacity-80" />
                <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[40%] rounded-t-[5.5px] bg-gradient-to-b from-white/40 to-transparent" />

                {/* Active Keycap Indicator Line at bottom */}
                {isActive && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-[2px] h-[2.5px] w-[50%] rounded-full bg-current opacity-85"
                  />
                )}

                {/* Keycap label */}
                <span className="relative flex flex-col items-center justify-center px-[1px] [overflow-wrap:anywhere]">
                  {k.line2 ? (
                    <>
                      <span>{k.line1}</span>
                      <span>{k.line2}</span>
                    </>
                  ) : (
                    <span>{k.line1 || k.label}</span>
                  )}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default function MobileApp() {
  const route = useRoute();

  useEffect(() => {
    document.body.style.background = bgs[route];
  }, [route]);

  const Page = { "/": HomeM, "/about": AboutM, "/projects": ProjectsM, "/tech": TechM, "/work": WorkM }[route];

  return (
    <div className="min-h-screen w-full overflow-x-hidden transition-colors duration-500" style={{ background: bgs[route] }}>
      <KeyNav route={route} />
      <div key={route} style={{ animation: "slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
        <Page />
      </div>
    </div>
  );
}
