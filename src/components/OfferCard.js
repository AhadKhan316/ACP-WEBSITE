import React from "react";

const OfferCard = ({ image, title, description, link }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-4">
      {/* Image Section */}
      <div className="relative w-full mx-auto">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full" // Change to object-contain to fit the image inside without cropping
        />
      </div>
      {/* Content Section */}
      <div className="p-6 bg-[#111827]">
        <h3 className="text-xl font-bold text-[#F5F1E1] mb-4">{title}</h3>
        <p className="text-[#F5F1E1] mb-4">{description}</p>
        <a
          href={link} // Link to the registration page or any other action
          className="inline-block bg-[#B30B00] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#2C6E4D] transition duration-300"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default OfferCard;
