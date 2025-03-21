import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi";
import ovenLanding from "../assets/images/ovenLanding2.png"; // Adjust the path as necessary
import landingImage from "../assets/images/landingImage.png"; // Adjust the path as necessary

function Hero() {
  return (
    <motion.section
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
      className="h-screen w-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111827, #374151, #1f2937)",
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Large background text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-extrabold text-white uppercase z-0 pointer-events-none"
        style={{ letterSpacing: "0.25em", marginTop: "-40vh" }} // Added marginTop to move it up
      >
        Wave
      </motion.h1>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4"
      >
        {/* Microwave Image */}
        <img
          src={ovenLanding}
          alt="Wave Microwave"
          className="w-72 md:w-[28rem] lg:w-[35rem] xl:w-[45rem] mt-22 ml-1"
        />

        {/* Feature Bubbles or Text Overlays
        <div className="absolute flex flex-col md:flex-row items-center justify-center gap-4 bottom-[20%] md:bottom-[15%]">
          <motion.div
            className="bg-white/5 backdrop-blur-md p-3 rounded-md text-white text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="font-semibold">Green Power Cook Smart</h3>
            <p className="text-xs md:text-sm lg:text-base">
              Energy distribution for faster & more even heating
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md p-3 rounded-md text-white text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="font-semibold">Sleek IntelliTouch™ Interface</h3>
            <p className="text-xs md:text-sm lg:text-base">
              Simple controls for modern cooking
            </p>
          </motion.div>
        </div> */}

        {/* Bottom Badge or Stats */}
        <motion.div
          className="absolute bottom-20 left-40 md:bottom-16 text-white text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.p 
            className="text-sm md:text-md lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.span 
              className="text-lg md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              12K+
            </motion.span>{" "}
            reviews |
          </motion.p>
          <motion.p 
            className="text-xs md:text-sm lg:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            10,000+ Happy Kitchens
          </motion.p>
        </motion.div>

        {/* 4 tags */}
        <motion.div 
          className="absolute bottom-10 right-0 -translate-x-1/2 flex flex-col gap-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div className="flex flex-row gap-1">
            <motion.div 
              className="w-[150px] h-[50px] bg-[#565656] border border-gray-400 rounded-full flex justify-center items-center text-l text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6b6b6b" }}
            >
              Microwave
            </motion.div>
            <motion.div 
              className="w-[150px] h-[50px] bg-[#565656] border border-gray-400 rounded-full flex justify-center items-center text-l text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6b6b6b" }}
            >
              Energy Efficient
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-row gap-1 ml-10">
            <motion.div 
              className="w-[150px] h-[50px] bg-[#565656] border border-gray-400 rounded-full flex justify-center items-center text-l text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6b6b6b" }}
            >
              Smart Kitchen
            </motion.div>
            <motion.div 
              className="w-[150px] h-[50px] bg-[#565656] border border-gray-400 rounded-full flex justify-center items-center text-l text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6b6b6b" }}
            >
              Innovative
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.div 
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.2
              }}
            >
              <HiOutlineArrowDown className="text-2xl text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;