import { useState } from "react";
//style
import "../styles/styles.css";
// lib
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// mock_data
import { educationList } from "@/mock_data/education";

//provider
import { useScreenSizeContext } from "@/hooks/screenSizeContext";
const About = () => {
  const [onExtend, setOnExtend] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );

  const value = useScreenSizeContext();

  const handleAnimationOnHover = (index: string) => {
    if (selectedItem === index && !value?.isSmall) {
      setSelectedItem(undefined);
      setOnExtend(false);
    } else {
      setSelectedItem(index);
      setOnExtend(true);
    }
  };

  return (
    <div className="w-full h-full bg-[#1b263b] flex flex-col md:flex-row sm:flex-col">
      <div
        className={` ${
          onExtend ? "w-full flex" : "md:w-[60%]"
        } h-auto md:h-full p-4 py-4 md:py-0 lg:py-8 lg:px-28 2xl:p-44 bg-[#f8f9fa] transition ease-in-out duration-300 lg:gap-8`}
      >
        <div className=" w-full h-full">
          <div className="p-1 md:p-1">
            <p className="text-lg lg:text-3xl mb-4 font-bold font-nunito text-[#03071e]">
              Things about me...
            </p>
            <p className=" text-xs font-roboto">
              My journey started in college with a capstone project that ignited
              my love for web development. I gained valuable experience during
              my internship, working on real-world challenges and collaborating
              with a talented team. These experiences, combined with my personal
              projects, have equipped me with a solid foundation and a drive to
              constantly learn and experiment with new technologies.
            </p>
            <p className="text-lg py-4 font-semibold">Schools I attended</p>
          </div>

          <div className={`h-auto flex flex-col gap-2`}>
            {educationList.map((item, index) => (
              <motion.div
                onClick={() => handleAnimationOnHover(JSON.stringify(index))}
                key={index}
                className=" rounded p-4 cursor-pointer flex transition ease-in-out duration-300"
                initial={{ x: 1 }}
                whileHover={{ x: -30 }}
                transition={{ duration: 0.2, ease: "backInOut" }}
                exit={{ x: 1 }}
              >
                <AnimatePresence>
                  {value?.isMedium &&
                    selectedItem === JSON.stringify(index) && (
                      <motion.div
                        id="box-spinner"
                        className="bg-[#1b263b] p-4 w-16 h-16"
                        initial={{ scale: 0, rotate: "0deg" }}
                        exit={{
                          scale: 0,
                          rotate: "0deg",
                          width: 0,
                        }}
                        animate={{
                          scale: 1,
                          rotate: "135deg",
                        }}
                        transition={{ duration: 0.3, ease: "circInOut" }}
                      >
                        <div className=" w-full h-full bg-white p-2">
                          <div className=" w-full h-full rounded-full bg-[#1b263b]"></div>
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                  className={`${
                    onExtend ? " ml-8" : ""
                  } transition ease-in-out duration-300 font-roboto`}
                >
                  <p className="text-sm md:text-sm lg:text-base font-roboto font-semibold">
                    {item.name} {item.present && "(Present)"}
                  </p>
                  <p className=" text-sm">{item.course}</p>
                  <p className="text-xs md:text-sm text-[#6c757d]">
                    {item.year}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {onExtend && (
          <motion.div
            className=" w-full h-full p-2 md:p-4"
            initial={{ x: -30, opacity: 0.8 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {selectedItem !== undefined && (
              <TypeAnimation
                className=" text-sm text-justify text-[#212529] font-roboto"
                sequence={[
                  `${educationList[parseInt(selectedItem)].desc}`,
                  1000,
                ]}
                wrapper="span"
                speed={90}
                repeat={Infinity}
                cursor={true}
              />
            )}
          </motion.div>
        )}
      </div>

      {!value?.isSmall && !onExtend && (
        <motion.div
          className=" w-1/3 h-full px-1"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 50, opacity: 0.5 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        >
          <div className="w-full h-full custom-bg flex flex-col md:flex-row sm:flex-col"></div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
