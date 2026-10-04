import { useEffect, useState } from "react";
import { navigate, useRoute, type Route } from "../router";
import { playKeySound } from "../utils/keySound";
import HomeM from "./HomeM";
import AboutM from "./AboutM";
import ProjectsM from "./ProjectsM";
import TechM from "./TechM";
import WorkM from "./WorkM";

const keys: { label: string; to: Route; bg: string; fg: string; grow: number }[] = [
  { label: "Home", to: "/", bg: "#a7d0db", fg: "#376a76", grow: 1 },
  { label: "About Me", to: "/about", bg: "#ffadce", fg: "#ff4691", grow: 1 },
  { label: "Featured Projects", to: "/projects", bg: "#009bca", fg: "#c2f1ff", grow: 1 },
  { label: "Tech Stack", to: "/tech", bg: "#857eb1", fg: "#f1efff", grow: 1 },
  { label: "Work with Me", to: "/work", bg: "#ffc100", fg: "#ffffff", grow: 1.7 },
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
    <nav aria-label="Main" className="sticky top-0 z-40 px-[6px] pt-[6px] sm:px-[14px] sm:pt-[10px]">
      <div className="rounded-[14px] bg-[#ececec] p-[6px] shadow-[0_6px_18px_rgba(38,38,38,0.18),inset_0_-3px_0_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.95)] sm:p-[10px]">
        <div className="flex h-[clamp(62px,17vw,105px)] items-start gap-[clamp(2px,0.5vw,4px)] rounded-[8px] border border-[#2f2f2f]/80 bg-[#1e1e1e] p-[clamp(1px,0.35vw,2px)] shadow-[inset_0px_1px_4px_1px_rgba(0,0,0,0.2)]">
          {keys.map((k, i) => (
            <a
              key={k.to}
              href={`#${k.to}`}
              aria-label={k.label}
              aria-current={route === k.to ? "page" : undefined}
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
              style={{ flexGrow: k.grow, flexBasis: 0, backgroundColor: k.bg, color: k.fg, marginTop: pressed === i ? 2 : 0 }}
              className="relative flex h-[calc(100%-2px)] min-w-0 cursor-pointer select-none items-center justify-center rounded-[6px] px-[2px] text-center font-['Poppins:Regular'] text-[clamp(11px,2.9vw,16px)] leading-[1.25] transition-[margin-top,box-shadow] duration-75 focus-visible:outline-2 focus-visible:outline-[#0800ff] [touch-action:manipulation] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-2px_3px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.12)]"
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_-1px_0px_8px_0px_rgba(0,0,0,0.45)] mix-blend-overlay opacity-80" />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[42%] rounded-t-[6px] bg-gradient-to-b from-white/35 to-transparent" />
              <span className="relative px-[2px] [overflow-wrap:anywhere]">{k.label}</span>
            </a>
          ))}
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
