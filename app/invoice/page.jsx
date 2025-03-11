"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Invoice, Memo Tracking and Data Analaysis",
    title: "",
    description: [
      "Invoice creation, memo preparation, financial tracking, and data analysis.",
    ],
    Stack: [""],
    images: [
      "/assets/work/invoice1.png",
      "/assets/work/invoice2.jpeg",
      "/assets/work/invoice3.jpeg",
      "/assets/work/invoice4.png",
    ],
  },
];

const Work1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left text-accent mb-10"
        >
          Invoice, Memo Tracking and Data Analaysis{" "}
        </motion.h1>
        <div className="w-full h-[1px] bg-yellow-500 my-12"></div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Separate Component to Handle Image Switching
const ProjectCard = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length); // Cycle through all images
    }, 15000); // Switch every 30 seconds

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        {/* Left Content */}
        <div className="w-full xl:w-[50%] flex flex-col gap-6">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category}
          </h2>
          <div className="flex flex-col gap-2">
            {project.description.map((point, idx) => {
              // Split the text into the bold keyword and the rest of the sentence
              const [boldText, normalText] = point.split(": ");

              return (
                <p key={idx} className="text-white">
                  <span className="font-bold text-accent">{boldText}:</span>{" "}
                  {normalText}
                </p>
              );
            })}
          </div>
          <ul className="flex gap-4">
            {project.Stack.map((item, idx) => (
              <li key={idx} className="text-xl text-accent">
                {item.name}
                {idx !== project.Stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <div className="border border-white/40 mb-8"></div>
        </div>

        {/* Right Image Section */}
        <div className="w-full xl:w-[50%]">
          <div className="relative group flex justify-center items-center rounded-lg shadow-lg aspect-[16/9]">
            <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
            <div className="relative w-full h-full">
              <Image
                src={project.images[currentImage]} // Cycles through all images
                fill
                className="object-contain rounded-lg transition-opacity duration-1000"
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
  );
};
export default Work1;
