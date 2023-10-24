import { useLoaderData } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default function PreOrder() {
  const preOrder = useLoaderData();

  const handlePreOrder = ()=>{
    swal("Pre Order Success!", "You clicked the button!", "success")
  }
  console.log(preOrder)
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-3 gap-6 my-10">
          {
            preOrder.map(pre => 
            <div data-aos="flip-right" data-aos-duration="1000" key={pre.id} className="text-center border-2 rounded-md p-4">
              <img className="w-8/12 h-52 mb-2 mx-auto" src={pre.img} alt="" />
              <h2 className="text-3xl font-semibold">{pre.phone_name}</h2>
              <h2 className="text-xl font-semibold my-2">${pre.Price}</h2>
              <button onClick={handlePreOrder} className="btn bg-blue-500 text-white hover:bg-blue-600">Pre Order</button>
            </div>)
          }
      </div>
    </div>
  )
}
