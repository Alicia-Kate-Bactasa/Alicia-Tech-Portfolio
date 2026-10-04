import { navigate, type Route } from "../router";

const keys: { label: string; to: Route; left: number; width: number }[] = [
  { label: "Home", to: "/", left: 51, width: 112 },
  { label: "About Me", to: "/about", left: 165, width: 112 },
  { label: "Featured Projects", to: "/projects", left: 278, width: 112 },
  { label: "Tech Stack", to: "/tech", left: 391, width: 112 },
  { label: "Work with Me", to: "/work", left: 504, width: 285 },
];

export default function NavLinks() {
  return (
    <nav className="absolute left-0 top-0 z-50" aria-label="Main">
      {keys.map((k) => (
        <a
          key={k.to}
          href={`#${k.to}`}
          aria-label={k.label}
          onClick={(e) => {
            e.preventDefault();
            const currentRoute = window.location.hash.replace(/^#/, "") || "/";
            if (k.to === "/projects" && currentRoute === "/projects") {
              window.dispatchEvent(new CustomEvent("vibrate-myprojects"));
            }
            navigate(k.to);
          }}
          className="absolute top-[32px] h-[105px] cursor-pointer rounded-[6px] transition-[background-color,transform] duration-100 hover:bg-white/15 active:translate-y-[3px] active:bg-black/10 focus-visible:outline-2 focus-visible:outline-[#0800ff]"
          style={{ left: k.left, width: k.width }}
        />
      ))}
    </nav>
  );
}
