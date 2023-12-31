import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Folder } from "./page"
import Link from "next/link"


export default function AlbumCard({ folder }: { folder: Folder }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{folder.name}</CardTitle>
                <CardDescription>All your {folder.name} images</CardDescription>
            </CardHeader>
            
            <CardFooter className="flex justify-between">
                <Button asChild>
                    <Link href={`/albums/${folder.name}`}>View Album</Link></Button>
            </CardFooter>
        </Card>
    )
}
