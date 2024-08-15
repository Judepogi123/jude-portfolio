//icons
import { PiSmileySadThin } from "react-icons/pi";

const NotFound = () => {
  return (
    <div className=" w-full h-screen grid ">
      <div className="m-auto flex flex-row items-center gap-2">
        <PiSmileySadThin  className=" text-6xl"/>
        <p className=" text-base md:text-lg lg:text-xl ">
          (404) URL not found!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
