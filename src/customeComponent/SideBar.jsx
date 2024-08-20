import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CustomForm from "./customForm"
import { useState } from "react";

export default function SideBar({button,categoryId = null}) {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const openSheet = () => setIsSheetOpen(true);
    const closeSheet = () => setIsSheetOpen(false);

    return (
        <Sheet isOpen={isSheetOpen} onClose={closeSheet}>
        <SheetTrigger asChild>
        {button}
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader>
            <SheetTitle className="bg-bottom" >Add Widget</SheetTitle>
          </SheetHeader>
        <div className="h-[300px] w-full flex justify-center items-center">
            <CustomForm onClose={closeSheet}/>
        </div>
        </SheetContent>
      </Sheet>
    )
  }
  