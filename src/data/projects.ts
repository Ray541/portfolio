import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMaplibre,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbCircleLetterLFilled } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  // OLES
  {
    projectName: "Online Estimation System (OLES) – SaaS",
    projectDesc:
      "A multi-tenant SaaS platform automating BOQ and SoR preparation for civil engineering. Features include dynamic cost configuration, GIS data handling, and strict RBAC.",
    tech: [
      { name: "React (Vite)", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
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
      { name: "React (Vite)", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MapLibre", Icon: SiMaplibre, color: "#285dab" },
      { name: "GIS Integration", Icon: GrMapLocation },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
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
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Shadcn UI", Icon: SiShadcnui },
      { name: "Motion (Framer Motion)", Icon: SiFramer, color: "#0055FF" },
      { name: "Lenis", Icon: TbCircleLetterLFilled, color: "#FF98A2" },
    ],
    contributions: [
      "Architected a scalable, responsive UI with Next.js and Tailwind CSS.",
      "Engineered buttery-smooth scroll experiences using Lenis.",
      "Implemented complex, performant interactive animations via Framer Motion.",
      "Developed a robust library of reusable UI components.",
    ],
    projectLink: "https://gesixsolutions.com/",
  },
  // Geopage
  {
    projectName: "Geopage Consultants – Company Website",
    projectDesc:
      "Built a modern corporate website showcasing Geopage Consultants’ civil engineering, GIS, and geospatial solutions.",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Shadcn UI", Icon: SiShadcnui },
      { name: "Motion (Framer Motion)", Icon: SiFramer, color: "#0055FF" },
    ],
    contributions: [
      "Architected a scalable, responsive UI with Next.js and Tailwind CSS.",
      "Designed clean, accessible layouts optimized for performance across devices.",
      "Developed a robust library of reusable UI components.",
    ],
    projectLink: "https://www.geopageconsultants.com/",
  },
  // Pollify
  {
    projectName: "Pollify – MERN Real-Time Polling App",
    projectDesc:
      "Real-time MERN stack application allowing users to create, manage, and vote on dynamic polls with instant result synchronization.",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Shadcn UI", Icon: SiShadcnui },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
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
];
