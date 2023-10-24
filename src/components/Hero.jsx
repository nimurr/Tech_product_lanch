import { Link } from "react-router-dom";


export default function Hero() {
    return (
        <div>
            <div className="sm:my-10  min-h-[80vh] flex items-center">
                <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2  items-center w-11/12 mx-auto gap-4 ">
                    <div  data-aos="fade-right" data-aos-duration="1000" className="">
                        <h1 className="lg:text-8xl text-4xl font-bold "><span className="text-blue-400">N</span>ew Product Launch </h1>
                        <p className="py-6 text-[17px] font-semibold md:w-8/12">New Product launch Soon held its latest product launch event, introducing the iPhone 15, iPhone 15 Plus and Pro, and Apple Watch Series 9 and Ultra 2.</p>
                        <Link to='/herodetails'><button className="btn hover:bg-blue-600 bg-blue-500 text-white">View Details</button></Link>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end">
                        <img  src="https://www.eventx.io/hubfs/product%20launch%20featured%20image.jpg" className="w-full lg:h-full sm:h-[60vh] h-[30vh]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
