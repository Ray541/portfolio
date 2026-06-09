import { MdOutlineFileDownload } from "react-icons/md";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import SocialButton from "@/components/social-button";
import AlternateText from "@/components/animations/text-animations/AlternateText";
import { handleCursorEnter, handleCursorLeave } from "@/utils/cursorUtils";
import { motion, Variants } from "motion/react";

const MotionButton = motion.create(Button);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // controls delay between children
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const xItemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pranavrao541/",
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="min-h-[100svh] lg:min-h-dvh flex flex-col gap-2 lg:gap-5 items-center justify-center lg:w-3/4 p-3 md:p-0"
      >
        <motion.div variants={itemVariants} className="flex items-baseline gap-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-foreground">
            Hi, I'm
          </h1>
          <AlternateText
            initialText="Pranav Rao."
            altText="Web Dev IN."
            initialTextClassName="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
            altTextClassName="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
            onMouseEnter={() => handleCursorEnter(12)}
            onMouseLeave={() => handleCursorLeave()}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-muted-foreground leading-relaxed text-base md:text-md lg:text-lg max-w-4xl"
        >
          I am a Frontend Developer with 2 years of experience crafting modern, high-performance web
          applications. I specialize in{" "}
          <span
            className="font-bold text-foreground"
            onMouseEnter={() => handleCursorEnter(3)}
            onMouseLeave={() => handleCursorLeave()}
          >
            React.js
          </span>{" "}
          and love building software that scales.
        </motion.p>

        <MotionButton
          variants={itemVariants}
          variant="default"
          onMouseEnter={() => handleCursorEnter(2)}
          onMouseLeave={() => handleCursorLeave()}
          whileTap={{
            scale: 0.95,
          }}
          asChild
        >
          <a
            href="https://drive.google.com/file/d/1oU7J0WDRxDgoIvqzH5rzY1sdXmMheMEm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1"
          >
            <MdOutlineFileDownload />
            Download CV
          </a>
        </MotionButton>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.div
            variants={xItemVariants}
            className="hidden lg:flex lg:gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-5 flex-col items-center before:content-[''] before:w-px before:h-30 before:bg-gradient-to-b before:from-transparent before:to-foreground/40 after:content-[''] after:w-px after:h-30 after:bg-gradient-to-b after:from-foreground/40 after:to-transparent"
          >
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
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-2 lg:hidden">
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
      </motion.div>
    </Section>
  );
};

export default Home;
