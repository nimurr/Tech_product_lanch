import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import toast, { Toaster } from "react-hot-toast"; 

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL)
    const userLogout = () => {
        logOut()
            .then(res => {
                toast.success("Logout SuccessFully !!")
            })
    }

    const NavItem = <>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='/services'>Services</NavLink> */}
        <NavLink to='/preorder'>Pre Order</NavLink>
        <NavLink to='/pricing'>Priceing</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </>
    return (
        <div className="sticky top-0 z-20">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="navbar bg-base-100 border-b-blue-500 border-b-2 md:px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm flex gap-5 text-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItem}
                        </ul>
                    </div>
                    <Link to='/'>
                        <p className=" flex items-center normal-case text-xl cursor-pointer">
                            {/* <img className="w-14 my-2" src="https://img.icons8.com/?size=256&id=17843&format=png" alt="" /> */}
                            <span className="text-4xl font-semibold ml-2">Tech</span>
                        </p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 text-[16px] font-semibold">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ?
                            <NavLink to='/login' className="btn bg-blue-500 hover:bg-blue-600 text-white">Login</NavLink>
                            :
                            <div className="flex  items-center gap-2">
                                 <h2 className="capitalize font-semibold hidden sm:block">{user.displayName}</h2>
                                <img className="w-8 bg-blue-400 rounded-full" src={`${user.photoURL ? user.photoURL : 'https://img.icons8.com/?size=256&id=13042&format=png'}`} alt="" />
                                <button onClick={userLogout} className="bg-red-400 p-2 rounded text-white font-semibold">LogOut</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
