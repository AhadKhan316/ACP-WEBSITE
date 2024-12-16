import React, { useState } from "react";
import Slider from "react-slick";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("history");

  const renderSection = () => {
    switch (activeSection) {
      case "history":
        return (
          <div className="flex flex-wrap items-center mb-16 gap-8">
             <div className="mb-16 bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
                Founded in 1980, the Arts Council of Pakistan has been a beacon for cultural
                preservation, talent development, and a place of collaboration for artists from
                all corners of Pakistan. We take pride in fostering artistic growth and supporting
                a creative ecosystem that spans from traditional to contemporary forms.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Slider className="mb-8" dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
              <div><img src="https://acpkhi.com/studio%20I/1.jpg" alt="Historical  1" className="rounded-lg" /></div>
<div><img src="https://acpkhi.com/studio%20I/2.jpg" alt="Historical  2" className="rounded-lg" /></div>
<div><img src="https://acpkhi.com/imgs/ACP%20Drone%202023.webp" alt="Historical  3" className="rounded-lg" /></div>
              </Slider>
            </div>
          </div>
        );
      case "vision":
        return (
          <div className="mb-16 bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              Our vision is to create a world where art unites people, transcending borders
              and creating a global dialogue through artistic expression. We aim to support artists
              and bring attention to the diverse, rich culture of Pakistan while influencing global
              trends through innovation and cultural engagement.
            </p>
          </div>
        );
      case "mission":
        return (
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our mission is to serve as the premier institution supporting the development
              of artistic talents, fostering a rich cultural dialogue, and promoting the cultural
              heritage of Pakistan. We aim to provide a platform for artists, both emerging and
              established, to share their work with a broader audience, enrich society, and promote
              art as a universal language.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">About Us</h1>
        
        <div className="mb-8 flex justify-center gap-6">
          <button
            onClick={() => setActiveSection("history")}
            className={`py-2 px-6 rounded-lg font-semibold ${activeSection === "history" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            Our History
          </button>
          <button
            onClick={() => setActiveSection("vision")}
            className={`py-2 px-6 rounded-lg font-semibold ${activeSection === "vision" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveSection("mission")}
            className={`py-2 px-6 rounded-lg font-semibold ${activeSection === "mission" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            Our Mission
          </button>
        </div>

        {renderSection()}

        <div className="bg-gradient-to-r from-[#3D8361] to-[#2C6E4D] text-white py-12 px-6 rounded-lg shadow-xl mt-12">
          <h2 className="text-3xl font-semibold mb-4">Join Us in Our Mission</h2>
          <p className="text-lg mb-6">Be part of a growing movement to nurture creativity, support artists, and celebrate art in all its forms.</p>
          <a
            href="#cta"
            className="bg-white text-[#3D8361] font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
