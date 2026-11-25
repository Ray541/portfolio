import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { GrGithub } from "react-icons/gr";
import type { Experience } from "@/types";

export const EXPERIENCE: Experience[] = [
  {
    company: "Geopage Consultants | Bangalore",
    duration: "05/2024 - PRESENT",
    roles: [
      {
        title: "Frontend Developer",
        duration: "04/2026 - PRESENT",
        contributions: [
          "Architecting scalable civil engineering SaaS platforms from scratch.",
          "Developing full-stack features (React.js, Node.js, PostgreSQL).",
          "Crafting responsive UIs using Tailwind CSS, MUI, and ShadCN.",
          "Implementing geo-spatial features with MapLibre and MapBox.",
          "Managing CI/CD and deployments via Hostinger and Coolify.",
        ],
      },
      {
        title: "Junior Frontend Developer",
        duration: "05/2024 - 03/2026",
        contributions: [
          "Built reusable UI components with React.js and modern libraries.",
          "Optimized user interfaces for performance and usability.",
          "Integrated REST APIs with Node.js backend teams.",
          "Managed geospatial data and bare-metal server deployments.",
        ],
      },
    ],
    tech: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "MUI", Icon: SiMui, color: "#007FFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#999999" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: GrGithub },
      { name: "GitLab", Icon: SiGitlab, color: "#E34328" },
    ],
    experienceType: "Full Time",
  },
  {
    company: "AntStack Serverless Consulting Company | Bangalore",
    duration: "11/2023 - 01/2024",
    roles: [
      {
        title: "Frontend Developer Intern",
        contributions: [
          "Developed a WhatsApp messaging POC for dynamic user inputs.",
          "Integrated React, Firebase, and WhatsApp APIs for real-time communication.",
          "Rapidly prototyped and built functional features from scratch.",
        ],
      },
    ],
    tech: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Zustand", Icon: GiBearFace, color: "#453F39" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: GrGithub },
    ],
    experienceType: "Internship",
  },
  {
    company: "TechEnvision | Kolhapur",
    duration: "03/2023 - 07/2023",
    roles: [
      {
        title: "Full Stack Web Developer Intern",
        contributions: [
          "Developed live client projects for real-world business needs.",
          "Built and customized WordPress sites using Elementor.",
          "Contributed to full-stack healthcare projects (HTML, CSS, PHP, MySQL).",
        ],
      },
    ],
    tech: [
      { name: "HTML", Icon: SiHtml5, color: "#E44D26" },
      { name: "CSS", Icon: SiCss3, color: "#264DE4" },
      { name: "Bootstrap-5", Icon: SiBootstrap, color: "#7952B3" },
      { name: "PHP", Icon: SiPhp, color: "#8892BE" },
      { name: "SQL", Icon: SiMysql, color: "#00758F" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
    ],
    experienceType: "Internship",
  },
];
