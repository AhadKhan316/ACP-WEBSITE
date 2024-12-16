import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

// Import styles for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import venueImg1 from "../assets/venues/audi 1.webp";
import venueImg2 from "../assets/venues/audi 2.webp";
import venueImg3 from "../assets/venues/studio 1.webp";

// Venues Data
const venues = [
  {
    id: 2,
    name: "Auditorium 2",
    images: [venueImg1, venueImg2, venueImg3],
    facilities: [
      "Air conditioner",
      "Backstage facilities for humans",
      "Makeup room",
      "Restroom",
      "Backup power supply",
      "Cooling grid",
      "Soundproofing",
      "High and spacious main stage with lighting",
      "Security cameras",
      "Stage accessories: ropes, props, flowers, and more",
    ],
    details: {
      category: "Indoor Auditorium",
      area: "1275 sq ft",
      size: "Width: 45 ft, Depth: 27 ft",
      seatingCapacity: "450 Persons",
    },
    description: `ACBHI offers a historic and beautifully designed air-conditioned auditorium 
      with a seating capacity of 450 persons. Built on 1275 sq. ft., it is equipped with state-of-the-art lighting, 
      audio systems, and video systems. Ideal for seminars, theater, and live events.`,
  },
];

const Audi2 = () => {
  const { id } = useParams();
  const venue = venues.find((v) => v.id === parseInt(id));

  // Section refs for smooth scrolling
  const imagesRef = useRef(null);
  const facilitiesRef = useRef(null);
  const detailsRef = useRef(null);
  const descriptionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!venue) return <div className="text-center text-white">Venue not found</div>;

  return (
    <div className="min-h-screen bg-[#111827] text-gray-800 pt-[80px]">
      {/* Container */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-8">
        {/* Sticky Sidebar Navigation */}
        <div className="w-full md:w-1/4">
  <div className="sticky top-[100px] bg-[#F5F1E1] shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
      Auditorium 2
    </h2>
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => scrollToSection(imagesRef)}
        className="flex items-center justify-center text-lg font-medium text-white bg-[#111827] hover:bg-[#15803D] transition-all duration-300 py-2 rounded-md shadow-md"
      >
        <span className="mr-2">🖼️</span> Images
      </button>
      <button
        onClick={() => scrollToSection(facilitiesRef)}
        className="flex items-center justify-center text-lg font-medium text-white bg-[#111827] hover:bg-[#15803D] transition-all duration-300 py-2 rounded-md shadow-md"
      >
        <span className="mr-2">⚙️</span> Facilities
      </button>
      <button
        onClick={() => scrollToSection(detailsRef)}
        className="flex items-center justify-center text-lg font-medium text-white bg-[#111827] hover:bg-[#15803D] transition-all duration-300 py-2 rounded-md shadow-md"
      >
        <span className="mr-2">📋</span> Details
      </button>
      <button
        onClick={() => scrollToSection(descriptionRef)}
        className="flex items-center justify-center text-lg font-medium text-white bg-[#111827] hover:bg-[#15803D] transition-all duration-300 py-2 rounded-md shadow-md"
      >
        <span className="mr-2">📝</span> Description
      </button>
    </div>
  </div>
</div>


        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-8">
          {/* Images Section */}
          <section ref={imagesRef} className="bg-[#F5F1E1] p-6 rounded-lg shadow-lg">
            {/* <h2 className="text-2xl font-bold mb-4">Images</h2> */}
            <Slider {...sliderSettings}>
              {venue.images.map((image, index) => (
                <div key={index} className="w-full h-[400px]">
                  <img
                    src={image}
                    alt={`Venue ${index + 2}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </section>

          {/* Facilities Section */}
          <section ref={facilitiesRef} className="bg-[#F5F1E1] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Facilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {venue.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </section>

          {/* Details Section */}
          <section ref={detailsRef} className="bg-[#F5F1E1] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <ul className="space-y-2">
              <li>
                <strong>Category:</strong> {venue.details.category}
              </li>
              <li>
                <strong>Area:</strong> {venue.details.area}
              </li>
              <li>
                <strong>Size:</strong> {venue.details.size}
              </li>
              <li>
                <strong>Seating Capacity:</strong> {venue.details.seatingCapacity}
              </li>
            </ul>
          </section>

          {/* Description Section */}
          <section ref={descriptionRef} className="bg-[#F5F1E1] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{venue.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Audi2;
