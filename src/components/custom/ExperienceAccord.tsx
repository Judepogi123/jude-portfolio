//libs
import { motion } from "framer-motion";
//components
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
//props
interface ExperienceProps {
  title: string;
}
const ExperienceAccord = ({ ...props }: ExperienceProps) => {
  return (
    <AccordionItem value={props.title}>
      <AccordionTrigger>{props.title}</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExperienceAccord;
