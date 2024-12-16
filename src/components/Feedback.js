import React from "react";

const Feedback = () => {
  return (
    <section id="user-feedback" className="py-6 bg-[#111827]">
      <div className="container mx-auto py-6 text-center  bg-[#F5F1E1] rounded-lg" >
      <h2 className="text-3xl font-bold mb-8 text-black">What Our Community Says</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feedback Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">
            "The workshops offered by the Arts Council are amazing! I discovered my hidden talents and met inspiring people."
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg"
              alt="User profile"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">Sarah Ahmed</h4>
              <span className="text-gray-500 text-sm">Artist</span>
            </div>
          </div>
        </div>
  
        {/* Feedback Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">
            "Dynamic music festivals were an incredible experience. The Arts Council has truly created a cultural hub for everyone."
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://live.staticflickr.com/4070/4489718226_6d0b3d1bd5_z.jpg"
              alt="User profile"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">Ali Khan</h4>
              <span className="text-gray-500 text-sm">Musician</span>
            </div>
          </div>
        </div>
  
        {/* Feedback Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 italic">
            "Innovative performing arts programs have truly enriched my understanding of theater and culture. Highly recommend it!"
          </p>
          <div className="mt-4 flex items-center">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
              alt="User profile"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">Ayesha Naeem</h4>
              <span className="text-gray-500 text-sm">Theater Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  );
};

export default Feedback;
