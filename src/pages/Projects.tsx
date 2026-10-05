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

function UtilityIcons({ className }: UtilityIconsProps) {
  return (
    <div className={className || "flex items-center justify-center size-[16px]"} data-node-id="1:45093">
      <svg className="size-[10px] text-black" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" />
        <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" />
      </svg>
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

const DEV_ICONS: Record<string, string> = {
  "Next.js": "nextjs/nextjs-original",
  "TypeScript": "typescript/typescript-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  "Node.js": "nodejs/nodejs-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "Postgresql": "postgresql/postgresql-original",
  "Neon": "postgresql/postgresql-original",
  "React": "react/react-original",
  "Vite": "vitejs/vitejs-original",
  "C#": "csharp/csharp-original",
  "Vue.js": "vuejs/vuejs-original",
  "Express.js": "express/express-original",
  "React Native": "react/react-original",
  "Docker": "docker/docker-original",
  "Prisma ORM": "prisma/prisma-original",
  "Supabase": "supabase/supabase-original",
  "Supabase Auth": "supabase/supabase-original",
  "Supabase Storage": "supabase/supabase-original",
  "ASP.NET Core Web API": "dotnetcore/dotnetcore-original",
  "ASP.NET Core": "dotnetcore/dotnetcore-original",
  "Entity Framework Core": "dotnetcore/dotnetcore-original",
  "Vue Router": "vuejs/vuejs-original",
  "Pinia": "vuejs/vuejs-original",
  "Monaco Editor": "vscode/vscode-original",
  "Socket.IO": "socketio/socketio-original",
  "WebSockets/Socket.IO": "socketio/socketio-original",
  "Git": "git/git-original",
  "GitHub": "github/github-original",
  "Python": "python/python-original",
  "JavaScript": "javascript/javascript-original",
  "Expo": "expo/expo-original",
  "Expo Router": "expo/expo-original",
  "Expo Notifications": "expo/expo-original",
  "shadcn/ui": "react/react-original",
  "Recharts/Chart.js": "chartjs/chartjs-plain",
  "Chart.js": "chartjs/chartjs-plain",
  "Zustand or React Context": "react/react-original",
  "React Native Reanimated": "react/react-original",
  "Node.js or ASP.NET Core": "nodejs/nodejs-original",
  "Express.js or ASP.NET Core Web API": "express/express-original",
  "Prisma ORM or Entity Framework Core": "prisma/prisma-original",
};

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
    features: "Multi-language code execution · Interactive built-in code editor · Syntax highlighting · Standard input and output · Compiler and runtime error display · Language switching · Execution history · Saved code projects · Resource and execution limits · Shareable code snippets",
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

  const step = useCallback((d: number) => {
    setDir(d);
    setIdx((i) => (i + d + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        step(-1);
      } else if (e.key === "ArrowRight") {
        step(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);
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
          {/* Main 2-Column Windows 95 Application Window */}
          <div
            className="pointer-events-auto absolute h-[772px] left-[146px] top-[197px] w-[1226px] bg-[#c3c3c3] select-none flex flex-col p-[4px] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-4px_-4px_0px_0px_#7e7e7e,inset_4px_4px_0px_0px_#b1b1b1]"
            data-node-id="1:45565"
            data-name="Figma"
          >
            {/* 1. Title Bar */}
            <div
              className="bg-[#02007f] flex items-center justify-between px-[8px] py-[4px] shrink-0 select-none cursor-pointer"
              onClick={triggerVibrate}
              data-name="Title Bar"
            >
              <div className="flex items-center gap-[8px] min-w-0">
                <div className="size-[22px] shrink-0 overflow-hidden">
                  <img
                    alt="Window Icon"
                    src={imgComputerWithPrograms11}
                    className="size-full object-contain"
                  />
                </div>
                <p className="font-['Poppins:SemiBold'] text-[16px] text-white leading-none tracking-wide truncate">
                  My Projects — ({idx + 1}/{projects.length}) {projects[idx].name} : {projects[idx].tagline}
                </p>
              </div>
              <div className="flex items-center gap-[4px] shrink-0 ml-[8px]">
                <button
                  type="button"
                  aria-label="Minimize"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  className="size-[22px] bg-[#c3c3c3] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-3px_-3px_0px_0px_#7e7e7e] active:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0] flex items-center justify-center cursor-pointer"
                >
                  <div className="w-[10px] h-[2px] bg-black translate-y-[3px]" />
                </button>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  className="size-[22px] bg-[#c3c3c3] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-3px_-3px_0px_0px_#7e7e7e] active:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0] flex items-center justify-center cursor-pointer"
                >
                  <svg className="size-[10px] text-black" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" />
                    <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 2. Menu Bar */}
            <div className="flex items-center justify-between px-[8px] py-[3px] text-[13px] font-['Poppins:Medium'] border-b border-[#7e7e7e] bg-[#c3c3c3] shrink-0">
              <div className="flex items-center gap-[20px]">
                <button
                  type="button"
                  onClick={() => window.open(projects[idx].live || projects[idx].github, "_blank")}
                  className="cursor-pointer hover:bg-[#02007f] hover:text-white px-[4px] leading-tight flex items-center gap-[4px]"
                >
                  <span><span className="underline">V</span>iew Live Website &rarr;</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.open(projects[idx].github, "_blank")}
                  className="cursor-pointer hover:bg-[#02007f] hover:text-white px-[4px] leading-tight flex items-center gap-[4px]"
                >
                  <span><span className="underline">V</span>iew GitHub Repository &rarr;</span>
                </button>
              </div>
            </div>

            {/* 3. Sub-header: Quick Pager Tabs with Project Names */}
            <div className="flex items-center justify-between gap-[8px] px-[6px] py-[4px] shrink-0">
              <div className="h-[28px] px-[10px] bg-[#c3c3c3] shadow-[inset_2px_2px_0px_0px_#7e7e7e,inset_-2px_-2px_0px_0px_#f0f0f0] flex items-center shrink-0">
                <p className="font-['Poppins:SemiBold'] text-[13px] text-black leading-none">
                  7 featured project(s)
                </p>
              </div>

              <div className="flex-1 h-[28px] px-[6px] bg-[#c3c3c3] shadow-[inset_2px_2px_0px_0px_#7e7e7e,inset_-2px_-2px_0px_0px_#f0f0f0] flex items-center justify-end gap-[4px] overflow-x-auto">
                {projects.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setDir(i > idx ? 1 : -1);
                      setIdx(i);
                    }}
                    title={`${i + 1}. ${p.name}`}
                    className={`h-[22px] px-[8px] font-['Poppins:Medium'] text-[12px] cursor-pointer flex items-center justify-center whitespace-nowrap transition-all ${
                      i === idx
                        ? "bg-[#02007f] text-white shadow-[inset_1px_1px_0px_#000]"
                        : "bg-[#c3c3c3] text-black shadow-[inset_-1px_-1px_0px_#262626,inset_1px_1px_0px_#fff] hover:bg-[#dcdcdc]"
                    }`}
                  >
                    {i + 1}. {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Main 2-Column Content Area */}
            <div className="flex-1 min-h-0 flex gap-[8px] p-[4px] overflow-hidden">
              {/* Column 1: Full Picture Display Showcase (Encapsulated, No White Space) */}
              <div className="w-[700px] shrink-0 flex flex-col bg-[#c3c3c3] shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_3px_3px_0px_0px_#7e7e7e] p-[4px] overflow-hidden">
                {/* Showcase Header */}
                <div className="h-[28px] bg-[#02007f] text-white px-[10px] flex items-center justify-between text-[13px] font-['Poppins:Medium'] shrink-0 select-none">
                  <span className="truncate">Preview Showcase / {projects[idx].name}</span>
                  <span className="text-[12px] opacity-90">
                    {idx + 1} of {projects.length}
                  </span>
                </div>

                {/* Picture Frame: perfectly fits and encapsulates the entire picture with NO cropping and NO white space */}
                <div className="w-full relative bg-[#0e0e0e] overflow-hidden group select-none shadow-[inset_2px_2px_0px_0px_#000,inset_-2px_-2px_0px_0px_#333]">
                  {projects[idx].image ? (
                    <img
                      key={idx}
                      src={projects[idx].image}
                      alt={projects[idx].name}
                      className="w-full h-auto block select-none transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  ) : (
                    <div className="w-full h-[360px] flex items-center justify-center text-gray-500 font-['Poppins:Medium'] text-sm">
                      No image available
                    </div>
                  )}

                  {/* Clean Minimalist Hover Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center gap-[12px] bg-[#02007f]/75 backdrop-blur-[2px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <a
                      href={projects[idx].live || projects[idx].github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-[16px] py-[8px] bg-white text-[#02007f] font-['Poppins:SemiBold'] text-[14px] shadow-md hover:bg-[#ffcc2a] hover:text-black transition-all flex items-center gap-[6px] active:translate-y-[1px]"
                    >
                      <span>View Live Website</span>
                      <span>&rarr;</span>
                    </a>
                    <a
                      href={projects[idx].github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-[16px] py-[8px] bg-black/60 hover:bg-black/80 border border-white/70 text-white font-['Poppins:SemiBold'] text-[14px] shadow-md backdrop-blur-sm transition-all flex items-center gap-[6px] active:translate-y-[1px]"
                    >
                      <span>View Repository</span>
                      <span>&rarr;</span>
                    </a>
                  </div>

                  {/* 3D Inset border around image */}
                  <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0]" />
                </div>

                {/* Picture Toolbar under Screenshot */}
                <div className="h-[44px] shrink-0 mt-[4px] bg-[#c3c3c3] flex items-center justify-between px-[6px] border-t border-[#7e7e7e]">
                  <div className="flex items-center gap-[6px]">
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      className="h-[30px] px-[14px] bg-[#c3c3c3] text-black font-['Poppins:Medium'] text-[13px] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-3px_-3px_0px_0px_#7e7e7e] active:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0] cursor-pointer hover:bg-[#d8d8d8] flex items-center gap-[4px]"
                    >
                      <span>&larr;</span> Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      className="h-[30px] px-[14px] bg-[#c3c3c3] text-black font-['Poppins:Medium'] text-[13px] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#f0f0f0,inset_-3px_-3px_0px_0px_#7e7e7e] active:shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0] cursor-pointer hover:bg-[#d8d8d8] flex items-center gap-[4px]"
                    >
                      Next <span>&rarr;</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-[6px]">
                    <a
                      href={projects[idx].live || projects[idx].github}
                      target="_blank"
                      rel="noreferrer"
                      className="h-[30px] px-[14px] bg-[#02007f] hover:bg-[#0000bb] text-white font-['Poppins:Medium'] text-[13px] shadow-[inset_-1px_-1px_0px_#000,inset_1px_1px_0px_#fff] flex items-center gap-[4px] cursor-pointer active:translate-y-[1px]"
                    >
                      <span>Live Website</span>
                      <span className="text-[11px]">&rarr;</span>
                    </a>
                    <a
                      href={projects[idx].github}
                      target="_blank"
                      rel="noreferrer"
                      className="h-[30px] px-[14px] bg-[#e6e6e6] text-black font-['Poppins:Medium'] text-[13px] shadow-[inset_-1px_-1px_0px_#262626,inset_1px_1px_0px_#fff] hover:bg-[#02007f] hover:text-white flex items-center gap-[4px]"
                    >
                      <span>GitHub</span>
                      <span className="text-[11px]">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Interface & Platform Summary: Tech Stack Only (Prominent & Larger) */}
                <div className="flex-1 min-h-0 mt-[4px] bg-[#d6d6d6] shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#7e7e7e] p-[10px] flex flex-col overflow-hidden">
                  <div className="border-b border-[#b5b5b5] pb-[6px] mb-[8px] shrink-0 text-center">
                    <span className="font-['Poppins:Bold'] text-[13px] text-[#02007f] uppercase tracking-wider">
                      Tech Stack
                    </span>
                  </div>

                  <div className="flex-1 min-h-0 overflow-y-auto pr-[4px] [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#e0e0e0] [&::-webkit-scrollbar-thumb]:bg-[#02007f]">
                    <div className="flex flex-wrap justify-center items-center gap-[8px]">
                      {projects[idx].tech
                        .split("·")
                        .map((t) => t.trim())
                        .filter(Boolean)
                        .filter((item, index, self) => index === self.findIndex((t) => t.toLowerCase() === item.toLowerCase()))
                        .map((tech) => (
                          <div
                            key={tech}
                            title={tech}
                            className="inline-flex items-center gap-[8px] px-[11px] py-[6px] bg-[#d9d9d9] shadow-[inset_-2px_-2px_0px_0px_#262626,inset_2px_2px_0px_0px_#ffffff,inset_-3px_-3px_0px_0px_#7e7e7e] hover:bg-[#e4e4e4] transition-all select-none"
                          >
                            {DEV_ICONS[tech] && (
                              <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${DEV_ICONS[tech]}.svg`}
                                alt=""
                                className="size-[22px] object-contain shrink-0"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                              />
                            )}
                            <span className="font-['Inter:SemiBold'] text-[13px] text-[#0f172a]">
                              {tech}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Only Description, Integrations & Key Features (2-Column Allocation) */}
              <div
                key={idx}
                className="flex-1 min-w-0 flex flex-col bg-[#c3c3c3] shadow-[inset_2px_2px_0px_0px_#262626,inset_-2px_-2px_0px_0px_#f0f0f0,inset_3px_3px_0px_0px_#7e7e7e] overflow-hidden"
              >
                {/* Scrollable Container cleanly contained inside borders */}
                <div className="flex-1 min-h-0 overflow-y-auto p-[22px] [&::-webkit-scrollbar]:w-[12px] [&::-webkit-scrollbar-track]:bg-[#d4d4d4] [&::-webkit-scrollbar-thumb]:bg-[#02007f] [&::-webkit-scrollbar-thumb]:shadow-[inset_-1px_-1px_0px_#000,inset_1px_1px_0px_#fff]">
                  {/* Project Header */}
                  <div className="border-b border-[#a0a0a0] pb-[14px] mb-[16px]">
                    <h2 className="font-['Poppins:Bold'] text-[28px] text-[#0f172a] leading-tight tracking-tight">
                      {projects[idx].name}
                    </h2>
                    <p className="font-['Poppins:Medium'] text-[15px] text-[#02007f] leading-snug mt-[3px]">
                      {projects[idx].tagline}
                    </p>
                  </div>

                  {/* 1. DESCRIPTION */}
                  <div className="mb-[20px]">
                    <h3 className="font-['Poppins:Bold'] text-[12px] tracking-wider text-[#02007f] uppercase mb-[8px]">
                      Description
                    </h3>
                    <div className="space-y-[10px]">
                      {projects[idx].desc.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="font-['Inter:Regular'] text-[14px] text-[#1e293b] leading-[1.65] text-justify"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* 2. INTEGRATIONS (Fitted Bullet Containers) */}
                  {projects[idx].integrations && (
                    <div className="mb-[20px]">
                      <h3 className="font-['Poppins:Bold'] text-[12px] tracking-wider text-[#02007f] uppercase mb-[8px]">
                        Integrations
                      </h3>
                      <div className="flex flex-wrap gap-[8px]">
                        {projects[idx].integrations
                          .split("·")
                          .map((item) => item.trim())
                          .filter(Boolean)
                          .map((integration, i) => (
                            <div
                              key={i}
                              className="w-fit inline-flex items-center gap-[7px] text-[13px] font-['Inter:Medium'] text-[#111] bg-[#d9d9d9] shadow-[inset_-1px_-1px_0px_0px_#262626,inset_1px_1px_0px_0px_#ffffff,inset_-2px_-2px_0px_0px_#7e7e7e] px-[10px] py-[5px] rounded-[2px] select-none"
                            >
                              <span className="size-[5px] rounded-full bg-[#02007f] shrink-0" />
                              <span>{integration}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* 3. KEY FEATURES (Fitted Bullet Containers) */}
                  <div className="mb-[20px]">
                    <h3 className="font-['Poppins:Bold'] text-[12px] tracking-wider text-[#02007f] uppercase mb-[8px]">
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-[8px]">
                      {projects[idx].features
                        .split("·")
                        .map((f) => f.trim())
                        .filter(Boolean)
                        .map((feat, i) => (
                          <div
                            key={i}
                            className="w-fit inline-flex items-center gap-[7px] text-[13px] font-['Inter:Regular'] text-[#111] bg-[#d9d9d9] shadow-[inset_-1px_-1px_0px_0px_#262626,inset_1px_1px_0px_0px_#ffffff,inset_-2px_-2px_0px_0px_#7e7e7e] px-[10px] py-[5px] rounded-[2px] select-none"
                          >
                            <span className="size-[5px] rounded-full bg-[#02007f] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External Nav Arrows (sitting left and right outside the window) */}
          <div className="pointer-events-auto absolute contents left-[78px] top-[540px]" data-node-id="1:45623" data-name="Nav Arrow">
            <div role="button" aria-label="Next project" onClick={() => step(1)} className="absolute contents cursor-pointer left-[1382px] top-[540px]" data-node-id="1:45624">
              <div className="absolute border border-black border-solid h-[50px] left-[1382px] pointer-events-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[540px] w-[50px] flex items-center justify-center bg-[#d9d9d9] shadow-[inset_0px_2px_1px_0px_rgba(0,0,0,0.25)]">
                <span className="font-['Poppins:Bold'] text-[24px] text-black select-none">&gt;</span>
              </div>
            </div>
            <div role="button" aria-label="Previous project" onClick={() => step(-1)} className="absolute contents cursor-pointer left-[78px] top-[540px]" data-node-id="1:45627">
              <div className="absolute border border-black border-solid h-[50px] left-[78px] pointer-events-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[540px] w-[50px] flex items-center justify-center bg-[#d9d9d9] shadow-[inset_0px_2px_1px_0px_rgba(0,0,0,0.25)]">
                <span className="font-['Poppins:Bold'] text-[24px] text-black select-none">&lt;</span>
              </div>
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