"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: (
      <a
        href="tel:+2348081393230"
        className="text-white-400 hover:text-accent-hover underline"
      >
        +2348081393230
      </a>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: (
      <a
        href="mailto:nwamadugift12@gmail.com"
        className="text-white-400 hover:text-accent-hover underline"
      >
        nwamadugift12@gmail.com
      </a>
    ),
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Abuja, Nigeria",
  },
];

const benefits = [
  "Time-Saving – I handle the admin, so you don’t have to.",
  "Attention to Detail – Every task is completed with precision.",
  "Seamless Communication – Quick responses & proactive updates.",
  "Discretion & Confidentiality – Your information stays secure.",
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
      }}
      className="py-12 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left text-accent mb-5"
        >
          Why Work With Me?
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 p-4 bg-[#1E293B] rounded-lg shadow-md hover:bg-[#334155] transition duration-300 w-full md:w-[500px]"
            >
              <FaCheckCircle className="text-yellow-400 text-2xl drop-shadow-md animate-bounce" />
              <p className="text-white/90 text-lg">{benefit}</p>
            </motion.li>
          ))}
        </motion.ul>
        <p className="text-lg text-accent mb-10 mt-10">
          Ready to make your operations stress-free? Let’s talk!
        </p>

        <div className="flex flex-col xl:flex-row gap-10">
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none bg-[#222831] p-10 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-white/60 mb-6">
              Reach out to us for any inquiries. We are here to help you!
            </p>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  className="bg-primary text-white"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  className="bg-primary text-white"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-primary text-white"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-primary text-white"
                />
              </div>

              <Select>
                <SelectTrigger className="w-full bg-primary text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Virtual/administrative support">
                      Virtual/administrative support
                    </SelectItem>
                    <SelectItem value="Research & Writing">
                      Research & Writing
                    </SelectItem>
                    <SelectItem value="Customer Service Support">
                      Customer Service Support
                    </SelectItem>
                    <SelectItem value="Project Management">
                      Project Management
                    </SelectItem>
                    <SelectItem value="Invoice, Memo Tracking and Data Analaysis">
                      Invoice, Memo Tracking and Data Analaysis
                    </SelectItem>
                    <SelectItem value="Knowledge Management and IT Support">
                      Knowledge Management and IT Support
                    </SelectItem>
                    <SelectItem value="other">
                      Two or more services, please fill below
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px] bg-primary text-white"
                placeholder="Type your message here."
              />

              <Button
                size="lg"
                className="max-w-40 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-md transition duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Benefits */}
          <div className="flex-1 flex flex-col items-start order-1 xl:order-none gap-6">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-[60px] h-[60px] bg-yellow-400 text-black rounded-md flex items-center justify-center shadow-lg">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-lg font-semibold">
                      {item.description}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
