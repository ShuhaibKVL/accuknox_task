import DropDown from "@/customeComponent/DropDown";

export default function Navbar() {
    return (
    <div className="w-full h-14 border flex items-center justify-center p-2">
        <div className= "w-[250px] border rounded-md flex justify-between items-center">
            <img src="" alt="icon" />
            <input className="rounded-md " type="text" placeholder="search" />
        </div>
    </div>
    )
}
