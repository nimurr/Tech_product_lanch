
export default function Contact() {

  const handlecontactSubmit = (e) => {
    e.preventDefault();
    swal("Form submit Success!", "You clicked the button!", "success")
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.text.value = '';
  }
  return (
    <div>
      <h2 className="text-center font-semibold text-5xl md:py-20 py-5 bg-blue-500 text-white"> Contact</h2>
      <form data-aos="flip-left" data-aos-duration="1000" onSubmit={handlecontactSubmit} className="sm:w-[400px] mx-4 sm:mx-auto my-14 bg-blue-100 p-6 rounded">
        <h2 className="text-center text-4xl font-semibold mb-4">Contact Form</h2>
        <label className="block" >
          <span>Your Name</span>
          <input className="p-2 w-full mb-4 rounded" type="name" name="name" placeholder="Enter your name" />
        </label>
        <label className="block" >
          <span>Your Email *</span>
          <input className="p-2 w-full mb-4 rounded" type="email" name="email" placeholder="Enter your Email" required />
        </label>
        <label className="block">
          <span>Your message *</span>
          <textarea className="block w-full p-2 mb-4" required placeholder="Your Massage" name="text" id="" cols="30" rows="5"></textarea>
        </label>
        <input  className="p-2 bg-blue-600 cursor-pointer rounded text-white font-semibold w-full block" type="submit" value="submit" />
        {/* <h2 className="text-center my-2 font-semibold">Sing in with Google !</h2> */}
        {/* <hr className="bg-red-500 w-full h-[2px] my-2" /> */}
        {/* <p className="mt-2 text-center">Have Register Go to ? <Link  to='/contact' className="text-blue-500 font-semibold">Login</Link></p> */}
      </form>
    </div>
  )
}
