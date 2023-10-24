import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


export default function Login() {

    const { login, loginWithGoogle, user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (user) {
            navigate(location.state ? location.state : '/')
            return toast.error("User Already Login")
        }

        login(email, password)
            .then(res => {
                // console.log('login successfully done',res)
                navigate(location.state ? location.state : '/')
                toast.success("User Login success !");

            })
            .catch(error => {
                console.log(error)
                toast.error("Email and password not match")
            }
        )

        e.target.email.value = '';
        e.target.password.value = '';
    }

    const loginWithGoogleprovider = () => {
        if (user) {
            return toast.error("User Already Login")
        }
        loginWithGoogle()
            .then(res => {
                console.log(res)
                toast.success("Successfully User Login with Google ! ");
                navigate(location.state ? location.state : '/')

            })
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form data-aos="flip-right" data-aos-duration="1000" onSubmit={handleLogin} className="sm:w-[400px] mx-4 sm:mx-auto my-14 bg-blue-100 p-6 rounded">
                <h2 className="text-center text-4xl font-semibold mb-4">Login Form</h2>
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
                <h2 onClick={loginWithGoogleprovider} className="cursor-pointer flex border-2 mt-2 border-blue-400 rounded w-full p-1 items-center gap-2 text-xl font-semibold justify-center"><img className="w-6" src="https://img.icons8.com/?size=256&id=17949&format=png" alt="" />Google</h2>
                {/* <hr className="bg-red-500 w-full h-[2px] my-2" /> */}
                <p className="mt-2 text-center">New User Need to ? <Link to='/register' className="text-blue-500 font-semibold">Register..</Link></p>
            </form>
        </div>
    )
}
