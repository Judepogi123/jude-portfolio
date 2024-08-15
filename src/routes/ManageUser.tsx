import { useState } from "react";

//components
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import CustomModal from "@/components/custom/CustomModal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
//mock_data
import { userData } from "@/mock_data/user";
import { experienceList, implemented } from "@/mock_data/experience";
import { projectList } from "@/mock_data/project";
import { techStackList } from "@/mock_data/techStack";
//icons
import { FaRegEdit } from "react-icons/fa";

const ManageUser = () => {
  const [onOpenModal, setOnOpenModal] = useState<{
    state: boolean;
    type: string | undefined;
  }>({ state: false, type: undefined });

  const handleOpenModal = (type: string) => {
    setOnOpenModal({ state: true, type: type });
  };

  const handleGetCatName = (): string => {
    if (onOpenModal.type === undefined) return "Unknown";
    switch (onOpenModal.type) {
      case "info":
        return "Personal Information";
      case "exp":
        return "Experience & Technologies";
      case "project":
        return "Projects";
      default:
        return "Personal Information";
    }
  };

  const handleGetType = (type: string, index: 0 | 1) => {
    const temp = type.split(":");
    if (temp[index] === "1") {
      return true;
    }
    return false;
  };
  return (
    <div className=" w-full h-auto ">
      <div className=" w-full flex items-center gap-1 p-8">
        <p className=" text-lg font-light font-roboto w-auto text-nowrap">
          Basic Personal Information
        </p>
        <div className=" w-full px-4">
          <Separator />
        </div>
        <div onClick={() => handleOpenModal("info")} className=" w-auto px-2">
          <div className=" hover:block">
            <FaRegEdit />
          </div>
        </div>
      </div>

      <div className=" w-full h-auto px-8 flex flex-col gap-2">
        <div className=" flex gap-4">
          <p className=" text-sm font-roboto w-32">Firstname:</p>
          <p className="text-sm font-roboto">{userData.firstname}</p>
        </div>
        <div className=" flex gap-4">
          <p className=" text-sm font-roboto w-32">Lastname:</p>
          <p className="text-sm font-roboto">{userData.lastname}</p>
        </div>
        <div className=" flex gap-4">
          <p className=" text-sm font-roboto w-32">Specialization:</p>
          <p className="text-sm font-roboto">{userData.jobTitle}</p>
        </div>
      </div>

      {/* Express & Technologies */}

      <div className=" w-full flex items-center gap-1 p-8">
        <p className=" text-lg font-light font-roboto w-auto text-nowrap">
          Experience & Technologies
        </p>
        <div className=" w-full px-4">
          <Separator />
        </div>
        <div onClick={() => handleOpenModal("exp")} className=" w-auto px-2">
          <div className=" hover:block">
            <FaRegEdit />
          </div>
        </div>
      </div>

      <div className=" w-full h-auto px-8 flex flex-col gap-2">
        <div className=" flex gap-4">
          <p className=" text-sm font-roboto w-32">Experience:</p>
          <div className="w-full flex flex-col gap-2 text-sm font-roboto">
            {[...experienceList].reverse().map((item, index) => (
              <div key={index} className="w-full flex items-start">
                <p className="">
                  {index + 1}. {item.title}.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex gap-4 mt-4">
          <p className=" text-sm font-roboto w-32">Features:</p>
          <div className="w-full flex flex-col gap-2 text-sm font-roboto">
            {implemented.map((item, index) => (
              <div key={index} className="w-full flex items-start">
                <p className="">
                  {index + 1}. {item.title}.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex gap-4 mt-4">
          <p className=" text-sm font-roboto w-32">Technologies:</p>
          <div className="w-full flex flex-col gap-2 text-sm font-roboto">
            {techStackList.map((item, index) => (
              <div key={index} className="w-full flex items-center gap-2">
                <p className="">
                  {index + 1}. {item.name}.
                </p>
                <TooltipProvider>
                  <div className=" flex gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-3 h-3 cursor-pointer ${
                            handleGetType(item.type, 0)
                              ? "bg-green-600"
                              : "bg-slate-400"
                          }`}
                        ></div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{ handleGetType(item.type, 0) ? "Active" : "Not use"}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-3 h-3 cursor-pointer ${
                            handleGetType(item.type, 1)
                              ? "bg-green-600"
                              : "bg-slate-400"
                          }`}
                        ></div>
                      </TooltipTrigger>
                      <TooltipContent>
                      <p>{ handleGetType(item.type, 1) ? "Love" : "Hate"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center gap-1 p-8">
        <p className=" text-lg font-light font-roboto w-auto text-nowrap">
          Projects
        </p>
        <div className=" w-full px-4">
          <Separator />
        </div>
        <div
          onClick={() => handleOpenModal("project")}
          className=" w-auto px-2"
        >
          <div className=" hover:block">
            <FaRegEdit />
          </div>
        </div>
      </div>

      <div className=" w-full h-auto px-8 pb-4">
        <div className=" flex gap-4">
          <p className=" text-sm font-roboto w-32"></p>
          <div className="w-full flex flex-col gap-2 text-sm font-roboto">
            {projectList.map((item, index) => (
              <div key={index} className="w-full flex items-start">
                <p className="">
                  {index + 1}. {item.title}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomModal
        className="w-96"
        title={`Update ${handleGetCatName()}`}
        footer={true}
        okTitle="Confirm"
        open={onOpenModal.state}
        onOpenChange={() => setOnOpenModal({ state: false, type: undefined })}
      />
    </div>
  );
};

export default ManageUser;
