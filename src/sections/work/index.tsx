import React, { useRef } from "react";
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
  SiRedux,
  SiExpress,
  SiGitlab,
  SiStyledcomponents,
} from "react-icons/si";
import { IconBaseProps } from "react-icons";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import Section from "@/components/section";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { GiBearFace } from "react-icons/gi";

// Helper to apply color
const withColor = (icon: React.ReactElement<IconBaseProps>, color: string) =>
  React.cloneElement(icon, { color });

// Data
const EXPERIENCE = [
  {
    role: "Junior Frontend Developer",
    company: "Geopage Consultants | Bangalore",
    duration: "05/2024 - PRESENT",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTypescript />, "#3178C6"), name: "TypeScript" },
      { name: "Redux", icon: withColor(<SiRedux />, "#764ABC") },
      { icon: withColor(<SiMui />, "#007FFF"), name: "MUI" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiBootstrap />, "#7952B3"), name: "Bootstrap" },
      { icon: withColor(<SiNodedotjs />, "#339933"), name: "Node.js" },
      { name: "Express.js", icon: withColor(<SiExpress />, "#999999") },
      { icon: withColor(<SiPostgresql />, "#336791"), name: "PostgreSQL" },
      { icon: withColor(<SiGit />, "#F05032"), name: "Git" },
      { name: "GitHub", icon: <GrGithub /> },
      { name: "GitLab", icon: withColor(<SiGitlab />, "#E34328") },
    ],
    contributions: [
      "Working on scalable SaaS platforms (OLES & AMS) for civil project estimation and asset management.",
      "Building reusable, high-performance UI components using React, Redux Toolkit, and modern UI libraries.",
      "Collaborating closely with backend teams to integrate Node.js & PostgreSQL APIs for real-time data.",
      "Gaining hands-on experience with deployment and CI/CD on bare-metal infrastructure.",
    ],
    experienceType: "Full Time",
  },
  {
    role: "Frontend Developer Intern",
    company: "AntStack Serverless Consulting Company | Bangalore",
    duration: "11/2023 - 01/2024",
    tech: [
      { icon: withColor(<SiReact />, "#61DAFB"), name: "React.js" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiTypescript />, "#3178C6"), name: "TypeScript" },
      { icon: withColor(<SiTailwindcss />, "#06B6D4"), name: "Tailwind CSS" },
      { icon: withColor(<SiStyledcomponents />, "#DB7093"), name: "Styled Components" },
      { icon: withColor(<GiBearFace />, "#453F39"), name: "Zustand" },
      { icon: withColor(<SiFirebase />, "#FFCA28"), name: "Firebase" },
      { icon: withColor(<SiSupabase />, "#3ECF8E"), name: "Supabase" },
      { icon: withColor(<SiGit />, "#F05032"), name: "Git" },
      { name: "GitHub", icon: <GrGithub /> },
    ],
    contributions: [
      "Developed a WhatsApp messaging POC to send form data to dynamic user inputs.",
      "Integrated React, Firebase, and WhatsApp APIs to enable real-time communication.",
      "Focused on rapid prototyping and building functional features from scratch.",
    ],
    experienceType: "Internship",
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "TechEnvision | Kolhapur",
    duration: "03/2023 - 07/2023",
    tech: [
      { icon: withColor(<SiHtml5 />, "#E44D26"), name: "HTML" },
      { icon: withColor(<SiCss3 />, "#264DE4"), name: "CSS" },
      { icon: withColor(<SiBootstrap />, "#7952B3"), name: "Bootstrap-5" },
      { icon: withColor(<SiPhp />, "#8892BE"), name: "PHP" },
      { icon: withColor(<SiMysql />, "#00758F"), name: "SQL" },
      { icon: withColor(<SiJavascript />, "#F7DF1E"), name: "JavaScript" },
      { icon: withColor(<SiWordpress />, "#21759B"), name: "WordPress" },
    ],
    contributions: [
      "Worked on live client projects, gaining real-world development experience early on.",
      "Built and customized WordPress websites using Elementor and modern UI practices.",
      "Contributed to full-stack healthcare projects using HTML, CSS, JavaScript, PHP, and MySQL.",
    ],
    experienceType: "Internship",
  },
];

