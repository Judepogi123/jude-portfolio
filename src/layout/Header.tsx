import { useState, useEffect } from "react";

//lib
import { useScroll, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//styles

import { IoIosMoon } from "react-icons/io";

const Header = () => {
  const [currentUserm, setCurrentUser] = useState<string | undefined>(
    undefined
  );

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("/user")) {
      setCurrentUser("Jude");
      return;
    }
    setCurrentUser(undefined);
  }, [pathname]);

  const { scrollYProgress } = useScroll();
  return (
    <div className=" w-full h-16 bg-[#f8f9fa] flex justify-end items-center sticky top-0">
      <motion.div
        className=" w-full h-1 bg-[#00b4d8] fixed top-0 left-0 right-0 origin-[0%] z-10 hidden lg:block"
        style={{ scaleX: scrollYProgress }}
      />
      <div className=" w-full flex justify-between items-center">
        <div>
          {currentUserm !== undefined && (
            <p className=" text-lg font-semibold font-roboto ml-8">
              Welcome back, {currentUserm}!
            </p>
          )}
        </div>
        <div className=" mr-3">
          <IoIosMoon fontSize={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
