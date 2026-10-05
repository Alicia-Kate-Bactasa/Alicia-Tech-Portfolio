import { assetUrl } from "../utils/asset"

const A = assetUrl("assets", false)
const c = "text-[rgba(8,0,255,0.74)]"

const links = [
  {
    icon: `${A}/73041.svg`,
    label: "Alicia-Kate-Bactasa",
    href: "https://github.com/Alicia-Kate-Bactasa",
    name: "GitHub",
  },
  {
    icon: `${A}/0ae47.svg`,
    label: "Alicia Kate Bactasa",
    href: "https://www.linkedin.com/in/alicia-kate-bactasa",
    name: "LinkedIn",
  },
]

export default function WorkM() {
  return (
    <main className="mx-auto flex max-w-[900px] flex-col items-center px-[clamp(16px,5vw,48px)] pb-[48px] pt-[clamp(32px,9vw,72px)] text-center">
      <h1
        className={`rotate-[0.29deg] font-['Poppins:Black'] text-[clamp(38px,12.5vw,84px)] font-normal leading-[1.1] tracking-[0.05em] ${c}`}
      >
        Work with Me!
      </h1>

      <div className="mt-[clamp(28px,8vw,52px)] flex w-full flex-col items-center justify-center gap-[18px] font-['Poppins:Regular'] text-[clamp(17px,5vw,32px)] tracking-[0.05em]">
        <div className="flex w-full max-w-full flex-col items-center justify-center gap-[18px]">
          <a
            href="mailto:bactasa.ak@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-wrap items-center justify-center gap-[12px] rounded-[8px] px-[8px] py-[4px] text-center font-['Poppins:SemiBold'] ${c} transition-colors duration-200 hover:bg-white/15 hover:text-[#0200ff]`}
          >
            <img
              alt=""
              src={`${A}/c158a.svg`}
              className="w-[clamp(28px,8vw,40px)] shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-center [overflow-wrap:anywhere] transition-colors duration-200 group-hover:text-[#0200ff]">
              Email Me —{" "}
              <span className="font-['Poppins:Regular']">
                bactasa.ak@gmail.com
              </span>
            </span>
          </a>
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center justify-center gap-[12px] rounded-[8px] px-[8px] py-[4px] text-center ${c} underline-offset-4 transition-all duration-200 hover:bg-white/15 hover:text-[#0200ff] hover:decoration-2 hover:underline-offset-4 hover:translate-y-[-1px]`}
            >
              <img
                alt=""
                src={l.icon}
                className="w-[clamp(28px,8vw,40px)] shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-center underline [overflow-wrap:anywhere]">
                {l.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-[clamp(40px,12vw,90px)] h-[clamp(110px,34vw,170px)] w-[clamp(220px,66vw,400px)]">
        <div
          className="absolute left-0 top-0 w-[20%] rounded-[30px] bg-[rgba(8,0,255,0.74)]"
          style={{ aspectRatio: "85/71" }}
        />
        <div
          className="absolute right-0 top-0 w-[20%] rounded-[30px] bg-[rgba(8,0,255,0.74)]"
          style={{ aspectRatio: "85/71" }}
        />
        <img
          alt=""
          src={`${A}/a3326.svg`}
          className="absolute bottom-0 left-1/2 w-[72%] -translate-x-1/2"
        />
      </div>
    </main>
  )
}
