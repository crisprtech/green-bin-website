import React from 'react';
import ResearchLabsHero from './ResearchLabHero';
import ResearchLabsAndTestimonials from './Labs&Testimonials';

const ResearchLabs = () => {
 
  return (
    <div  className="research-repo">
      <ResearchLabsHero/>
      <ResearchLabsAndTestimonials/>
    </div>
  );
};

export default ResearchLabs;