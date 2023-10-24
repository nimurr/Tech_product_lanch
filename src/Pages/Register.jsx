import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


export default function Register() {
    const { register, upDate } = useContext(AuthContext)
    // console.log(register)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const PhotoURL = e.target.PhotoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rsPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d).{6,}$/;

        if (password.length < 6) {
            return toast.error("Password need 6 characters .")
        }
        else if (!rsPass.test(password)) {
            return toast.error("Password Need Uppercase, lowerCase , number and Spacial characters  ");
        }


        register(email, password)
            .then(res => {
                toast.success('Successfully Register!', res.user)
                navigate(location.state ? location.state : '/')
                upDate(name,PhotoURL);

            })
            .catch(error => {
                toast.error("User Already Register.", error)
            })

        e.target.email.value = '';
        e.target.password.value = '';
        e.target.name.value = '';
        e.target.PhotoURL.value = '';

    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form data-aos="flip-right" data-aos-duration="1000" onSubmit={handleRegister} className="sm:w-[400px] mx-4 sm:mx-auto my-14 bg-blue-100 p-6 rounded">
                <h2 className="text-center text-4xl font-semibold mb-4">Register Form</h2>
                <label className="block" >
                    <span>Your Name</span>
                    <input className="p-2 w-full mb-4 rounded" type="text" name="name" placeholder="Enter your name" />
                </label>
                <label className="block" >
                    <span>Your Photo URL</span>
                    <input className="p-2 w-full mb-4 rounded" type="text" name="PhotoURL" placeholder="Enter your Photo URL" />
                </label>
                <label className="block" >
                    <span>Your Email</span>
                    <input className="p-2 w-full mb-4 rounded" type="email" name="email" placeholder="Enter your Email" required />
                </label>
                <label className="block">
                    <span>Your Password</span>
                    <input className="p-2 w-full mb-4 rounded" type="password" name="password" placeholder="Enter your password" required />
                </label>
                <input className="p-2 bg-blue-600 cursor-pointer rounded text-white font-semibold w-full block" type="submit" value="submit" />
                {/* <h2 className="text-center my-2 font-semibold">Sing in with Google !</h2> */}
                {/* <hr className="bg-red-500 w-full h-[2px] my-2" /> */}
                <p className="mt-2 text-center">Have Register Go to ? <Link to='/login' className="text-blue-500 font-semibold">Login</Link></p>
            </form>
        </div>
    )
}
