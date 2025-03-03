"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ✅ Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Research",
    title: "Project 1",
    description: "A sample research project demonstrating front-end skills.",
    Stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "https://example.com",
    github: "https://github.com/example",
  },
  {
    num: "02",
    category: "Research",
    title: "Project 2",
    description: "A different approach to data visualization research.",
    Stack: [{ name: "React" }, { name: "TailwindCSS" }, { name: "Next.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/example",
  },
  {
    num: "03",
    category: "Research",
    title: "Project 3",
    description: "A creative project analyzing UI/UX behaviors.",
    Stack: [{ name: "Figma" }, { name: "TypeScript" }, { name: "Node.js" }],
    image: "/assets/work/thumb3.png",
    live: "https://example.com",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex; // ✅ Ensure correct index tracking
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} // ✅ Fix animation
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left text-accent mb-10"
        >
          My Projects
        </motion.h1>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Panel - Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>

              {/* Tech Stack */}
              <ul className="flex gap-4">
                {project.Stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.Stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/40"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all hover:bg-white/10">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {project.github ? (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all hover:bg-white/10">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Panel - Image Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]} // ✅ Added Swiper modules
              className="xl:h-[520px] mb-12 text-accent"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-gray-800/30 rounded-lg shadow-lg">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded-lg"
                        alt={`Project ${index + 1}`}
                      />
                    </div>
                  </div>
                  {/* <WorkSliderBtns
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
