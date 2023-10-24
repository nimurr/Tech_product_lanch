import { Link, useLoaderData } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services() {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className="w-11/12 mx-auto my-20">
            <h2 className="text-center text-4xl font-semibold">Our Service</h2>
            <span className="block w-2/12 mx-auto bg-blue-500 h-1 my-2"></span>
            <div className="grid lg:grid-cols-2 gap-5 my-10">
                {
                    products.map(d =>
                        <div data-aos="fade-right" data-aos-duration="1000" key={d.id} className="sm:flex border-2 rounded-xl overflow-hidden p-4 gap-4 items-center">
                            <div className="sm:w-5/12">
                                <img className="w-full h-60" src={d.img} alt="" />
                            </div>
                            <div className="sm:w-7/12">
                                <h3 className="text-3xl font-semibold">{d.phone_name}</h3>
                                <h2 className="text-xl font-semibold my-2">${d.Price} </h2>
                                <p className="my-2 text-justify">{d.Description.slice(0,150)}...</p>
                                <Link to={`/product/${d.id}`}><button className="btn bg-blue-500 text-white hover:bg-blue-600">Details</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
