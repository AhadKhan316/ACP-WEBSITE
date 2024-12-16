import React from "react";

import CTASection from "../components/CTASection";
import PresidentMessage from "../components/PresidentMessage";
import Academies from "../components/academies";
import Feedback from "../components/Feedback";
import Production from "./Production";
import UpcomingEvents from "./UpcomingEvents";
import Hero from "./hero";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div>
      
      
       {/* Offerings Section */}
      
       <Hero />
       <UpcomingEvents />
      
      {/* About Section */}
      <section id="about" className="py-6 bg-[#111827]">
  <div className="container mx-auto py-12 bg-[#F5F1E0]">
    <h2 className="text-3xl font-bold text-center mb-4">About</h2>
    <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
      Arts Council supports cultural activities while educating youth in the field of arts. It strives to promote literature, fine arts, and performing arts in Pakistan.
    </p>
  </div>
</section>


      {/* President Message Section */}
      <PresidentMessage />

     

      {/* CTA Section */}
      <section id="cta" className="py-6 bg-[#111827]">
        <CTASection />
      </section>

{/* President Message Section */}
<Academies />


{/* President Message Section */}
<Feedback />
{/* President Message Section */}
<Production />

<SocialMedia />
    </div>
  );
};

export default Home;
