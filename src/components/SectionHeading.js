import React from "react";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      <hr className="mt-4 border-green-500 w-16 mx-auto" />
    </div>
  );
};

export default SectionHeading;
