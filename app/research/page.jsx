"use client";

import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const projects = [
  {
    num: "01",
    category: "Policy Briefs, Article writing",
    title: "",
    description: "Empowering Women in Administration",
    Stack: [""],
    image: "/assets/work/research2.webp",
    live: [
      {
        name: "Empowering Women in Administration...",
        url:
          "https://cleantechhub.medium.com/empowering-women-in-administration-driving-sustainable-corporate-social-responsibility-1c99f8e7dd81",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description: "Strengthening Sustainability Governance",
    Stack: [""],
    image: "/assets/work/research1.jpeg",
    live: [
      {
        name: "Strengthening Sustainability Governance...",
        url:
          "https://cleantechnologyhub.com/wp-content/uploads/2024/11/CTH-Policy-Brief-Strenghten-Sustainability.pdf",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description: "Green Technology and Youth Employment",
    Stack: [""],
    image: "/assets/work/research3.jpeg",
    live: [
      {
        name: "Green Technology and Youth Employment...",
        url:
          "https://afripoli.org/green-technology-and-youth-employment-in-africa-a-transformative-opportunity",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description: "Gender Relations and Socioeconomic Changes...",
    Stack: [""],
    image: "/assets/work/research4.jpeg",
    live: [
      {
        name: "Gender Relations and Socioeconomic Changes...",
        url:
          "https://afripoli.org/green-technology-and-youth-employment-in-africa-a-transformative-opportunity",
      },
    ],
    github: "",
  },
  {
    num: "02",
    category: "PowerPoint Presentations",
    title: "",
    description: "Presentation",
    Stack: [""],
    image: "/assets/work/powerpoint1.jpeg",
    live: [
      {
        name: "Presentation...",
        url:
          "https://docs.google.com/presentation/d/1Qz4qt1h2Zp5Rypp9x3quTb6e8Naq9XJ5/edit?usp=sharing&ouid=114422393197529740570&rtpof=true&sd=true",
      },
    ],
    github: "",
  },
  {
    num: "03",
    category: "Discussion Points",
    title: "",
    description:
      "Green Futures: Youth and Climate Positive Economic Growth in Africa",
    Stack: [""],
    image: "/assets/work/discussion1.jpeg",
    live: [
      {
        name: "Green Futures....",
        url:
          "https://drive.google.com/file/d/19JwO-yYjIJj9GEZxRwlmjJqD8Rn1v6m8/view?usp=sharing",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description:
      "Nigeria's Path to Carbon Neutrality - Challenges and Opportunities in Climate Finance.",
    Stack: [""],
    image: "/assets/work/discusssion2.jpeg",
    live: [
      {
        name: "Nigeria's Path to Carbon Neutrality....",
        url:
          "https://drive.google.com/file/d/1D__YPk89hOgjuUkDCO_UtkQq83OH4doe/view?usp=sharing",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description:
      "Talking Point for Yar'adua Foundation Energy Transition Panel Session.",
    Stack: [""],
    image: "/assets/work/discussion3.jpeg",
    live: [
      {
        name: "Talking Point...",
        url:
          "https://drive.google.com/file/d/1rfrVpz-m0GLRJ54FrAh3LSawrnLWkoMu/view?usp=sharing",
      },
    ],
    github: "",
  },
  {
    num: "",
    category: "",
    title: "",
    description: "Addressing Youth Engagement and the Environment in Nigeria",
    Stack: [""],
    image: "/assets/work/discussion4.jpeg",
    live: [
      {
        name: "Addressing Youth...",
        url:
          "https://drive.google.com/file/d/19N997pAGnj249rtmphUeNyNviT9hyjcL/view?usp=sharing",
      },
    ],
    github: "",
  },
];

const Work1 = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
          Research & Writing
        </motion.h1>
        <div className="w-full h-[1px] bg-yellow-500 my-12"></div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] flex flex-col gap-6">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.category}
                  </h2>
                  <p className="text-accent">{project.description}</p>
                  <ul className="flex gap-4">
                    {project.Stack.map((item, idx) => (
                      <li key={idx} className="text-xl text-accent">
                        {item.name}
                        {idx !== project.Stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-white/40"></div>
                  <div className="flex items-center gap-4">
                    {project.live &&
                      project.live.map((report, idx) => (
                        <Link key={idx} href={report.url} target="_blank">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all hover:bg-white/10 mb-8">
                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{report.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="w-full xl:w-[50%]">
                  <div className="h-[570px] relative group flex justify-center items-center  bg-blue-800/30 rounded-lg shadow-lg">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain rounded-lg"
                        alt={`Project ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {index !== projects.length - 1 && (
                <div className="w-full h-[1px] bg-yellow-500 my-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          <FiArrowUp className="text-2xl" />
        </button>
      )}
    </motion.section>
  );
};

export default Work1;
