import { bevel } from "./win";

export function CloseGlyph() {
  return (
    <svg viewBox="0 0 12 12" className="size-[55%]" aria-hidden shapeRendering="crispEdges">
      <path d="M1 1h2v2H1zM9 1h2v2H9zM3 3h2v2H3zM7 3h2v2H7zM5 5h2v2H5zM3 7h2v2H3zM7 7h2v2H7zM1 9h2v2H1zM9 9h2v2H9z" fill="#000" />
    </svg>
  );
}

export function MinGlyph() {
  return (
    <svg viewBox="0 0 12 12" className="size-[55%]" aria-hidden shapeRendering="crispEdges">
      <path d="M1 9h10v2H1z" fill="#000" />
    </svg>
  );
}

export function TitleBtn({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`relative flex size-[28px] shrink-0 cursor-pointer items-center justify-center bg-[#c3c3c3] ${bevel} active:pt-[2px] active:pl-[2px]`}
    >
      {children}
    </button>
  );
}

export function PushButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer bg-[#c3c3c3] px-[28px] py-[6px] font-['Pixelify_Sans:Regular'] text-[20px] text-black ${bevel} focus:outline-none focus-visible:outline-1 focus-visible:outline-dotted focus-visible:-outline-offset-4 active:pt-[8px] active:pb-[4px] active:pl-[30px] active:pr-[26px]`}
    >
      {children}
    </button>
  );
}
