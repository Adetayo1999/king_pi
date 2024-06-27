"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import myImage from "../../../public/images/akindele.jpg";

export default function Awards() {
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
          AWARDS AND RECOGNITION
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
        <motion.div
          className="md:flex-[0.6] flex items-center justify-center"
          variants={textVariants}
        >
          <div className="flex flex-col gap-y-5 text-primary_text text-sm">
            <p>
              KingPi was FESSA’s next-rated student in 2021. He was listed among
              Trybecity’s top 10 ‘studentpreneurs’, UNILAG in 2022.
            </p>
            <p>
              In 2023, KingPi was nominated in four categories. FESSA’s most
              influential student, social media personality of the year, face of
              300 level, and for organising the most commendable social event in
              the faculty.
            </p>
            <p>He went on to win the award of the face of FESSA 300 level.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
