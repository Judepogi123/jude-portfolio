//import { useState } from "react";
//lib
import { motion } from "framer-motion";
//mock_data
import { techStackList } from "@/mock_data/techStack";
import { featureList } from "@/mock_data/features";
import { experienceList, implemented } from "@/mock_data/experience";
//styles
import Img from "@/components/ui/Img";
//import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//utils
//import { getExperience } from "@/utils/date";

//icons
import { IoMdCheckmark } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";

const Technologies = () => {
  return (
    <div className=" w-scree h-full bg-[#f8f9fa] p-2 lg:p-12">
      <div className=" w-full h-full">
        <div className=" w-full h-auto lg:flex lg:gap-4 xl:p-12 2xl:p-20">
          <div className=" w-full h-auto p-1 md:p-4 mt-4 md:mt-2 col-span-1 row-span-1">
            <div className=" w-full h-auto bg-[#e9ecef]">
              <div className=" w-full p-2 text-sm md:text-lg lg:text-base">
                <p className=" text-lg md:text-lg lg:text-lg font-roboto lg:font-medium px-2 ">
                  Experience
                </p>
              </div>
            </div>

            <div className=" w-full h-auto flex flex-col gap-2">
              {[...experienceList].reverse().map((item, index) => (
                <div className=" w-full p-2">
                  <div className=" w-full h-auto flex flex-col gap-2">
                    <div className=" flex items-start gap-4">
                      <p className=" font-roboto text-sm">{index + 1}.</p>
                      <p className=" font-roboto text-sm">
                        {item.title} ({item.year})
                      </p>
                    </div>
                    {/* <p className=" text-sm font-medium font-roboto mt-2">
                      Implemented:
                    </p>
                    {item.activities &&
                      item.activities.map((act) => (
                        <div className=" flex items-start gap-4 ml-4">
                          <IoCodeSlash />
                          <p className=" text-xs font-roboto">{act}</p>
                        </div>
                      ))} */}
                  </div>
                </div>
              ))}
            </div>

            <div className=" w-full h-auto mt-8 md:mt-10">
              <p className=" text-sm py-4 md:py-2 font-roboto font-semibold">I'm proficient at implementing...</p>
              <div className=" w-full h-auto grid grid-cols-2 md:py-4 lg:p-4 md:flex flex-col md:flex-row col-span-1 row-span-2 gap-2 gap-y-8 md:gap-y-0">
                {implemented.map((item) => (
                  <div className=" w-auto p-2 flex flex-col gap-6 items-center text-center">
                    <item.icon className=" text-base" />
                    <p className=" text-xs font-nunito">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" w-full h-full px-2 mt-8 md:mt-0">
            <p className=" text-base md:text-lg lg:text-xl mt-4 md:mt-2 md:mb-4 py-4 md:py-1 text-[#1b263b] font-roboto">
              Technologies I can handle...
            </p>
            <div className=" w-full h-auto lg:h-full p-2  grid grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-4 col-span-1 row-span-1">
              {techStackList
                .filter((item) => item.type.split(":")[1] === "1")
                .map((item, index) => (
                  <motion.div
                    key={index}
                    className=" w-full h-40 lg:w-full md:h-auto p-2 md:p-2 py-2 rounded  bg-[#1b263b]  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 cursor-pointer"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.09 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className=" w-full h-[60%] xl:h-[60%] grid ">
                      <Img
                        className=" w-[50%] md:w-[60%] lg:w-[60%] xl:w-[55%] m-auto 2xl:w-[40%]"
                        src={item.imgSrc}
                        local={true}
                        name={item.name}
                      />
                    </div>

                    <div className=" w-full h-[40%] flex flex-col justify-center md:justify-end">
                      <p className=" text-center md:text-sm xl:text-sm lg:font-semibold font-nunito text-ellipsis overflow-hidden">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className=" mt-8 md:mt-8 lg:mt-16 2xl:mt-10">
              <p className="text-base lg:text-sm xl:text-base font-nunito  xl:mt-4 2xl:text-lg">
                I don't like these tech, but I can still nail it tho ✌️...
              </p>
            </div>
            <TooltipProvider>
              <div className=" w-full p-2 grid grid-cols-4 md:grid-cols-12 gap-2 md:col-span-1 md:row-span-1 mb-8 md:mb-0">
                {techStackList
                  .filter((item) => item.type.split(":")[1] === "0")
                  .map((item, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger className=" w-full">
                        <div className=" w-full flex justify-center">
                          <Img
                            className="w-32 md:w-10 lg:w-8 2xl:w-12"
                            src={item.imgSrc}
                            local={false}
                            name={item.name}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
