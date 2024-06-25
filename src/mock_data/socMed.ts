import { SocMedProps } from "@/interfaces/data";

//icons
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

//type - "1:1", first index 1 for active othervwise false, second index can send email, 1 for true otherwise false

export const socMedList: SocMedProps[] = [
  {
    name: "Jude Demnuvar Linga Ribleza",
    link: "https://web.facebook.com/judedemnuvar.ribleza.5/",
    icon: FaFacebook,
    type: "1:0"
  },
  {
    name: "Jude Demnuvar Linga Ribleza",
    link: "#",
    icon: FaLinkedin,
     type: "1:0"
  },
  {
    name: "juderibleza36@gmail.com",
    link: "#",
    icon: MdAlternateEmail,
     type: "1:0"
  },
];
