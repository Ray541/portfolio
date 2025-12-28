import React, { ReactNode } from "react";
import {
  SiReact,
  SiJavascript,
  SiMui,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiWordpress,
} from "react-icons/si";
import { IconBaseProps } from "react-icons";
import Section from "../Section/Section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

// Helper to apply color
const withColor = (icon: React.ReactElement<IconBaseProps>, color: string) =>
  React.cloneElement(icon, { color });

// Data
const EXPERIENCE = [
  {
    role: "Junior Frontend Web Developer",
    company: "Geopage Consultants (Bengaluru)",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiMui />, "#007FFF"), name: "MUI" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiBootstrap />, "#7952B3"), name: "Bootstrap" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
      { icon: withColor(<SiGit />, "#F05032"), name: "Git" },
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "AntStack | Fullstack Serverless Consulting Company (Bengaluru)",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTypescript />, "#3178C6"), name: "TypeScript" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiFirebase />, "#FFCA28"), name: "Firebase" },
      { icon: withColor(<SiSupabase />, "#3ECF8E"), name: "Supabase" },
      { icon: withColor(<SiGit />, "#F05032"), name: "Git" },
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "techEnvision (Kolhapur)",
    tech: [
      { icon: withColor(<SiHtml5 />, "#E44D26"), name: "HTML" },
      { icon: withColor(<SiCss3 />, "#264DE4"), name: "CSS" },
      { icon: withColor(<SiBootstrap />, "#7952B3"), name: "Bootstrap-5" },
      { icon: withColor(<SiPhp />, "#8892BE"), name: "PHP" },
      { icon: withColor(<SiMysql />, "#00758F"), name: "SQL" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiWordpress />, "#21759B"), name: "WordPress" },
    ],
  },
];

// Reusable Card
type ExperienceCardProps = {
  role: string;
  company: string;
  tech: { icon: ReactNode; name: string }[];
};
const ExperienceCard = ({ role, company, tech }: ExperienceCardProps) => (
  <div className="flex flex-col items-start justify-center gap-3 p-5 border rounded-xl bg-background shadow-md hover:shadow-lg transition-all duration-200 w-full md:w-[45%]">
    <h3
      className="text-xl font-black text-primary border-b border-border border-dashed"
      onMouseEnter={() => handleCursorEnter(3)}
      onMouseLeave={handleCursorLeave}
    >
      {role}
    </h3>
    <p className="text-md font-medium text-muted-foreground">{company}</p>
    <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
      {tech.map((item, idx) => (
        <span
          key={idx}
          className="flex items-center justify-center gap-2 flex-wrap font-light tracking-wide bg-accent/30 dark:bg-accent/70 border rounded-lg px-3 py-2 text-sm transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 active:-translate-y-0.5"
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
        >
          <span className="text-xl">{item.icon}</span>
          {item.name}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <Section sectionName="experience" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        <span className="text-muted">Work</span> Experience
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <p className="font-semibold text-muted-foreground text-center mb-7">
          With a passion for crafting exceptional digital experiences, I have honed my skills in web
          and frontend development through hands-on experience and continuous learning. Below is a
          snapshot of my journey in creating dynamic, user-centric web solutions.
        </p>
        {EXPERIENCE.map((exp, idx) => (
          <ExperienceCard key={idx} role={exp.role} company={exp.company} tech={exp.tech} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
