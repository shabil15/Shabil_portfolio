import React from "react";
import { ExperienceProps } from "./experienceDetails";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import Link from "next/link";

const ExperienceCard = ({
  id,
  company,
  position,
  duration,
  location,
  description,
  technologies,
  companyUrl,
}: ExperienceProps) => {
  return (
    <motion.div
      className="relative z-10 h-auto w-full items-stretch justify-center overflow-hidden rounded-3xl bg-[#212531] bg-cover bg-center py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: id * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <div className="mb-6 flex w-full flex-col justify-between gap-3 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-1">
          <AnimatedTitle
            text={position}
            className="text-[20px] font-bold leading-[1.2em] text-[#e4ded7] sm:text-[24px] md:text-[32px] lg:text-[40px]"
            wordSpace="mr-[0.25em]"
            charSpace="mr-[0.01em]"
          />
          {companyUrl ? (
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-2 py-1 rounded transition-colors duration-200"
              aria-label={`Visit ${company} on LinkedIn`}
            >
              <AnimatedBody
                text={company}
                className="text-[14px] font-semibold text-[#e4ded7]/80 sm:text-[16px] md:text-[18px]"
              />
            </Link>
          ) : (
            <AnimatedBody
              text={company}
              className="text-[14px] font-semibold text-[#e4ded7]/80 sm:text-[16px] md:text-[18px]"
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-0.5 md:items-end">
          <AnimatedBody
            text={duration}
            className="text-[13px] font-medium text-[#e4ded7]/70 sm:text-[14px] md:text-[15px]"
          />
          <AnimatedBody
            text={location}
            className="text-[12px] font-medium text-[#e4ded7]/60 sm:text-[13px] md:text-[16px]"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <AnimatedBody
          text={description}
          className="text-[13px] font-normal leading-[1.8] text-[#e4ded7]/70 sm:text-[14px] md:text-[15px] lg:text-[16px]"
        />
      </div>

      {/* Technologies Section */}
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
           <AnimatedTitle
                text={tech}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
                key={id}
                className={
                "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
                }
                />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
