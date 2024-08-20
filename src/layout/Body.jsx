import Header from "@/customeComponent/Header";
import { setData } from "@/features/widgetSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "@/lib/Data";
import Category from "@/customeComponent/Category";
import SideBar from "@/customeComponent/SideBar";


export default function Body() {

    const dispatch = useDispatch()
        
    useEffect(() => {
        console.log("use effect work to update the state");
        
        dispatch(setData({jsonData:data}))
    })
        
    return (
    <div className="">
        
        <Header></Header>
        <div className="">
            <Category />
        </div>
        
    </div>
    )
}