type ExperienceItemProps = {
  exp: (typeof EXPERIENCE)[0] & { contributions?: string[] };
};

const ExperienceItem = ({ exp }: ExperienceItemProps) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-1 md:gap-5 pl-10 pb-5">
      {/* The Static Dot */}
      <div className="absolute left-0.5 top-2 w-3.5 h-3.5 rounded-full bg-background border-2 border-foreground z-10" />

      {/* Date/Duration Section */}
      <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground min-w-[120px] pt-1">
        {exp.duration}
      </span>

      <div className="flex flex-col gap-5 w-full">
        {/* Role & Company Header */}
        <div className="flex flex-col gap-1">
          <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight border-b-2 inline-block w-fit">
            {exp.role}
          </h4>
          <p className="text-lg font-semibold text-foreground/90 italic">{exp.company}</p>
        </div>

        <div className="flex flex-col items-start justify-center">
          <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
            Tech Stack
          </h5>
          {/* Tech Stack Badges */}
          <div className="flex items-center justify-start flex-wrap gap-1.5 mt-2">
            {exp.tech.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center justify-center gap-1.5 font-medium tracking-tight bg-accent/20 dark:bg-accent/40 border rounded-md px-2 py-1 text-xs"
              >
                <span
                  className="text-base"
                  onMouseEnter={() => handleCursorEnter(1.5)}
                  onMouseLeave={handleCursorLeave}
                >
                  {item.icon}
                </span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {exp.contributions && (
          <div className="flex flex-col gap-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
              Key Contributions
            </h5>
            <ul className="list-disc list-outside flex flex-col gap-1.5 text-sm md:text-base text-foreground/85 ml-5">
              {exp.contributions.map((bullet, i) => (
                <li key={i} className="pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
            {exp.experienceType}
            <Briefcase className="w-3.5 h-3.5 text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  // Reference to the timeline container
  // Used by useScroll to track scroll position relative to this element
  const containerRef = useRef<HTMLDivElement | null>(null);

  /**useScroll (motion)
    Tracks scroll progress of a specific element (containerRef).

    offset: ["start center", "end center"]

    Meaning:
    - 0% progress when the top of the container reaches the center of viewport
    - 100% progress when the bottom of the container reaches the center
  */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  /**useTransform maps scroll progress (0 → 1) into height values ("0%" → "100%")

    This dynamically increases the vertical progress line height as the user scrolls through the timeline.
  */
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      sectionName="work"
      className="py-20 px-3 flex-col"
      // sectionNumber="( 04 )"
      // sectionNumebrClassName="bottom-15 right-0 md:right-10 lg:right-20 xl:right-40 text-foreground/50 p-4 text-sm"
    >
      <h2 className="section-title">
        <span className="text-muted">Work</span> Experience
      </h2>

      <div className="max-w-2xl mx-auto w-full">
        <p className="font-semibold text-muted-foreground text-center mb-12 w-full mx-auto">
          With a passion for crafting exceptional digital experiences, I have honed my skills in web
          and frontend development through hands-on experience and continuous learning.
        </p>

        <div
          ref={containerRef} // Scroll tracking is attached here
          className="w-full mx-auto relative flex flex-col gap-5"
        >
          {/* 
            Base Timeline Line (static background line)
            This acts as the full height guide
          */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-foreground/30" />

          {/* 
            Animated Progress Line

            This line sits on top of the base line.
            Its height grows from 0% → 100% based on scroll position.
            origin-top ensures animation grows downward.
          */}
          <motion.div
            style={{ height }}
            className="absolute left-2 top-0 w-[2px] bg-foreground origin-top"
          />

          {EXPERIENCE.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
