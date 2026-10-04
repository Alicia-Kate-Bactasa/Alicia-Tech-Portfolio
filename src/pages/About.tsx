import { useState } from "react";
import NavLinks from "../components/NavLinks";
const assetPathPrefix = "/assets";
const imgCursorDefaultWhite = `${assetPathPrefix}/274ce.svg`;
const imgImage202610021028194692 = `${assetPathPrefix}/04cfe.png`;
const imgImage202610021028194700 = `${assetPathPrefix}/d82cb.png`;
const imgImage202610021028194691 = `${assetPathPrefix}/895c5.png`;
const imgHighlight = `${assetPathPrefix}/06200.png`;
const imgWhiteDuctTape25 = `${assetPathPrefix}/b1042.png`;
const imgStar2 = `${assetPathPrefix}/8ca28.svg`;
const imgShadow = `${assetPathPrefix}/e4ae9.svg`;
const imgCase = `${assetPathPrefix}/875a6.svg`;
const imgBottom = `${assetPathPrefix}/d916e.svg`;
const imgHighlights = `${assetPathPrefix}/69d77.svg`;
const imgRightShadow = `${assetPathPrefix}/8d8f0.svg`;
const imgLeftShadow = `${assetPathPrefix}/00bc5.svg`;
const imgHighlights1 = `${assetPathPrefix}/f6211.svg`;
const imgRightShadow1 = `${assetPathPrefix}/54ebf.svg`;
const imgLeftShadow1 = `${assetPathPrefix}/49e62.svg`;
const imgFileLine = `${assetPathPrefix}/bef8a.svg`;

