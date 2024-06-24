import React from "react";

//lib
import { Outlet, useNavigate } from "react-router-dom";

//mock_Data
import { projectList } from "@/mock_data/project";

const AllProject = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen">
      <div className=" w-full h-full flex flex-col gap-1">
        {projectList.map((item) => (
          <div onClick={() => navigate(`/projects/${item.date}`)}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
