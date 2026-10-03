import { useState } from "react";
import NavLinks from "../components/NavLinks";
const assetPathPrefix = "/assets";
const imgHighlight = `${assetPathPrefix}/06200.png`;
const imgShadow = `${assetPathPrefix}/e4ae9.svg`;
const imgCase = `${assetPathPrefix}/875a6.svg`;
const imgBottom = `${assetPathPrefix}/d916e.svg`;
const imgHighlights = `${assetPathPrefix}/f1f31.svg`;
const imgRightShadow = `${assetPathPrefix}/8d8f0.svg`;
const imgLeftShadow = `${assetPathPrefix}/00bc5.svg`;
const imgHighlights1 = `${assetPathPrefix}/f6211.svg`;
const imgRightShadow1 = `${assetPathPrefix}/54ebf.svg`;
const imgLeftShadow1 = `${assetPathPrefix}/49e62.svg`;
const imgBraces1 = `${assetPathPrefix}/e387b.svg`;
const imgNutFill1 = `${assetPathPrefix}/4b7af.svg`;
const imgAiEssentialsIconSet = `${assetPathPrefix}/80746.svg`;
const imgCodeSlash1 = `${assetPathPrefix}/f0f03.svg`;
const imgEllipse = `${assetPathPrefix}/9b7f6.svg`;
const imgBg = `${assetPathPrefix}/13fd3.svg`;

const MIN = 350;
const MAX = 712;

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const icon = (slug: string, v = "original") => `${DEV}/${slug}/${slug}-${v}.svg`;

type Item = string | [string, string | null];

