import { MdOutlineFileDownload } from "react-icons/md";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import resume from "@/assets/Pranav's_Resume.pdf";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import SocialButton from "@/components/social-button";
import AlternateText from "@/components/animations/text-animations/AlternateText";
import { motion } from "motion/react";

const MotionButton = motion.create(Button);

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

const Home = () => {
  return (
    <Section sectionName="home" className="min-h-[100svh] lg:min-h-dvh overflow-x-hidden">
      <div className="min-h-[100svh] lg:min-h-dvh flex flex-col items-center justify-center text-center lg:text-start gap-4 sm:gap-2 lg:w-3/4  p-3 md:p-0">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="flex items-baseline gap-1"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground">
            Hi, I'm
          </h1>
          <AlternateText
            initialText="Pranav Rao."
            altText="Web Dev IN."
            initialTextClassName="font-extrabold text-muted text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            altTextClassName="font-extrabold text-muted text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
          />
        </motion.div>

        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="text-center font-medium text-muted-foreground leading-relaxed"
        >
          Passionate{" "}
          <span className="font-light text-lg lg:text-xl xl:text-2xl">Frontend Developer</span>{" "}
          started my career in Web Dev. I specialize in using{" "}
          <span className="font-light text-lg lg:text-xl xl:text-2xl">React.js</span> to build
          modern, dynamic and efficient websites.
        </motion.p>

        <MotionButton
          variant="default"
          className="gap-2 mt-2 transition-colors"
          onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <MdOutlineFileDownload />
          <span>Download CV</span>
        </MotionButton>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.div
            className="hidden lg:flex lg:gap-2 absolute right-5 top-1/2 transform -translate-y-1/2 z-5 flex-col items-center before:content-[''] before:w-px before:h-30 before:bg-border after:content-[''] after:w-px after:h-30 after:bg-border"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-2 lg:hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
