import React from "react";

// Importing images
import execDirectorImg from "../assets/team/daniyal.webp";
import director1 from "../assets/team/Shakil Khan.webp";
import director2 from "../assets/team/Shakil Rizvi.webp";
import director3 from "../assets/team/Bashir Saddozai.webp";
import director4 from "../assets/team/Arman.webp";

import img1 from "../assets/team/jahanzaib.webp";
import img2 from "../assets/team/khalid ahmed.webp";
import img3 from "../assets/team/Ahsan Bari.webp";
import img4 from "../assets/team/Syed Darain.webp";
import img5 from "../assets/team/HURMAT.webp";
import img6 from "../assets/team/Sharjeel.webp";
import img7 from "../assets/team/m junaid bhai.webp";
import img8 from "../assets/team/Rohail.webp";
import img9 from "../assets/team/sheela.webp";
import img10 from "../assets/team/Raza.webp";
import img11 from "../assets/team/Manzoor.webp";
import img12 from "../assets/team/khurrum bhai.webp";
import img13 from "../assets/team/muhammad ali.webp";
import img14 from "../assets/team/muhammad zeeshan.webp";
import img15 from "../assets/team/shahida.webp";
import img16 from "../assets/team/asghar ali.webp";
import img17 from "../assets/team/imad ur rehman.webp";
import img18 from "../assets/team/128353.webp";
import img19 from "../assets/team/anees fatima.webp";
import img20 from "../assets/team/umesh.webp";
import img21 from "../assets/team/azaib.webp";
import img22 from "../assets/team/mustafa jan.webp";
import img23 from "../assets/team/asim.webp";
import img24 from "../assets/team/hamna khalid.webp";







const TeamMembers = () => {
  const directors = [
    { id: 1, name: "Shakil Khan", title: "DIRECTOR ADMINISTRATION", image: director1 },
    { id: 2, name: "Shakil Haider Jafri", title: "DIRECTOR FOOD & BEVERAGES", image: director2 },
    { id: 3, name: "M Bashir Khan", title: "RESIDENT DIRECTOR - DISTIRCT CENTRAL", image: director3 },
    { id: 3, name: "Arman Rahim", title: "DIRECTOR ACADEMIES", image: director4 },
  ];

  const managers = [
    { id: 1, name: "Jahanzeb Ali Shah", title: "HEAD OF INTERNATIONAL COLLABORATION", image: img1 },
    { id: 2, name: "Khalid Ahmed", title: "HEAD OF THEATRE", image: img2 },
    { id: 3, name: "Ahsan Bari", title: "DIRECTOR SPECIAL PROGRAMS MUSIC & HOD MUSIC", image: img3 },
    { id: 4, name: "Syed Ali Darain", title: "HEAD OF FINANCE DEPARTMENT", image: img4 },
    { id: 5, name: "Hurmat Majid", title: "EXECUTIVE CORRESPONDENT & CONTENT STRATEGIST", image: img5 },
    { id: 6, name: "M. Sharjeel Shaikh", title: "HEAD OF PROGRAMING & OPERATIONS", image: img6 },
    { id: 7, name: "Muhammad Junaid", title: "HEAD OF EDITING & ANIMATION", image: img7 },
    { id: 8, name: "Rohail Khan", title: "MANAGER - SOCIAL MEDIA & CONTENT", image: img8 },
    { id: 9, name: "Shahla Mehmood", title: "MANAGER - PRESS/MEDIA", image: img9 },
    { id: 10, name: "Yousuf Raza", title: "HEAD OF DESIGN & COMMUNICATION", image: img10 },
    { id: 11, name: "Manzoor Hussain", title: "MANAGER - PROJECTS & MAINTENANCE", image: img11 },
    { id: 12, name: "Khurram Shehzad", title: "DIRECTOR OF CINEMATOGRAPHY", image: img12 },
    { id: 13, name: "Muhamamd ali", title: "HEAD OF COMMUNICATION DESIGN", image: img13 },
    { id: 14, name: "Muhammad Zeeshan", title: "HEAD OF FINE ARTS & TEXTILE DESIGN", image: img14 },
    { id: 15, name: "Shahida Israr", title: "PROGRAMMER MANAGER", image: img15 },
    { id: 16, name: "Asghar Ali", title: "MANAGER - PROCUREMENT", image: img16 },
    { id: 17, name: "Imad ur Rehman", title: "HEAD OF AUDIO PRODUCTION", image: img17 },
    { id: 18, name: "Yawer Shahzad ", title: "Manager - Implement & Vigilance", image: img18 },
    { id: 19, name: "S. Anees Fatima", title: "CHIEF ORG LIBRARY", image: img19 },
    { id: 20, name: "Umesh Ladhani", title: "DEPUTY DIRECTOR ARTS & CRAFT", image: img20 },
    { id: 21, name: "Alam Zaib Khan ", title: "DEPUTY DIRECTOR PERFORMING ARTS", image: img21 },
    { id: 22, name: "Mustafa Jan", title: "OPERATION MANAGER ACADEMIES", image: img22 },
    { id: 24, name: "Hamna Khalid", title: "MEMBER LIAISON OFFICER", image: img24 },
    { id: 23, name: "Asim Naqvi", title: "ACADEMIC MANAGER", image: img23 },
  ];

  // const employees = [
  //   // { id: 1, name: "Employee One", title: "Team Member", image: employee1 },
  //   // { id: 2, name: "Employee Two", title: "Team Member", image: employee2 },
  // ];
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Executive Director Section */}
        <div className="bg-[#F5F1E1] p-8 rounded-lg shadow-md mb-8 flex flex-col lg:flex-row items-center lg:items-start text-gray-800">
          {/* President Image */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 flex justify-center items-center">
            <div className="w-[480px] h-[480px] bg-[#F5F1E1] overflow-hidden shadow-lg">
              <img
                src={execDirectorImg}
                alt="President"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center py-12 ">
  <h2 className="text-4xl font-bold mb-4">Message by the Executive Director</h2>
  <p className="text-lg leading-relaxed">
  As the world's youngest Executive Director of an arts organization, leading the Arts Council of Pakistan, Karachi (ACPKHI), is a distinct honour and privilege. Our mission transcends borders, seeking to enrich global culture, art, and literature.  Over the past decade, working alongside President ACPKHI, Mohammad Ahmed Shah (HI)(SI), my dedication to nurturing youth creativity has grown exponentially. Together we have built a dedicated team committed to making a difference in their respective fields.  With ACPKHI thriving as a vibrant cultural hub, I envision integrating modern technology into our initiatives. I'm confident that with our continued dedication, ACPKHI will flourish as a premier cultural institution, enriching the lives of talented individuals worldwide.
Thank you.
<br/><br/>
<b>Muhammad Daniyal Umer</b>
  </p>
</div>

        </div>

        {/* Directors Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((member) => (
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
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Department Heads / Managers Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
           HOD / Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 text-gray-800"
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
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Employees Section 
    *  <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Other Employees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((member) => (
              <div
                key={member.id}
                className="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 text-gray-800"
              >
                {/* Image Container 
                <div className="w-[full] h-[400px] bg-gray-200 overflow-hidden mb-4 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Member Details 
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </section>
        */}
      </div>
    </div>
  );
};

export default TeamMembers;