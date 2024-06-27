"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import factOne from "../../../public/images/fact_1.jpg";
import factTwo from "../../../public/images/fact_2.jpg";
import factThree from "../../../public/images/fact_3.jpg";
import factFour from "../../../public/images/fact_4.jpg";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function FactChecks() {
  return (
    <div className="">
      <div className="text-center mb-12">
        <h1 className="text-primary_text text-[2.5rem] md:text-[5.5rem]  font-semibold">
          fact checks .
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
        {[factOne, factTwo, factThree, factFour].map((item, idx) => (
          <FactCard key={idx} image={item} />
        ))}
      </div>
    </div>
  );
}

const FactCard: React.FC<{ image: StaticImageData }> = ({ image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="ring-4  rounded-2xl ring-secondary_text overflow-hidden h-[25rem] md:h-fit w-full"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <Image
        src={image}
        alt="Myth And Quote"
        className="w-full h-full object-cover object-top"
      />
    </motion.div>
  );
};
