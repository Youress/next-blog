import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import ContactForm from "./form";
const page = () => {
  return (
    <main className=" py-14 px-8 max-w-screen-lg mx-auto">
      <section className="pb-4">
        <div className="mb-4">
          <h3 className=" text-xl  font-normal">Get Started</h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="basis-3/4		">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold ">Get in touch with us. Were here to assist you.</h2>
          </div>
          <div className="basis-1/4	">
            <ul className=" space-y-4 w-fit ml-auto">
              <li className="border-gray-500 rounded-full border p-2"><FaFacebookF/></li>
              <li className="border-gray-500 rounded-full border p-2"><FaTwitter/></li>
              <li className="border-gray-500 rounded-full border p-2"><FaInstagram/></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-8">
      <ContactForm/>

      </section>
    </main>
  )
}

export default page