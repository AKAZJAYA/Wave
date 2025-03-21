import React from "react";
import aboutUsOven from "../assets/images/aboutUsOven.png";
import { motion } from "framer-motion";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import kitchenImage1 from "../assets/images/kitchenImage1.png";

const AboutWave = () => {
  return (
    <motion.div 
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className="relative w-full h-[60rem] bg-white py-12 px-4 md:px-8 lg:px-16 rounded-[50px]"
    >
      {/* Large faint text in the background (only visible on large screens) */}
      <motion.h1 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="hidden lg:block absolute -bottom-6 right-10 text-[8rem] xl:text-[280px] font-extrabold text-gray-50 tracking-widest pointer-events-none select-none"
      >
        WAVE
      </motion.h1>

      {/* Main container */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10 mt-15">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col gap-5"
        >
          {/* Small subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-500 uppercase tracking-wide"
          >
            /About Wave
          </motion.p>

          {/* Main heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-tight"
          >
            SMARTER KITCHEN <br /> EXPERIENCE
          </motion.h2>

          {/* Microwave Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-78 h-48 bg-black rounded-4xl flex items-center justify-center text-white text-xs mb-1 mt-20"
          >
            <img src={aboutUsOven} alt="Microwave" className="w-78 h-48" />
          </motion.div>

          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed"
          >
            Reimagine cooking with <strong>Weave</strong>. Designed to <br />
            simplify mealtime, our microwave combines stylish <br /> aesthetics
            with high-performance heating <br /> technology.
          </motion.p>

          {/* Buttons Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-0"
          >
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-black text-black py-2 px-4 text-sm md:text-base rounded-full hover:bg-black hover:text-white hover:border-white transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="bg-black hover:bg-white hover:border-black rounded-full p-2 w-10 h-10 ml-4 transition-colors flex items-center justify-center"
            >
              <AiOutlineArrowUp className="text-white hover:text-black text-xl rotate-45" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 relative"
        >
          {/* Kitchen Image Container */}
          <motion.div 
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden relative"
          >
            {/* Replace with your actual image */}
            <motion.img
              initial={{ filter: "brightness(0.8)" }}
              whileInView={{ filter: "brightness(1)" }}
              transition={{ duration: 1.2 }}
              src={kitchenImage1}
              alt="Kitchen"
              className="w-[600px] h-[600px]"
            />

            {/* Search Button on top of the image */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-5 right-75"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1F1E1E] w-15 h-15 rounded-full flex items-center justify-center shadow-lg"
              >
                <AiOutlineSearch className="text-white text-xl rotate-90" />
              </motion.button>
            </motion.div>

            {/* "Established 2025" bubble */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-25 right-30 flex items-center text-gray-500 py-1 px-2"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-xs md:text-sm"
              >
                [ Established 2025 ]
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutWave;