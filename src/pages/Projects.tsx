import { useCallback, useEffect, useRef, useState } from "react";
import NavLinks from "../components/NavLinks";
const assetPathPrefix = "/assets";
const imgDocumentsFolder11 = `${assetPathPrefix}/76962.png`;
const imgComputerWithPrograms11 = `${assetPathPrefix}/7a2df.png`;
const imgHighlight = `${assetPathPrefix}/06200.png`;
const imgShadow = `${assetPathPrefix}/e4ae9.svg`;
const imgCase = `${assetPathPrefix}/875a6.svg`;
const imgBottom = `${assetPathPrefix}/d916e.svg`;
const imgHighlights = `${assetPathPrefix}/69d77.svg`;
const imgRightShadow = `${assetPathPrefix}/8d8f0.svg`;
const imgLeftShadow = `${assetPathPrefix}/00bc5.svg`;
const imgHighlights1 = `${assetPathPrefix}/f6211.svg`;
const imgRightShadow1 = `${assetPathPrefix}/54ebf.svg`;
const imgLeftShadow1 = `${assetPathPrefix}/49e62.svg`;
const imgBorderLines = `${assetPathPrefix}/99e4f.svg`;
const imgVitejs = `${assetPathPrefix}/8e472.svg`;
const imgTypescript = `${assetPathPrefix}/20988.svg`;
const imgPostgresql = `${assetPathPrefix}/11512.svg`;
const imgPostman = `${assetPathPrefix}/a08bd.svg`;

type MediumIconsProps = {
  className?: string;
  icon?: "Documents";
};

function MediumIcons({ className, icon = "Documents" }: MediumIconsProps) {
  return (
    <div className={className || "overflow-clip relative size-[56px]"} data-node-id="1:45236">
      <div className="absolute inset-[-16.07%]" data-node-id="1:45237" data-name="Documents Folder-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDocumentsFolder11} />
      </div>
    </div>
  );
}

type DesktopIconsProps = {
  className?: string;
  icon?: "My Computer";
};

function DesktopIcons({ className, icon = "My Computer" }: DesktopIconsProps) {
  return (
    <div className={className || "relative size-[64px]"} data-node-id="1:45249">
      <div className="absolute left-0 size-[64px] top-0" data-node-id="1:45250" data-name="Computer with programs-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComputerWithPrograms11} />
      </div>
    </div>
  );
}

type UtilityIconsProps = {
  className?: string;
  icon?: "Close";
  onOff?: "On";
};

function UtilityIcons({ className, icon = "Close", onOff = "On" }: UtilityIconsProps) {
  return (
    <div className={className || "overflow-clip relative size-[17px]"} data-node-id="1:45093">
      <div className="absolute contents left-[2px] top-px" data-node-id="1:45094">
        <div className="absolute bg-black h-[3px] left-[2px] top-px w-[2px]" data-node-id="1:45095" />
        <div className="absolute bg-black h-[3px] left-[2px] top-[13px] w-[2px]" data-node-id="1:45096" />
        <div className="absolute bg-black h-[3px] left-[13px] top-px w-[2px]" data-node-id="1:45097" />
        <div className="absolute bg-black h-[3px] left-[13px] top-[13px] w-[2px]" data-node-id="1:45098" />
        <div className="absolute bg-black h-[3px] left-[4px] top-[4px] w-[2px]" data-node-id="1:45099" />
        <div className="absolute bg-black h-[3px] left-[4px] top-[10px] w-[2px]" data-node-id="1:45100" />
        <div className="absolute bg-black h-[3px] left-[11px] top-[4px] w-[2px]" data-node-id="1:45101" />
        <div className="absolute bg-black h-[3px] left-[11px] top-[10px] w-[2px]" data-node-id="1:45102" />
        <div className="absolute bg-black h-[3px] left-[6px] top-[7px] w-[5px]" data-node-id="1:45103" />
      </div>
    </div>
  );
}

function SmallIconButton({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-node-id="1:45141" data-name="Small Icon Button">
      <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e]" />
      <UtilityIcons className="absolute bottom-1/4 left-[21.88%] overflow-clip right-1/4 top-[21.88%]" />
    </div>
  );
}

export type Project = {
  name: string;
  image?: string;
  live?: string;
  github: string;
  tagline: string;
  desc: string;
  features: string;
  integrations: string;
  tech: string;
};

