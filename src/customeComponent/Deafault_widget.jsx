import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, ChartBarBigIcon, ChartBarDecreasing, ChartColumn, GitBranchIcon } from "lucide-react";

export default function Deafault_widget({widget}) {
    return (
        <Card className="flex flex-col justify-center items-center lg:h-[350px]">
            <CardHeader>
                <CardTitle>{widget?.title}</CardTitle>
            </CardHeader>
        <ChartColumn></ChartColumn>
        <p>Graph not provided</p>
        </Card>
    
    )
}
