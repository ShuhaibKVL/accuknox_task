import {
    Card
  } from "@/components/ui/card"
import './card_.css'
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import SideBar from "./SideBar"
  
export default function Card_Add() {  
    return (
        <Card className="flex justify-center items-center" >
            <div className="flex justify-center items-center">
            <SideBar button={<Button className="border-2 border-gray-400 rounded" >Add Widget <PlusIcon/></Button>}/>
            </div>
        </Card>
    )
}
