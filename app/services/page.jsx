"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "being Timi's Friend",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odit voluptatem.",
    href: "",
  },
  {
    num: "02",
    title: "being Timi's Friend",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odit voluptatem.",
    href: "",
  },
  {
    num: "03",
    title: "being Timi's Friend",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odit voluptatem.",
    href: "",
  },
  {
    num: "04",
    title: "being Timi's Friend",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odit voluptatem.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-b from-[#0A1931] to-black">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left text-accent mb-10"
        >
          What I do
        </motion.h1>
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
              className="flex flex-col gap-6 p-6 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-lg transition-all duration-500 group"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center">
                <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white group-hover:from-white group-hover:to-yellow-400 transition-all duration-500">
                  {service.num}
                </span>
                <Link
                  href={service.href}
                  className="w-16 h-16 rounded-full bg-white group-hover:bg-yellow-400 transition-all duration-500 flex justify-center items-center hover:rotate-45 shadow-lg"
                >
                  <BsArrowDownRight className="text-black text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-[40px] font-bold text-white group-hover:text-yellow-400 transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>

              {/* Divider */}
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
