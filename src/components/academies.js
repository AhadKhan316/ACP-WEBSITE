import React from "react";
import { motion } from "framer-motion";

const Academies = () => {
  return (
    <section id="president-message"className="py-6 bg-[#111827]">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-6 bg-[#F5F1E1] rounded-lg">
       
       
        {/* Animated Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <img
            src="https://acpkhi.com/imgs/academies.webp"
            alt="President speaking"
            className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
        
        
         {/* Animated Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Academies
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
          ACPKHI houses multiple arts academies. Our core belief is nurturing young talents to become creative, accomplished individuals, bringing pride to our nation. With academies catering to those passionate about theatre, singing, music, dance and fine arts, textile design, communication design we train hundreds of students yearly and have continued to do so with expert instructors since 1954
          </p>
          <p className="text-gray-700 font-semibold">
            {/* - President, Arts Council of Pakistan, Karachi. */}
          </p>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Academies;
