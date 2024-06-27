"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import myImage from "../../../public/images/akindele.jpg";

const RECORDS = [
  "EU-Africa Student Ambassador",
  "Digital Influencer at MTN NG",
  "Student, Global enterprise experience. 2024",
  "Creative lead, Lens Pixel",
  "Project Manager, Ephiphanie Energy Services",
  "Member, Enactus UNILAG office",
  "Head, FESSA social committee, 2023/2024 ",
  "Member, FESSA 2024 dinner committee ",
  "Lead Volunteer, Publicity, EU-Africa Summer School, 2024",
  "Social Secretary, NAQSS UNILAG. 2021/2022 session",
  "Volunteer lead (photography), NUGA games, 2022 ",
  "QS Coach, 2021/2022 Dean’s Games Female Football [winner]",
  "QS Coach, 2023/2024 Dean’s Games Female Football [winner] ",
  "NAQSS UNILAG Coach (female football), 2023 NIQS Lagos Chairman’s Cup [winner]",
  "Intern QS, Adesanya & Partners ",
  "VC games FESSA head coach, 2023/2024",
  "Subhead, FESSA dinner committee, 2018/2019",
  "Publicity manager, “Not too young to run” (UNILAG hub) by United Kingdom International Development. ",
  "Tutor (Photo Editing), Empower Initiative by Faculty of Education 2021/2022 executives. ",
  "PR Strategist, “In his Presence” - Bidemi Olaoba  ",
  "PR manager, Rubels and Angels, Akoka",
  "PR, Chocolate City Music, 2023 ",
  "LetsChat campus influencer 2022-2023",
  "Volunteer, FESSA Electoral Committee 2023",
  "Lead Volunteer, Photography, EU-Africa Summer School, 2023",
  "Member, FESSA dinner committee, 2021/2022 ",
  "Member, FESSA sports committee, 2021/2022 ",
  "Member, FESSA debate team, 2021/2022 ",
  "Head, NAQSS national convention publicity team. 2023",
  "Project manager, Purple Community 2021-2023 ",
  "Media head, Enactus UNILAG, 2022 ",
  "NAQSS national body 2022 convener ",
  "Volunteer, UNILAG digital wealth creation summit, 2023 ",
  "Member, QS games committee, 2018/2019 ",
  "Member, NAQSS sports committee, 2021/2022",
  "Member, NAQSS sports committee, 2022/2023",
  "Strategist, Sabinus campus tour (UNILAG)",
  "Publicity head, Lagos Wealth Summit creation 2024",
  "Computer operator, Ereka Construction Company, 2016",
  "Computer instructor, Fesola International Kiddies School, 2017-2018",
  "Photo editor and Graphics designer, Igbayilola Photo Lab, 2013",
];

export default function Records() {
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
          AKINDELE&apos;S TRACK RECORDS
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
          <h3 className="text-2xl font-semibold text-primary_text mb-4 ">
            A highlight of few of my records.
          </h3>
          <p className="mb-4 text-sm text-primary_text">
            Akindele is a 400 level student of The University of Lagos. He is
            known for his leadership skills, dedication, volunteer works,
            competency, to mention a few. This is because he has proven himself
            worthy of these adjectives as he as served as the following:
          </p>
          <div className="px-6">
            <ul className="text-sm gap-y-2 flex text-primary_text flex-col list-disc">
              {RECORDS.map((record, idx) => (
                <li key={idx}>{record}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
