
import { notFound } from "next/navigation";

export default async function Productreview({params}:{
    params : Promise <{productid:string;reviewsId:string}>
}

) {
    const {productid , reviewsId} = await params
    if(parseInt(reviewsId) > 100){
        notFound()
    }
    return <>Review {reviewsId} for product {productid}</>
}