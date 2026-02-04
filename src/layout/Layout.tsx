import { useState } from "react";
import { ReactLenis } from "lenis/react";

import Preloader from "@/components/pre-loader/Preloader";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import Header from "@/components/header/Header";
import { Main } from "./Main/Main";
import Home from "@/sections/home/Home";
import About from "@/sections/about/About";
import Projects from "@/sections/projects/Projects";
// import LittleInfo from "@/sections/LittleInfo/LittleInfo";
import Experience from "@/sections/experience/Experience";
import Contact from "@/sections/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";
import CustomCursor from "@/components/custom-cursor/CustomCursor";
import { ModeToggle } from "@/components/mode-toggle";

const options = {
  duration: 2,
  lerp: 0.05,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      {!isLoaded ? (
        <Preloader onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ProgressBar />
          <CustomCursor />
          <Header />
          <ModeToggle className="fixed bottom-3 right-7 active:scale-90 z-5" />
          <Main>
            <ReactLenis root options={options}>
              <Home />
              <About />
              <Projects />
              {/* <LittleInfo /> */}
              <Experience />
              <Contact />
            </ReactLenis>
          </Main>
          <Footer />
          <ScrollToTop className="fixed bottom-14 right-7 active:scale-90 z-5" />
        </>
      )}
    </>
  );
};

export default Layout;
