import { IconType } from "react-icons";

export interface SocMedProps {
  name: string;
  link: string;
  icon: IconType;
  type: string
}

export interface ProjectProps {
  title: string;
  gitHub: string;
  date: string;
  descriptions: string;
  blogLink: string;
  restriction: string;
  scnShot: string[];
  techStack?: string[]
}

export interface EducationProps {
  name: string;
  desc: string;
  year: string;
  present: boolean;
  major?: string | undefined;
  course: string | null;
}

export interface TechStack {
  name: string;
  type: string;
  imgSrc: string;
  exp: string;
  techType: number
}

export interface ImageProps {
  src: string;
  onLoad: boolean;
  className?: string;
}

export interface ExperienceProps {
  title: string;
  year: string;
  desc: string;
  activities: string[]
}

export interface ImplemetedProps {
  icon: IconType;
  title: string
}
