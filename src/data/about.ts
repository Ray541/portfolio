import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { GrGithub } from "react-icons/gr";
import type { Education, Skill } from "@/types";

export const SKILLS: Skill[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Zustand", Icon: GiBearFace, color: "#453F39" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#999999" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "SQL", Icon: SiMysql, color: "#00758F" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "CSS 3", Icon: SiCss3, color: "#264DE4" },
  { name: "HTML 5", Icon: SiHtml5, color: "#E44D26" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: GrGithub },
  { name: "GitLab", Icon: SiGitlab, color: "#E34328" },
];

export const EDUCATION: Education[] = [
  {
    title: "B.Tech",
    degree: "Bachelor of Technology",
    trade: "Computer Science Engineering",
    college: "Sharad Institute of Technology",
    board: "DBATU - Dr. Babasaheb Ambedkar Technological University",
    marks: "8.64 GPA",
    passingout: "2023-24",
  },
  {
    title: "Diploma",
    degree: "Diploma in Engineering",
    trade: "Computer Science Engineering",
    college: "Sanjay Bhokare Groups of Institues",
    board: "MSBTE - Maharashtra State Board of Technical Education",
    marks: "89.94%",
    passingout: "2020-21",
  },
];
