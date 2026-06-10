"use client";

import { motion } from "framer-motion"; // Perbaikan 1: Kurung kurawal
import Image from "next/image";

// Perbaikan 2: Huruf kapital pada nama komponen
const Photo = () => {
  return (
    <div className="w-full relative flex justify-center items-center py-8 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0.2, ease: "easeIn" },
        }}
        className="relative flex justify-center items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 0.6, ease: "easeInOut" },
          }}
          className="w-[220px] h-[220px] xl:w-[340px] xl:h-[340px] absolute mix-blend-darken"
        >
          <Image
            src="/FormalPhoto_NoBG.png"
            alt="Muhammad Reza Aulia"
            priority
            quality={100}
            fill
            sizes="(max-width: 768px) 220px, 340px"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* Circle SVG */}
        <motion.svg
          className="w-[260px] xl:w-[400px] h-[260px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="240"
            stroke="black" // Perbaikan 5: Warna garis putus-putus hitam murni
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }} // Perbaikan 4: Menutup kurung kurawal dan tag dengan benar
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
