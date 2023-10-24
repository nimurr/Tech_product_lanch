import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
// import "./styles.css"

export default function EventGallery() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div className='my-20'>
            <div className='my-10'>
                <h2 className='md:text-4xl text-2xl font-semibold text-center'>Previous Events Slider</h2>
                <span className="block w-4/12 md:w-2/12 mx-auto bg-blue-500 h-1 my-2"></span>
            </div>

            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://t4.ftcdn.net/jpg/06/38/83/41/240_F_638834161_lfuTytTEJGk3LIRTxEB5EqT5YxIrmYCf.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://media.istockphoto.com/id/1176650872/photo/young-female-influencer-speaks-with-crowd-during-seminar.jpg?s=612x612&w=0&k=20&c=Qdwt0yH6ShPVqw1XZVwPL7r5X9sE5jJzBe0BTsWKSN8=" alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://media.istockphoto.com/id/1280491305/photo/man-speaking-on-a-pedestal-on-a-conference-in-front-of-an-audience.jpg?s=612x612&w=0&k=20&c=p8NnoB-uXi6g7pgbvpxMDWZPpxt-HQekhY5DFIAc4nA=" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://media.istockphoto.com/id/1182525596/photo/business-colleagues-enjoying-sparkling-wine-and-conversation.jpg?s=612x612&w=0&k=20&c=3ELOi5mYkal6rI7pdEZitn_EzMnPBG65BAFnhbW0sAw=" alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://media.istockphoto.com/id/857615704/photo/blurred-defocused-background-of-public-event-exhibition-hall-business-trade-show-or-commercial.jpg?s=612x612&w=0&k=20&c=h-0q8kbiwY7m93CGMIwSg1u98VxALTqNXUzNo5BiHDs=" alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img className='w-full max-h-[60vh] min-h-[25vh]' src="https://t3.ftcdn.net/jpg/03/52/61/30/240_F_352613064_n0eX6p2OMdkgwjB7r9gYLlL0sJ6p2Cuf.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