export const projects: Project[] = [
  {
    name: "Dimetrix",
    image: "/projects/Dimetrix.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Dimetrix",
    tagline: "Power Outage Mapping & Analytics Platform",
    desc: "Dimetrix is a web-based geographic incident monitoring platform designed to visualize and track power outages, exploded transformers, scheduled brownouts, and other electrical disruptions. Instead of relying on scattered announcements and social media reports, users can access a centralized interactive map showing affected locations and the current status of reported incidents.\n\nBeyond mapping incidents, Dimetrix transforms outage reports into meaningful statistics and visual insights. Users and decision-makers can identify frequently affected areas, analyze recurring incidents, monitor outage trends, and better understand patterns in electrical disruptions over time.",
    features: "Interactive outage map · Incident reporting · Location-based filtering · Incident verification · Status tracking · Historical outage records · Area-based statistics · Outage trend visualization · Search and filtering · Analytics dashboard",
    integrations: "Maps and Geocoding API · Weather API for correlating weather conditions with outages · Notification services for incident updates",
    tech: "Next.js · TypeScript · Tailwind CSS · Node.js · REST API · PostgreSQL · Neon ·Postgresql · Recharts/Chart.js"
  },
  {
    name: "Caytori",
    image: "/projects/caytori.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Caytori",
    tagline: "Multi-Company IT Support & Ticketing Platform",
    desc: "Caytori is a multi-company web application designed to centralize and streamline IT support workflows. Instead of employees reporting technical problems through scattered emails, messaging applications, and verbal requests, Caytori provides a structured ticketing system where issues can be submitted, prioritized, assigned, tracked, and resolved.\n\nThe platform supports separate company workspaces while giving IT teams and administrators the tools to monitor ticket activity and support performance. Analytics can provide insights into ticket volume, resolution times, recurring technical issues, and overall IT service efficiency.",
    features: "Multi-company workspaces · Ticket creation and tracking · Priority and status management · IT personnel assignment · Comments and activity history · File attachments · Role-based access · Ticket analytics · Resolution time tracking · Search and filtering · Audit logs",
    integrations: "AI API for ticket classification, summarization, or troubleshooting suggestions · Email API for notifications · Cloud storage for attachments",
    tech: "React · Vite · TypeScript · Tailwind CSS · shadcn/ui · ASP.NET Core Web API · C# · Entity Framework Core · PostgreSQL · Supabase or cloud storage · REST API · JWT Authentication · Recharts/Chart.js"
  },
  {
    name: "AbyssalFlow",
    image: "/projects/AbyssalFlow.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Abyssal-Flow",
    tagline: "Immersive Menstrual Cycle Tracking Mobile Application",
    desc: "AbyssalFlow is a mobile application that reimagines traditional menstrual cycle tracking through an immersive ocean-inspired experience. Rather than presenting cycle information through a purely clinical interface, the application uses changing tides, underwater environments, and dynamic visual states to represent different phases of the menstrual cycle.\n\nUsers can track their cycle, symptoms, moods, and personal patterns while receiving predictions and reminders. The visual environment can adapt based on the user's current cycle phase, creating a more personal and engaging approach to health tracking.",
    features: "Cycle tracking and prediction · Period logging · Symptom tracking · Mood logging · Dynamic ocean-inspired environments · Phase-based visual changes · Historical cycle data · Personalized insights · Cycle reminders · Secure cloud synchronization",
    integrations: "Push notification services · Calendar integration · Optional AI-powered summaries and insights",
    tech: "React Native · TypeScript · Expo · Expo Router · Supabase · PostgreSQL · Supabase Auth · Supabase Storage · Expo Notifications · Zustand or React Context · React Native Reanimated · Lottie"
  },
  {
    name: "Noir Detailing",
    image: "/projects/NoirDetailing.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Carwash-Booking-System",
    tagline: "Carwash Booking & Subscription Management System",
    desc: "Noir Detailing is a carwash booking and management platform that supports both one-time service appointments and subscription-based memberships. Customers can select detailing services, register their vehicles, choose available schedules, and manage bookings through a centralized system.\n\nThe platform also helps administrators manage appointment schedules, service capacity, customer records, subscriptions, and booking activity. Business rules such as available operating hours, bay allocation, and booking limits can be integrated into the scheduling system to prevent overbooking.",
    features: "One-time and subscription bookings · Vehicle management · Service selection · Appointment scheduling · Availability checking · Bay allocation · Capacity management · Booking history · Subscription tracking · Administrative dashboard · Payment verification · Booking notifications",
    integrations: "Payment integration · Email confirmation services · Notification and appointment reminders",
    tech: "Vue.js · Node.js · Express.js · Prisma ORM · Neon · PostgreSQL · REST API · JWT or secure session authentication · Nodemailer/Email API · paymongo"
  },
  {
    name: "Lumen",
    image: "/projects/lumen.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Lumen",
    tagline: "Matcha & Hojicha E-Commerce Platform",
    desc: "Lumen is a specialty tea e-commerce platform offering matcha, hojicha powders, tea accessories, and branded merchandise. Customers can browse products, compare flavor profiles and grades, manage their cart, and place orders through a streamlined online storefront.\n\nBeyond traditional e-commerce, Lumen features a tea preference quiz that recommends products based on predefined preferences such as flavor, intensity, preparation method, and experience level. The platform also provides product information and preparation guides to help customers better understand and enjoy their tea.",
    features: "Product catalog · Matcha & hojicha products · Product variants · Flavor and origin profiles · Tea preference quiz · Rule-based recommendations · Shopping cart · Wishlist · Checkout · Customer accounts · Order tracking · Inventory management · Product reviews · Discount codes · Tea preparation guides · Sales analytics",
    integrations: "Payment API · Google OAuth · Email/notification services · Shipping and tracking API · Cloud storage for product images · Maps API for store locations",
    tech: "Next.js · TypeScript · Tailwind CSS · shadcn/ui · Node.js · PostgreSQL · Prisma ORM · Supabase · REST API · PayMongo/Stripe · Supabase Storage · Recharts/Chart.js"
  },
  {
    name: "DriveGo",
    image: "/projects/DriveGo.png",
    github: "https://github.com/Alicia-Kate-Bactasa/DriveGo",
    tagline: "Centralized Donation Drive Discovery Platform",
    desc: "DriveGo is a centralized platform designed to make donation drives easier to discover, access, and manage. Instead of campaigns being scattered across different social media platforms, messaging applications, and organization pages, DriveGo provides a single system where organizations can publish and manage donation campaigns. Users can explore active donation drives, view campaign details and accepted donation requirements, discover nearby initiatives, and follow updates from organizers. The platform can also provide campaign statistics and progress tracking to make donation efforts more transparent and accessible.",
    features: "Centralized donation drive directory · Campaign creation and management · Categories and filtering · Search functionality · Location-based discovery · Donation requirements · Campaign deadlines · Progress tracking · Organization profiles · Campaign updates · Saved campaigns · Administrative moderation",
    integrations: "Maps API for locating donation centers · Payment integration for monetary donations · Notification services · Cloud storage for campaign images and documents",
    tech: "Vue.js · TypeScript · Vite · Tailwind CSS · Pinia · Vue Router · Node.js · Express.js or ASP.NET Core Web API · PostgreSQL · Prisma ORM or Entity Framework Core · REST API · Cloud storage · Mapbox/Google Maps API"
  },
  {
    name: "Exec-Space",
    image: "/projects/exec-space.png",
    github: "https://github.com/Alicia-Kate-Bactasa/Exec-Space",
    tagline: "Browser-Based Multi-Language Code Execution Environment",
    desc: "Exec-Space is a browser-based coding environment that allows users to write, compile, and execute programs directly from their browser. The platform supports multiple programming languages, such as C, C++, and JavaScript, allowing users to experiment with code without configuring a local development environment.\n\nUsers can select a language, write code using an interactive editor, provide standard input, execute their program, and view output or compiler errors. The system can also support saved projects and execution history, making it useful as both a coding workspace and learning environment.",
    features: "Multi-language code execution · Interactive code editor · Syntax highlighting · Standard input and output · Compiler and runtime error display · Language switching · Execution history · Saved code projects · Resource and execution limits · Shareable code snippets",
    integrations: "Code execution API · Authentication · Cloud storage · WebSockets for future real-time collaboration",
    tech: "React · Vite · TypeScript · Tailwind CSS · Monaco Editor · Node.js or ASP.NET Core · PostgreSQL · Docker · Judge0 API · REST API · WebSockets/Socket.IO · JWT Authentication"
  }
];

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [open, setOpen] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(open);
  const alertOpenRef = useRef(alertOpen);
  const alertWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    alertOpenRef.current = alertOpen;
  }, [alertOpen]);

  const triggerVibrate = useCallback(() => {
    if (openRef.current) {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {}
      }
      if (windowRef.current) {
        windowRef.current.classList.remove("animate-window-vibrate");
        void windowRef.current.offsetWidth;
        windowRef.current.classList.add("animate-window-vibrate");
      }
    } else {
      setOpen(true);
    }
  }, []);

  const triggerFolderVibrate = useCallback(() => {
    if (alertOpenRef.current) {
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate([100, 50, 100]);
        } catch {}
      }
      if (alertWindowRef.current) {
        alertWindowRef.current.classList.remove("animate-window-vibrate");
        void alertWindowRef.current.offsetWidth;
        alertWindowRef.current.classList.add("animate-window-vibrate");
      }
    } else {
      setAlertOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleVibrateEvent = () => {
      triggerVibrate();
    };
    window.addEventListener("vibrate-myprojects", handleVibrateEvent);
    return () => window.removeEventListener("vibrate-myprojects", handleVibrateEvent);
  }, [triggerVibrate]);

  const step = (d: number) => {
    setDir(d);
    setIdx((i) => (i + d + projects.length) % projects.length);
  };
  return (
    <div className="relative w-[1440px] h-[1024px] overflow-visible bg-transparent" data-node-id="1:45540" data-name="Featured Projects">
      <div className="keycap-header-wrapper absolute left-0 top-0 z-30" style={{ transform: "translateX(var(--keycap-shift, 0px))" }}>
        <NavLinks />
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45542" data-name="Light Case">
        <div className="absolute contents left-[-23px] top-0" data-node-id="1:45543" data-name="Case">
          <div className="absolute h-[6.495px] left-[29.22px] mix-blend-luminosity top-[148.5px] w-[780.553px]" data-node-id="1:45544" data-name="Shadow">
            <div className="absolute inset-[0_-1.92%_-461.88%_-1.92%]">
              <img alt="" className="block max-w-none size-full" src={imgShadow} />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.01)] h-[50.19px] left-[15.48px] mix-blend-luminosity rounded-tl-[200px] rounded-tr-[200px] shadow-[0px_0px_200px_0px_rgba(38,38,38,0.15)] top-0 w-[808.038px]" data-node-id="1:45545" data-name="Shadow" />
          <div className="absolute flex h-[127.838px] items-center justify-center left-[-23px] mix-blend-color-dodge top-[21.85px] w-[38.478px]" data-node-id="1:45547">
            <div className="flex-none rotate-180">
              <div className="bg-[rgba(255,255,255,0.01)] h-[127.838px] relative rounded-br-[50px] rounded-tr-[50px] shadow-[0px_0px_150px_0px_rgba(255,255,255,0.5)] w-[38.478px]" data-name="Light" />
            </div>
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] top-[16.83px] w-[808.038px]" data-node-id="1:45548" data-name="Case">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCase} />
          </div>
          <div className="absolute h-[6.495px] left-[15.48px] top-[148.5px] w-[808.038px]" data-node-id="1:45549" data-name="Bottom">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBottom} />
          </div>
          <div className="absolute h-[138.171px] left-[15.48px] mix-blend-overlay rounded-bl-[20px] rounded-tl-[10px] top-[16.83px] w-[13.742px]" data-node-id="1:45550" data-name="Highlight">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-tl-[10px] size-full" src={imgHighlight} />
          </div>
        </div>
        <div className="absolute contents left-[48.46px] top-[31px]" data-node-id="1:45551" data-name="Key cutouts">
          <div className="absolute border border-[#2f2f2f] border-solid h-[107.467px] left-[48.46px] pointer-events-none rounded-[5.67px] top-[31px] w-[742.075px]" data-node-id="1:45552" data-name="Alpha / Control Keys">
            <div aria-hidden className="absolute bg-[#1e1e1e] inset-0 rounded-[5.67px]" />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_8px_1px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
        <div className="absolute contents left-[51px] top-[32px]" data-node-id="1:45553" data-name="Keycaps">
          <div className="absolute h-[105px] left-[51px] top-[32px] w-[112px]" data-node-id="1:45554" data-name="60% Keycaps">
            <div className="absolute bg-[#a7d0db] inset-0 rounded-[5.669px]" data-node-id="I1:45554;6:96043" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45554;6:96044" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45554;6:96046" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45554;6:96047" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45554;6:96056" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45554;6:96058" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45554;6:96059" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45554;6:96061" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[165px] top-[32px] w-[112px]" data-node-id="1:45555" data-name="60% Keycaps">
            <div className="absolute bg-[#ffadce] inset-0 rounded-[5.669px]" data-node-id="I1:45555;7:4801" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45555;7:4802" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45555;7:4804" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45555;7:4805" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45555;7:4814" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45555;7:4816" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45555;7:4817" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45555;7:4819" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[278px] top-[32px] w-[112px]" data-node-id="1:45556" data-name="60% Keycaps">
            <div className="absolute bg-[#009bca] inset-0 rounded-[5.669px]" data-node-id="I1:45556;6:97377" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45556;6:97378" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45556;6:97380" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45556;6:97381" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45556;6:97390" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45556;6:97392" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45556;6:97393" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45556;6:97395" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[504px] top-[32px] w-[285px]" data-node-id="1:45557" data-name="60% Keycaps">
            <div className="absolute bg-[#ffc100] inset-0 rounded-[5.669px]" data-node-id="I1:45557;6:10000" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45557;6:10001" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45557;6:10003" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45557;6:10004" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights1} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45557;6:10013" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45557;6:10015" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow1}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45557;6:10016" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45557;6:10018" style={{ maskImage: `url("${imgLeftShadow1}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
          <div className="absolute h-[105px] left-[391px] top-[32px] w-[112px]" data-node-id="1:45558" data-name="60% Keycaps">
            <div className="absolute bg-[#857eb1] inset-0 rounded-[5.669px]" data-node-id="I1:45558;6:32678" data-name="Base Fill" />
            <div className="absolute contents left-0 top-0" data-node-id="I1:45558;6:32679" data-name="Shadow / Highlights">
              <div className="absolute inset-0 mix-blend-overlay pointer-events-none rounded-[5.669px]" data-node-id="I1:45558;6:32681" data-name="Inner Shadow">
                <div aria-hidden className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[5.669px]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_0px_10px_0px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute inset-[0_0.05%_0_0]" data-node-id="I1:45558;6:32682" data-name="Highlights">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlights} />
              </div>
              <div className="absolute contents inset-[0_0.05%_0.05%_74.97%]" data-node-id="I1:45558;6:32691" style={{ containerType: "size" }} data-name="Right Shadow">
                <div className="absolute flex inset-[2.94%_-30.82%_4.46%_91.13%] items-center justify-center mix-blend-overlay" data-node-id="I1:45558;6:32693" style={{ containerType: "size" }}>
                  <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                    <div className="bg-[rgba(0,0,0,0.01)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.995px_-1.999px] mask-size-[16.992px_67.969px] opacity-20 relative rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[12.5px] shadow-[0px_0px_2px_1px_black] size-full" style={{ maskImage: `url("${imgRightShadow}")` }} data-name="Right Shadow" />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[0_75.01%_0.05%_0]" data-node-id="I1:45558;6:32694" data-name="Left Shadow">
                <div className="absolute bg-[rgba(0,0,0,0.01)] inset-[7.35%_94.12%_0.05%_-30.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20.99px_-4.998px] mask-size-[16.992px_67.969px] mix-blend-overlay opacity-20 rounded-bl-[5.67px] rounded-br-[12.5px] rounded-tl-[5.67px] rounded-tr-[5.67px] shadow-[0px_0px_2px_1px_black]" data-node-id="I1:45558;6:32696" style={{ maskImage: `url("${imgLeftShadow}")` }} data-name="Left Shadow" />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents font-['Poppins:Regular'] left-[71px] not-italic top-[37px]" data-node-id="1:45559" data-name="Key Letter">
          <p className="absolute leading-[20px] left-[71px] text-[#376a76] text-[16px] top-[44px] whitespace-nowrap" data-node-id="1:45560">
            Home
          </p>
          <p className="absolute leading-[20px] left-[185px] text-[#ff4691] text-[16px] top-[43px] whitespace-pre" data-node-id="1:45561">
            About
            <br aria-hidden />
            Me
          </p>
          <p className="absolute leading-[20px] left-[298px] text-[#c2f1ff] text-[13px] top-[42px] w-[60px]" data-node-id="1:45562">
            Featured
            <br aria-hidden />
            Projects
          </p>
          <div className="absolute leading-[0] left-[412px] text-[#f1efff] text-[13px] top-[42px] w-[60px]" data-node-id="1:45563">
            <p className="leading-[20px] mb-0">Tech</p>
            <p className="leading-[20px]">Stack</p>
          </div>
          <p className="absolute leading-[30px] left-[556px] text-[16px] text-white top-[37px] w-[140px]" data-node-id="1:45564">
            Work with Me
          </p>
        </div>
      </div>
      </div>
      {open && (
        <div
          ref={windowRef}
          onAnimationEnd={() => windowRef.current?.classList.remove("animate-window-vibrate")}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <div className="pointer-events-auto absolute h-[772px] left-[228px] top-[197px] w-[983px]" data-node-id="1:45565" data-name="Figma">
            <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
            <div className="absolute inset-[94px_7px_46px_5px] pointer-events-none" data-node-id="1:45566">
              <div aria-hidden className="absolute bg-white inset-0" />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_4px_4px_0px_0px_#7e7e7e]" />
            </div>
            <div className="absolute bg-[#02007f] content-stretch flex items-center justify-between left-[5px] pl-[8px] pr-[4px] py-[5px] right-[5px] top-[4px]" data-node-id="1:45567" data-name="Component 3">
              <div
                role="button"
                tabIndex={0}
                onClick={triggerVibrate}
                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer"
                data-node-id="I1:45567;61:4318"
              >
                <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="I1:45567;61:4319" data-name="Small Icons">
                  <div className="absolute left-0 size-[32px] top-0" data-node-id="I1:45567;61:4319;35:331" data-name="Computer with programs-1 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-[-1.55%] max-w-none size-full top-[9.45%]" src={imgComputerWithPrograms11} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] col-1 font-['Pixelify_Sans:Regular'] font-normal leading-[normal] ml-[38px] mt-[2px] relative row-1 text-[30px] text-white whitespace-nowrap" data-node-id="I1:45567;61:4320">
                  My Projects
                </p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-node-id="I1:45567;61:4321">
                <div role="button" aria-label="Minimize" onClick={() => setOpen(false)} className="relative shrink-0 size-[32px] cursor-pointer" data-node-id="I1:45567;61:4322" data-name="Small Icon Button">
                  <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e]" />
                  <div className="absolute bottom-1/4 left-[21.88%] overflow-clip right-1/4 top-[21.88%]" data-node-id="I1:45567;61:4322;22:16" data-name="Utility Icons">
                    <div className="absolute contents left-px top-[14px]" data-node-id="I1:45567;61:4322;22:16;40:64">
                      <div className="absolute bg-black h-[2px] left-px top-[14px] w-[15px]" data-node-id="I1:45567;61:4322;22:16;40:65" />
                    </div>
                  </div>
                </div>
                <div role="button" aria-label="Close" onClick={() => setOpen(false)} className="contents cursor-pointer"><SmallIconButton className="relative shrink-0 size-[32px]" /></div>
              </div>
            </div>
            <div className="absolute h-[46px] left-0 top-[50px] w-[232px]" data-node-id="1:45568" data-name="Panel Menu">
              <div className="[word-break:break-word] absolute bottom-[21.74%] content-stretch flex font-['Pixelify_Sans:Regular'] font-normal gap-[32px] items-start left-[16px] text-[26px] text-black top-[21.74%] whitespace-nowrap" data-node-id="I1:45568;61:5140">
                <p className="leading-[0] relative shrink-0 cursor-pointer hover:bg-[#02007f] hover:text-white" onClick={() => window.open(projects[idx].github, "_blank")} data-node-id="I1:45568;61:5118">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[26px] underline">V</span>
                  <span className="leading-[26px]">iew Live Website</span>
                </p>
                <p className="leading-[0] relative shrink-0 cursor-pointer hover:bg-[#02007f] hover:text-white" onClick={() => window.open(projects[idx].github, "_blank")} data-node-id="I1:45568;61:5124">
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[26px] underline">V</span>
                  <span className="leading-[26px]">iew Github</span>
                </p>
                <p className="leading-[26px] relative shrink-0" data-node-id="I1:45568;61:5134">
                  ​
                </p>
              </div>
            </div>
            <p onClick={() => step(1)} className="cursor-pointer [word-break:break-word] absolute font-['Pixelify_Sans:Regular'] font-normal inset-[94.82%_1.93%_1.81%_90.74%] leading-[0] text-[30px] text-black whitespace-nowrap" data-node-id="1:45569">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[26px] underline">N</span>
              <span className="leading-[26px]">ext</span>
            </p>
            <div className="absolute content-stretch flex h-[34px] items-center left-[9px] right-[5px] top-[98px]" data-node-id="1:45570">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-6px] place-items-start relative shrink-0" data-node-id="1:45571">
                <div className="col-1 h-[34px] ml-0 mt-0 pointer-events-none relative row-1 w-[373px]" data-node-id="1:45572">
                  <div aria-hidden className="absolute bg-[#c3c3c3] inset-0" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#f0f0f0,inset_2px_2px_0px_0px_#7e7e7e]" />
                </div>
                <p className="[word-break:break-word] col-1 font-['Pixelify_Sans:Regular'] font-normal leading-[normal] ml-[6px] mt-0 relative row-1 text-[22px] text-black w-[352px] whitespace-pre-wrap" data-node-id="1:45573">{`seven   featured project(s)`}</p>
              </div>
              <div className="h-[34px] pointer-events-none relative shrink-0 w-[605px]" data-node-id="1:45574">
                <div aria-hidden className="absolute bg-[#c3c3c3] inset-0" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#f0f0f0,inset_2px_2px_0px_0px_#7e7e7e]" />
              </div>
            </div>
            <div className="absolute content-stretch flex h-[34px] items-center left-[7px] right-[7px] top-[561px]" data-node-id="1:45575">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-6px] place-items-start relative shrink-0" data-node-id="1:45576">
                <div className="col-1 h-[102px] ml-0 mt-0 pointer-events-none relative row-1 w-[373px]" data-node-id="1:45577">
                  <div aria-hidden className="absolute bg-[#c3c3c3] inset-0" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#f0f0f0,inset_2px_2px_0px_0px_#7e7e7e]" />
                </div>
                <p className="[word-break:break-word] col-1 font-['Pixelify_Sans:Regular'] font-normal leading-[normal] ml-[11px] mt-[15px] relative row-1 text-[32px] text-black w-[352px]" data-node-id="1:45578">
                  ({idx + 1}) {projects[idx].name}
                </p>
              </div>
              <div className="h-[104px] pointer-events-none relative shrink-0 w-[608px]" data-node-id="1:45579">
                <div aria-hidden className="absolute bg-[#c3c3c3] inset-0" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#f0f0f0,inset_2px_2px_0px_0px_#7e7e7e]" />
              </div>
            </div>
            <div className="absolute h-[467px] left-[5px] top-[128px] w-[975px]" data-node-id="1:45580" data-name="Border Lines">
              <div className="absolute inset-[-0.43%_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgBorderLines} />
              </div>
            </div>
            <div className="absolute left-[389px] top-[537px] flex items-center justify-start gap-[16px] w-[592px] overflow-hidden" data-name="Tech Stack Logos">
              {projects[idx].tech.split(" · ").map(t => {
                const icons: Record<string, string> = { "Next.js": "nextjs/nextjs-original", "TypeScript": "typescript/typescript-original", "Tailwind CSS": "tailwindcss/tailwindcss-original", "Node.js": "nodejs/nodejs-original", "PostgreSQL": "postgresql/postgresql-original", "React": "react/react-original", "Vite": "vitejs/vitejs-original", "C#": "csharp/csharp-original", "Vue.js": "vuejs/vuejs-original", "Express.js": "express/express-original", "React Native": "react/react-original", "Docker": "docker/docker-original", "Prisma ORM": "prisma/prisma-original", "Supabase": "supabase/supabase-original", "ASP.NET Core Web API": "dotnetcore/dotnetcore-original", "Entity Framework Core": "dotnetcore/dotnetcore-original", "Vue Router": "vuejs/vuejs-original" };
                if (!icons[t]) return null;
                return <img key={t} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icons[t]}.svg`} alt={t} title={t} className="w-[40px] h-[40px] drop-shadow-sm" onError={(e) => (e.currentTarget.style.display = "none")} />;
              })}
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e,inset_4px_4px_0px_0px_#b1b1b1]" />
          </div>
          <div className="absolute bg-[#d9d9d9] h-[131px] left-[237px] top-[792px] w-[971px]" data-node-id="1:45618" />
          <div className="absolute bg-[#d9d9d9] h-[399px] left-[235px] top-[325px] w-[970px] -z-10" data-node-id="1:45619" />
          <div className="pointer-events-auto absolute left-[246px] top-[800px] w-[948px] h-[115px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-[16px] [&::-webkit-scrollbar-track]:bg-[#c3c3c3] [&::-webkit-scrollbar-track]:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)] [&::-webkit-scrollbar-thumb]:bg-[#02007f] [&::-webkit-scrollbar-thumb]:shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.5),inset_2px_2px_0px_rgba(255,255,255,0.3)] z-10">
            <p className="font-['Poppins:SemiBold'] text-[18px] text-black mb-[4px]">{projects[idx].tagline}</p>
            <p className="font-['Inter:Regular'] text-[14px] text-black whitespace-pre-wrap mb-[12px] leading-relaxed">
              {projects[idx].desc}
            </p>
            <div className="mb-[8px]">
              <span className="font-['Poppins:Bold'] text-[14px] text-[#02007f] mr-[8px]">Key Features:</span>
              <span className="font-['Inter:Regular'] text-[14px] text-black leading-relaxed">{projects[idx].features}</span>
            </div>
            <div className="mb-[8px]">
              <span className="font-['Poppins:Bold'] text-[14px] text-[#02007f] mr-[8px]">Integrations:</span>
              <span className="font-['Inter:Regular'] text-[14px] text-black leading-relaxed">{projects[idx].integrations}</span>
            </div>
            <div className="mb-[8px]">
              <span className="font-['Poppins:Bold'] text-[14px] text-[#02007f] mr-[8px]">Tech Stack:</span>
              <span className="font-['Inter:Regular'] text-[14px] text-black leading-relaxed">{projects[idx].tech}</span>
            </div>
          </div>
          <div className="pointer-events-auto absolute contents left-[142px] top-[552px]" data-node-id="1:45623" data-name="Nav Arrow">
            <div role="button" aria-label="Next project" onClick={() => step(1)} className="absolute contents cursor-pointer left-[1227px] top-[557px]" data-node-id="1:45624">
              <div className="absolute border border-black border-solid h-[50px] left-[1227px] pointer-events-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[557px] w-[54px]" data-node-id="1:45625">
                <div aria-hidden className="absolute bg-[#d9d9d9] inset-0" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_1px_0px_rgba(0,0,0,0.25)]" />
              </div>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans:Regular'] font-normal leading-[normal] left-[1246px] text-[32px] text-black top-[564px] whitespace-nowrap pointer-events-auto" data-node-id="1:45626">{`>`}</p>
            </div>
            <div role="button" aria-label="Previous project" onClick={() => step(-1)} className="absolute contents cursor-pointer left-[142px] top-[552px]" data-node-id="1:45627">
              <div className="absolute border border-black border-solid h-[50px] left-[142px] pointer-events-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[552px] w-[54px]" data-node-id="1:45628">
                <div aria-hidden className="absolute bg-[#d9d9d9] inset-0" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_1px_0px_rgba(0,0,0,0.25)]" />
              </div>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans:Regular'] font-normal leading-[normal] left-[157px] text-[32px] text-black top-[558px] whitespace-nowrap pointer-events-auto" data-node-id="1:45629">{`<`}</p>
            </div>
          </div>
          <div className="absolute left-[235px] top-[325px] w-[971px] h-[399px] overflow-hidden pointer-events-none" data-node-id="1:45630" data-name="Project Showcase Wrapper">
            <div className="group absolute inset-0 pointer-events-auto overflow-hidden">
              {projects[idx].image ? (
                <img
                  src={projects[idx].image}
                  alt={projects[idx].name}
                  className="size-full object-cover object-top select-none transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="size-full flex items-center justify-center bg-white text-gray-300 font-['Poppins:Bold'] text-2xl">
                  [ Image Placeholder ]
                </div>
              )}

              {/* Minimalist Blue Hover Overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center gap-[14px] bg-[#02007f]/70 backdrop-blur-[2px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <a
                  href={projects[idx].live || projects[idx].github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative px-[16px] py-[6px] bg-white text-[#02007f] font-['Pixelify_Sans:Regular'] text-[17px] tracking-wide shadow-[0px_2px_8px_rgba(0,0,0,0.3)] hover:bg-[#ffcc2a] hover:text-black transition-all duration-150 flex items-center gap-[6px] active:translate-y-[1px]"
                >
                  <span>View Live Website</span>
                  <span className="text-[14px] transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>
                <a
                  href={projects[idx].github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative px-[16px] py-[6px] bg-black/40 hover:bg-black/60 border border-white/70 text-white font-['Pixelify_Sans:Regular'] text-[17px] tracking-wide shadow-[0px_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-150 flex items-center gap-[6px] active:translate-y-[1px]"
                >
                  <span>View Repository</span>
                  <span className="text-[14px] transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_4px_4px_0px_0px_#7e7e7e]" />
            </div>
          </div>
        </div>
      )}
      <div 
        className="absolute z-20 flex flex-col gap-[24px] items-center left-[29px] top-[183px] w-[130px]" 
        style={{ transform: "translateX(var(--screen-shift-left, 0px))" }} 
        data-node-id="1:45620" 
        data-name="BG Apps"
      >
        <div 
          role="button" 
          tabIndex={0} 
          onClick={triggerVibrate} 
          onKeyDown={(e) => e.key === "Enter" && triggerVibrate()} 
          className="cursor-pointer flex flex-col gap-[12px] items-center w-[130px] transition-transform duration-200 hover:scale-105 active:scale-95" 
          data-node-id="1:45621" 
          data-name="Desktop Item"
        >
          <DesktopIcons className="relative shrink-0 size-[64px]" />
          <p className="[word-break:break-word] font-['Pixelify_Sans:Regular'] font-normal leading-[normal] text-[20px] text-center text-white w-[130px]" data-node-id="I1:45621;42:323">
            My Projects
          </p>
        </div>
        <div 
          role="button" 
          tabIndex={0} 
          onClick={triggerFolderVibrate} 
          onKeyDown={(e) => e.key === "Enter" && triggerFolderVibrate()} 
          className="cursor-pointer flex flex-col gap-[12px] items-center w-[130px] transition-transform duration-200 hover:scale-105 active:scale-95" 
          data-node-id="1:45622" 
          data-name="Desktop Item"
        >
          <div className="relative shrink-0 size-[64px]" data-node-id="I1:45622;42:357" data-name="Desktop Icons">
            <MediumIcons className="absolute left-0 overflow-clip size-[64px] top-0" />
          </div>
          <p className="[word-break:break-word] font-['Pixelify_Sans:Regular'] font-normal leading-[normal] text-[20px] text-center text-white w-[130px]" data-node-id="I1:45622;42:323">
            My Folder
          </p>
        </div>
      </div>
      {alertOpen && (
        <div className="absolute z-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[480px]">
          <div 
            ref={alertWindowRef}
            onAnimationEnd={() => alertWindowRef.current?.classList.remove("animate-window-vibrate")}
            className="relative w-full shadow-[2px_2px_0px_0px_#000000]"
          >
            <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e,inset_4px_4px_0px_0px_#b1b1b1]" />
            <div className="relative bg-[#02007f] flex items-center justify-between mx-[4px] mt-[4px] px-[4px] py-[3px]">
              <p className="font-['Pixelify_Sans:Regular'] text-[24px] text-white ml-[4px]">Error</p>
              <div role="button" aria-label="Close" onClick={() => setAlertOpen(false)} className="contents cursor-pointer">
                <SmallIconButton className="relative shrink-0 size-[24px]" />
              </div>
            </div>
            <div className="relative p-[24px] flex flex-col items-center gap-[24px] mt-[4px]">
              <div className="flex items-center gap-[20px] w-full">
                <div className="size-[48px] rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[32px] shrink-0 border-2 border-white shadow-[1px_1px_0px_1px_#000] drop-shadow-md">X</div>
                <p className="font-['Pixelify_Sans:Regular'] text-[24px] text-black leading-tight">You don't have the permissions to access this folder</p>
              </div>
              <button 
                onClick={() => setAlertOpen(false)}
                className="relative px-[40px] py-[4px] font-['Pixelify_Sans:Regular'] text-[24px] cursor-pointer focus:outline-none focus:after:absolute focus:after:inset-[4px] focus:after:border focus:after:border-dotted focus:after:border-black active:pt-[6px] active:pb-[2px] active:pl-[42px] active:pr-[38px] active:[&>div:last-of-type]:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_4px_4px_0px_0px_#7e7e7e]"
              >
                <div aria-hidden className="absolute bg-[#c3c3c3] inset-0 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e]" />
                <span className="relative z-10 text-black">OK</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}