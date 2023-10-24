import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="md:px-20 px-6 mx-auto mt-10 py-10 bg-blue-100 flex justify-between flex-wrap">
            <div>
                <div className="flex items-center mb-2">
                    {/* <img className="w-16" src="https://img.icons8.com/?size=256&id=17843&format=png" alt="" /> */}
                    <span className="text-5xl font-semibold">Tech</span>
                </div>
                <p>text@gmail.com</p>
                <p>Dhaka , Bangladesh</p>
            </div>
            <ul className="">
                <h2 className="text-2xl font-semibold mb-2 ">All Route</h2>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2"><Link to='/'>Home</Link></li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2"><Link to='/preorder'>PreOrder</Link></li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2"><Link to='/pricing'>Pricing</Link></li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2"><Link to='/about'>About</Link></li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2"><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul className="">
                <h2 className="text-2xl font-semibold mb-2 ">Our Events</h2>

                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">Phone Launch</li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">Software Launch</li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">Electronic Product Launch</li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">
                Satellite technology Launch</li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">
                    Robotic Product Launch</li>
                <li className="hover:text-blue-500 cursor-pointer font-semibold my-2">
                    Gaming Product Launch</li>
            </ul>
            <ul className="">
                <h2 className="text-2xl font-semibold mb-2 ">Contact</h2>
                <label htmlFor="" className="flex rounded overflow-hidden">
                    <input className="p-2" type="email" name="" id="" placeholder="Contact us .." />
                    <button className="bg-blue-500 px-2 text-white font-semibold">Submit</button>
                </label>
            </ul>
        </div>
    )
}
