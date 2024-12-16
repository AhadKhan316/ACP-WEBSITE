import React, { useState } from "react";

// Importing images
import presidentImg from "../assets/governing-body-new/Ahmed Shah.webp";
import img1 from "../assets/governing-body-new/munawarSaeed.jpg";
import img2 from "../assets/governing-body-new/ejaz farooqi.jpg";
import img3 from "../assets/governing-body-new/noor ul huda shah.jpg";
import img4 from "../assets/governing-body-new/Qudsia-Akbar.jpg";
import img5 from "../assets/governing-body-new/huma mir.jpg";
import img6 from "../assets/governing-body-new/S.M Qaiser Sajjad.webp";

import img7 from "../assets/governing-body-new/Syed Asjad Hussain Bukhari.webp";
import img8 from "../assets/governing-body-new/Farrukh Tanveer Shahab.webp";
import img9 from "../assets/governing-body-new/Syed Shahzad Raza Naqvi.webp";
import img10 from "../assets/governing-body-new/Ambreen Haseeb Amber.webp";
import img11 from "../assets/governing-body-new/Akhlaq Ahmed Khan.webp";
import img12 from "../assets/governing-body-new/Ghazi-Salah-Uddin.webp";
import img13 from "../assets/governing-body-new/Muhammad Ayoub Shaikh.webp";
import img14 from "../assets/governing-body-new/Abdullah-Sultan.webp";
import img15 from "../assets/governing-body-new/amjad hussain shah.jpg";
import img16 from "../assets/governing-body-new/Syed Sajid Hassan.webp";



import img17 from "../assets/governing-body-new/muhammad iqbal lateef.webp";
import img18 from "../assets/governing-body-new/Amjad Siraj Memon.webp";
const GoverningBody = () => {
  const [activeTab, setActiveTab] = useState("Office Bearers");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const members = {
    "Office Bearers": [
      { id: 1, name: "Munawar Saeed", post: "Vice President", image: img1 },
      { id: 2, name: "Ejaz Farooqi", post: "Secretary", image: img2 },
      { id: 3, name: "Noor Ul Huda Shah", post: "Joint Secretary", image: img3 },
      { id: 4, name: "Qudsia Akbar", post: "Treasurer", image: img4 },
    ],
    "Governing Body": [
      { id: 1, name: "Huma Mir", post: "Member", image: img5 },
      { id: 2, name: "S.M Qaiser Sajjad", post: "Member", image: img6 },
      { id: 3, name: "Syed Asjad Hussain Bukhari", post: "Member", image: img7 },
      { id: 4, name: "Farrukh Tanveer Shahab", post: "Member", image: img8 },
      { id: 5, name: "Syed Shahzad Raza Naqvi", post: "Member", image: img9 },
      { id: 6, name: "Ambreen Haseeb Amber  ", post: "Member", image: img10 },
      { id: 7, name: "Akhlaq Ahmed Khan", post: "Member", image: img11 },
      { id: 8, name: "Ghazi Salah Uddin", post: "Member", image: img12 },
      { id: 9, name: "Muhammad Ayoub Shaikh", post: "Member", image: img13 },
      { id: 10, name: "Abdullah Sultan", post: "Member", image: img14 },
      { id: 11, name: "Amjad Hussain Shah", post: "Member", image: img15 },
      { id: 12, name: "Syed Sajid Hassan", post: "Member", image: img16 },
    ],
    "Co-opted Members": [
      { id: 1, name: "Muhammad Iqbal Lateef", post: "Member", image: img17 },
      { id: 2, name: "Amjad Siraj Memon", post: "Member", image: img18 },
    //   { id: 3, name: "Michael Brown", post: "Member", image: img5 },
    //   { id: 4, name: "Sarah Davis", post: "Member", image: img6 },
    //   { id: 5, name: "Michael Brown", post: "Member", image: img5 },
    //   { id: 2, name: "Sarah Davis", post: "Member", image: img6 },
    ],
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Container */}
      <div className="container mx-auto px-4 py-8">
        {/* President's Message */}
        <div className="bg-[#F5F1E1] p-8 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center lg:items-start text-gray-800">
          {/* President Image */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
            <div className="w-[480px] h-[480px] bg-[#F5F1E1] overflow-hidden shadow-lg">
              <img
                src={presidentImg}
                alt="President"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center py-12 ">
  <h2 className="text-4xl font-bold mb-4">President’s Message</h2>
  <p className="text-lg leading-relaxed">
  The Arts Council of Pakistan endeavors to uphold and champion the rich tapestry of Pakistani arts and culture on the world stage. Our aspiration is to provide a nurturing and inspirational environment that fosters talent, connections, and collaboration among communities not only within Pakistan but across the globe.
  </p>
</div>

        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-4 border-b border-gray-700">
            {["Office Bearers", "Governing Body", "Co-opted Members"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-2 text-lg font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-green-500 text-green-400"
                      : "text-gray-400 hover:text-green-400"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members[activeTab].map((member) => (
            <div
              key={member.id}
              className="bg-[#F5F1E1] p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 text-gray-800"
            >
              {/* Image Container */}
              <div className="w-[full] h-[400px] bg-gray-200 overflow-hidden mb-4 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Member Details */}
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-lg">{member.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoverningBody;
