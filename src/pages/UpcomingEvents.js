import React from "react";
import Slider from "react-slick";
import OfferCard from "../components/OfferCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingEvents = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section id="UpcomingEvents" className="py-6 bg-[#111827]">
      <div className="container mx-auto py-12 bg-[#F5F1E1] rounded-lg" >
        <h2 className="text-3xl font-bold text-center mb-8 text-white-800">Our Events</h2>
        <Slider {...sliderSettings}>
          <div>
            <OfferCard
              image="https://acpkhi.com/events/1920x811%20Slider%20AUC%20(1).webp"
              title="17th Aalmi Urdu Conference - 2024"
              description="Participate in workshops to explore the future of arts in Pakistan."
              link="/register/workshop" // Provide the link to your registration page
            />
          </div>
          <div>
            <OfferCard
              image="https://acpkhi.com/events/alumni%20festival%2024.jpg"
              title="ACP Alumni Festival"
              description="Discover vibrant music festivals showcasing local talent and culture."
              link="/register/music-festival" // Provide the link to your registration page
            />
          </div>
          <div>
            <OfferCard
              image="https://acpkhi.com/events/kainat.webp"
              title="World Culture Festival - 2024"
              description="Experience breathtaking art exhibitions by renowned artists."
              link="/register/art-exhibition" // Provide the link to your registration page
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvents;
