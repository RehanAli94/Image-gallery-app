'use client'
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "../gallery/page";


import { useEffect, useState } from "react";




export default function FavoritesList({ initialResources, }: { initialResources: SearchResult[] }) {
    const [resources, setResource] = useState(initialResources)

    useEffect(() => {
        setResource(initialResources);
    }, [initialResources])

    return (

        <>
            <ImageGrid
                images={resources}
                getImage={(imageData: SearchResult) => {
                    return (
                        <CloudinaryImage
                        key={imageData.public_id}

                        imageData={imageData}
                        width="450"
                        height="300"
                        alt="An image to upload"
                        onUnheart={(unheartedResource) => {
                            setResource((currentResources) =>
                                currentResources.filter(
                                    (resources) => resources.public_id !== unheartedResource.public_id
                                ))
                        }}

                    />
                    )
                }}
            />
           


        </>
    )
}