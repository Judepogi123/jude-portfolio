//mock data
import { projectList } from "@/mock_data/project";

//ui
import ProjectItem from "@/components/items/ProjectItem";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//icons
// import { FaArrowRight } from "react-icons/fa";
// import { Card, CardContent } from "@/components/ui/card";
// import Img from "@/components/ui/Img";
import { FaAnglesRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className=" w-full h-full bg-[#1b263b] snap-center lg:overflow-hidden flex flex-col gap-2 p-2 pb-4">
      <div className=" w-full py-4 mt-8">
        <p className=" text-lg lg:text-2xl font-roboto text-white ml-2 lg:ml-8">
          Latest stuff I worked on...
        </p>
        <p className=" text-white ml-2 lg:ml-8 text-justify p-2 text-xs md:text-sm font-roboto">
          Here are the projects I've worked on so far. Some of them were part of
          my college capstone project, others were developed during my
          internship, and a few are personal projects I've created on my own.
        </p>
      </div>

      <div className=" w-full h-full flex flex-col gap-4 px-2 lg:px-10 ">
        <div className=" w-full">
          <p className=" font-roboto text-base text-[#f8f9fa]">
            Projets ({projectList.length})
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full xl:p-20"
        >
          <CarouselContent>
            {projectList.map((item, index) => (
              <ProjectItem key={index} {...item} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex justify-center items-center lg:ml-4" />
          <CarouselNext className="hidden lg:flex justify-center items-center lg:mr-4" />
        </Carousel>
      </div>
      <p className=" flex md:hidden text-xs font-normal text-[#ccc] px-4 gap-2 items-center">
        Swipe to view other projects <FaAnglesRight />
      </p>
    </div>
  );
};

export default Projects;
