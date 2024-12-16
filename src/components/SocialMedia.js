import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-6 bg-[#111827]">
      <div className="container mx-auto text-center py-6 bg-[#F5F1E1] rounded-lg">
        <h2 className="text-3xl font-bold text-black mb-6">
          Connect with Us on Social Media
        </h2>
        <p className="text-lg text-black mb-6">
          Follow us for updates, events, and more from the Arts Council of Pakistan, Karachi.
        </p>
        <div className="flex justify-center gap-6">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full bg-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaFacebookF className="text-[#B30B00] text-2xl group-hover:text-green-700" />
            </div>
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full bg-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaTwitter className="text-[#B30B00] text-2xl group-hover:text-green-700" />
            </div>
          </a> */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full bg-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaInstagram className="text-[#B30B00] text-2xl group-hover:text-green-700" />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full bg-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaLinkedinIn className="text-[#B30B00] text-2xl group-hover:text-green-700" />
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-4 rounded-full bg-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaYoutube className="text-[#B30B00] text-2xl group-hover:text-green-700" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
