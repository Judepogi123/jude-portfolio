//import { useState } from "react";

//styles
import { Button } from "../ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   FormControl,
// } from "../ui/form";

//lib
//import { useForm } from "react-hook-form";
//import { z } from "zod";
//props
import { ProjectProps } from "@/interfaces/data";

//icons
import { FaBlog } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Img from "../ui/Img";

//schema
// const userSchema = z.object({
//   fullname: z.string(),
//   email: z.string().email(),
// });

//type UserProps = z.infer<typeof userSchema>;

const ProjectItem = ({ ...props }: ProjectProps) => {
 // const [onViewFullProject, setOnViewFullProject] = useState<boolean>(false);

  return (
    <CarouselItem className="md:basis-full lg:basis-1/3">
      <div className="p-1">
        <Card className=" w-full h-full">
          <CardContent className="flex flex-col justify-between aspect-square p-6">
            <div className=" w-full h-1/2 border rounded p-1">
              <Img
                src={props.scnShot[0]}
                local={undefined}
                name={props.title}
              />
            </div>
            <span className="lg:text-sm xl:text-sm font-semibold font-roboto text-left">
              {props.title}
            </span>
            <div className=" w-full p-2 flex justify-end items-center gap-2">
              <div className=" p-2">
                <FaBlog />
              </div>
              <div className=" p-2">
                <FaGithub />
              </div>
              <Button size="sm">View Full Project</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

// const AccessProject = ({ type, value }: { type: string; value: string }) => {
//   const rest = value.split(":");
//   const form = useForm();
//   if (type === "full" && rest[1] === "1") {
//     return <div></div>;
//   }
// };

export default ProjectItem;
