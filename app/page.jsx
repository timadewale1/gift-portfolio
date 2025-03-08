"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowUp } from "react-icons/fi"; // Added arrow up icon
import { BiLink } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
import Services from "./services/page";
import Resume from "./resume/page";
import Work from "./work/page";
import Contact from "./contact/page";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="h-full flex flex-col justify-center relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">
              <Typewriter
                words={[
                  "Timi's Friend",
                  "Gender Researcher",
                  "Executive Administrative Support",
                  "International Development Enthusiast",
                  "Writer & Thought Leader",
                  "Creative Thinker",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <h1 className="h1 mb-6 leading-tight">
              Hello, I&apos;m
              <span className="text-accent ml-5">Gift</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Being a C-level Executive Assistant is like being the office
              superhero—everyone needs saving, but no one wants to wear the
              cape! I thrive on organization, turning chaos into order with
              color-coded calendars and perfectly timed coffee breaks. <br />
              Beyond the desk, I’m a detective of gender roles, history, and
              economic shifts in Nigeria—solving real-world puzzles with a
              passion for research, gender equality, and sustainability. <br />
              Let’s connect and see how my mix of office wizardry and
              investigative skills can bring efficiency (and maybe a little
              humor) to our shared goals!
            </p>

            {/* Buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a href="/assets/Gift_Nwamadu_CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              {/* Social Icons */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col xl:flex-row items-center"></div>
            <a
              href="/contact"
              className="flex flex-col xl:flex-row items-center mb-8"
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Let&apos;s Connect</span>
                <BiLink className="text-xl" />
              </Button>
            </a>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
      <div className="w-full h-[1px] bg-yellow-500 mt-4"></div>
      {/* Fade-in Sections */}
      {[Services, Resume, Work, Contact].map((Component, index) => (
        <motion.div
          key={index}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5"
        >
          <Component />
        </motion.div>
      ))}

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          <FiArrowUp className="text-2xl" />
        </button>
      )}
    </section>
  );
};

export default Home;
