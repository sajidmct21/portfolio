

function Contact() {
  return (
    <div className="bg-blue-900 pt-5 text-white mx-auto w-full py-12 px-4 text-center">
        <h1 className="text-3xl font-bold pt-10">Contact Us</h1>
        <p className="mt-5 mx-143">Have a project in mind? Let’s connect and discuss how I can help bring your ideas to life.</p>
        <div className="flex gap-20 mt-10">
            <div className="flex flex-col gap-3 text-left">
                <h1 className="text-xl font-bold">Get in Touch Today</h1>
                <p className="w-8/12">I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                <p className="flex items-center gap-2 text-white">
                    <span>Email: </span>
                    <a href="mailto:sajidmct21@gmail.com" className=" hover:underline">
                        sajidmct21@gmail.com
                    </a>
                </p>
                <p className="flex items-center gap-2 text-white">
                    <span>Phone: </span>
                    <a href="tel:+1234567890" className=" hover:underline">
                        +92 303 0128661
                    </a>
                </p>
                <p className="flex items-center gap-2 text-white">
                    <span>Location: </span>
                    <a href="https://www.google.com/maps/place/Pakistan" className=" hover:underline">
                        Lahore, Pakistan
                    </a>
                </p>
            </div>
            <div>
                <form action="">
                    <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded bg-gray-800 text-white" />
                    <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded bg-gray-800 text-white" />
                    <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded bg-gray-800 text-white"></textarea> 
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact