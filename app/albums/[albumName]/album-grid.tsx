'use client'

import { CloudinaryImage } from "@/components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";




export default function AlbumGrid({ images }: { images: SearchResult[] }) {




    return (<>



        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage

                        key={imageData.public_id}

                        imageData={imageData}
                        width="450"
                        height="300"
                        alt="An image to upload"
                    />
                )
            }}
        />
    </>
    )
}