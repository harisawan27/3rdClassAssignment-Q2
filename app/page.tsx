import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>

      {/* Hero Section */}

      <section
        id="hero"
        className="relative min-h-screen flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <p className="text-3xl text-white z-10 pl-10 pt-32 pb-3 font-extrabold">
          Welcome To The Digital Agency !
        </p>
        <h1 className="text-7xl font-black text-orange-500 z-10 pl-10 pb-8">
          We Create Amazing <br></br>Professional & <br></br> Responsive
          Websites.
        </h1>
        <p className="text-xl text-gray-300 z-10 pl-10 font-thin">
          Grab Brand New Responsive Business Websites, Portfolios, Ecommerce
          Stores,<br></br> Powered By WordPress. Get Exceptional SEO Services
          and <br></br> Tailormade Digital Marketing Deals.
        </p>
      </section>

      {/* About Us Section */}

      <section id="about" className="bg-black ">
        <h1 className="text-7xl font-bold mb-4 pt-16 text-orange-500 text-center">
          About Us
        </h1>
        <p className="text-2xl text-white text-center font-medium">
          We are a digital agency committed to delivering top-notch services.
        </p>

        <div className="grid grid-cols-3 gap-12 p-32">
          <div className="bg-orange-500 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-4xl mt-4 text-white">Who Are We</h3>
            <p className="mt-2 text-white text-lg">
              A Digital Solution Agency Leverages Cutting-Edge Technologies to
              Provide Comprehensive Online Solutions, including Web Design,
              Social Media Management and Digital Marketing. These Agencies
              Drives Business Towards Effective Online Presence.
            </p>
          </div>

          <div className="bg-orange-500 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-4xl mt-4 text-white">Our Mission</h3>
            <p className="mt-2 text-white text-lg">
              Our Mission is to Empower Business By Crafting Innovative Digital
              Experience. By Merging Creativity With the Technology, Our Goal is
              to Enhance Brand Visibility, Foster Engagement, and Measurable
              Growth in the Dynamic Digital Landscape.
            </p>
          </div>

          <div className="bg-orange-500 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-4xl mt-4 text-white">What We Do</h3>
            <p className="mt-2 text-white text-lg">
              * UI UX Design <br></br>* Website Development <br></br>* Digital
              Marketing <br></br>* Ecommerce Store <br></br>* Tech Support
            </p>
          </div>
        </div>

        <div className="flex space-x-4 bg-black p-0 text-orange-500">
          <Image
            src="/images/pic.png"
            alt="Computer image"
            width={1000}
            height={750}
            className="rounded-r-full"
          />
          <div className="block">
            <h1 className="text-5xl font-bold p-16">Why Choose Us</h1>
            <p className="text-2xl text-white font-medium pl-16 pr-8">
              Choose Us for unparalleled expertise in digital solutions. Our
              Dedicated Team blends creativity and Technical Proficiency to
              Deliver Result-Driven Strategies. We Prioritize Client Success
              Ensuring a Seamless Journey in the Digital World.
            </p>
            <p className="text-2xl text-white font-medium pl-16 pt-16 pr-8">
              * Best Quality Designs<br></br> * 24x7 Live Support <br></br> *
              Result Oriented Projects<br></br> * Award Winning Support Team
              <br></br> * Best ROI Techniques<br></br> * Experienced
              Professionals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}

      <section id="contact" className="bg-black">
        <h1 className="text-7xl font-bold mb-4 pt-16 text-orange-500 text-center">
          Contact Us
        </h1>
        <p className="text-2xl text-white text-center font-medium">
        Feel Free To Contact For Book An Appointment With Our Professionals.
        </p>

        <div className="flex items-center justify-between bg-black">
          <div className="bg-black pl-16 w-2/5">
            <form className="mt-8 bg-orange-400 p-6 rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-1 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-1 border border-gray-300 rounded"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-black font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 mt-1 border border-gray-300 rounded"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-2 px-6 mt-4 bg-orange-500 text-black font-semibold rounded hover:bg-black hover:text-orange-500"
              >
                Send Message
              </button>
            </form>
          </div>

          <Image
            src="/images/contact.jpg"
            alt="Computer image"
            width={800}
            height={600}
            className="rounded-l-full pt-8 pb-16"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
