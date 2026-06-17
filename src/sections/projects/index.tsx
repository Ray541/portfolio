import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { RxLink2 } from "react-icons/rx";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiPostgresql,
  SiStyledcomponents,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiFramer,
  SiMaplibre,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { TbCircleLetterLFilled } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import { GitHubCalendar } from "react-github-calendar";
import "react-activity-calendar/tooltips.css";

const badgeStyle =
  "flex items-center justify-center gap-1.5 border-2 border-border bg-accent/20 dark:bg-accent/30 hover:bg-accent/40 dark:hover:bg-accent/50 px-2 py-1.5 rounded-lg hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium tracking-tight";

const PROJECTS = [
  // OLES
  {
    projectName: "Online Estimation System (OLES) – SaaS",
    projectDesc:
      "A multi-tenant SaaS platform automating BOQ and SoR preparation for civil engineering. Features include dynamic cost configuration, GIS data handling, and strict RBAC.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React (Vite)" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    ],
    contributions: [
      "Architected a scalable multi-organization SaaS foundation.",
      "Engineered dynamic cost configurations, reducing manual estimation by 70%.",
      "Integrated GIS spatial data mapping for civil projects.",
      "Implemented a secure Role-Based Access Control (RBAC) system.",
    ],
  },
  // AMS
  {
    projectName: "Asset Management System (AMS) – SaaS",
    projectDesc:
      "Enterprise GIS-enabled Asset Management platform digitizing infrastructure tracking, lifecycle monitoring, and maintenance workflows for government and consultancy firms.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React (Vite)" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiMaplibre color="#285dab" />, name: "MapLibre" },
      { icon: <GrMapLocation />, name: "GIS Integration" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    ],
    contributions: [
      "Developed interactive spatial asset visualization with MapLibre.",
      "Built automated asset lifecycle and maintenance tracking workflows.",
      "Reduced manual asset tracking effort by over 50%.",
      "Engineered multi-level administrative hierarchies and granular RBAC.",
    ],
  },
  // Gesix
  {
    projectName: "Gesix Solutions – Company Website",
    projectDesc:
      "Performance-optimized corporate website for a civil/geospatial engineering firm, featuring smooth scrolling and interactive animations.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <SiFramer color="#0055FF" />, name: "Motion (Framer Motion)" },
      { icon: <TbCircleLetterLFilled color="#FF98A2" />, name: "Lenis" },
    ],
    contributions: [
      "Architected a scalable, responsive UI with Next.js and Tailwind CSS.",
      "Engineered buttery-smooth scroll experiences using Lenis.",
      "Implemented complex, performant interactive animations via Framer Motion.",
      "Developed a robust library of reusable UI components.",
    ],
    projectLink: "https://gesixsolutions.com/",
  },
  // Pollify
  {
    projectName: "Pollify – MERN Real-Time Polling App",
    projectDesc:
      "Real-time MERN stack application allowing users to create, manage, and vote on dynamic polls with instant result synchronization.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    ],
    contributions: [
      "Developed a strictly typed, responsive frontend using React and TypeScript.",
      "Architected custom REST APIs for poll management and voting logic.",
      "Engineered real-time vote updates across active client sessions.",
      "Optimized MongoDB schemas for efficient polling data retrieval.",
    ],
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },
  // WhatsApp
  {
    projectName: "WhatsApp Messaging – POC",
    projectDesc:
      "Real-time messaging proof-of-concept simulating WhatsApp-style communication alongside a dedicated admin control panel.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiStyledcomponents color="#DB7093" />, name: "Styled Components" },
      { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    ],
    contributions: [
      "Engineered real-time chat synchronization using Firebase.",
      "Developed a comprehensive admin dashboard for active user management.",
      "Architected a modular component system for scalable UI updates.",
    ],
    projectLink: "https://whatsapp-message-poc.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
];

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  return (
    <Section sectionName="project" className="py-20 px-3 flex-col">
      <h2 className="section-title mb-16">
        My <span className="text-muted">Projects</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        onValueChange={setActiveAccordion}
        className="w-full sm:w-3/4 space-y-5"
      >
        {PROJECTS.map((project, index) => {
          const value = `item-${index}`;
          return (
            <AccordionItem
              key={index}
              value={value}
              className="border-2 last:border-b-2 rounded-xl overflow-hidden bg-background"
            >
              <AccordionTrigger
                className={`p-5 flex items-center justify-between text-xl lg:text-2xl font-bold bg-muted/20 [&>svg]:text-inherit ${
                  activeAccordion === value
                    ? "border-b-2 underline bg-foreground text-background"
                    : ""
                }`}
                onMouseEnter={() => handleCursorEnter(3)}
                onMouseLeave={handleCursorLeave}
              >
                {project.projectName}
              </AccordionTrigger>

              <AccordionContent className="px-5 pt-5 pb-5 space-y-5">
                {/* Description */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Description
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.projectDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item, i) => (
                      <span key={i} className={badgeStyle}>
                        <span className="text-base">{item.icon}</span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions */}
                <div>
                  <h4 className="text-sm uppercase font-black tracking-wide text-muted-foreground mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {project.contributions.map((point, i) => (
                      <li key={i} className="flex items-start justify-start gap-2 text-base">
                        <span className="mt-2 h-2 w-2 rounded-full bg-transparent shrink-0 border-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap pt-2">
                  {project.projectLink && (
                    <Button
                      asChild
                      size="sm"
                      onMouseEnter={() => handleCursorEnter(2)}
                      onMouseLeave={handleCursorLeave}
                    >
                      <a href={project.projectLink} target="_blank">
                        Live <HiExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.projectGitLink && (
                    <Button
                      asChild
                      variant="link"
                      size="sm"
                      onMouseEnter={() => handleCursorEnter(2)}
                      onMouseLeave={handleCursorLeave}
                    >
                      <a href={project.projectGitLink} target="_blank">
                        Code <RxLink2 />
                      </a>
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Section>
  );
};

export default Projects;
