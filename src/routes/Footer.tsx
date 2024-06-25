//mock_data
import { socMedList } from "@/mock_data/socMed";

//libs

//styles
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className=" w-full h-auto">
      <div className=" w-full h-auto lg:flex">
        <div className=" w-full p-8 md:p-16 lg:p-24">
          <p className=" w-full text-justify font-roboto text-sm md:text-sm lg:text-sm">
            Hey there! Drop me an email anytime if you wanna chat about a
            project or team up. Or hit me up on social media directly using the
            link below. Cheers! 🚀
          </p>
        </div>
        <div className=" py-4 hidden lg:flex">
          <Separator className=" bg-[#ccc]" orientation="vertical" />
        </div>
        <div className=" w-full h-auto flex flex-col gap-4 p-8 lg:p-28">
          {socMedList.map((item) => (
            <div className=" flex gap-4 items-center">
              <item.icon fontSize={24} />
              <p className=" font-roboto text-xs md:text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full p-6">
        <div className="w-full text-center p-2">
          <a className=" ">Visit my blog site, click here</a>
        </div>
        <div className=" w-full text-sm text-center font-nunito">
          <p>@Jude Demnuvar Linga Rileza</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