function Chips({ items, className, active, note }: { items: Item[]; className: string; active?: number; note?: string }) {
  return (
    <div className={`absolute ${className} [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[rgba(8,0,255,0.6)] [&::-webkit-scrollbar-thumb]:rounded-full pr-2`}>
      {note && <p className="mb-[12px] font-['Poppins:Regular'] text-[14px] tracking-[0.5px] text-[rgba(8,0,255,0.6)]">{note}</p>}
      <ul className="flex flex-wrap content-start gap-[10px]">
        {items.map((it) => {
          const [t, src] = typeof it === "string" ? [it, null] : it;
          return (
            <li
              key={t}
              className={`flex items-center gap-[8px] rounded-full border border-dashed border-[rgba(8,0,255,0.6)] bg-white px-[16px] py-[5px] font-['Poppins:Regular'] text-[18px] tracking-[0.5px] text-[rgba(8,0,255,0.75)] transition-colors duration-200 ${active !== undefined && items.indexOf(it) >= active ? "opacity-40" : ""} ${active !== undefined && items.indexOf(it) < active ? "!bg-[rgba(8,0,255,0.6)] !text-white" : ""}`}
            >
              {src && <img src={src} alt="" className="size-[24px]" onError={(e) => (e.currentTarget.style.display = "none")} />}
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const [level, setLevel] = useState(712);
  const [pressedKey, setPressedKey] = useState<number | null>(null);
  return (
    <div className="bg-[#fcfcfc] relative w-[1440px] h-[1024px] overflow-visible" data-node-id="1:45635" data-name="Tech Stack">
      <div className="keycap-header-wrapper absolute left-0 top-0 z-30" style={{ transform: "translateX(var(--keycap-shift, 0px))" }}>
        <NavLinks />
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45636" data-name="Light Case">
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45637" data-name="Case">
          <div className="absolute h-[6.495px] left-[29.22px] mix-blend-luminosity top-[148.5px] w-[780.553px]" data-node-id="1:45638" data-name="Shadow">
            <div className="absolute inset-[0_-1.92%_-461.88%_-1.92%]">
              <img alt="" className="block max-w-none size-full" src={imgShadow} />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.01)] h-[50.19px] left-[15.48px] mix-blend-luminosity rounded-tl-[200px] rounded-tr-[200px] shadow-[0px_0px_200px_0px_rgba(38,38,38,0.15)] top-0 w-[808.038px]" data-node-id="1:45639" data-name="Shadow" />
          <div className="absolute bg-[rgba(255,255,255,0.01)] h-[127.838px] left-[823.52px] mix-blend-luminosity rounded-br-[50px] rounded-tr-[50px] top-[21.85px] w-[27.484px]" data-node-id="1:45640" data-name="Shadow" />
          <div className="absolute flex h-[127.838px] items-center justify-center left-[-23px] mix-blend-color-dodge top-[21.85px] w-[38.478px]" data-node-id="1:45641">
            <div className="flex-none rotate-180">
              <div className="bg-[rgba(255,255,255,0.01)] h-[127.838px] relative rounded-br-[50px] rounded-tr-[50px] shadow-[0px_0px_150px_0px_rgba(255,255,255,0.5)] w-[38.478px]" data-name="Light" />
            </div>
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] top-[16.83px] w-[808.038px]" data-node-id="1:45642" data-name="Case">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCase} />
          </div>
          <div className="absolute h-[6.495px] left-[15.48px] top-[148.5px] w-[808.038px]" data-node-id="1:45643" data-name="Bottom">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBottom} />
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] mix-blend-overlay rounded-bl-[20px] rounded-tl-[10px] top-[16.83px] w-[13.742px]" data-node-id="1:45644" data-name="Highlight">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-tl-[10px] size-full" src={imgHighlight} />
          </div>
        </div>
        <div className="absolute contents left-[48.46px] top-[31px]" data-node-id="1:45645" data-name="Key cutouts">
          <div className="absolute border border-[#2f2f2f] border-solid h-[107.467px] left-[48.46px] pointer-events-none rounded-[5.67px] top-[31px] w-[742.075px]" data-node-id="1:45646" data-name="Alpha / Control Keys">
            <div aria-hidden className="absolute bg-[#1e1e1e] inset-0 rounded-[5.67px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_8px_1px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute contents left-[51px] top-[32px]" data-node-id="1:45647" data-name="Keycaps">
          <div className={`absolute h-[105px] left-[51px] top-[32px] w-[112px] transition-all duration-100 ${pressedKey === 1 ? "mt-[4px]" : ""}`} data-node-id="1:45648" data-name="60% Keycaps">
            <div className="absolute bg-[#a7d0db] inset-0 rounded-[5.669px]" data-node-id="I1:45648;6:96043" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45648;6:96044" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45648;6:96046" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45648;6:96047" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45648;6:96056" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45648;6:96058" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45648;6:96059" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45648;6:96061" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className={`absolute h-[105px] left-[165px] top-[32px] w-[112px] transition-all duration-100 ${pressedKey === 2 ? "mt-[4px]" : ""}`} data-node-id="1:45649" data-name="60% Keycaps">
            <div className="absolute bg-[#ffadce] inset-0 rounded-[5.669px]" data-node-id="I1:45649;7:4801" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45649;7:4802" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45649;7:4804" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45649;7:4805" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45649;7:4814" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45649;7:4816" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45649;7:4817" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45649;7:4819" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className={`absolute h-[105px] left-[278px] top-[32px] w-[112px] transition-all duration-100 ${pressedKey === 3 ? "mt-[4px]" : ""}`} data-node-id="1:45650" data-name="60% Keycaps">
            <div className="absolute bg-[#009bca] inset-0 rounded-[5.669px]" data-node-id="I1:45650;6:97377" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45650;6:97378" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45650;6:97380" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45650;6:97381" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45650;6:97390" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45650;6:97392" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45650;6:97393" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45650;6:97395" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className={`absolute h-[105px] left-[504px] top-[32px] w-[285px] transition-all duration-100 ${pressedKey === 5 ? "mt-[4px]" : ""}`} data-node-id="1:45651" data-name="60% Keycaps">
            <div className="absolute bg-[#ffc100] inset-0 rounded-[5.669px]" data-node-id="I1:45651;6:10000" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45651;6:10001" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45651;6:10003" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45651;6:10004" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights1} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45651;6:10013" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45651;6:10015" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow1}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45651;6:10016" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45651;6:10018" style={{ maskImage: `url("${imgLeftShadow1}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className={`absolute h-[105px] left-[391px] top-[32px] w-[112px] transition-all duration-100 ${pressedKey === 4 ? "mt-[4px]" : ""}`} data-node-id="1:45652" data-name="60% Keycaps">
            <div className="absolute bg-[#857eb1] inset-0 rounded-[5.669px]" data-node-id="I1:45652;6:32678" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45652;6:32679" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45652;6:32681" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45652;6:32682" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45652;6:32691" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45652;6:32693" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45652;6:32694" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45652;6:32696" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Poppins:Regular'] left-[71px] not-italic top-[37px]" data-node-id="1:45653" data-name="Key Letter">
          <p className={`absolute leading-[20px] left-[71px] text-[#376a76] text-[16px] top-[44px] whitespace-nowrap transition-all duration-100 ${pressedKey === 1 ? "mt-[4px]" : ""}`} data-node-id="1:45654">
            Home
          </p>
          <p className={`absolute leading-[20px] left-[185px] text-[#ff4691] text-[16px] top-[43px] whitespace-pre transition-all duration-100 ${pressedKey === 2 ? "mt-[4px]" : ""}`} data-node-id="1:45655">
            About
            <br aria-hidden />
            Me
          </p>
          <p className={`absolute leading-[20px] left-[298px] text-[#c2f1ff] text-[13px] top-[42px] w-[60px] transition-all duration-100 ${pressedKey === 3 ? "mt-[4px]" : ""}`} data-node-id="1:45656">
            Featured
            <br aria-hidden />
            Projects
          </p>
          <div className={`absolute leading-[0] left-[412px] text-[#f1efff] text-[13px] top-[42px] w-[60px] transition-all duration-100 ${pressedKey === 4 ? "mt-[4px]" : ""}`} data-node-id="1:45657">
            <p className="leading-[20px] mb-0">Tech</p>
            <p className="leading-[20px]">Stack</p>
          </div>
          <p className={`absolute leading-[30px] left-[556px] text-[16px] text-white top-[37px] w-[140px] transition-all duration-100 ${pressedKey === 5 ? "mt-[4px]" : ""}`} data-node-id="1:45658">
            Work with Me
          </p>
        </div>
        <div className="absolute contents z-50">
          <button className="absolute left-[51px] top-[32px] w-[112px] h-[105px] cursor-pointer opacity-0" onMouseDown={() => setPressedKey(1)} onMouseUp={() => setPressedKey(null)} onMouseLeave={() => setPressedKey(null)} aria-label="Home" />
          <button className="absolute left-[165px] top-[32px] w-[112px] h-[105px] cursor-pointer opacity-0" onMouseDown={() => setPressedKey(2)} onMouseUp={() => setPressedKey(null)} onMouseLeave={() => setPressedKey(null)} aria-label="About Me" />
          <button className="absolute left-[278px] top-[32px] w-[112px] h-[105px] cursor-pointer opacity-0" onMouseDown={() => setPressedKey(3)} onMouseUp={() => setPressedKey(null)} onMouseLeave={() => setPressedKey(null)} aria-label="Featured Projects" />
          <button className="absolute left-[391px] top-[32px] w-[112px] h-[105px] cursor-pointer opacity-0" onMouseDown={() => setPressedKey(4)} onMouseUp={() => setPressedKey(null)} onMouseLeave={() => setPressedKey(null)} aria-label="Tech Stack" />
          <button className="absolute left-[504px] top-[32px] w-[285px] h-[105px] cursor-pointer opacity-0" onMouseDown={() => setPressedKey(5)} onMouseUp={() => setPressedKey(null)} onMouseLeave={() => setPressedKey(null)} aria-label="Work with Me" />
        </div>
      </div>
      </div>
      <div className="absolute h-[326px] top-[318px]" style={{ left: '15px', width: `${level}px` }} data-node-id="1:45659">
        <Chips className="left-[40px] right-[40px] top-[36px] bottom-[30px] overflow-y-auto content-start" note="Languages and core syntax used across my software projects." items={[["TypeScript", icon("typescript")], ["JavaScript", icon("javascript")], ["C#", icon("csharp")], ["C", icon("c")], ["C++", icon("cplusplus")], ["Python", icon("python")], ["PHP", icon("php")], ["SQL", icon("azuresqldatabase")], ["HTML5", icon("html5")], ["CSS3", icon("css3")], ["Bash", icon("bash")]]} />
        <div className="absolute border-2 border-[rgba(8,0,255,0.6)] border-dashed inset-[20.08px_20.06px_20.28px_20.08px] pointer-events-none" data-node-id="1:45660" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[15px] left-[15px] top-[15px] w-[14px]" data-node-id="1:45661" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] left-[12px] size-[21px]" data-node-id="1:45662" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid right-[12px] size-[20px] top-[12px]" data-node-id="1:45663" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] right-[13px] size-[21px]" data-node-id="1:45664" />
      </div>
      <div className="absolute flex h-[96.865px] items-center justify-center left-[-122px] top-[189px] w-[566.199px]" data-node-id="1:45665">
        <div className="flex-none rotate-[0.29deg]">
          <p className="[word-break:break-word] font-['Poppins:Black'] h-[94.005px] leading-[100px] not-italic relative text-[64px] text-[rgba(8,0,255,0.6)] tracking-[3.2px] w-[565.73px]">My Tech Stack</p>
        </div>
      </div>
      <div className="absolute contents left-[29px] top-[303px]" data-node-id="1:45666">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[64px] not-italic text-[20px] text-[rgba(8,0,255,0.6)] top-[303px] tracking-[1px] whitespace-nowrap" data-node-id="1:45667">
          Programming Languages
        </p>
        <div className="absolute h-[25px] left-[29px] top-[305px] w-[29px]" data-node-id="1:45668" data-name="braces 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBraces1} />
        </div>
      </div>
      <div className="absolute contents left-[53px] top-[640px]" data-node-id="1:45670">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[53px] not-italic text-[20px] text-[rgba(8,0,255,0.6)] top-[640px] tracking-[1px] whitespace-nowrap" data-node-id="1:45671">{`Frameworks & Tools`}</p>
      </div>
      <div className="absolute h-[322px] top-[656px]" style={{ left: '16px', width: `${level}px` }} data-node-id="1:45672">
        <Chips className="left-[40px] right-[40px] top-[36px] bottom-[30px] overflow-y-auto" note="Frontend libraries, mobile frameworks, and developer tooling." items={[["React", icon("react")], ["Next.js", icon("nextjs")], ["Vue.js", icon("vuejs")], ["React Native", icon("react")], ["Vite", icon("vitejs")], ["Tailwind CSS", icon("tailwindcss")], ["shadcn/ui", null], ["Docker", icon("docker")], ["Expo", null], ["Mapbox", null], ["Recharts", null], ["Git", icon("git")], ["GitHub", icon("github")], ["Figma", icon("figma")]]} />
        <div className="absolute border-2 border-[rgba(8,0,255,0.6)] border-dashed inset-[20.08px_20.06px_20.28px_20.08px] pointer-events-none" data-node-id="1:45673" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[20px] left-[13px] top-[12px] w-[19px]" data-node-id="1:45674" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] left-[12px] size-[21px]" data-node-id="1:45675" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[21px] right-[15px] top-[12px] w-[22px]" data-node-id="1:45676" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[14px] h-[20px] right-[14px] w-[21px]" data-node-id="1:45677" />
        <div className="absolute left-[14px] size-[16px] top-[-9px]" data-node-id="1:45678" data-name="nut-fill 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNutFill1} />
        </div>
      </div>
      <div className="absolute contents" style={{ left: `${level + 74}px` }} data-node-id="1:45680">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] not-italic text-[20px] text-[rgba(8,0,255,0.6)] top-[640px] tracking-[1px] whitespace-nowrap" style={{ left: `${level + 74}px` }} data-node-id="1:45681">
          AI Workflow
        </p>
      </div>
      <div className="absolute contents left-[738px] top-[817px]" data-node-id="1:45682">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[738px] not-italic text-[20px] text-[rgba(8,0,255,0.6)] top-[817px] tracking-[1px] whitespace-nowrap" data-node-id="1:45683">
          Adjust me!
        </p>
      </div>
      <div className="absolute h-[120px] top-[656px]" style={{ left: `${level + 30}px`, width: `${1440 - level - 45}px` }} data-node-id="1:45684">
        <Chips className="left-[40px] right-[40px] top-[38px] bottom-[30px] overflow-y-auto" items={[["Claude Code", "https://www.google.com/s2/favicons?sz=64&domain=claude.ai"], ["GitHub Copilot", "https://www.google.com/s2/favicons?sz=64&domain=github.com"], ["Codex", "https://www.google.com/s2/favicons?sz=64&domain=openai.com"]]} />
        <div className="absolute border-2 border-[rgba(8,0,255,0.6)] border-dashed inset-[20.08px_20.06px_20.28px_20.08px] pointer-events-none" data-node-id="1:45685" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[20px] left-[13px] top-[12px] w-[19px]" data-node-id="1:45686" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] left-[12px] size-[21px]" data-node-id="1:45687" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[21px] right-[15px] top-[12px] w-[22px]" data-node-id="1:45688" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[14px] h-[20px] right-[14px] w-[21px]" data-node-id="1:45689" />
        <div className="absolute left-[14px] size-[16px] top-[-9px]" data-node-id="1:45690" data-name="nut-fill 1" />
        <div className="absolute h-[24px] left-[12px] top-[-14px] w-[26px]" data-node-id="1:45691" data-name="AI Essentials Icon Set">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAiEssentialsIconSet} />
        </div>
      </div>
      <div className="absolute h-[326px] top-[318px]" style={{ left: `${level + 30}px`, width: `${1440 - level - 45}px` }} data-node-id="1:45692">
        <Chips className="left-[40px] right-[40px] top-[36px] bottom-[30px] overflow-y-auto" note="Relational databases, ORMs, and backend runtime environments." items={[["PostgreSQL", icon("postgresql")], ["Supabase", icon("supabase")], ["Node.js", icon("nodejs")], ["Express.js", icon("express")], [".NET / EF Core", icon("dotnetcore")], ["Prisma ORM", icon("prisma")], ["REST APIs", null], ["MySQL", icon("mysql")], ["MongoDB", icon("mongodb")]]} />
        <div className="absolute border-2 border-[rgba(8,0,255,0.6)] border-dashed inset-[20.08px_20.06px_20.28px_20.08px] pointer-events-none" data-node-id="1:45693" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid h-[20px] left-[13px] top-[12px] w-[19px]" data-node-id="1:45694" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] left-[12px] size-[21px]" data-node-id="1:45695" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid right-[11px] size-[23px] top-[11px]" data-node-id="1:45696" />
        <div className="absolute bg-[rgba(8,0,255,0.6)] border-4 border-[rgba(8,0,255,0.6)] border-solid bottom-[13px] h-[22px] right-[12px] w-[23px]" data-node-id="1:45697" />
      </div>
      <div className="absolute contents" style={{ left: `${level + 82}px` }} data-node-id="1:45698">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] not-italic text-[20px] text-[rgba(8,0,255,0.6)] top-[299px] tracking-[1px] whitespace-nowrap" style={{ left: `${level + 82}px` }} data-node-id="1:45699">{`Data & Backend`}</p>
      </div>
      <div className="absolute h-[20px] top-[304px] w-[28px]" style={{ left: `${level + 44}px` }} data-node-id="1:45700" data-name="code-slash 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCodeSlash1} />
      </div>
      <div className="absolute bg-[#ffd000] h-[47px] left-[732px] rounded-[25px] top-[857px] w-[682px]" data-node-id="1:45702" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-[751px] py-[5px] top-[874px] w-[638px]" data-node-id="1:45703" data-name="Slider">
        <div className="absolute bg-[rgba(76,50,249,0.84)] h-[4px] left-0 opacity-20 right-0 rounded-[100px] top-[5px]" data-node-id="I1:45703;2:77" data-name="BG" />
        <input type="range" min={MIN} max={MAX} step={1} value={level} onChange={(e) => setLevel(Number(e.target.value))} aria-label="Adjust width" className="absolute left-0 top-[-4px] z-10 h-[20px] w-full cursor-pointer opacity-0" />
        <div className="bg-[rgba(76,50,249,0.84)] h-[4px] relative rounded-[100px] shrink-0" style={{ width: `${((level - MIN) / (MAX - MIN)) * 100}%` }} data-node-id="I1:45703;2:37" data-name="Fill">
          <div className="-translate-y-1/2 absolute right-[-6px] size-[12px] top-1/2" data-node-id="I1:45703;3:826" data-name="Knob">
            <div className="-translate-y-1/2 absolute right-0 size-[12px] top-1/2" data-node-id="I1:45703;2:38" data-name="Ellipse">
              <div className="absolute inset-[-25%_-41.67%_-58.33%_-41.67%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse} />
              </div>
            </div>
            <div className="absolute bottom-[15px] h-[24px] right-[-7px] rounded-[4px] w-[26px]" data-node-id="I1:45703;3:227" data-name="Tooltip">
              <div className="absolute h-[23.593px] left-0 top-0 w-[26px]" data-node-id="I1:45703;3:231" data-name="bg">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-white top-[calc(50%-1.5px)] whitespace-nowrap" data-node-id="I1:45703;3:228">
                <p className="leading-[normal]">↔</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}