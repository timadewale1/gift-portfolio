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

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, possimus sapiente eligendi quidem tempora velit autem repudiandae adipisci provident nesciunt sit commodi asperiores dolorem necessitatibus quas id soluta reiciendis totam.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Gift Nwamadu",
    },
    {
      fieldName: "Phone:",
      fieldValue: "1234567890",
    },
    {
      fieldName: "Experience:",
      fieldValue: "12+",
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
      fieldName: "Email",
      fieldValue: "ghghjghjdjdjdj",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages:",
      fieldValue: "yen yen yen",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, possimus sapiente eligendi quidem tempora velit autem repudiandae adipisci provident nesciunt sit commodi asperiores dolorem necessitatibus quas id soluta reiciendis totam.",
  items: [
    {
      company: "hghghghgh",
      position: "Position: fulll jfjfjfjfj",
      duration: "Duration: 2022 - jfjfj",
    },
    {
      company: "hghghghgh",
      position: "Position: fulll jfjfjfjfj",
      duration: "Duration: 2022 - jfjfj",
    },
    {
      company: "hghghghgh",
      position: "Position: fulll jfjfjfjfj",
      duration: "Duration: 2022 - jfjfj",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, possimus sapiente eligendi quidem tempora velit autem repudiandae adipisci provident nesciunt sit commodi asperiores dolorem necessitatibus quas id soluta reiciendis totam.",
  items: [
    {
      Instituion: "hghghghgh",
      Degree: " Degree: fulll jfjfjfjfj",
      year: "Year: 2022 - jfjfj",
    },
    {
      Instituion: "hghghghgh",
      Degree: "Degree: fulll jfjfjfjfj",
      year: "Year: 2022 - jfjfj",
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

const Resume = () => {
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
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
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
    </>
  );
};

export default Resume;
