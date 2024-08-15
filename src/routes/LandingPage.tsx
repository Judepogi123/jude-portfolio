import { useState } from "react";
//lib
import { useScramble } from "use-scramble";
import { TypeAnimation } from "react-type-animation";

//mock_data
import { socMedList } from "@/mock_data/socMed";

//icons
//import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

//styles
//import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CustomModal from "@/components/custom/CustomModal";

//layouts
import SendEmailForm from "@/layout/SendEmailForm";

//utils
import { handleRedirect } from "@/utils/url";
import { handleOpenModalType } from "@/utils/data";

const LandingPage = () => {
  //const [isError, setIsError] = useState<string | null>(null);
  const [onOpenModal, setOnOpenModal] = useState<{
    media: string | undefined;
    link: string | undefined;
    open: boolean;
  }>({ media: undefined, link: undefined, open: false });
  //
  const { ref, replay } = useScramble({
    text: "Hi! I am Jude Demnuvar L. Ribleza,",
    speed: 0.5,
  });


  return (
    <div className=" w-full h-full bg-[#f8f9fa] font-roboto snap-center">
      {/* {isError !== null && (
        <div className=" w-full px-8">
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{`Sorry something went wrong.`}</AlertDescription>
          </Alert>
        </div>
      )} */}
      <div className=" w-full h-[60%] lg:flex">
        <div className="w-full lg:w-[40%] h-full flex flex-col justify-center xl:items-end text-center lg:text-right p-4">
          <p
            onClick={replay}
            onMouseOver={replay}
            onFocus={replay}
            ref={ref}
            className=" xl:w-2/3 font-roboto font-semibold text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[#212529] cursor-pointer"
          />
          <TypeAnimation
            className=" text-xs xl:text-lg font-roboto"
            sequence={[
              "a Web Developer.",
              1000,
              "can be Frontend Developer or",
              1000,
              "can be Backend Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1rem", marginTop: "16px" }}
            repeat={Infinity}
            cursor={true}
          />
          <div className=" w-full flex md:flex-row justify-center lg:hidden p-4 mt-4 gap-4 md:gap-4 lg:gap-8">
            {socMedList.map((item) => (
              <div
                className=" w-auto flex md:flex-row lg:flex-row items-center gap-4 md:gap-2 cursor-pointer"
                onClick={() => {
                  setOnOpenModal({
                    media: item.type,
                    link: item.link,
                    open: true,
                  });
                  console.log("Clicked");
                }}
              >
                <item.icon
                  className=" text-lg md:text-base lg:text-xl"
                  color="#000000"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[60%] h-full lg:flex flex-col justify-center items-center hidden md:hidden">
          <div className=" w-3/4 h-[70%] bg-[#1b263b]"></div>
          <div className=" w-full flex md:flex-row p-4 mt-4 gap-3 lg:gap-6 lg:pl-20 xl:pl-28 2xl:pl-48">
            {socMedList.map((item) => (
              <div
                className=" w-auto flex md:flex-row lg:flex-row items-center gap-2 cursor-pointer"
                onClick={() => {
                  setOnOpenModal({
                    media: item.type,
                    link: item.link,
                    open: true,
                  });
                  console.log("Clicked");
                }}
              >
                <item.icon className=" text-sm md:text-base lg:text-xl text-[#2b2d42]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full h-[40%] bg-[#1b263b] flex lg:justify-center items-start"></div>

      <CustomModal
        onFunction={() => {
          setOnOpenModal({ media: undefined, link: undefined, open: false });
          handleRedirect(onOpenModal.link as string);
        }}
        okTitle="Confirm"
        title={
          handleOpenModalType(onOpenModal.media as string, 1)
            ? "Send me an email"
            : "Open in new tab"
        }
        footer={
          !handleOpenModalType(onOpenModal.media as string, 1) ? true : false
        }
        open={onOpenModal.open}
        onOpenChange={() => {
          setOnOpenModal({ media: undefined, link: undefined, open: false });
        }}
        children={
          handleOpenModalType(onOpenModal.media as string, 1) ? (
            <SendEmailForm />
          ) : (
            <div className="">
              <p className="">
                Redirect to
                {handleOpenModalType(onOpenModal.media as string, 2)} page?
              </p>
            </div>
          )
        }
      />
    </div>
  );
};

export default LandingPage;
