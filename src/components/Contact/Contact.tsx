import Section from "../Section/Section";
import SocialButton from "../SocialButton/SocialButton";
import { Button } from "../ui/button";
import { SiMinutemailer, SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

import { handleCursorEnter, handleCursorLeave } from "@/utils/gsapUtils";

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

const Contact = () => {
  return (
    <Section sectionName="contact" className="py-20 px-3 flex-col">
      <h2 className="section-title">
        Contact <span className="text-muted">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <p className="text-xl font-light text-center text-muted-foreground">
          If you have any questions or want to get in touch, feel free to drop me an email. I would
          love to hear from you!
        </p>

        <div className="flex flex-col items-center justify-center mt-5">
          <Button
            variant="default"
            asChild
            onMouseEnter={() => handleCursorEnter(2)}
            onMouseLeave={handleCursorLeave}
            className="active:scale-95"
          >
            <a href="mailto:pranavrao541@gmail.com" className="mb-5">
              Let's Connect
              <SiMinutemailer />
            </a>
          </Button>

          <div className="flex flex-wrap gap-2">
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

export default Contact;
