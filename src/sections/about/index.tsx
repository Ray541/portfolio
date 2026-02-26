import { cloneElement, ReactElement, ReactNode } from "react";
import {
  SiLinkedin,
  SiGithub,
  SiFacebook,
  SiInstagram,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiGit,
  SiMysql,
  SiGitlab,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { IconBaseProps } from "react-icons";
import Section from "@/components/section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { GraduationCap } from "lucide-react";
import SocialButton from "@/components/social-button";
import { GrGithub, GrLocationPin } from "react-icons/gr";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pranav-rao-09a79b231/",
    icon: <SiLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ray541",
    icon: <SiGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/pranav.rao.338",
    icon: <SiFacebook />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/pranav_rao0504",
    icon: <SiInstagram />,
    label: "Instagram",
  },
];

const withColor = (
  icon: ReactElement<IconBaseProps>,
  color: string
): ReactElement<IconBaseProps> => {
  return cloneElement(icon, { color });
};

// Data
const SKILLS = [
  { name: "React", icon: withColor(<SiReact />, "#61DAFB") },
  { name: "JavaScript", icon: withColor(<SiJavascript />, "#F7DF1E") },
  { name: "TypeScript", icon: withColor(<SiTypescript />, "#3178C6") },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: withColor(<SiTailwindcss />, "#06B6D4") },
  { name: "Bootstrap", icon: withColor(<SiBootstrap />, "#7952B3") },
  { name: "CSS 3", icon: withColor(<SiCss3 />, "#264DE4") },
  { name: "HTML 5", icon: withColor(<SiHtml5 />, "#E44D26") },
  { name: "Redux", icon: withColor(<SiRedux />, "#764ABC") },
  { name: "Zustand", icon: withColor(<GiBearFace />, "#453F39") },
  { name: "Node.js", icon: withColor(<SiNodedotjs />, "#339933") },
  { name: "Express.js", icon: withColor(<SiExpress />, "#999999") },
  { name: "MongoDB", icon: withColor(<SiMongodb />, "#47A248") },
  { name: "SQL", icon: withColor(<SiMysql />, "#00758F") },
  { name: "PostgreSQL", icon: withColor(<SiPostgresql />, "#336791") },
  { name: "Git", icon: withColor(<SiGit />, "#F05032") },
  { name: "GitHub", icon: <GrGithub /> },
  { name: "GitLab", icon: withColor(<SiGitlab />, "#E34328") },
];

const EDUCATION = [
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

// Reusable Components
type SkillBadgeProps = {
  name: string;
  icon: ReactNode;
};
const SkillBadge = ({ name, icon }: SkillBadgeProps) => (
  <span className="flex items-center justify-center gap-2 border-2 p-2 rounded-xl bg-accent/40 dark:bg-accent">
    <span
      className="text-2xl md:text-3xl"
      onMouseEnter={() => handleCursorEnter(3)}
      onMouseLeave={handleCursorLeave}
    >
      {icon}
    </span>
    <span className="text-lg md:text-2xl font-black tracking-wide">{name}</span>
  </span>
);

type EducationItemProps = {
  e: (typeof EDUCATION)[0];
};

const EducationItem = ({ e }: EducationItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const y = useTransform(scrollYProgress, value => {
    if (!ref.current) return 0;
    return value * (ref.current.offsetHeight - 20);
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start gap-1 md:gap-5 pl-5 border-l-2 border-foreground/30"
    >
      <motion.div
        style={{ y }}
        className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-foreground border-2 border-foreground"
      />

      <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground pt-1">
        {e.passingout}
      </span>

      <div className="flex flex-col gap-1">
        <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight border-b-2">
          {e.degree} <span className="text-foreground/50 text-lg">({e.title})</span>
        </h4>

        <div className="flex flex-col gap-0.5">
          <p className="text-lg font-semibold text-foreground/90 italic">{e.trade}</p>
          <p className="text-base font-medium text-muted-foreground">{e.college}</p>
          <p className="text-sm text-muted-foreground/80">{e.board}</p>
        </div>

        <div className="mt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-black uppercase tracking-wider">
            Result: {e.marks}
            <GraduationCap className="text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Section
      sectionName="about"
      className="py-20 px-3 flex-col"
      sectionNumber="( 02 )"
      sectionNumebrClassName="top-10 md:top-20 right-0 text-foreground/50 p-4 text-sm"
    >
      <h2 className="section-title">
        <span className="text-muted">About</span> Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {SKILLS.map((skill, idx) => (
            <SkillBadge key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-black text-foreground uppercase">Education</h3>
          {EDUCATION.map((e, idx) => (
            <EducationItem key={idx} e={e} />
          ))}
        </div>

        <div className="hidden lg:flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 border p-3 md:p-5 rounded-lg bg-background">
          <div className="flex items-center justify-center flex-wrap gap-1">
            <GrLocationPin />
            <h3 className="text-xl text-foreground font-semibold">India (IN)</h3>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <h3 className="text-xl text-foreground font-semibold">Get in Touch</h3>
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
                onMouseEnter={() => handleCursorEnter(3)}
                onMouseLeave={() => handleCursorLeave()}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
