import { useState } from "react";
import { ReactLenis } from "lenis/react";

import Preloader from "@/components/Preloader/Preloader";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Header from "@/components/Header/Header";
import { Main } from "./Main/Main";
import Home from "@/sections/Home/Home";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
// import LittleInfo from "@/sections/LittleInfo/LittleInfo";
import Experience from "@/sections/Experience/Experience";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
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
