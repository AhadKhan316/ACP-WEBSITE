import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import venuesData from "../data/venuesData"; // Import the centralized data

// Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VenueDetailPage = () => {
  const { id } = useParams(); // Get venue ID from the URL
  const venue = venuesData.find((v) => v.id === parseInt(id)); // Find the specific venue data

  if (!venue) return <div className="text-center text-red-600">Venue not found!</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Venue Title */}
        <h1 className="text-4xl font-bold text-center mb-6">{venue.name}</h1>

        {/* Slider */}
        <div className="mb-8">
          <Slider {...sliderSettings}>
            {venue.images.map((img, index) => (
              <div key={index} className="w-full h-[400px]">
                <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Layout with Sidebar Navigation */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-[100px] bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-center mb-4">{venue.name}</h2>
              <nav className="space-y-3">
                <a href="#facilities" className="block bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600">
                  Facilities
                </a>
                <a href="#details" className="block bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600">
                  Details
                </a>
                <a href="#description" className="block bg-yellow-500 text-white py-2 px-4 rounded-md text-center hover:bg-yellow-600">
                  Description
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-8">
            {/* Facilities */}
            <section id="facilities" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Facilities</h2>
              <ul className="list-disc list-inside space-y-2">
                {venue.facilities.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Details */}
            <section id="details" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Details</h2>
              <p><strong>Category:</strong> {venue.details.category}</p>
              <p><strong>Area:</strong> {venue.details.area}</p>
              <p><strong>Size:</strong> {venue.details.size}</p>
              <p><strong>Capacity:</strong> {venue.details.capacity}</p>
            </section>

            {/* Description */}
            <section id="description" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{venue.description}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetailPage;
