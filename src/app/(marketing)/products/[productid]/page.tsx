
export default async function Productid({params}:{
    params : Promise <{productid : string}>}){
    const productId = (await params).productid
    return <h1>Details about product {productId}</h1>
}