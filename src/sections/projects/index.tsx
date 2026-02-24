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
import Reveal from "@/components/animations/reveal";

const badgeStyle =
  "flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-border rounded-lg bg-muted/30 hover:bg-foreground hover:text-background transition-all duration-300";

const PROJECTS = [
  // OLES
  {
    projectName: "Online Estimation System (OLES) – SaaS",
    projectDesc:
      "A scalable multi-tenant SaaS platform built to automate the preparation of BOQ (Bills of Quantities) and SoR (Schedule of Rates) for civil engineering projects. The system supports multiple organizations, dynamic cost configurations, GIS-enabled spatial data handling, and a secure role-based access control architecture.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React (Vite)" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    ],
    contributions: [
      "Designed multi-organization SaaS architecture.",
      "Built dynamic configuration engine reducing manual estimation by 60–70%.",
      "Integrated PostGIS for spatial project data.",
      "Implemented secure RBAC system.",
    ],
  },

  // AMS
  {
    projectName: "Asset Management System (AMS) – SaaS",
    projectDesc:
      "An enterprise-grade GIS-enabled Asset Management platform developed to digitize infrastructure tracking, lifecycle monitoring, and maintenance workflows. The system supports multi-level administrative hierarchies, spatial asset visualization, and modular multi-tenant SaaS architecture for government and consultancy organizations.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React (Vite)" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiMaplibre color="#285dab" />, name: "MapLibre" },
      { icon: <GrMapLocation />, name: "GIS Integration" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    ],
    contributions: [
      "Designed modular multi-tenant SaaS architecture.",
      "Implemented asset lifecycle & maintenance tracking.",
      "Reduced manual asset tracking effort by 50%+.",
      "Built granular RBAC system.",
    ],
  },

  // Gesix
  {
    projectName: "Gesix Solutions – Company Website",
    projectDesc:
      "A modern and performance-optimized corporate website developed for a civil and geospatial engineering firm. The platform showcases services, projects, and technical expertise using clean UI architecture, reusable components, smooth scroll behavior, and interactive animations powered by Motion (Framer Motion) and Lenis.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <SiFramer color="#0055FF" />, name: "Motion (Framer Motion)" },
      { icon: <TbCircleLetterLFilled color="#FF98A2" />, name: "Lenis" },
    ],
    contributions: [
      "Built responsive and scalable UI architecture.",
      "Implemented smooth animations using Motion (Framer Motion) & Lenis.",
      "Designed clean and accessible layouts.",
      "Structured reusable components.",
    ],
    projectLink: "https://gesixsolutions.com/",
  },

  // Pollify
  {
    projectName: "Pollify – MERN Real-Time Polling App",
    projectDesc:
      "A full-stack MERN application that enables users to create, manage, and vote on polls with real-time result updates. Built with a type-safe frontend using React and TypeScript, integrated with custom REST APIs and MongoDB for structured and efficient data handling.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
      { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
      { icon: <SiShadcnui />, name: "Shadcn UI" },
      { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    ],
    contributions: [
      "Built type-safe and responsive UI using React & TypeScript.",
      "Developed REST APIs for poll creation and voting.",
      "Integrated MongoDB for efficient storage and retrieval.",
      "Implemented live vote update system.",
    ],
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },

  // WhatsApp
  {
    projectName: "WhatsApp Messaging – POC",
    projectDesc:
      "A real-time messaging proof-of-concept built to simulate WhatsApp-style communication with an admin control panel. The system integrates Firebase for live data synchronization and uses modular component architecture for scalable UI development.",
    tech: [
      { icon: <SiReact color="#61DAFB" />, name: "React" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiStyledcomponents color="#DB7093" />, name: "Styled Components" },
      { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    ],
    contributions: [
      "Integrated Firebase for real-time messaging.",
      "Built admin dashboard for user management.",
      "Designed modular architecture.",
    ],
    projectLink: "https://whatsapp-message-poc.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
];

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  return (
    <Section sectionName="project" className="py-24 px-4 flex-col">
      <Reveal>
        <h2 className="section-title mb-16">
          My <span className="text-muted">Projects</span>
        </h2>
      </Reveal>

      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        onValueChange={setActiveAccordion}
        className="w-full space-y-6"
      >
        {PROJECTS.map((project, index) => {
          const value = `item-${index}`;
          return (
            <Reveal key={value} delay={index * 0.2}>
              <AccordionItem
                key={index}
                value={value}
                className="border border-border rounded-xl overflow-hidden bg-background"
              >
                <AccordionTrigger
                  className="px-6 py-5 flex items-center justify-between text-2xl font-bold tracking-tight hover:no-underline bg-muted/10"
                  onMouseEnter={() => handleCursorEnter(4)}
                  onMouseLeave={handleCursorLeave}
                >
                  {project.projectName}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-0 pt-5 space-y-5">
                  {/* Description */}
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      Description
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.projectDesc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((item, i) => (
                        <span key={i} className={badgeStyle}>
                          {item.icon}
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contributions */}
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {project.contributions.map((point, i) => (
                        <li key={i} className="flex gap-3 text-base">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 flex-wrap pt-2">
                    {project.projectLink && (
                      <Button asChild size="sm">
                        <a href={project.projectLink} target="_blank">
                          Live <HiExternalLink />
                        </a>
                      </Button>
                    )}
                    {project.projectGitLink && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.projectGitLink} target="_blank">
                          Code <RxLink2 />
                        </a>
                      </Button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          );
        })}
      </Accordion>
    </Section>
  );
};

export default Projects;
