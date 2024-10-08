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


//props
interface SendEmailModalProps {
  onOpenChange?(open: boolean): void;
  open?: boolean | undefined;
  children?: React.ReactNode;
  desc?: string | undefined;
  title?: string | undefined;
  footer?: boolean | undefined;
  onFunction?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  okTitle?: string;
  okButtonClass?: string;
  className?: string;
}

//libs

const CustomModal = ({
  onOpenChange,
  open,
  desc,
  children,
  title,
  footer,
  onFunction,
  okTitle,
  okButtonClass,
  className,
}: SendEmailModalProps) => {

  // if (isMobile) {
  //   return (
  //     <Drawer onOpenChange={onOpenChange} open={open}>
  //       <DrawerContent>
  //         <DrawerHeader>
  //           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
  //           <DrawerDescription>This action cannot be undone.</DrawerDescription>
  //         </DrawerHeader>
  //         <DrawerFooter></DrawerFooter>
  //       </DrawerContent>
  //     </Drawer>
  //   );
  // }
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle className=" font-semibold">{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        {footer && (
          <DialogFooter>
            <Button
              className={okButtonClass}
              type="submit"
              onClick={onFunction}
            >
              {okTitle}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};


export default CustomModal;
