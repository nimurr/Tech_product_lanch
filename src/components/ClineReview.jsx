import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function ClineReview() {
    return (
        <div className="w-11/12 mx-auto z-10 min-h-[80vh] flex items-center">
            <div>
            <h2 className="text-4xl text-center font-semibold">Clint Review</h2>
            <span className="block w-2/12 mx-auto bg-blue-500 h-1 my-2"></span>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-between my-10">
                
                <div data-aos="flip-right" data-aos-duration="2000" className=" shadow-xl">
                    <figure>
                        <img className="w-20 mx-auto h-20 rounded-full" src="https://i.ibb.co/Db3hWb3/1686378915854-2-1.png" alt="Shoes" />
                    </figure>
                    <div className="p-4">
                        <h2 className=" text-xl font-semibold text-center">Nimur Rahman Nerob</h2>
                        <p className="text-center">The camera system is where this phone truly shines. The photos I take with it are incredibly detailed, and the low-light performance is impressive.</p>
                        <ul className="flex justify-center gap-1 mt-2">
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                        </ul>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="2000" className=" shadow-xl">
                    <figure>
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/375040266_1660184327817146_2137495011053593519_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=WiSQCK5T4zIAX9Y6yoX&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBryq1zjOQpdnhQFOvPoUHX6zK8TgOUS6IHcIeLx7yYLA&oe=652593A9" alt="Dipok" />
                    </figure>
                    <div className="p-4">
                        <h2 className=" text-xl font-semibold text-center">Dipok</h2>
                        <p className="text-center">The camera system is where this phone truly shines. The photos I take with it are incredibly detailed, and the low-light performance is impressive.</p>
                        <ul className="flex justify-center gap-1 mt-2">
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                        </ul>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-duration="2000" className="shadow-xl">
                    <figure>
                        <img className="w-20 h-20 mx-auto rounded-full" src="https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/356047875_1475279456574850_3818315997898388469_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=4qNKnsXsYlMAX-vID5G&_nc_ht=scontent.fdac138-2.fna&oh=00_AfD1aZqPrU_rZidmma1mIZZqo2EU23cbNAybM2DqOdCW8w&oe=65255E69" alt="Dipu" />
                    </figure>
                    <div className="p-4">
                        <h2 className=" text-xl font-semibold text-center">Dipu</h2>
                        <p className="text-center">The camera system is where this phone truly shines. The photos I take with it are incredibly detailed, and the low-light performance is impressive. </p>
                        <ul className="flex justify-center gap-1 mt-2">
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                            <i className='bx bxs-star text-2xl text-orange-500 '></i>
                        </ul>
                    </div>
                </div>
                
            </div>
            <Link to='/allreview'><button className='capitalize btn hover:bg-blue-600 bg-blue-500 block w-32 mx-auto text-white'>All Review</button></Link>
            </div>
        </div>
    )
}
