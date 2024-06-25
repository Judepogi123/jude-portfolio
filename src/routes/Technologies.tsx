//import { useState } from "react";
//lib
import { motion } from "framer-motion";
//mock_data
import { techStackList } from "@/mock_data/techStack";
import { featureList } from "@/mock_data/features";
import { experienceList } from "@/mock_data/experience";
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Technologies = () => {
  return (
    <div className=" w-scree h-full bg-[#f8f9fa] p-2 lg:p-12">
      <div className=" w-full h-full">
        <div className=" w-full h-auto lg:flex xl:p-12 2xl:p-20">
          <div className=" w-full h-auto p-1 md:p-4 mt-4 md:mt-2 col-span-1 row-span-1">
            <p className=" text-left font-roboto text-xs xl:text-sm xl:py-0 ">
              I usually use React JS for the front end and Express JS or Fastify
              JS for the backend. For styling, I love utilizing Tailwind CSS
              along with the pre-built components from Shadcn.
            </p>

            <p className=" py-2 text-sm md:text-base lg:text-sm xl:text-sm font-nunito xl:mt-4">
              What can I do?{" "}
            </p>
            <p className="text-sm md:text-base font-roboto">Proper:</p>
            <div className="">
              {featureList.map((item) => (
                <div className=" flex gap-4">
                  <IoMdCheckmark fontSize={20} fontWeight={600} color="#fff" />
                  <p className=" text-xs font-roboto"> {item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-full h-full px-2">
            <p className=" text-sm md:text-lg lg:text-xl mt-4 md:mt-2 md:mb-4 text-[#1b263b] font-roboto">
              Technologies I can handle...
            </p>
            <div className=" w-full h-auto lg:h-full p-2  grid grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-4 col-span-1 row-span-1">
              {techStackList
                .filter((item) => item.type.split(":")[1] === "1")
                .map((item, index) => (
                  <motion.div
                    key={index}
                    className=" w-full h-40 lg:w-full md:h-auto p-2 md:p-2 py-2 rounded  bg-gray-50  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 cursor-pointer"
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
                I don't like these tech, but I can still nail tho ✌️...
              </p>
            </div>
            <TooltipProvider>
              <div className=" w-full p-2 grid grid-cols-4 md:grid-cols-12 gap-2 md:col-span-1 md:row-span-1">
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

        <div className=" w-full h-auto md:h-1/2 md:flex flex-col md:mt-4 p-2 md:p-4 rounded-md mt-8">
          <div className=" w-full h-full bg-[#e9ecef]">
            <div className=" w-full p-2 text-sm md:text-lg lg:text-base">
              <p className=" text-lg md:text-sm lg:text-lg font-roboto lg:font-medium px-2 ">
                Experience
              </p>
            </div>
          </div>

          <div className=" w-full h-auto flex flex-col gap-2">
            <Accordion type="single" collapsible>
              {[...experienceList].reverse().map((item, index) => (
                // <AccordionItem value={item.title}>
                //   <AccordionTrigger>
                //     <p className=" font-roboto flex gap-4 text-left text-sm">{index + 1}.  {item.title} ({item.year})</p>
                //   </AccordionTrigger>
                //   <AccordionContent>
                //     <p className=" text-sm font-medium font-roboto mt-2">
                //       Implemented:
                //     </p>
                //     <div className=" flex flex-col gap-2 mt-2">
                //       {item.activities &&
                //         item.activities.map((act) => (
                //           <div className=" flex items-start gap-4 ml-4">
                //             <IoCodeSlash />
                //             <p className=" text-xs font-roboto">{act}</p>
                //           </div>
                //         ))}
                //     </div>
                //   </AccordionContent>
                // </AccordionItem>
                <div className=" w-full p-2">
                  <div className=" w-full h-auto flex flex-col gap-2">
                    <div className=" flex items-start gap-4">
                      <p className=" font-roboto text-sm">{index + 1}.</p>
                      <p className=" font-roboto text-sm font-semibold">
                        {item.title} ({item.year})
                      </p>
                    </div>
                    <p className=" text-sm font-medium font-roboto mt-2">
                      Implemented:
                    </p>
                    {item.activities &&
                      item.activities.map((act) => (
                        <div className=" flex items-start gap-4 ml-4">
                          <IoCodeSlash />
                          <p className=" text-xs font-roboto">{act}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </Accordion>
          </div>

          <div className=" p-2">
            <a className=" hover:underline cursor-pointer text-sm font-nunito">
              View all
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
