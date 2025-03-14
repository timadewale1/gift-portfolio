"use client";

import {
  SiGoogle,
  SiMicrosoftExcel,
  SiOpenai,
  SiTrello,
  SiPowerbi,
  SiSlack,
  SiZoom,
  SiMicrosoftPowerpoint,
  SiCanva,
  SiMicrosoftTeams,
  SiTodoist,
  SiDropbox,
  SiDocusign,
  SiMailchimp,
  SiHubspot,
  SiMicrosoftOnenote,
  SiBuffer,
} from "react-icons/si";

import { FaGoogleScholar, FaMicrosoft } from "react-icons/fa6"; // Alternative for Google Scholar
import { AiOutlineClockCircle } from "react-icons/ai"; // Alternative for Clockify
import { BiCalendar, BiLogoMicrosoftTeams } from "react-icons/bi"; // Alternative for Calendly
import {
  PiMicrosoftExcelLogoBold,
  PiMicrosoftPowerpointLogoBold,
} from "react-icons/pi";
import { FaFileSignature, FaDatabase } from "react-icons/fa";
import { useState, useEffect } from "react";

const about = {
  title: "About me",
  description:
    "Results-driven Chief of Staff with over 4 years of experience providing comprehensive support to senior executives and managing high-quality stakeholder engagements. Skilled in data analysis, research, project management, optimizing office operations, managing complex calendars, and fostering seamless communication across teams. Adept at handling confidential information with discretion and efficiency. Seeking to leverage a strong organizational skill set and commitment to excellence in a challenging Executive Virtual Assistant role",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Gift Nwamadu",
    },
    {
      fieldName: "Phone:",
      fieldValue: "+2348081393230",
    },
    {
      fieldName: "Experience:",
      fieldValue: "5+",
    },
    {
      fieldName: "Linkeldin:",
      fieldValue: "Gift Nwamadu",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email:",
      fieldValue: "Nwamadugift12@gmail.com",
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages:",
      fieldValue: "English, French",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      company: "Clean Technology Hub",
      position: "Chief of Staff TO THE CEO",
      duration: "January, 2023 - Present",
    },
    {
      company: "Energy Commission of Nigeria, Abuja",
      position: "Human Resource Intern",
      duration: "June 2021 - April 2022",
    },
    {
      company: "IJ Royal Interiors Limited, Abuja",
      position: "Operations MANAGER",
      duration: "July 2018 - 2019",
    },
    {
      company: "Clice Foundation, Remote",
      position: "Gender, Communications and Social Media Manager",
      duration: " June 2021 - April 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      Instituion: "Edo State University",
      Degree: "Bachelor of Arts (4.79 CGPA)",
      year: "2017 - 2020",
    },
  ],

  certifications: [
    {
      title: "Youth Sustainable Energy Fellowship",
      pdfUrl: "/certificates/certificate1.pdf",
      image: "/certificates/certificate1.png",
    },
    {
      title: "Fundamentals of Digital Marketing Certification",
      pdfUrl: "/certificates/certificate2.pdf",
      image: "/certificates/certificate2.png",
    },
    {
      title: "Certificate in Digital Marketing",
      pdfUrl: "/certificates/certificate3.pdf",
      image: "/certificates/certificate3.png",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Here are some of the tools and platforms I work with:",
  skillsList: [
    { icon: SiGoogle, name: "Google Workspace" },
    { icon: PiMicrosoftExcelLogoBold, name: "Microsoft Excel" },
    { icon: SiOpenai, name: "ChatGPT" },
    { icon: SiTrello, name: "Trello" },
    { icon: FaDatabase, name: "Power BI" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiZoom, name: "Zoom" },
    { icon: BiCalendar, name: "Calendly" },
    { icon: PiMicrosoftPowerpointLogoBold, name: "Microsoft PowerPoint" },
    { icon: SiCanva, name: "Canva" },
    { icon: BiLogoMicrosoftTeams, name: "Microsoft Teams" },
    { icon: SiTodoist, name: "Todoist" },
    { icon: AiOutlineClockCircle, name: "Clockify" },
    { icon: SiDropbox, name: "Dropbox" },
    { icon: FaFileSignature, name: "Docusign" },
    { icon: SiMailchimp, name: "Mailchimp" },
    { icon: SiHubspot, name: "HubSpot" },
    { icon: FaMicrosoft, name: "OneNote" },
    { icon: SiBuffer, name: "Buffer" },
    { icon: FaGoogleScholar, name: "Google Scholar" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Image from "next/image";

const Resume = () => {
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-left text-accent mb-10"
          >
            My Resume
          </motion.h1>
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Technical Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.year}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.Degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.Instituion}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <h3 className="text-3xl font-bold mt-8 mb-8 text-accent">
                      Certifications
                    </h3>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-[#232329] py-6 px-10 rounded-xl flex-col">
                      {education.certifications.map((cert, index) => (
                        <li
                          key={index}
                          className="flex flex-col items-center gap-2"
                        >
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={cert.image}
                              width={300}
                              height={150}
                              alt={cert.title}
                              className="w-full h-[150px] object-cover rounded-lg hover:opacity-80 transition-all duration-300"
                            />
                          </a>
                          <p className="text-1xl text-accent font-semibold text-center">
                            {cert.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>{" "}
              </TabsContent>{" "}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillsList.map((skill, index) => {
                        if (!skill.icon) return null; // Ensure the icon is valid before rendering
                        const IconComponent = skill.icon;
                        return (
                          <li
                            key={index}
                            className="flex flex-col items-center gap-2"
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                  <IconComponent className="text-6xl text-accent group-hover:text-yellow-500 transition-all duration-300" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <p className="text-accent text-lg font-semibold">
                              {skill.name}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl text-accent">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
      <div className="w-full h-[1px] bg-yellow-500 mt-5"></div>
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          <FiArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default Resume;
