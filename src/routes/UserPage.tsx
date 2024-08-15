import { useState } from "react";
//controller
import { useNavigate, useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
//interface and props
import { OptionProps } from "@/interfaces/data";
//layout
import Header from "@/layout/Header";
import Notifications from "@/layout/Notifications";

//icons

import { MdManageAccounts } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaBlog } from "react-icons/fa";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

//styles
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

//utils

//options
const optionList: OptionProps[] = [
  {
    title: "Manage",
    icon: MdManageAccounts,
    link: "manage",
  },
  {
    title: "Request",
    icon: VscGitPullRequestGoToChanges,
    link: "request",
  },
  {
    title: "Blogs",
    icon: FaBlog,
    link: "blogs",
  },
];

const UserPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useSearchParams({ menu: "" });

  const currentMenu = params.get("menu");

  const navigate = useNavigate();

  //Handle the navigation through page
  const handleNavigate = (url: string) => {
    try {
      setParams(
        (prev) => {
          prev.set("menu", url);
          return prev;
        },
        { replace: true }
      );
      navigate(url);
    } catch (error) {
      setError(`${error}`);
    }
  };

  return (
    <div className="w-full h-full overflow-auto">
      <Header />
      <div className="sticky top-0 z-50 bg-white">
        {error !== null && (
          <div className=" p-2">
            <Alert className=" border-red-500">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>
                Sorry something went wrong{" "}
                <p className=" text-blue-600 active:underline hover:underline">
                  Click here to report
                </p>
                .
              </AlertDescription>
            </Alert>
          </div>
        )}
        <div
          id="menu-options"
          className="sticky top-0 w-full h-auto flex gap-2 pl-4 bg-white"
        >
          {optionList.map((item) => (
            <div
              key={item.title}
              className={`w-auto px-2 p-2 flex gap-4 md:gap-2 items-center cursor-pointer hover:underline${
                currentMenu === item.link ? "underline" : ""
              }`}
              onClick={() => handleNavigate(item.link)}
            >
              <item.icon className="text-[#212529]" />
              <p className="text-sm font-roboto">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full lg:flex">
        <div className="w-full lg:w-[80%] h-full">
          <Outlet />
        </div>
        <div className="w-full lg:w-[20%] h-full border-l-slate-900 bg-white sticky top-0">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
