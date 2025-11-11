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
import { IconBaseProps } from "react-icons";

// Helper to apply color
const withColor = (icon: React.ReactElement<IconBaseProps>, color: string) =>
  React.cloneElement(icon, { color });

const PROJECTS = [
  {
    projectName: "OLES | Online Estimation System",
    projectDesc:
      "A SaaS-based platform developed for a civil firm to automate project cost estimation and analysis. Built with Vite, React.js, and Node.js, AMS enables real-time estimate tracking and management role-based access, and centralized data management for multiple clients.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiShadcnui />, "#8B5CF6"), name: "Shadcn UI" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
    ],
    highlights: [
      "Automates civil project cost estimation and analysis.",
      "Dynamic data integration using Node.js and PostgreSQL.",
      "Responsive UI built with Tailwind CSS and Shadcn UI components.",
      "Reusable and modular frontend architecture using React.js and Redux Toolkit.",
      "Improves accuracy and reduces manual workload through smart estimation workflows.",
    ],
  },
  {
    projectName: "AMS | Asset Management System",
    projectDesc:
      "A multi-tenant SaaS platform designed to help civil firms efficiently manage assets, track usage, and monitor maintenance. Built with Vite, React.js, and Node.js, AMS enables real-time asset tracking, role-based access, and centralized data management for multiple clients.",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiMui />, "#007FFF"), name: "MUI" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
    ],
    highlights: [
      "Developed a multi-tenant SaaS platform for managing and tracking civil assets across multiple clients.",
      "Implemented state management and data flow using Redux Toolkit for scalable and maintainable architecture.",
      "Created dynamic dashboards and UI components with React.js and MUI to enhance user experience.",
      "Integrated backend services using Node.js and PostgreSQL for real-time asset data handling.",
      "Supported role-based authentication and secure multi-client data separation.",
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
    highlights: [
      "Developed a fully responsive and interactive website for a civil and geospatial engineering firm.",
      "Implemented smooth scrolling and motion-based transitions using Framer Motion and Lenis for a premium user experience.",
      "Designed dynamic service menus and sections to showcase multiple civil engineering domains like surveying and road design.",
      "Built with Vite and React.js for high performance, fast load times, and maintainable code structure.",
      "Used Tailwind CSS for modern styling and responsiveness across all device sizes.",
    ],
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
    highlights: [
      "Real-time vote updates using Firebase Realtime Database.",
      "User authentication with protected routes.",
      "Poll creation and result tracking.",
      "Tailwind-based responsive and mobile-first design.",
    ],
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
    highlights: [
      "Admin panel for user and message management.",
      "Real-time chat messaging Firebase Firestore.",
      "Styled Components for scoped, theme-based styles.",
      "Clean and modular component architecture.",
    ],
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
    highlights: [
      "Search-based weather results using OpenWeatherMap API.",
      "Responsive UI built with Bootstrap.",
      "Simple, lightweight and framework-free implementation.",
      "Graceful error handling for invalid city queries.",
    ],
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
              <AccordionContent className="bg-muted/10 px-5 py-4 space-y-3">
                <p className="text-lg font-semibold">
                  Project Description:
                  <span className="inline-block text-md font-normal">{project.projectDesc}</span>
                </p>

                {project.highlights?.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-base leading-relaxed text-muted-foreground">
                    <h2 className="text-lg font-semibold">Project Highlights:</h2>
                    {project.highlights.map((point, i) => (
                      <li key={i} className="text-md">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech?.map((item, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 border border-foreground px-3 py-1 rounded-full text-sm"
                        onMouseEnter={() => handleCursorEnter(2)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-self-end gap-4 ">
                    {project.projectLink && (
                      <Button
                        asChild
                        variant="default"
                        className="text-sm active:scale-95"
                        onMouseEnter={() => handleCursorEnter(2)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                          View Project <HiExternalLink className="ml-1 inline" />
                        </a>
                      </Button>
                    )}

                    {project.projectGitLink && (
                      <Button
                        asChild
                        variant="link"
                        className="text-sm active:scale-95"
                        onMouseEnter={() => handleCursorEnter(3)}
                        onMouseLeave={handleCursorLeave}
                      >
                        <a href={project.projectGitLink} target="_blank" rel="noopener noreferrer">
                          View Repo <RxLink2 className="ml-1 inline" />
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
