"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Volunteer() {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        ease: "easeIn",
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="">
      <div className="text-center mb-12 md:mb-14 pt-[3rem]  ">
        <motion.h1
          className="text-primary_text text-[2rem] md:text-[4rem] font-semibold capitalize"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          join the train <span className="text-secondary_text">.</span>
        </motion.h1>
      </div>
      <motion.div
        className="flex justify-center items-center gap-y-7 flex-col text-center md:w-[60%] mx-auto text-primary_text "
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
      >
        <p>
          We are raising a digital army for the purpose of this election.
          Members will be part of the volunteer groups and get front row seats
          to all the goals and plans of King Pi. <br /> Join the train now
        </p>
        <Link
          href="https://chat.whatsapp.com/FgGpQkG5I6QHEQCQuY4rLi"
          target="_blank"
          className="bg-secondary_text font-semibold py-[0.8rem] w-[20rem] rounded-xl text-gray-50 text-sm text-center md:animate-bounce hover:animate-none"
        >
          JOIN OUR WHATSAPP GROUP
        </Link>
      </motion.div>
    </div>
  );
}
