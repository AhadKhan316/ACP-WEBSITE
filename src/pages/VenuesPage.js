import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import styles for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images for the slider
import venueImg1 from "../assets/venues/audi 1.webp";
import venueImg2 from "../assets/venues/audi 2.webp";
import venueImg3 from "../assets/venues/studio 1.webp";
import venueImg4 from "../assets/venues/studio 2.webp";
import venueImg5 from "../assets/venues/haseena moin.webp";
import venueImg6 from "../assets/venues/jaun elia.webp";
import venueImg7 from "../assets/venues/amiptheatre.webp";
import venueImg8 from "../assets/venues/cafe.webp";
import venueImg9 from "../assets/venues/art gallry.webp";
import venueImg10 from "../assets/venues/library.webp";
import venueImg11 from "../assets/venues/Rooftop.webp";
import venueImg12 from "../assets/venues/lobby.webp";
import venueImg13 from "../assets/venues/gulrang.webp";
import venueImg14 from "../assets/venues/audio-studio.webp";
import venueImg15 from "../assets/venues/parking.webp";

// Venues Array
const venues = [
  {
    id: 1,
    name: "Auditorium 1",
    image: venueImg1,
    description: "The Arts Council of Pakistan Karachi offers a luxury and beautifully designed Air Conditioned auditorium with a seating capacity of 436 persons based on a 1,215 sq. ft. stage. With modern pieces of equipment such as the latest theatrical lighting system, audio/video systems for live streaming, and impeccable acoustics.",
  },
  {
    id: 2,
    name: "Auditorium 2",
    image: venueImg2,
    description: "The Arts Council of Pakistan Karachi offers a luxury and beautifully designed Air Conditioned auditorium with a seating capacity of 272 persons based on a 779 sq. ft. stage. Auditorium 2 is equipped with state-of-the-art amenities which people provide comfort and relaxation to the event organizers as well as attendees.",
  },
  {
    id: 3,
    name: "Studio 1",
    image: venueImg3,
    description: "Studio 1 is located on the 4th floor of the Ahmed Shah Building. It is a versatile 4,725 sq. ft. flexible space with enough room for sets, props, and crew to customize the experience according to the specific requirements in a controlled atmosphere.",
  },


  {
    id: 4,
    name: "Studio 2",
    image: venueImg4,
    description: "Studio 2 is located on the 3rd floor of the Ahmed Shah Building. Studio 2 is a versatile 5,032 sq. ft. film and video production studio with a 56ft wide stage area. Studio 2 is a flexible space with enough room for sets, props, and crew.",
  },

  {
    id: 5,
    name: "Haseena Moin Hall",
    image: venueImg5,
    description: "Haseena Moin Hall is located on the 1st floor of Ahmed Shah Building and has a size of 2193 sq. ft. hall which is specially designed for smaller gatherings, seminars, workshops, book launches, and conferences.",
  },

  {
    id: 6,
    name: "Jaun Elia Lawn",
    image: venueImg6,
    description: "Jaun Elia Lawn, Arts Council of Pakistan Karachi offers a space of 12462 sq. ft. that is an ideal spot for huge gatherings and a space that can be customized accordingly for the grand festivals/music concerts/corporate programs.",
  },

  {
    id: 7,
    name: "Z.A Bukhari Amphitheatre",
    image: venueImg7,
    description: "Our spectacular amphitheatre can accommodate up to 1300 guests specifically designed to please the audience and to provide conveniences to the artists. Our Amphitheatre is designed by a renowned architect Aqeel Bilgrami.",
  },

  {
    id: 8,
    name: "Café D' Art",
    image: venueImg8,
    description: "Café D' Art is a magnificent coffee house located on the premises of ACPKHI. It serves as an excellent destination for dining and relaxation. Offers setting for social gatherings, open mic ceremonies, music performances, stand-up comedy shows, and exploration of various delectable cuisines.",
  },

  {
    id: 9,
    name: "Ahmed Pervez Art Gallery",
    image: venueImg9,
    description: "Located on the 2nd floor of Ahmed Shah Building Ahmed Pervez art gallery was established in 1989 and was named after the famous Pakistani artist Ahmed Pervez.",
  },

  {
    id: 10,
    name: "Josh Malihabadi Library",
    image: venueImg10,
    description: "Josh Malihabadi Library is located on the 2nd floor of the Ahmed Shah Building and is dedicated to the Pakistani legendary play writer and screenwriter. A place where you can find books from various genres and different fields of knowledge, having over 25,000 books, and also serves as a location for recording live events.",
  },

  {
    id: 11,
    name: "360° Rooftop Lounge",
    image: venueImg11,
    description: "Arts Council of Pakistan offers a flexible open-air 5227 sq. ft. of rooftop space with a 360-degree view of the city of lights. The rooftop is a delicate mix of nature and elegance.",
  },

  {
    id: 12,
    name: "Lobby Area",
    image: venueImg12,
    description: "The lobby area of Arts Council of Pakistan Karachi is converted into a diverse functional space. The Lobby is 4136 sq. ft. of space which is the perfect exhibit expansion space for tradeshows, networking, or a space where people can attend meetings, seminars, camps, workshops, literary functions, ghazal performances, etc.",
  },

  {
    id: 13,
    name: "Gulrang Café",
    image: venueImg13,
    description: "The Arts Council of Pakistan Karachi offers fully operational and hygienic cafeteria services that are designed for use by staff, students, and visitors and are generally the most visited area.",
  },

  {
    id: 14,
    name: "Audio Studio",
    image: venueImg14,
    description: "Located on the second floor of the academy building in ACPKHI. A well-structured audio studio with variable acoustics that allows the recording of artists, singers, dubbing artists, announcements for advertising, etc.",
  },

  {
    id: 15,
    name: "Parking Area",
    image: venueImg15,
    description: "ACPKHI provides spacious and secure parking areas and facilities that can be utilized as an ideal venue for various activities, such as festivals, book stalls, food stalls, and more.",
  },
];

const VenuesPage = () => {
  // Slider settings
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
    <div className="min-h-screen bg-[#111827] text-white pt-[80px]">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
      
      
{/* Slider Section */}
<div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
  {/* Static Centered Heading */}
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-center z-10">
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Venues</h1>
      <p className="text-gray-300 px-4">
        Explore our amazing venues for events and gatherings.
      </p>
    </div>
  </div>

  {/* Slider */}
  <Slider {...sliderSettings}>
    {venues.map((venue) => (
      <div key={venue.id} className="w-full h-[400px]">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </Slider>
</div>


        {/* Venues Grid */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Our Venues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <Link
                to={`/venue/${venue.id}`}
                key={venue.id}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white text-gray-800"
              >
                {/* Image */}
                <div className="relative w-full h-[250px] bg-gray-300">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                    {venue.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{venue.description}</p>

                  {/* Button */}
                  <div className="mt-4">
                    <button className="inline-block px-5 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors duration-300">
                      See More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuesPage;
