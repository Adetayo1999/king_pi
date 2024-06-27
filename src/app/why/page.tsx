"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import myImage from "../../../public/images/akindele.jpg";

export default function Why() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="">
      <div className="text-center mb-12 md:mb-20">
        <motion.h1
          className="text-primary_text text-[2rem] md:text-[4rem] font-semibold"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          WHY VOTE ME?
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col md:flex-row gap-y-6 relative md:gap-y-0 md:justify-between"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="md:flex-[0.35] md:sticky md:top-5 h-[25rem] md:h-[30rem] bg-blue-900 rounded-3xl overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src={myImage}
            alt="Akindele Emmanuel"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
        <motion.div className="md:flex-[0.6]" variants={textVariants}>
          <div className="flex flex-col gap-y-5 text-primary_text text-sm">
            <p>
              <span className="italic">
                &apos;Our lives begin to end the day we become silent about
                things that matter.&apos;
              </span>{" "}
              <br /> - Martin Luther King, Jr
            </p>
            <p>
              Upon resumption, I observed some anomalies in how things were done
              in the faculty. For instance, other faculties had publications for
              past questions and solutions to them for all courses but I could
              hardly even find materials for my courses talk less of past
              questions so I took it upon myself to keep materials and past
              questions for all the classes, especially the ones in electronic
              forms were saved on drives. I converted the hard copies into PDFs
              and uploaded them to Google Drive. I took it a notch further by
              also collecting past questions from sets after mine to keep for
              the use of the people from the future.
            </p>
            <p>
              I, like you, have once struggled to get my bearings in this
              faculty. I know what it feels like to be excited one minute, and
              get your hopes dashed by lecturers or student representatives the
              next.
            </p>
            <p>
              From the records, you can tell that I have not been silent. I have
              spoken up on things, in places, and to people that matter. I am
              prepared to take it a notch higher with your VOTE.
            </p>
            <p>
              Reading up to this point means you want to live fully in this
              faculty. Hence, you will not be silent or apathetic towards King
              Pi.
            </p>
            <p>
              <b>VOTE</b> Akindele Emmanuel Tosin for FESSA President. <br />{" "}
              <b>VOTE</b> for an all-inclusive agenda.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
