import React from "react";

//styles
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

//props
interface DrawerProps {
  open?: boolean;
  onOpenChange?: ((open: boolean) => void) | undefined;
  children?: React.ReactNode;
  title?: string;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right" | undefined;
}

const CustomDrawer = ({
  open,
  onOpenChange,
  children,
  title,
  className,
  direction,
}: DrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction={direction} >
      <DrawerContent className={className}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
