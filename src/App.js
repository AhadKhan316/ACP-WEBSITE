import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import necessary components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";  // Import AboutUs page
import Offerings from "./pages/Offerings";  // Import Offerings page (if you have it)
import Contact from "./pages/Contact";  // Import Contact page (if you have it)
import GoverningBody from "./pages/GoverningBody";
import TeamMembers from "./pages/TeamMembers";
import VenuesPage from "./pages/VenuesPage";
import VenueDetailPage from "./pages/VenueDetailPage";


const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will be visible on every page */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page as default */}
        <Route path="/about" element={<AboutUs />} /> {/* AboutUs page route */}
        <Route path="/GoverningBody" element={<GoverningBody />} /> {/* AboutUs page route */}
        <Route path="/TeamMembers" element={<TeamMembers />} /> {/* AboutUs page route */}
        <Route path="/VenuesPage" element={<VenuesPage />} />
        <Route path="/venue/:id" element={<VenueDetailPage />} />
        <Route path="/offerings" element={<Offerings />} /> {/* Offerings page route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
      </Routes>

      <Footer /> {/* Footer will be visible on every page */}
    </Router>
  );
};

export default App;
