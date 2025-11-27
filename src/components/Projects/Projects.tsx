import React, { useState } from "react";
import Section from "../Section/Section";
import { HiExternalLink } from "react-icons/hi";
import { RxLink2 } from "react-icons/rx";
import { Button } from "../ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import { FaGlobeAfrica } from "react-icons/fa";
import { IconBaseProps } from "react-icons";

// Helper to apply color
const withColor = (icon: React.ReactElement<IconBaseProps>, color: string) =>
  React.cloneElement(icon, { color });

const PROJECTS = [
  {
    projectName: "OLES | Online Estimation System",
    projectDesc:
      "OLES is a full-fledged SaaS platform designed for government-style civil engineering estimations, built to simplify and digitize the workflow of preparing project estimates, approving them, and generating consolidated tender documents. The system supports multi-company, multi-module architecture with strict role-based access control, automated financial calculations, and advanced report generation.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiShadcnui />, "#8B5CF6"), name: "Shadcn UI" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
    ],
  },
  {
    projectName: "AMS | Asset Management System",
    projectDesc:
      "A multi-tenant, GIS-enabled Asset Management System designed to digitize and manage infrastructure assets across Water Supply, UGD (Underground Drainage), Roads, and Buildings. The platform supports government departments and engineering teams by centralizing asset inventories, geotagging field assets, tracking maintenance activities, and monitoring lifecycle performance. AMS provides real-time dashboards, structured O&M workflows, and location-based asset visualization—helping improve planning, maintenance efficiency, and decision-making across multiple sectors and administrative jurisdictions.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiMui />, "#007FFF"), name: "MUI" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
      { icon: withColor(<FaGlobeAfrica />, "#007DAB"), name: "GeoServer" },
    ],
  },
  {
    projectName: "GeSix Solutions | Civil Engineering Firm",
    projectDesc:
      "A modern, responsive website developed for GeSix Solutions, a civil and geospatial engineering firm. The site highlights the company’s services, including advanced surveying, 3D laser scanning, and infrastructure solutions, with smooth animations and elegant design to reflect their professional brand identity.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiFramer />, "#0055FF"), name: "Framer Motion" },
    ],
    projectLink: "https://gesixsolutions.com/",
  },
  {
    projectName: "Pollify",
    projectDesc:
      "A full-stack real-time polling web application where users can effortlessly create polls, vote on them, and manage their existing polls. Built with React for a dynamic UI, Tailwind CSS for responsive styling, and Firebase for real-time database and authentication.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiFirebase />, "#FFCA28"), name: "Firebase" },
    ],
    projectLink: "https://pollify-sable.vercel.app/",
    projectGitLink: "https://github.com/Ray541/pollify",
  },
  {
    projectName: "WhatsApp POC",
    projectDesc:
      "A proof-of-concept for a messaging platform featuring an admin panel and chat interface, simulating WhatsApp-like functionality. Developed using React, Styled Components for scoped styling, and Firebase for real-time chat support and data handling.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React" },
      { icon: withColor(<SiStyledcomponents />, "#DB7093"), name: "Styled Components" },
      { icon: withColor(<SiFirebase />, "#FFCA28"), name: "Firebase" },
    ],
    projectLink: "https://whatsapp-message-poc.vercel.app/",
    projectGitLink: "https://github.com/Ray541/poc",
  },
  {
    projectName: "Weather App",
    projectDesc:
      "A clean and functional weather application that allows users to search for the current weather in any city using the OpenWeatherMap API. Designed with HTML, CSS, Bootstrap, and JavaScript, this project demonstrates API integration and responsive UI without any frameworks.",
    tech: [
      { icon: withColor(<SiHtml5 />, "#E34F26"), name: "HTML" },
      { icon: withColor(<SiCss3 />, "#1572B6"), name: "CSS" },
      { icon: withColor(<SiBootstrap />, "#7952B3"), name: "Bootstrap" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
    ],
    projectLink: "https://weather-app-seven-zeta-88.vercel.app/",
    projectGitLink: "https://github.com/Ray541/weather-app",
  },
];

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  const handleAccordionClick = (value: string) => {
    setActiveAccordion(value);
  };

  return (
    <Section sectionName="project" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        My <span className="text-muted">Work</span>
      </h2>

      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        onValueChange={handleAccordionClick}
        className="w-full space-y-5"
      >
        {PROJECTS.map((project, index) => {
          const isActive = activeAccordion === `item-${index}`;
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`overflow-hidden bg-background ${isActive ? "border-border" : ""}`}
            >
              <AccordionTrigger
                className={`text-2xl font-black rounded-none px-2 py-3 ${
                  isActive
                    ? "bg-foreground text-background px-4 underline"
                    : "hover:bg-foreground hover:text-background hover:px-4 hover:underline"
                }`}
                onMouseEnter={() => handleCursorEnter(3.5)}
                onMouseLeave={handleCursorLeave}
              >
                {project.projectName}
              </AccordionTrigger>
              <AccordionContent className="bg-muted/10 px-5 py-4 space-y-4">
                <p className="text-lg leading-relaxed">{project.projectDesc}</p>

                <div className="flex flex-wrap items-center justify-between gap-5 mt-2">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {project.tech?.map((item, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 border border-foreground px-3 py-1 rounded-lg text-sm"
                        onMouseEnter={() => handleCursorEnter(2)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {project.projectLink && (
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="text-sm active:scale-95"
                        onMouseEnter={() => handleCursorEnter(2)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                          View Project <HiExternalLink />
                        </a>
                      </Button>
                    )}

                    {project.projectGitLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="text-sm active:scale-95"
                        onMouseEnter={() => handleCursorEnter(2)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <a href={project.projectGitLink} target="_blank" rel="noopener noreferrer">
                          View Repo <RxLink2 />
                        </a>
                      </Button>
                    )}
                  </div>
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
