import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import type { SocialLink } from "@/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/pranavrao541/",
    Icon: SiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ray541",
    Icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/pranav.rao.338",
    Icon: SiFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/pranav_rao0504",
    Icon: SiInstagram,
    label: "Instagram",
  },
];

export const HEADER_ITEMS = ["about", "project", "work", "contact"] as const;

export const SITE = {
  email: "pranavrao541@gmail.com",
  author: "_pr.",
  cvUrl: "https://drive.google.com/file/d/1oU7J0WDRxDgoIvqzH5rzY1sdXmMheMEm/view?usp=sharing",
} as const;
