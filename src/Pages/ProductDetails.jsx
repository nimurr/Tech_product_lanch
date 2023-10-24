import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


export default function ProductDetails() {
    const products = useLoaderData();
    const {id} = useParams();
    
    const [product , setProduct ] = useState([]);
    useEffect(()=>{
        const findProduct = products.find(p => p.id == id)
        setProduct(findProduct)
    },[])

  return (
    <div className="md:w-5/12 w-11/12 mx-auto my-4">
        <img className="w-8/12 mx-auto" src={product.img} alt="" />
        <h2 className="text-4xl font-semibold mt-5">{product.phone_name}</h2>
        <h2 className="text-xl my-2">{product.location}</h2>
        <h2 className="text-2xl font-semibold">${product.Price}</h2>
        <p className="my-5">{product.Description}</p>
        <Link className="btn bg-blue-500 hover:bg-blue-600 text-white" to='/'>Go Home</Link>
    </div>
  )
}
