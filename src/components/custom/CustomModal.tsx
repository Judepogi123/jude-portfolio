//styles
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

//props
type FooterButtonProps = {};
interface SendEmailModalProps {
  onOpenChange?(open: boolean): void;
  open?: boolean | undefined;
  children?: React.ReactNode;
  desc?: string | undefined;
  title?: string | undefined;
  footer?: boolean | undefined;
  onFunction?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

//libs
import { useMediaQuery } from "react-responsive";

const CustomModal = ({
  onOpenChange,
  open,
  desc,
  children,
  title,
  footer,
  onFunction
}: SendEmailModalProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  
  if (isMobile) {
    return (
      <Drawer onOpenChange={onOpenChange} open={open} >
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        {footer && (
          <DialogFooter>
            <Button type="submit" variant="ghost">
              Cancel
            </Button>
            <Button type="submit" onClick={onFunction}>Save changes</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
