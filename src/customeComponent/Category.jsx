import { useSelector } from "react-redux";
import { Pie_Chart } from "./chartComponents/Pie_Chart";
import { Bar_Chart } from "./chartComponents/Bar_Chart";
import { Area_Chart } from "./chartComponents/Area_Chart";
import Card_Add from "./Card_Add";
import Deafault_widget from "./Deafault_widget";

export default function Category() {

    let category = useSelector((state) => state.category.categoryData)
    console.log("category :>>", category.categories);
    return (<>
        {category && category.categories && category.categories.length > 0 ? (
            category.categories.map((element) => (
                <div key={element._id} className="mt-5 p-5 shadow-sm rounded bg-[#ffffff5f]">
                    <h2 className="font-medium text-lg ">{element.name}</h2>
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        {element.widgets.map((widget) => {
                            return(
                                widget?.type === "pie chart" ? (
                                    <Pie_Chart key={widget?.id} widget={widget} />
                                ) : widget?.type === "bar chart" ? (
                                    <Bar_Chart key={widget?.id} widget={widget} />
                                ) : widget?.type === "area chart" ? (
                                    <Area_Chart key={widget.id} widget={widget} />
                                )
                                : (
                                    <Deafault_widget key={widget?.id} widget={widget} />
                                )
                                
                            )})}
                            <Card_Add />
                    </div>
                </div>
            ))
        ) : (
            // Render a default card if categories are not available yet
            <h1>Category not found</h1>
        )}

    </>
    )
}
