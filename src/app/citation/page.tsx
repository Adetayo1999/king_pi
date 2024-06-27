"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../../public/images/akindele.jpg";

export default function Citation() {
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
      <div className="text-center mb-8">
        <motion.h1
          className="text-primary_text text-[2.5rem] md:text-[5rem] font-semibold"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          MEET AKINDELE
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
        <motion.div className="flex-[0.6]" variants={textVariants}>
          <h3 className="text-xl md:text-2xl font-semibold text-primary_text mb-4">
            ABOUT ME
          </h3>
          <div className="flex flex-col gap-y-5 text-primary_text text-sm">
            <p>
              I am <b>AKINDELE, Emmanuel Tosin</b>, popularly known as King Pi.
              I am a penultimate student of the Department of Quantity
              Surveying, Faculty of Environmental Sciences at the University of
              Lagos.
            </p>
            <p>
              When I am not fighting for my life (read that as grades) in
              UNILAG, I moonlight as a PR Influencer, photographer,
              ‘footballer’, coach, quantity surveying intern, brand ambassador,
              events planner, son, brother, friend, mentor, and many others
              excluding boyfriend, fiance, husband, or father.
            </p>
            <p>
              Before UNILAG, I thought of myself to be an artiste. Hence, the
              name - King Pi. However, I have long abandoned the dream of
              singing or rapping beyond the four walls of my bathroom.
            </p>
            <p>
              I change the status quo wherever I am found. In 2021, I contested
              for and won the position of QS Social Secretary, defying the
              previous order of appointing a 500-level student to contest. I
              aimed to revive the department’s dead social life and achieved it
              in the success of QS Fest, and Spread the Love in celebration of
              Valentine’s Day 2023. I also organized an inter-school QS
              conference hosted by NAQSS UNILAG during my first month of being
              the social secretary.
            </p>
            <p>
              Before I contested, all elections to become an executive of NAQSS
              UNILAG had been unopposed and based on ‘appointment’ but after me,
              at least 3 others elected that had oppositions in the polls. I
              defied all odds and threats to make that happen.
            </p>
            <p>
              I’ve overseen 13 games since becoming the coach of the QS female
              football team without losing a single one at regulation time;
              winning 3 trophies in 2 sessions. Across female football, male
              football, athletics, and volleyball, I&apos;ve amassed a total of
              16 medals, including 6 gold, 5 silver, and 3 bronze.
            </p>
            <p>
              As a student, I have volunteered my skills across different boards
              and sessions to help bring to life, the vision of organisers. I
              was the lead volunteer in charge of publicity for the EU-Africa
              Summer School 2024, part of FESSA’s electoral committee and head
              of the dinner committee in 2023, the Volunteer lead for
              photography at NUGA Games’22, and so many others which can be
              found in my track records.
            </p>
            <p>
              Additionally, I have influenced students and young people beyond
              the four walls of this school and convinced them to embrace
              initiatives like the ‘Not too Young to Run’ UNILAG Hub, MTN
              Digital Army, Rubels and Angels, Lagos Wealth Summit creation, and
              LetsChat.
            </p>
            <p>
              I strive to impact my world and change things for all at every
              opportunity. I am ready to make a difference. But you need to
              vote.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
