import NavLinks from "./NavLinks";

export default function KeycapHeader() {
  return (
    <div
      className="keycap-header-wrapper pointer-events-auto absolute left-0 top-0 z-40 select-none"
      style={{ transform: "translateX(var(--keycap-shift, 0px))" }}
    >
      <NavLinks />
      <img
        src="/assets/LightCase.svg"
        alt=""
        className="absolute left-0 top-0 w-[1024px] h-[300px] max-w-none block pointer-events-none"
      />
    </div>
  );
}
