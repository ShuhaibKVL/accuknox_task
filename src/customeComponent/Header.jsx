import { Button } from "@/components/ui/button";
import DropDown from "./DropDown";
import { PlusIcon } from "lucide-react";
import SideBar from "./SideBar";

export default function Header() {
    return (
    <div className="w-full h-16 border flex justify-between items-baseline">
        <div className="w-fit">
            <h1>CNAPP Dashboard</h1>
        </div>
        <div className="w-[400px] border flex justify-around items-center">
            <SideBar button={<Button className="border-2 border-gray-400 rounded" >Add Widget <PlusIcon/></Button>}/>
            <DropDown></DropDown>
        </div>
    </div>
    )
}
