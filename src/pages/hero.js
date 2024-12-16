import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://acpkhi.com/drone%202.mp4"
      autoPlay
      loop
      muted
    ></video>
  
    {/* Overlay Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white bg-black bg-opacity-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hub of Art & Culture
      </h1>
      <p className="text-lg md:text-xl mb-6">
      Committed to the promotion, education and preservation of art and culture since 1954
      </p>
      <button className="bg-[#EEF5E7] py-3 px-8 rounded-lg text-black font-semibold hover:bg-[#EEE7F5] transition-all">
        Learn More
      </button>
    </div>
  
    {/* Overlay Gradient */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-10"></div>
  </section>
  
  

  );
};

export default Hero;
