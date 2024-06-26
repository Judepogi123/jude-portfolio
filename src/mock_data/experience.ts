import { ExperienceProps, ImplemetedProps } from "@/interfaces/data";
import { IconBaseProps } from "react-icons";

import { SiWebauthn } from "react-icons/si";
import { TbRoute2 } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { SiGoogleauthenticator } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { LuLayout } from "react-icons/lu";
import { GrOptimize } from "react-icons/gr";

export const experienceList: ExperienceProps[] = [
  {
    title: `College capstone project, developed "eCAP-sule: Capstone Project Management Application"`,
    year: "2023-2024",
    desc: "dsadas",
    activities: [
      "Authentication",
      " Google login",
      "Routing",
      "Responsive layout",
      "Data Analytics",
    ],
  },
  {
    title: `Intership project for DILG Provincial Office of Marinduque, developed "DILG: Audit Tracker"`,
    year: "2023-2024",
    desc: "312312",
    activities: [
      "Authentication",
      "Routing",
      "Responsive layout",
      "Secured implamentation of REST API",
      "Deployment",
    ],
  },
  {
    title: `Personal project, "Personal Portfolio"`,
    year: "2023-2024",
    desc: "2024",
    activities: [
      "Authentication",
      "Routing",
      "Responsive layout",
      "Secured implamentation of REST API",
      "Deployment",
    ],
  },
];

export const implemented: ImplemetedProps[] = [
  {
    icon: SiWebauthn,
    title: "Authentication",
  },
  {
    icon: SiGoogleauthenticator,
    title: "Social Authentication",
  },
  {
    icon: TbRoute2,
    title: "Routing",
  },
  {
    icon: LuLayout,
    title: "Responsive layout",
  },
  {
    icon: SiSimpleanalytics,
    title: "Data Analytics",
  },
  {
    icon: GrDeploy,
    title: "Deployment",
  },
];
