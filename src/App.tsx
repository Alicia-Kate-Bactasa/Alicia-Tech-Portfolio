import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRoute, type Route } from "./router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Work from "./pages/Work";
import KeycapHeader from "./components/KeycapHeader";
import MobileApp from "./mobile/MobileApp";
import { useMedia } from "./useMedia";

const W = 1440;
const H = 1024;

const routes: Route[] = ["/", "/about", "/projects", "/tech", "/work"];

const pages: Record<Route, { el: () => React.ReactElement; bg: string }> = {
  "/": { el: () => <Home />, bg: "#fffef8" },
  "/about": { el: () => <About />, bg: "#fcfcfc" },
  "/projects": { el: () => <Projects />, bg: "#008080" },
  "/tech": { el: () => <TechStack />, bg: "#fffef8" },
  "/work": { el: () => <Work />, bg: "#ffcc2a" },
};

export default function App() {
  const compact = useMedia("(max-width: 899px)");
  return compact ? <MobileApp /> : <Desktop />;
}

function Desktop() {
  const route = useRoute();
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.innerWidth / W, window.innerHeight / H);
    }
    return 1;
  });

  const [shiftLeft, setShiftLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const s = Math.min(window.innerWidth / W, window.innerHeight / H);
      const extraLeft = Math.max(0, (window.innerWidth - W * s) / 2);
      return (extraLeft / s) - 26.2;
    }
    return 0;
  });

  const [screenShiftLeft, setScreenShiftLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const s = Math.min(window.innerWidth / W, window.innerHeight / H);
      const extraLeft = Math.max(0, (window.innerWidth - W * s) / 2);
      return extraLeft / s;
    }
    return 0;
  });

  const [yellowRightExtend, setYellowRightExtend] = useState(() => {
    if (typeof window !== "undefined") {
      const s = Math.min(window.innerWidth / W, window.innerHeight / H);
      const extraRight = Math.max(0, (window.innerWidth - W * s) / 2);
      return Math.max(0, (extraRight - 95) / s);
    }
    return 0;
  });

  useLayoutEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / W, vh / H);
      setScale(s);
      const extraLeft = Math.max(0, (vw - W * s) / 2);
      setShiftLeft((extraLeft / s) - 26.2);
      setScreenShiftLeft(extraLeft / s);
      setYellowRightExtend(Math.max(0, (extraLeft - 95) / s));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [currentRoute, setCurrentRoute] = useState<Route>(route);
  const [prevRoute, setPrevRoute] = useState<Route | null>(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (route !== currentRoute) {
      setPrevRoute(currentRoute);
      setCurrentRoute(route);
      setIsSliding(true);
      const timer = setTimeout(() => {
        setIsSliding(false);
        setPrevRoute(null);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [route, currentRoute]);

  useEffect(() => {
    document.body.style.background = pages[route].bg;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [route]);

  // Pre-render all 5 pages so everything is in DOM and decoded immediately
  const renderedPages = useRef<Record<Route, React.ReactElement>>({
    "/": <Home />,
    "/about": <About />,
    "/projects": <Projects />,
    "/tech": <TechStack />,
    "/work": <Work />,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-screen h-[100dvh] overflow-hidden select-none"
      style={{
        background: pages[route].bg,
        ["--keycap-shift" as any]: `-${shiftLeft}px`,
        ["--screen-shift-left" as any]: `-${screenShiftLeft}px`,
        ["--yellow-right-extend" as any]: `${yellowRightExtend}px`,
      }}
    >
      {/* Sliding full-screen pages: Each page fills 100vw x 100vh with zero fade */}
      <style>{`.page-container .keycap-header-wrapper{display:none !important}`}</style>
      <div className="page-container absolute inset-0 w-full h-full overflow-hidden">
        {routes.map((r) => {
          const isCurrent = r === currentRoute;
          const isPrev = r === prevRoute;
          const isVisible = isCurrent || isPrev;

          let animStyle: React.CSSProperties = {};
          if (isSliding) {
            if (isCurrent) {
              animStyle = {
                animation: "slideInRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                zIndex: 20,
              };
            } else if (isPrev) {
              animStyle = {
                animation: "slideOutLeft 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                zIndex: 10,
              };
            }
          } else if (isCurrent) {
            animStyle = {
              transform: "translateX(0)",
              zIndex: 10,
            };
          }

          return (
            <div
              key={r}
              className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
              style={{
                background: pages[r].bg,
                ...animStyle,
                visibility: isVisible ? "visible" : "hidden",
                pointerEvents: isCurrent && !isSliding ? "auto" : isCurrent ? "auto" : "none",
              }}
            >
              {r === "/projects" && (
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    alt=""
                    src="/assets/385739.webp"
                    className="size-full object-cover"
                  />
                </div>
              )}

              <div style={{ width: W * scale, height: H * scale }} className="overflow-visible shrink-0 relative">
                <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }} className="overflow-visible relative">
                  {renderedPages.current[r]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stationary Keycap Header: Sits at z-40, completely fixed in place, never slides */}
      <div className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center">
        <div style={{ width: W * scale, height: H * scale }} className="overflow-visible shrink-0 relative">
          <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }} className="overflow-visible relative">
            <KeycapHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