function CursorDefaultWhite({ className }: { className?: string }) {
  return (
    <div className={className || "h-[29.522px] relative w-[26.717px]"} data-node-id="1:45537" data-name="Cursor / Default White">
      <div className="absolute inset-[-14.42%_-17.47%_-21.57%_-18.2%]">
        <img alt="" className="block max-w-none size-full" src={imgCursorDefaultWhite} />
      </div>
    </div>
  );
}

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <div className="bg-[#fcfcfc] relative w-[1440px] h-[1024px] overflow-visible" data-node-id="1:45474" data-name="About Me">
      <div className="absolute left-0 top-0 [&>*]:transition-all [&>*]:duration-300" data-node-id="1:45475" data-name="Avatar">
        <div className="absolute left-0 top-0 z-10" style={{ transform: "translateX(var(--screen-shift-left, 0px))" }}>
          <div className="absolute flex h-[843.963px] items-center justify-center left-[-190px] top-[225px] w-[1067px] z-10" style={{ transform: "scale(1.25)", transformOrigin: "center" }} data-node-id="1:45477">
            <div className="flex-none rotate-[-0.86deg] skew-x-[-0.02deg]">
              <div className="h-[828.29px] relative w-[1055.036px]">
                <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
                  <img alt="" className="block max-w-none size-full" src={imgStar2} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[804px] left-0 top-[230px] w-[590px] z-20 transition-transform duration-300 hover:scale-105" data-node-id="1:45480" data-name="Image_20261002_102819_469 1">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-bottom size-full" src={imgImage202610021028194692} />
              <img alt="" className="absolute max-w-none object-bottom size-full" src={imgImage202610021028194691} />
            </div>
          </div>
        </div>
        <div className="absolute h-[163px] left-[487px] top-[500px] w-[302px]" data-node-id="1:45478" data-name="Frame" />
        <div className="absolute h-[194px] left-[351px] top-[702px] w-[205px]" data-node-id="1:45479" data-name="Frame" />
        <div className="absolute h-[535px] left-[458px] top-[555px] w-[396px] z-0 transition-transform duration-300 hover:scale-105" data-node-id="1:45476" data-name="Image_20261002_102819_469 2">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-bottom size-full" src={imgImage202610021028194692} />
            <img alt="" className="absolute max-w-none object-bottom size-full" src={imgImage202610021028194700} />
          </div>
        </div>
      </div>
      <div className="keycap-header-wrapper absolute left-0 top-0 z-30" style={{ transform: "translateX(var(--keycap-shift, 0px))" }}>
        <NavLinks />
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45481" data-name="Light Case">
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45482" data-name="Case">
          <div className="absolute h-[6.495px] left-[29.22px] mix-blend-luminosity top-[148.5px] w-[780.553px]" data-node-id="1:45483" data-name="Shadow">
            <div className="absolute inset-[0_-1.92%_-461.88%_-1.92%]">
              <img alt="" className="block max-w-none size-full" src={imgShadow} />
            </div>
          </div>
          <div className="absolute flex h-[127.838px] items-center justify-center left-[-23px] mix-blend-color-dodge top-[21.85px] w-[38.478px]" data-node-id="1:45486">
            <div className="flex-none rotate-180">
              <div className="bg-[rgba(255,255,255,0.01)] h-[127.838px] relative rounded-br-[50px] rounded-tr-[50px] shadow-[0px_0px_150px_0px_rgba(255,255,255,0.5)] w-[38.478px]" data-name="Light" />
            </div>
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] top-[16.83px] w-[808.038px]" data-node-id="1:45487" data-name="Case">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCase} />
          </div>
          <div className="absolute h-[6.495px] left-[15.48px] top-[148.5px] w-[808.038px]" data-node-id="1:45488" data-name="Bottom">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBottom} />
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] mix-blend-overlay rounded-bl-[20px] rounded-tl-[10px] top-[16.83px] w-[13.742px]" data-node-id="1:45489" data-name="Highlight">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-tl-[10px] size-full" src={imgHighlight} />
          </div>
        </div>
        <div className="absolute contents left-[48.46px] top-[31px]" data-node-id="1:45490" data-name="Key cutouts">
          <div className="absolute border border-[#2f2f2f] border-solid h-[107.467px] left-[48.46px] pointer-events-none rounded-[5.67px] top-[31px] w-[742.075px]" data-node-id="1:45491" data-name="Alpha / Control Keys">
            <div aria-hidden className="absolute bg-[#1e1e1e] inset-0 rounded-[5.67px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_8px_1px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute contents left-[51px] top-[32px]" data-node-id="1:45492" data-name="Keycaps">
          <div className="absolute h-[105px] left-[51px] top-[32px] w-[112px]" data-node-id="1:45493" data-name="60% Keycaps">
            <div className="absolute bg-[#a7d0db] inset-0 rounded-[5.669px]" data-node-id="I1:45493;6:96043" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45493;6:96044" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45493;6:96046" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45493;6:96047" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45493;6:96056" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45493;6:96058" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45493;6:96059" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45493;6:96061" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[165px] top-[32px] w-[112px]" data-node-id="1:45494" data-name="60% Keycaps">
            <div className="absolute bg-[#ffadce] inset-0 rounded-[5.669px]" data-node-id="I1:45494;7:4801" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45494;7:4802" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45494;7:4804" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45494;7:4805" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45494;7:4814" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45494;7:4816" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45494;7:4817" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45494;7:4819" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[278px] top-[32px] w-[112px]" data-node-id="1:45495" data-name="60% Keycaps">
            <div className="absolute bg-[#009bca] inset-0 rounded-[5.669px]" data-node-id="I1:45495;6:97377" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45495;6:97378" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45495;6:97380" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45495;6:97381" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45495;6:97390" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45495;6:97392" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45495;6:97393" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45495;6:97395" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[504px] top-[32px] w-[285px]" data-node-id="1:45496" data-name="60% Keycaps">
            <div className="absolute bg-[#ffc100] inset-0 rounded-[5.669px]" data-node-id="I1:45496;6:10000" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45496;6:10001" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45496;6:10003" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45496;6:10004" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights1} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45496;6:10013" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45496;6:10015" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow1}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45496;6:10016" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45496;6:10018" style={{ maskImage: `url("${imgLeftShadow1}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[391px] top-[32px] w-[112px]" data-node-id="1:45497" data-name="60% Keycaps">
            <div className="absolute bg-[#857eb1] inset-0 rounded-[5.669px]" data-node-id="I1:45497;6:32678" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45497;6:32679" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45497;6:32681" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45497;6:32682" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45497;6:32691" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45497;6:32693" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45497;6:32694" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45497;6:32696" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Poppins:Regular'] left-[71px] not-italic top-[37px]" data-node-id="1:45498" data-name="Key Letter">
          <p className="absolute leading-[20px] left-[71px] text-[#376a76] text-[16px] top-[44px] whitespace-nowrap" data-node-id="1:45499">
            Home
          </p>
          <p className="absolute leading-[20px] left-[185px] text-[#ff4691] text-[16px] top-[43px] whitespace-pre" data-node-id="1:45500">
            About
            <br aria-hidden />
            Me
          </p>
          <p className="absolute leading-[20px] left-[298px] text-[#c2f1ff] text-[13px] top-[42px] w-[60px]" data-node-id="1:45501">
            Featured
            <br aria-hidden />
            Projects
          </p>
          <div className="absolute leading-[0] left-[412px] text-[#f1efff] text-[13px] top-[42px] w-[60px]" data-node-id="1:45502">
            <p className="leading-[20px] mb-0">Tech</p>
            <p className="leading-[20px]">Stack</p>
          </div>
          <p className="absolute leading-[30px] left-[556px] text-[16px] text-white top-[37px] w-[140px]" data-node-id="1:45503">
            Work with Me
          </p>
        </div>
      </div>
      </div>
      <div className="absolute bg-[#f7f02e] h-[1178px] left-[906px] top-0 transition-colors duration-500 hover:bg-[#e6de10]" style={{ width: "calc(557px + var(--yellow-right-extend, 0px))" }} data-node-id="1:45504" />
      <div className="absolute left-[906px] top-[590px] flex w-[calc(557px+var(--yellow-right-extend,0px))] justify-center px-[20px] font-['Poppins:Regular'] text-[20px] leading-[normal] tracking-[1px] text-[rgba(8,0,255,0.75)] [&_p]:transition-colors [&_p]:duration-300 hover:[&_p]:text-[#d4d422]" data-node-id="1:45505" data-name="RC">
        <div className="flex w-fit max-w-full flex-col gap-[10px]">
          <p className="text-left" data-node-id="1:45506">
            <span className="font-['Poppins:Bold']">|</span>
            <span>{` Data Structures and Algorithms`}</span>
          </p>
          <p className="text-left" data-node-id="1:45507">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Object Oriented Programming</span>
          </p>
          <p className="text-left" data-node-id="1:45508">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Linux Operating System</span>
          </p>
          <p className="text-left" data-node-id="1:45509">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Information Management</span>
          </p>
          <p className="text-left" data-node-id="1:45511">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Information Assurance and Security</span>
          </p>
          <p className="text-left" data-node-id="1:45512">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Systems Analysis and Design</span>
          </p>
          <p className="text-left" data-node-id="1:45513">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Web Development</span>
          </p>
          <p className="text-left" data-node-id="1:45514">
            <span className="font-['Poppins:Bold']">{`| `}</span>
            <span>Network Security</span>
          </p>
        </div>
      </div>
      <div className="absolute contents left-[329px] top-[63.23px]" data-node-id="1:45515" data-name="Avatar Information">
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[0] left-[329px] not-italic text-[0px] text-[rgba(8,0,255,0.75)] text-justify top-[206px] tracking-[0.8px] w-[500px] transition-all duration-300 hover:text-[#d4d422] hover:scale-[1.02]" data-node-id="1:45516">
          <span className="font-['Poppins:Light'] leading-[normal] text-[16px]">{`Hello! I am Alicia Kate Bactasa and I’m a third-year `}</span>
          <span className="font-['Poppins:Medium'] leading-[normal] text-[16px]">{`BS Information Technology `}</span>
          <span className="font-['Poppins:Light'] leading-[normal] text-[16px]">student at th</span>
          <span className="font-['Poppins:Regular'] leading-[normal] text-[16px]">e</span>
          <span className="font-['Poppins:Medium'] leading-[normal] text-[16px]">{` University of San Carlos`}</span>
          <span className="font-['Poppins:Light'] leading-[normal] text-[16px]">{` with a technical focus on`}</span>
          <span className="font-['Poppins:Medium'] leading-[normal] text-[16px]">{` back-end engineering, database development, and data analytics`}</span>
          <span className="font-['Poppins:Light'] leading-[normal] text-[16px]">.</span>
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Inter:Regular'] font-normal h-[143px] leading-[0] left-[820px] not-italic text-[0px] text-[rgba(8,0,255,0.75)] text-right top-[328px] tracking-[0.8px] w-[413px] transition-all duration-300 hover:text-[#d4d422] hover:scale-[1.02]" data-node-id="1:45517">
          <span className="font-['Poppins:Light'] leading-[normal] text-[16px]">{`I enjoy turning ideas into functional, well-structured applications while continuously exploring new technologies. Most of my experience comes from `}</span>
          <span className="font-['Poppins:Medium'] leading-[normal] text-[16px]">hands-on projects, collaborative development, and building full-stack systems from the ground up.</span>
        </p>
        <div className="absolute contents left-[970px] top-[63.23px] [&>*]:transition-all [&>*]:duration-300 hover:[&>div:nth-child(1)]:rotate-[2deg] hover:[&>div:nth-child(2)]:scale-105 hover:[&>div:nth-child(2)_p]:text-[#d4d422]" data-node-id="1:45518" data-name="What I Offer">
          <div className="absolute flex h-[115.445px] items-center justify-center left-[982px] top-[83px] w-[450.2px]" data-node-id="1:45519">
            <div className="flex-none rotate-[-1.99deg]">
              <div className="bg-white h-[100px] relative w-[447px]" />
            </div>
          </div>
          <div className="absolute flex h-[115.684px] items-center justify-center left-[999px] top-[86px] w-[476.209px]" data-node-id="1:45520">
            <div className="flex-none rotate-[-2.03deg]">
              <p className="[word-break:break-word] font-['Poppins:Regular'] h-[99px] leading-[100px] not-italic relative text-[64px] text-[rgba(8,0,255,0.75)] tracking-[3.2px] w-[473px]">What I Offer</p>
            </div>
          </div>
          <div className="absolute flex h-[59.982px] items-center justify-center left-[1378.27px] top-[63.23px] w-[71.088px]" data-node-id="1:45521">
            <div className="flex-none rotate-[36.31deg]">
              <div className="h-[20.884px] relative w-[72.872px]" data-name="WhiteDuctTape-25">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDuctTape25} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[47.804px] items-center justify-center left-[970px] top-[167px] w-[54.517px]" data-node-id="1:45522">
            <div className="flex-none rotate-[36.31deg]">
              <div className="h-[20.884px] relative w-[52.308px]" data-name="WhiteDuctTape-25">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDuctTape25} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents h-[249.057px] left-[970px] top-[369.38px] w-[512.766px] transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-lg group" data-node-id="1:45523" data-name="Relevant Coursework">
          <div className="absolute flex h-[170.556px] items-center justify-center left-[974.93px] top-[406.6px] w-[458.639px]" data-node-id="1:45524">
            <div className="flex-none rotate-[3.14deg] skew-x-[-1.56deg]">
              <div className="bg-white h-[146.515px] relative w-[447.309px]" />
            </div>
          </div>
          <div className="absolute flex h-[170.03px] items-center justify-center left-[991.81px] top-[424px] w-[484.468px]" data-node-id="1:45525">
            <div className="flex-none rotate-[3.08deg] skew-x-[-1.59deg]">
              <p className="[word-break:break-word] font-['Poppins:Regular'] h-[145.048px] leading-[60px] not-italic relative text-[64px] text-[rgba(8,0,255,0.75)] tracking-[3.2px] w-[473.34px] transition-colors duration-300 group-hover:text-[#d4d422]">Relevant Coursework</p>
            </div>
          </div>
          <div className="absolute flex h-[47px] items-center justify-center left-[1155px] top-[393px] w-[97.588px]" data-node-id="1:45526">
            <div className="flex-none rotate-[2.48deg]">
              <div className="h-[42.896px] relative w-[95.823px]" data-name="WhiteDuctTape-25">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDuctTape25} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[906px] top-[242px] flex w-[calc(557px+var(--yellow-right-extend,0px))] justify-center px-[20px] font-['Poppins:Light'] text-[20px] leading-[normal] tracking-[1px] text-[rgba(8,0,255,0.75)] [&_p]:transition-colors [&_p]:duration-300 hover:[&_p]:text-[#d4d422]" data-node-id="1:45527" data-name="Offered">
        <div className="flex w-fit max-w-full flex-col gap-[10px]">
          <p className="text-left" data-node-id="1:45528">
            <span className="font-['Poppins:ExtraBold']">|</span>
            <span>{` Database Development`}</span>
          </p>
          <p className="text-left" data-node-id="1:45529">
            <span className="font-['Poppins:ExtraBold']">|</span>
            <span>{` Full-stack web & mobile applications`}</span>
          </p>
          <p className="text-left" data-node-id="1:45531">
            <span className="font-['Poppins:ExtraBold']">|</span>
            <span>{` UI/UX design and functional testing`}</span>
          </p>
          <p className="text-left" data-node-id="1:45530">
            <span className="font-['Poppins:ExtraBold']">|</span>
            <span>{` Data analytics & backend architecture`}</span>
          </p>
        </div>
      </div>
      </div>
      <div role="link" tabIndex={0} onClick={() => setIsResumeOpen(true)} onKeyDown={(e) => e.key === "Enter" && setIsResumeOpen(true)} className="absolute contents left-[1302px] top-[847px] cursor-pointer group" data-node-id="1:45532" data-name="Resume">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Medium'] h-[42.233px] leading-[15px] left-[1376.5px] not-italic text-[15px] text-center text-white top-[949.77px] tracking-[0.75px] w-[149px] transition-colors duration-300 group-hover:text-[#ff1607] [-webkit-text-stroke:1px_black] [paint-order:stroke]" style={{ WebkitTextStroke: "1px black" }} data-node-id="1:45533">
          View Alicia’s Resume
        </p>
        <div className="absolute h-[85.874px] left-[1335.74px] top-[847px] w-[75.906px] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" data-node-id="1:45534" data-name="text_line_pdf">
          <div className="absolute inset-[0_0_0_14.29%]" data-node-id="1:45535" data-name="file_line">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFileLine} />
          </div>
          <div className="absolute bg-[#ff1607] bottom-[14.87px] content-stretch flex h-[18px] items-center left-0 overflow-clip px-[5px] py-[4px] rounded-[4px] w-[34px]" data-node-id="1:45536" data-name="tag_text">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[-0.26px] uppercase whitespace-nowrap" data-node-id="I1:45536;54:263">
              <p className="leading-[normal]">pdf</p>
            </div>
          </div>
        </div>
        <CursorDefaultWhite className="absolute flex h-[29.522px] items-center justify-center left-[1413.24px] top-[906.92px] w-[26.717px] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
      </div>
      <div className="absolute flex h-[186px] items-center justify-center left-[24px] top-[181px] w-[260px] transition-all duration-300 hover:rotate-6 hover:scale-110 hover:brightness-150 hover:hue-rotate-[10deg]" style={{ transform: "translateX(var(--screen-shift-left, 0px))" }} data-node-id="1:45539">
        <div className="flex-none rotate-[0.29deg]">
          <p className="font-['Poppins:Black'] h-[185px] leading-[95px] not-italic relative text-[64px] text-[rgba(8,0,255,0.6)] tracking-[3.2px] whitespace-nowrap">
            About<br aria-hidden />Me!
          </p>
        </div>
      </div>
      {isResumeOpen && (
        <div className="absolute z-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px]">
          <div className="relative w-full shadow-[2px_2px_0px_0px_#000000]">
            <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e,inset_4px_4px_0px_0px_#b1b1b1]" />
            <div className="relative bg-[#02007f] flex items-center justify-between mx-[4px] mt-[4px] px-[4px] py-[3px]">
              <p className="font-['Pixelify_Sans:Regular'] text-[24px] text-white ml-[4px]">Bactasa-Resume.pdf</p>
              <div role="button" aria-label="Close" onClick={() => setIsResumeOpen(false)} className="contents cursor-pointer">
                <div className="relative shrink-0 size-[24px]">
                  <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e]" />
                  <div className="absolute bottom-1/4 left-[21.88%] overflow-clip right-1/4 top-[21.88%]">
                    <div className="absolute contents left-[2px] top-px">
                      <div className="absolute bg-black h-[3px] left-[2px] top-px w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[2px] top-[9px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[9px] top-px w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[9px] top-[9px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[4px] top-[4px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[4px] top-[6px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[7px] top-[4px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[7px] top-[6px] w-[2px]" />
                      <div className="absolute bg-black h-[3px] left-[5px] top-[5px] w-[3px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-[16px] flex flex-col items-center gap-[16px] mt-[4px]">
              <div className="w-full bg-white h-[400px] border border-black shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center p-[20px] overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <iframe src="/bactasa-resume.pdf#view=FitH" className="w-full h-full border-none" title="Resume Preview" />
                </div>
              </div>
              <button 
                onClick={() => window.open("/bactasa-resume.pdf", "_blank")}
                className="relative px-[32px] py-[6px] font-['Pixelify_Sans:Regular'] text-[20px] cursor-pointer focus:outline-none focus:after:absolute focus:after:inset-[4px] focus:after:border focus:after:border-dotted focus:after:border-black active:pt-[8px] active:pb-[4px] active:pl-[34px] active:pr-[30px] active:[&>div:last-of-type]:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_4px_4px_0px_0px_#7e7e7e]"
              >
                <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e]" />
                <span className="relative z-10 text-black">View Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}