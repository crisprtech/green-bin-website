import React from "react";
import ResearchLabsHero from "./ResearchLabHero";
import ResearchLabsAndTestimonials from "./Labs&Testimonials";

const ResearchLabs = () => {
  return (
    <div className="bg-white-500 max-w-7xl mx-auto">
      <ResearchLabsHero />
      <ResearchLabsAndTestimonials />
    </div>
  );
};

export default ResearchLabs;
