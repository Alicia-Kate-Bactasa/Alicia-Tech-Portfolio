import NavLinks from "./NavLinks";

const assetPathPrefix = "/assets";
const imgHighlight = `${assetPathPrefix}/06200.png`;
const imgShadow = `${assetPathPrefix}/e4ae9.svg`;
const imgCase = `${assetPathPrefix}/875a6.svg`;
const imgBottom = `${assetPathPrefix}/d916e.svg`;
const imgHighlights = `${assetPathPrefix}/074fe.svg`;
const imgRightShadow = `${assetPathPrefix}/8d8f0.svg`;
const imgLeftShadow = `${assetPathPrefix}/00bc5.svg`;
const imgHighlights1 = `${assetPathPrefix}/24e85.svg`;
const imgRightShadow1 = `${assetPathPrefix}/54ebf.svg`;
const imgLeftShadow1 = `${assetPathPrefix}/49e62.svg`;

export default function KeycapHeader() {
  return (
    <div
      className="keycap-header-wrapper pointer-events-auto absolute left-0 top-0 z-40 select-none"
      style={{ transform: "translateX(var(--keycap-shift, 0px))" }}
    >
      <NavLinks />
      <div className="absolute contents left-[-23px] top-0" data-name="Light Case">
        <div className="absolute contents left-[-23px] top-0" data-name="Case">
          <div className="absolute h-[6.495px] left-[29.22px] mix-blend-luminosity top-[148.5px] w-[780.553px]" data-name="Shadow">
            <div className="absolute inset-[0_-1.92%_-461.88%_-1.92%]">
              <img alt="" className="block max-w-none size-full" src={imgShadow} />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.01)] h-[50.19px] left-[15.48px] mix-blend-luminosity rounded-tl-[200px] rounded-tr-[200px] shadow-[0px_0px_200px_0px_rgba(38,38,38,0.15)] top-0 w-[808.038px]" data-name="Shadow" />
          <div className="absolute bg-[rgba(255,255,255,0.01)] h-[127.838px] left-[823.52px] mix-blend-luminosity rounded-br-[50px] rounded-tr-[50px] top-[21.85px] w-[27.484px]" data-name="Shadow" />
          <div className="absolute flex h-[127.838px] items-center justify-center left-[-23px] mix-blend-color-dodge top-[21.85px] w-[38.478px]">
            <div className="flex-none rotate-180">
              <div className="bg-[rgba(255,255,255,0.01)] h-[127.838px] relative rounded-br-[50px] rounded-tr-[50px] shadow-[0px_0px_150px_0px_rgba(255,255,255,0.5)] w-[38.478px]" data-name="Light" />
            </div>
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] top-[16.83px] w-[808.038px]" data-name="Case">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCase} />
          </div>
          <div className="absolute h-[6.495px] left-[15.48px] top-[148.5px] w-[808.038px]" data-name="Bottom">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBottom} />
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] mix-blend-overlay rounded-bl-[20px] rounded-tl-[10px] top-[16.83px] w-[13.742px]" data-name="Highlight">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-tl-[10px] size-full" src={imgHighlight} />
          </div>
        </div>
        <div className="absolute contents left-[48.46px] top-[31px]" data-name="Key cutouts">
          <div className="absolute border border-[#2f2f2f] border-solid h-[107.467px] left-[48.46px] pointer-events-none rounded-[5.67px] top-[31px] w-[742.075px]" data-name="Alpha / Control Keys">
            <div aria-hidden className="absolute bg-[#1e1e1e] inset-0 rounded-[5.67px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_8px_1px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute contents left-[51px] top-[32px]" data-name="Keycaps">
          <div className="absolute h-[105px] left-[51px] top-[32px] w-[112px]" data-name="60% Keycaps">
            <div className="absolute bg-[#a7d0db] inset-0 rounded-[5.669px]" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[165px] top-[32px] w-[112px]" data-name="60% Keycaps">
            <div className="absolute bg-[#ffadce] inset-0 rounded-[5.669px]" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[278px] top-[32px] w-[112px]" data-name="60% Keycaps">
            <div className="absolute bg-[#009bca] inset-0 rounded-[5.669px]" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[504px] top-[32px] w-[285px]" data-name="60% Keycaps">
            <div className="absolute bg-[#ffc100] inset-0 rounded-[5.669px]" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights1} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow1}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" style={{ maskImage: `url("${imgLeftShadow1}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[391px] top-[32px] w-[112px]" data-name="60% Keycaps">
            <div className="absolute bg-[#857eb1] inset-0 rounded-[5.669px]" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Poppins:Regular'] left-[71px] not-italic top-[37px]" data-name="Key Letter">
          <p className="absolute leading-[20px] left-[71px] text-[#376a76] text-[16px] top-[44px] whitespace-nowrap">
            Home
          </p>
          <p className="absolute leading-[20px] left-[185px] text-[#ff4691] text-[16px] top-[43px] whitespace-pre">
            About
            <br aria-hidden />
            Me
          </p>
          <p className="absolute leading-[20px] left-[298px] text-[#c2f1ff] text-[13px] top-[42px] w-[60px]">
            Featured
            <br aria-hidden />
            Projects
          </p>
          <div className="absolute leading-[0] left-[412px] text-[#f1efff] text-[13px] top-[42px] w-[60px]">
            <p className="leading-[20px] mb-0">Tech</p>
            <p className="leading-[20px]">Stack</p>
          </div>
          <p className="absolute leading-[30px] left-[556px] text-[16px] text-white top-[37px] w-[140px]">
            Work with Me
          </p>
        </div>
      </div>
    </div>
  );
}
