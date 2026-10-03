const A = "/assets";
const c = "text-[rgba(8,0,255,0.74)]";

const links = [
  { icon: `${A}/73041.svg`, label: "Alicia-Kate-Bactasa", href: "https://github.com/Alicia-Kate-Bactasa", name: "GitHub" },
  { icon: `${A}/0ae47.svg`, label: "Alicia Kate Bactasa", href: "https://www.linkedin.com/in/alicia-kate-bactasa", name: "LinkedIn" },
];

export default function WorkM() {
  return (
    <main className="mx-auto flex max-w-[900px] flex-col items-center px-[clamp(16px,5vw,48px)] pb-[48px] pt-[clamp(32px,9vw,72px)] text-center">
      <h1 className={`rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(38px,12.5vw,84px)] font-normal leading-[1.1] tracking-[0.05em] ${c}`}>Work with Me!</h1>

      <div className="mt-[clamp(24px,7vw,48px)] flex w-full flex-col items-start gap-[18px] font-['Poppins:Regular'] text-[clamp(17px,5vw,32px)] tracking-[0.05em]">
        <a href="mailto:bactasa.ak@gmail.com" target="_blank" rel="noreferrer" className={`group flex items-center gap-[12px] text-left font-['Poppins:SemiBold'] ${c}`}>
          <img alt="" src={`${A}/c158a.svg`} className="w-[clamp(28px,8vw,40px)] shrink-0" />
          <span className="[overflow-wrap:anywhere]">
            Email Me — <span className="font-['Poppins:Regular']">bactasa.ak@gmail.com</span>
          </span>
          <img alt="" src={`${A}/bb561.svg`} className="hidden w-[34px] shrink-0 transition-transform group-hover:translate-x-2 sm:block" />
        </a>
        {links.map((l) => (
          <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className={`flex items-center gap-[12px] text-left ${c}`}>
            <img alt="" src={l.icon} className="w-[clamp(28px,8vw,40px)] shrink-0" />
            <span className="underline [overflow-wrap:anywhere]">{l.label}</span>
          </a>
        ))}
      </div>

      <div className="relative mt-[clamp(40px,12vw,90px)] h-[clamp(110px,34vw,170px)] w-[clamp(220px,66vw,400px)]">
        <div className="absolute left-0 top-0 w-[20%] rounded-[30px] bg-[rgba(8,0,255,0.74)]" style={{ aspectRatio: "85/71" }} />
        <div className="absolute right-0 top-0 w-[20%] rounded-[30px] bg-[rgba(8,0,255,0.74)]" style={{ aspectRatio: "85/71" }} />
        <img alt="" src={`${A}/a3326.svg`} className="absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2" />
      </div>
    </main>
  );
}
