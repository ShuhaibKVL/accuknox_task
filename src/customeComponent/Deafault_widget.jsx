import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartColumn, TrendingUp  } from "lucide-react";

export default function Deafault_widget({widget}) {
    console.log("Deafault_widget :",widget);
    
    return (
        <Card className="flex flex-col justify-center items-center lg:h-[350px]">
            <CardHeader>
                <CardTitle>{widget?.title}</CardTitle>
            </CardHeader>
        <ChartColumn></ChartColumn>
        <p>Graph not provided</p>
        <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm p-5">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {widget?.description}<TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
        </Card>
    
    )
}
