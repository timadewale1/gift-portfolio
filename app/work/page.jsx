"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    images: [
      "/assets/work/email1.jpeg",
      "/assets/work/email2.jpeg",
      "/assets/work/Calender1.jpg",
      "/assets/work/calendar2.jpg",
      "/assets/work/travel1.jpeg",
      "/assets/work/travel2.jpeg",
      "/assets/work/travel3.jpeg",
      "/assets/work/travel4.png",
    ],
    path: "/virtual",
  },
  {
    num: "02",
    category: "Research & Writing",
    title: "Data-Driven Insights & Engaging Content",
    description:
      "Data-Driven Insights & Engaging Content for Impactful Decisions",
    Stack: [
      { name: "Research & Data Analysis" },
      { name: "Reports & Policy Briefs" },
      { name: "PowerPoint Presentations" },
      { name: "Discussion papers" },
    ],
    images: ["/assets/work/work1.jpg"],
    path: "/research",
  },
  {
    num: "03",
    category: "Project Management",
    title: "",
    description:
      "Coordinating tasks, tracking deadlines, and ensuring seamless execution of your projects.",
    Stack: [""],
    images: ["/assets/work/project1.png", "/assets/work/project2.png"],
    path: "/project",
  },
  {
    num: "04",
    category: "Invoice, Memo Tracking and Data Analaysis",
    title: "",
    description:
      "Invoice creation, memo preparation, financial tracking, and data analysis",
    Stack: [""],
    images: [
      "/assets/work/invoice1.png",
      "/assets/work/invoice4.png",
      "/assets/work/invoice2.jpeg",
      "/assets/work/invoice3.jpeg",
    ],
    path: "/invoice",
  },
  {
    num: "05",
    category: "Knowledge Management and IT Support",
    title: "",
    description: [
      "Managing email seats, user accounts, and access control.",
      "Overseeing web hosting, domain management, and troubleshooting website-related issues.",
      "Organizing company documents, knowledge bases, and shared drives for seamless collaboration.",
      "Ensuring data security, backups, and compliance with digital best practices.",
    ],
    Stack: [""],
    images: [
      "/assets/work/knowledge3.png",
      "/assets/work/knowledge4.png",
      "/assets/work/knowledge5.png",
      "/assets/work/knowledge1.jpeg",
      "/assets/work/knowledge2.jpeg",
    ],
    path: "/knowledge",
  },
];

const testimonials = [
  {
    text:
      "Gift is the backbone of our organization, and her contributions are invaluable to both our success and my personal growth as a leader...",
    author: "Ifeoma Malo",
    designation: "CEO/Co-founder, Clean Technology Hub",
  },
  {
    text:
      "Gift is a Force to be reckoned with; a true assistant. She anticipates needs and always knows what to do with minimal or no supervision...",
    author: "Ijeoma",
    designation: "CEO, IJ Royal Interiors, Past Client",
  },
  {
    text:
      "Gift is exceptionally dedicated, highly organised, and delivers top-tier results with minimal supervision. Her diligence, problem-solving skills, and ability to manage complex tasks make her an invaluable asset to any team or executive she supports",
    author: "Chris Oke, PhD",
    designation: "Supervisor, Edo University",
  },
];

const Work = () => {
  const pathname = usePathname();
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const intervals = projects.map((project, projectIndex) => {
      if (project.images.length > 1) {
        return setInterval(() => {
          setCurrentImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] =
              (newIndexes[projectIndex] + 1) % project.images.length;
            return newIndexes;
          });
        }, 10000);
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

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
            Projects
          </motion.h1>
          <div className="w-full h-[1px] bg-yellow-500 mb-8"></div>
          <div className="flex flex-col gap-[30px]">
            {projects.map((project, projectIndex) => (
              <React.Fragment key={projectIndex}>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                  <div className="w-full xl:w-[50%] flex flex-col gap-[30px]">
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                      {project.num}
                    </div>
                    <h2 className="text-[25px] font-bold leading-none text-white capitalize text-wrap">
                      {project.category}
                    </h2>
                    {Array.isArray(project.description) ? (
                      <ul className="text-white/70 leading-relaxed list-disc pl-5">
                        {project.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    <ul className="flex gap-4">
                      {project.Stack.map((item, i) => (
                        <li key={i} className="text-xl text-accent text-wrap">
                          {item.name}
                          {i !== project.Stack.length - 1 && ","}
                        </li>
                      ))}
                    </ul>
                    <div className="border border-white/40"></div>
                    <div className="flex items-center gap-4 mb-5">
                      <Link href={project.path}>
                        <Button className="outline-2 hover:bg-white">
                          Check More
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full xl:w-[50%]">
                    <div className="relative group flex justify-start items-start rounded-lg shadow-lg w-full aspect-[16/9] overflow-hidden">
                      <motion.div
                        key={currentImageIndexes[projectIndex]}
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute w-full h-full"
                      >
                        <Image
                          src={
                            project.images[currentImageIndexes[projectIndex]]
                          }
                          fill
                          className="object-contain rounded-lg"
                          alt={`Project Image ${
                            currentImageIndexes[projectIndex] + 1
                          }`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Thin Gold Line */}
                <div className="w-full h-[1px] bg-yellow-500 mt-5"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-accent mb-10"
      >
        Testimonials
      </motion.h1>
      <div className="container mx-auto my-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full max-w-3xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 border-2 border-yellow-500 bg-white/5 rounded-lg text-center">
                <p className="text-white text-lg italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-4 text-yellow-500 font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-yellow-500 text-sm">
                  {testimonial.designation}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-[1px] bg-yellow-500"></div>
    </>
  );
};

export default Work;
