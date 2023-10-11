

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "./ui/icons/menu"
import { Edit } from "lucide-react"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
export function ImageMenu({ image }: { image: SearchResult }) {

    const [open, setOpen] = useState(false)
    return (
        <div className="absolute top-2 right-2 ">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0"><Menu /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-30">
                    <DropdownMenuItem asChild >

                        <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild >
                    <Button className="cursor-pointer flex justify-start p-5" asChild variant="ghost" ><Link className="flex" href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}><Edit className="w-5 h-5 ml-0 mr-2" /> Edit</Link></Button> 
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
