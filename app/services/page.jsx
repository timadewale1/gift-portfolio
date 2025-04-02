"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const services = [
  {
    num: "01",
    title: "Virtual/administrative support",
    description:
      "Seamlessly managing your emails, calendars, travel arrangements, organizing files, and daily operations, ensuring you stay on top of your priorities",
    path: "/virtual",
  },
  {
    num: "02",
    title: "Research & Writing",
    description:
      "Conducting thorough research, writing reports,  data entry, creating presentations, and crafting compelling storytelling and content.",
    path: "/research",
  },

  {
    num: "03",
    title: "Project Management",
    description:
      "Coordinating tasks, tracking deadlines, and ensuring seamless execution of your projects.",
    path: "/project",
  },
  {
    num: "04",
    title: "Invoice, Memo Tracking and Data Analaysis",
    description:
      "Invoice creation, memo preparation, financial tracking, and data analysis.",
    path: "/invoice",
  },
  {
    num: "05",
    title: "Knowledge Management and IT Support",
    description: [
      "Managing email seats, user accounts, and access control.",
      "Overseeing web hosting, domain management, and troubleshooting website-related issues.",
      "Organizing company documents, knowledge bases, and shared drives for seamless collaboration.",
      "Ensuring data security, backups, and compliance with digital best practices.",
    ],
    path: "/knowledge",
  },
];

const Services = () => {
  const pathname = usePathname();

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center py-16">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-left text-accent mb-5"
          >
            How I Can Support You!
          </motion.h1>
          <p className="text-white/70 leading-relaxed mb-8">
            I help busy professionals, entrepreneurs, and businesses stay
            organized, efficient, and ahead of their goals. With my expertise in
            virtual assistance, I take care of the details so you can focus on
            what truly matters—growing your career or business.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-6 border-b border-t border-accent p-6 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-lg transition-all duration-500 group"
              >
                {/* Top Section */}
                <div className="flex justify-between items-center">
                  <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white group-hover:from-white group-hover:to-yellow-400 transition-all duration-500">
                    {service.num}
                  </span>
                  <Link
                    href={service.path}
                    target="_blank"
                    className="w-16 h-16 rounded-full bg-white group-hover:bg-yellow-400 transition-all duration-500 flex justify-center items-center hover:rotate-45 shadow-lg animate-bounce"
                  >
                    <Button>View</Button>
                  </Link>
                </div>

                {/* Title */}
                <h2 className="text-[25px] font-bold text-white group-hover:text-yellow-400 transition-all duration-500">
                  {service.title}
                </h2>

                {/* Description */}
                {Array.isArray(service.description) ? (
                  <ul className="text-white/70 leading-relaxed list-disc pl-5">
                    {service.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                )}
                {/* Divider */}
                <div className="border-b border-white/20 w-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-yellow-500"></div>
    </>
  );
};

export default Services;
