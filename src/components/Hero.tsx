import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat rounded-full bg-left lg:bg-[15%] bg-cover"
      style={{
        backgroundSize: '30%',
        backgroundPosition: 'left 100px top 100px',
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Profile Image in a larger circle */}
        <div className="flex justify-center items-center">
          <img
            src="/profile.png" // Ensure the image path is correct
            alt="Profile"
            className="rounded-full w-[300px] h-[300px] object-cover" // Increased size to 300px
          />
        </div>
        
        {/* Name Section */}
        <div className="text-[70px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-down">I am</p>
            <p data-aos="zoom-in-down">Muhammad</p>
            <p data-aos="zoom-in-down">Kamran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
