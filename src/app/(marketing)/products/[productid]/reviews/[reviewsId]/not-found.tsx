"use client"

import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathName = usePathname()
    const productid = pathName.split("/")[2]
    const reviewId = pathName.split("/")[4]
    return (<>
        <div>
            <h2>Review {reviewId} not found for product {productid}</h2>
        </div>
    </>)
}