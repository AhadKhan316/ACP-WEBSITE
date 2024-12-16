  import React, { useState } from "react";

  const CTASection = () => {
    const [email, setEmail] = useState("");

   const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://localhost/organization-website/backend/save_email.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ email }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Ensure JSON parsing
    })
    .then((data) => {
      if (data.status === "success") {
        alert(data.message); // Success message
        setEmail(""); // Clear input
      } else {
        alert(data.message); // Error message
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again."); // Fallback error
    });
};

    

    return (
      <section className="py-0 bg-[#111827] text-center">
        <div className="container mx-auto py-6 bg-[#F5F1E1]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Our Promotions
          </h2>
          <p className="text-gray-600 mb-8">
            Sign up with your email to receive the latest updates and offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg border border-gray-300 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-[#B30B00] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2C6E4D] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };

  export default CTASection;
