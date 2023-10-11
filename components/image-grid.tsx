'use client'


import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";


const MAX_COLUMNS = 4



export function ImageGrid({images,getImage}:{images:SearchResult[],getImage:(imageData:SearchResult)=>ReactNode;})
{
    function getcolumns(colIndex: number) {
        return images.filter((resource, index) => index % MAX_COLUMNS === colIndex)
    }
        return (
            <div className="grid grid-cols-4 gap-4">
                    {[getcolumns(0), getcolumns(1), getcolumns(2), getcolumns(3)].map((column, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4">{column.map(getImage) }
                        </div>
                    )
                    )

                    }
                </div>
            
        )
}