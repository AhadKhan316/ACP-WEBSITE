import React from "react";
import { motion } from "framer-motion";

const Productions = () => {
  return (


    <section id="production-message" className="py-6 bg-[#111827]">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-6 bg-[#F5F1E1] rounded-lg">
        {/* Animated Text Content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Productions
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
      We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
      <br />
Some of our biggest events of the year include<br /><br />
<ul>
<li>World Culture Festival</li>
    <li>Aalmi Urdu Conference</li>
    <li>Pakistan Literature Festival</li>
    <li>Pakistan Theatre Festival</li>
    <li>Pakistan Music Festival</li>
    <li>Women’s Conference</li>
</ul><br />

We believe in the transformative power of the arts, uniting talents from Pakistan and beyond, and fostering artistic expression and exchange while making culture accessible to all through our digital productions and archives.
          </p>
          <p className="text-gray-700 font-semibold">
            {/* - President, Arts Council of Pakistan, Karachi. */}
          </p>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="md:w-1/2"
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
            src="https://acpkhi.com/imgs/Producations.webp"
            alt="President speaking"
            className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Productions;
