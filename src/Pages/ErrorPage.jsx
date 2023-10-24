import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div>
                <h2 className=" md:text-7xl text-3xl text-center text-red-500 font-semibold">404 Not Found !!</h2>
                <p className="text-center my-2 md:text-xl font-semibold">This Page is not Found</p>
                <Link className="bg-red-500 p-2 rounded text-white text-center block sm:w-3/12 w-6/12 mt-5 mx-auto" to='/'>Go Home</Link>
            </div>
        </div>
    )
}
