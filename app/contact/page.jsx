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
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "123456789",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ogunmepon@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Here, there, and everywhere",
  },
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
      className="py-12 bg-gradient-to-b from-[#0A1931] to-black text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left text-accent mb-10"
        >
          Contact Me
        </motion.h1>
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
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="friend">Timi&apos;s Friend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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

          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
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
