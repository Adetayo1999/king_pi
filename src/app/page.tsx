"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import bannerImage from "../../public/images/banner.jpg";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "citation",
    link: "/citation",
  },
  {
    id: 3,
    name: "fact checks",
    link: "/fact_checks",
  },
  {
    id: 4,
    name: "volunteer",
    link: "/volunteer",
  },
  {
    id: 5,
    name: "records",
    link: "/records",
  },
  {
    id: 6,
    name: "why akindele",
    link: "/why",
  },
];

export default function Home() {
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

  const imageVariants = {
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

  return (
    <main className="">
      <motion.div
        className="flex flex-col-reverse md:flex-row gap-y-10 md:gap-y-0 md:justify-between md:items-end "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex gap-y-5 flex-col flex-[0.55]"
          variants={textVariants}
        >
          <motion.h1
            className={clsx(
              "text-6xl text-center md:text-left md:text-8xl font-mono  text-secondary_text font-bold"
            )}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: "0.5",
              type: "spring",
              bounce: 0.5,
              delay: 0.5,
            }}
          >
            akindele
          </motion.h1>
          <p className="text-lg md:text-xl  font-semibold text-primary_text tracking-widest text-center md:text-left">
            <TypeAnimation
              sequence={[
                "Photographer",
                3000,
                "Influencer",
                3000,
                "Activist",
                3000,
                "Volunteer",
                3000,
              ]}
              wrapper="span"
              speed={7}
              repeat={Infinity}
            />
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-x-4 items-center justify-center md:justify-start">
            {LINKS.map((item, idx) => (
              <div
                className="flex  gap-x-4 items-center text-xs "
                key={item.id}
              >
                <Link
                  href={item.link}
                  className="text-primary_text font-medium underline hover:text-secondary_text"
                >
                  {item.name}
                </Link>
                {idx !== 5 ? <span className="text-gray-400">|</span> : null}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex-[0.4] rounded-3xl overflow-hidden  ring-8 ring-secondary_text"
          variants={imageVariants}
        >
          <Image
            src={bannerImage}
            alt="Akindele Emmanuel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
