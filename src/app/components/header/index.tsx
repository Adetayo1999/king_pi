"use client";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  {
    id: 7,
    name: "Awards",
    link: "/awards",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 10 },
        duration: 0.5,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <header className="flex justify-between items-center pb-[4rem] stick top-0">
      <Link
        href="/"
        className={clsx({
          " font-semibold uppercase z-[100] transition-colors duration-300":
            true,
          "text-primary_text": !isOpen,
          "text-secondary_text": isOpen,
        })}
        onClick={() => setIsOpen(false)}
      >
        Akindele
      </Link>

      <button
        className={`inline-flex  flex-col ${isOpen && "z-[100]"}`}
        onClick={toggleMenu}
      >
        <span
          className={`w-[2rem] h-[.25rem]  duration-[.3s] ease-in-out  rounded-[12rem] ${
            isOpen
              ? "translate-y-[.4rem] rotate-45 bg-secondary_text"
              : "bg-gray-50"
          }`}
        />
        <span
          className={`w-[1rem] h-[.25rem] ml-4  rounded-[12rem] ${
            isOpen
              ? "opacity-0 my-0 bg-secondary_text"
              : "opacity-100 my-[.3rem] bg-gray-50"
          }`}
        />
        <span
          className={`w-[2rem] h-[.25rem]  duration-[.3s] ease-in-out rounded-[12rem] ${
            isOpen
              ? "-translate-y-[.11rem] -rotate-45 bg-secondary_text"
              : "bg-gray-50"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed top-0 left-0 w-full z-[50] h-screen bg-primary p-[3rem] flex flex-col justify-center items-center"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                height: "screen",
                opacity: 1,
                x: 0,
              },
              closed: { height: 0, opacity: 0, x: -100 },
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <nav>
              <ul className="flex flex-col gap-y-6">
                {LINKS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    variants={itemVariants}
                    className="text-white text-center "
                  >
                    <Link
                      href={item.link}
                      className="text-lg md:text-2xl uppercase hover:text-secondary_text transition duration-700 "
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
