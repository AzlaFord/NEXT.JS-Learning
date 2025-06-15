export default async function Productreview({params}:{
    params : Promise <{productid:string;reviewsId:string}>
}

) {
    const {productid , reviewsId} = await params
    return <>Review {reviewsId} for product {productid}</>
}