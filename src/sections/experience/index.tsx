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
  SiStyledcomponents,
  SiExpress,
  SiGitlab,
  SiRedux,
} from "react-icons/si";
import { IconBaseProps } from "react-icons";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import Section from "@/components/section";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase } from "lucide-react"; // Matching the GraduationCap style
import { GiBearFace } from "react-icons/gi";
import { GrGithub } from "react-icons/gr";

// Helper to apply color
const withColor = (icon: React.ReactElement<IconBaseProps>, color: string) =>
  React.cloneElement(icon, { color });

// Data
const EXPERIENCE = [
  {
    role: "Junior Frontend Web Developer",
    company: "Geopage Consultants (Bengaluru)",
    duration: "05/2024 - Present",
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
    experienceType: "Full Time",
  },
  {
    role: "Frontend Web Developer Intern",
    company: "AntStack | Fullstack Serverless Consulting Company (Bengaluru)",
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
    experienceType: "Internship",
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "techEnvision (Kolhapur)",
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
    experienceType: "Internship",
  },
];

type ExperienceItemProps = {
  exp: (typeof EXPERIENCE)[0];
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

      <div className="flex flex-col gap-3 w-full">
        {/* Role & Company Header */}
        <div className="flex flex-col gap-1">
          <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight border-b-2 inline-block w-fit">
            {exp.role}
          </h4>
          <p className="text-lg font-semibold text-foreground/90 italic">{exp.company}</p>
        </div>

        <div className="flex flex-col items-start justify-center">
          <h5 className="text-md font-bold">Tech Stack</h5>
          {/* Tech Stack Badges */}
          <div className="flex items-center justify-start flex-wrap gap-2 mt-2">
            {exp.tech.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center justify-center gap-2 font-light tracking-wide bg-accent/30 dark:bg-accent/70 border-2 rounded-lg px-3 py-1.5"
              >
                <span
                  className="text-lg"
                  onMouseEnter={() => handleCursorEnter(2)}
                  onMouseLeave={handleCursorLeave}
                >
                  {item.icon}
                </span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-black uppercase tracking-wider">
            {exp.experienceType}
            <Briefcase className="text-blue-500" />
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
      sectionName="experience"
      className="py-20 px-3 flex-col"
      sectionNumber="( 04 )"
      sectionNumebrClassName="bottom-15 right-0 md:right-10 lg:right-20 xl:right-40 text-foreground/50 p-4 text-sm"
    >
      <h2 className="section-title">
        <span className="text-muted">Work</span> Experience
      </h2>

      <div className="max-w-7xl mx-auto w-full">
        <p className="font-semibold text-muted-foreground text-center mb-12 w-full md:w-1/2 lg:1-3/4 mx-auto">
          With a passion for crafting exceptional digital experiences, I have honed my skills in web
          and frontend development through hands-on experience and continuous learning.
        </p>

        <div
          ref={containerRef} // Scroll tracking is attached here
          className="w-full md:w-3/4 xl:w-3/6 mx-auto relative flex flex-col gap-5"
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
