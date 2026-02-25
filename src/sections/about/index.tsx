import React, { ReactElement, ReactNode, useState } from "react";
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
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import { IconBaseProps } from "react-icons";
import { GoCopy } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { CodeXml, GraduationCap } from "lucide-react";
import SocialButton from "@/components/social-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  return React.cloneElement(icon, { color });
};

// Data
const SKILLS = [
  { name: "React", icon: withColor(<SiReact />, "#61DAFB") },
  { name: "JavaScript", icon: withColor(<SiJavascript />, "#F7DF1E") },
  { name: "Tailwind CSS", icon: withColor(<SiTailwindcss />, "#06B6D4") },
  { name: "Bootstrap", icon: withColor(<SiBootstrap />, "#7952B3") },
  { name: "CSS 3", icon: withColor(<SiCss3 />, "#264DE4") },
  { name: "HTML 5", icon: withColor(<SiHtml5 />, "#E44D26") },
  { name: "Redux", icon: withColor(<SiRedux />, "#764ABC") },
  { name: "Git", icon: withColor(<SiGit />, "#F05032") },
  {
    name: "C / C++",
    icon: withColor(<SiC />, "#A8B9CC"),
    alternateIcon: withColor(<SiCplusplus />, "#00599C"),
  },
  { name: "SQL", icon: withColor(<SiMysql />, "#00758F") },
  { name: "PostgreSQL", icon: withColor(<SiPostgresql />, "#336791") },
];

const WORKINGON = [
  {
    domain: { title: "Frontend", icon: <CodeXml /> },
    technologies: [
      { name: "TypeScript", icon: withColor(<SiTypescript />, "#3178C6") },
      { name: "Next.js", icon: withColor(<SiNextdotjs />, "#000000") },
    ],
  },
  {
    domain: { title: "Backend", icon: <TbSettingsCode /> },
    technologies: [
      { name: "Node.js", icon: withColor(<SiNodedotjs />, "#339933") },
      { name: "Express.js", icon: withColor(<SiExpress />, "#999999") },
      { name: "MongoDB", icon: withColor(<SiMongodb />, "#47A248") },
    ],
  },
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
  <span
    className="flex items-center justify-center gap-2 border-2 p-2 rounded-xl bg-accent/40 dark:bg-accent"
    onMouseEnter={() => handleCursorEnter(3)}
    onMouseLeave={handleCursorLeave}
  >
    <span className="text-2xl md:text-4xl">{icon}</span>
    <span className="text-lg md:text-2xl font-black tracking-wide">{name}</span>
  </span>
);

type TechCardProps = {
  domain: { title: string; icon: ReactNode };
  technologies: { name: string; icon: ReactNode }[];
};
const TechCard = ({ domain, technologies }: TechCardProps) => (
  <div className="flex flex-col gap-3 p-3 border-2 rounded-xl bg-background transition-all duration-200">
    <h4 className="text-xl font-bold text-primary border-b-2 flex items-center justify-between">
      {domain.title} {domain.icon}
    </h4>
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 flex-wrap bg-accent/30 dark:bg-accent border-2 rounded-lg px-3 py-2 text-sm transition-all duration-150 hover:-translate-y-0.5 focus:-translate-y-0.5 active:-translate-y-0.5"
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={handleCursorLeave}
        >
          <span className="text-xl">{tech.icon}</span>
          <span className="font-normal tracking-wide">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

type EducationCardProps = {
  degree: string;
  trade: string;
  college: string;
  board: string;
  marks: string;
  passingout: string;
};
const EducationCard = ({
  degree,
  trade,
  college,
  board,
  marks,
  passingout,
}: EducationCardProps) => (
  <div className="relative flex flex-col gap-3 p-3 bg-card hover:shadow-lg transition-all duration-300">
    {/* Degree */}
    <div
      className="flex items-center gap-3 border-b-2 pb-1"
      onMouseEnter={() => handleCursorEnter(3)}
      onMouseLeave={handleCursorLeave}
    >
      <GraduationCap className="text-blue-500" />
      <h3 className="text-xl md:text-2xl font-bold text-foreground">{degree}</h3>
    </div>

    {/* Details */}
    <div className="space-y-1 text-sm md:text-base text-muted-foreground">
      <div className="flex items-baseline justify-start flex-wrap gap-1">
        <span className="text-lg font-medium text-foreground">College:</span>
        <span className="text-md">{college}</span>
      </div>

      <div className="flex items-baseline justify-start flex-wrap gap-1">
        <span className="text-lg font-medium text-foreground">Trade:</span>
        <span className="text-md">{trade}</span>
      </div>

      <div className="flex items-baseline justify-start flex-wrap gap-1">
        <span className="text-lg font-medium text-foreground">Board:</span>
        <span className="text-md">{board}</span>
      </div>

      <div className="flex items-center justify-start gap-1 flex-wrap">
        <div className="flex items-baseline justify-start gap-1">
          <span className="text-lg font-medium text-foreground">Marks:</span>
          <span className="text-md">{marks}</span>
        </div>
        |
        <div className="flex items-baseline justify-start gap-1">
          <span className="text-lg font-medium text-foreground">Passout:</span>
          <span className="text-md">{passingout}</span>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pranavrao541@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    });
  };

  return (
    <Section sectionName="about" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        <span className="text-muted">About</span> Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center flex-wrap gap-3">
          {SKILLS.map((skill, idx) => (
            <SkillBadge key={idx} icon={skill.icon} name={skill.name} />
          ))}
        </div>

        <div className="w-full md:w-3/4 flex flex-col items-start justify-center gap-5">
          <h3 className="text-2xl font-semibold text-primary">Currently Learning</h3>
          <div className="flex flex-wrap items-center justify-start gap-5">
            {WORKINGON.map((group, idx) => (
              <TechCard key={idx} domain={group.domain} technologies={group.technologies} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4 flex flex-col items-start justify-center gap-5">
          <h3 className="text-2xl font-semibold text-primary">Education</h3>

          <Tabs defaultValue={EDUCATION[0].degree.toLowerCase().split(" ")[0]} className="w-full">
            <TabsList className="flex flex-wrap items-center justify-center gap-2 md:grid md:grid-cols-2 w-full rounded-lg bg-foreground">
              {EDUCATION.map((edu, idx) => (
                <TabsTrigger
                  key={idx}
                  value={edu.degree.toLowerCase().split(" ")[0]}
                  className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=inactive]:text-background dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=inactive]:text-background font-black tracking-wide"
                  onMouseEnter={() => handleCursorEnter(1.5)}
                  onMouseLeave={handleCursorLeave}
                >
                  {edu.degree.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            {EDUCATION.map((edu, idx) => (
              <TabsContent
                key={idx}
                value={edu.degree.toLowerCase().split(" ")[0]}
                className="border-2 rounded-lg overflow-hidden"
              >
                <EducationCard
                  degree={edu.degree}
                  trade={edu.trade}
                  college={edu.college}
                  board={edu.board}
                  marks={edu.marks}
                  passingout={edu.passingout}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="hidden lg:flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5 border p-3 md:p-5 rounded-lg bg-background">
          <h3 className="text-xl text-foreground font-semibold">Get in Touch</h3>
          <Button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 active:scale-95"
            onMouseEnter={() => handleCursorEnter(2)}
            onMouseLeave={handleCursorLeave}
            disabled={emailCopied}
          >
            {emailCopied ? <IoCheckmarkDone /> : <GoCopy />}
            {emailCopied ? "Email Copied" : "Copy Email"}
          </Button>
          <div
            className="flex flex-wrap gap-2"
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={() => handleCursorLeave()}
          >
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
