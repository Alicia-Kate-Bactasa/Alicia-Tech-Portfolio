const A = "/assets";

const tiles = [
  { c: "bg-[#ff3ba0]", r: "rounded-tl-[22px]" },
  { c: "bg-[#b7d9e1]", r: "" },
  { c: "bg-[#fdb7d4]", r: "" },
  { c: "bg-[#9a94bf]", r: "" },
  { c: "bg-[#ff3ba0]", r: "" },
  { c: "bg-[#b7d9e1]", r: "rounded-br-[22px]" },
];

export default function HomeM() {
  return (
    <main className="relative mx-auto flex max-w-[900px] flex-col gap-[clamp(20px,6vw,48px)] overflow-hidden px-[clamp(16px,5vw,48px)] pb-[clamp(32px,8vw,64px)] pt-[clamp(24px,7vw,56px)]">
      <p className="self-end font-['Poppins:Light'] text-[clamp(22px,7vw,50px)] leading-[1.1] text-[rgba(8,0,255,0.61)]">full stack developer</p>

      <div className="relative grid grid-cols-3 border border-[#b7d9e1]">
        {tiles.map((t, i) => (
          <div key={i} className={`relative aspect-[248/241] ${t.c} ${t.r} ${i === 1 || i === 4 ? "border border-[#27abd3]" : ""}`} />
        ))}
        <img alt="" src={`${A}/c9785.png`} className="pointer-events-none absolute bottom-0 left-[4%] h-[94%] w-auto max-w-none object-contain" />
        <img alt="" src={`${A}/a8100.png`} className="pointer-events-none absolute bottom-0 right-[33%] h-[90%] w-auto max-w-none object-contain" />
        <img alt="" src={`${A}/9d327.png`} className="pointer-events-none absolute bottom-0 right-[2%] h-[94%] w-auto max-w-none object-contain" />
      </div>

      <h1 className="font-['Poppins:Light'] font-normal not-italic text-[rgba(8,0,255,0.61)]">
        <span className="block text-[clamp(32px,11.5vw,96px)] leading-[1.15]">ALICIA KATE</span>
        <span className="block font-['Poppins:ExtraBold'] text-[clamp(40px,15vw,130px)] leading-[1.05]">
          BACTASA<span className="text-[1.15em] leading-[0]">.</span>
        </span>
      </h1>

      <div className="flex gap-[10px]">
        <img alt="" src={`${A}/26ce5.svg`} className="w-[clamp(60px,20vw,100px)]" />
        <img alt="" src={`${A}/db28a.svg`} className="w-[clamp(60px,20vw,100px)]" />
      </div>
    </main>
  );
}
