import type { IconType } from "react-icons";

export type IconRef = {
  Icon: IconType;
  color?: string;
};

export type Skill = IconRef & {
  name: string;
};

export type Education = {
  title: string;
  degree: string;
  trade: string;
  college: string;
  board: string;
  marks: string;
  passingout: string;
};

export type SocialLink = IconRef & {
  href: string;
  label: string;
};

export type Role = {
  title: string;
  duration?: string;
  contributions: string[];
};

export type Experience = {
  company: string;
  duration: string;
  roles: Role[];
  tech: Skill[];
  experienceType: string;
};

export type Project = {
  projectName: string;
  projectDesc: string;
  tech: Skill[];
  contributions: string[];
  projectLink?: string;
  projectGitLink?: string;
};
