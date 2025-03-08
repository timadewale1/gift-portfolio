"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
    category: "Virtual Assistance/administrative support",
    title: "Inbox & Calendar Management",
    description:
      "Struggling with a cluttered inbox? Missed meetings? Overwhelming administrative tasks? I take care of the details so you can focus on big-picture goals.",
    Stack: [
      { name: "Email Management" },
      { name: "Calendar Management" },
      { name: "Travel Arrangements" },
    ],
    image: "/assets/work/work2.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Research & Writing",
    title: "Data-Driven Insights & Engaging Content",
    description:
      "Providing research and writing support, including data analysis, reports, policy briefs, and discussion papers.",
    Stack: [
      { name: "Research & Data Analysis" },
      { name: "Reports & Policy Briefs" },
      { name: "PowerPoint Presentations" },
      { name: "Discussion papers" },
    ],
    image: "/assets/work/work1.jpg",
    live: [
      {
        name: "Empowering Women in Administration",
        url:
          "https://cleantechhub.medium.com/empowering-women-in-administration-driving-sustainable-corporate-social-responsibility-1c99f8e7dd81",
      },
      {
        name: "Green Technology and Youth Employment",
        url:
          "https://afripoli.org/green-technology-and-youth-employment-in-africa-a-transformative-opportunity",
      },
      {
        name: "CTH Policy Brief - Strengthening Sustainability",
        url:
          "https://cleantechnologyhub.com/wp-content/uploads/2024/11/CTH-Policy-Brief-Strenghten-Sustainability.pdf",
      },
      {
        name: "Sustainability Report 2024",
        url:
          "https://drive.google.com/file/d/1nBKZ-Qz3lSjE14HJayAh1nOan96Z7uQ/view?usp=sharing",
      },
    ],
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
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
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} Project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.Stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.Stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/40"></div>
                <div className="flex items-center gap-4">
                  {project.live &&
                    project.live.map((report, index) => (
                      <Link key={index} href={report.url} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all hover:bg-white/10">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{report.name}</p>{" "}
                              {/* Display the report name here */}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="xl:h-[520px] mb-12 text-accent"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[570px] relative group flex justify-center items-center bg-gray-800/30 rounded-lg shadow-lg">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="w-full h-[1px] bg-yellow-500"></div>
    </>
  );
};

export default Work;
