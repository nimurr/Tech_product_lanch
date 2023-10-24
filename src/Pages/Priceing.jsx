 
export default function Priceing() {
    const handleBuyPackage = () =>{
        swal("Order Success!", "You clicked the button!", "success")
    }
  return (
    <div>
        <h2 className="text-center font-semibold text-5xl md:py-20 py-5 bg-blue-500 text-white"> Our Package </h2>
        <div className="grid md:grid-cols-3 gap-4 my-10 w-10/12 mx-auto">
            <div data-aos="flip-right" data-aos-duration="1000" className="bg-blue-100 p-5 text-center">
                <h2 className="text-2xl text-red-500">Basic Package</h2>
                <h3 className="text-4xl font-semibold my-2">$500</h3>
                <ul className="my-4">
                    <li className="my-1">Good Event Management</li>
                    <li className="my-1">Site Facilities</li>
                    <li className="my-1">Multi media Technology</li>
                    <li className="my-1">Good Everiremant Place</li>
                    <li className="my-1">Facilities of Extra food  </li>
                </ul>
                <button onClick={handleBuyPackage} className="btn bg-blue-600 text-white mt-2">Buy Now</button>
            </div>
            <div  data-aos="flip-left" data-aos-duration="1000" className="bg-blue-100 p-5 text-center">
                <h2 className="text-2xl text-blue-500">Premium Package</h2>
                <h3 className="text-4xl font-semibold my-2">$1200</h3>
                <ul className="my-4">
                    <li className="my-1">Good Event Management</li>
                    <li className="my-1">Site Facilities</li>
                    <li className="my-1">Multi media Technology</li>
                    <li className="my-1">Good Everiremant Place</li>
                    <li className="my-1">Facilities of Extra food  </li>
                </ul>
                <button onClick={handleBuyPackage} className="btn bg-blue-600 text-white mt-2">Buy Now</button>
            </div>
            <div  data-aos="flip-right" data-aos-duration="1000" className="bg-blue-100 p-5 text-center">
                <h2 className="text-2xl  text-green-600">Diamond Package</h2>
                <h3 className="text-4xl font-semibold my-2">$2500</h3>
                <ul className="my-4">
                    <li className="my-1">Good Event Management</li>
                    <li className="my-1">Site Facilities</li>
                    <li className="my-1">Multi media Technology</li>
                    <li className="my-1">Good Everiremant Place</li>
                    <li className="my-1">Facilities of Extra food  </li>
                </ul>
                <button onClick={handleBuyPackage} className="btn bg-blue-600 text-white mt-2">Buy Now</button>
            </div>
        </div>
    </div>
  )
}
