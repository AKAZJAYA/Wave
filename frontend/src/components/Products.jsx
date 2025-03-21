import React from "react";
import small1 from "../assets/images/small1.png";
import small2 from "../assets/images/aboutUsOven.png";
import small3 from "../assets/images/small3.png";
import productsBack from "../assets/images/productsBack.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div 
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-[#1A1A1A] text-white w-full h-[80rem] min-h-screen py-12 px-4 md:px-8 lg:px-16 rounded-[50px]"
    >
      {/* Top Labels */}
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase text-gray-400 mb-2 tracking-wide mt-25"
      >
        /Products
      </motion.p>

      <div className="mb-8 flex justify-between mt-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-[50px] mb-2"
        >
          WAVE MICROWAVE <br /> OVEN BY WEBMINDS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[16px] md:text-base text-gray-300 max-w-2xl leading-relaxed"
        >
          Blending innovation with practicality, Wave offers a <br /> microwave
          that's built to complement your modern <br /> kitchen with superior
          technology and timeless style.
        </motion.p>
      </div>

      {/* Main Container with Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-[80rem] h-[50rem] mx-auto rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${productsBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Area */}
        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Product Specs (Translucent "Glass" Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-sm mt-50 bg-white/35 p-4 md:p-6 rounded-3xl w-full md:w-[30rem] text-sm md:text-base leading-relaxed space-y-6 text-black"
          >
            {[
              { label: "Dimension", value: "18\" x 14\" x 10\"" },
              { label: "Weight", value: "22 lbs" },
              { label: "Power Consumption", value: "900 watt" },
              { label: "Modes", value: "Defrost, Reheat, Cook, Grill" },
              { label: "Noise Level", value: "30 dB" },
              { label: "Warranty", value: "2 years" }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <div>{item.label}</div>
                  <div>{item.value}</div>
                </div>
                {index < 5 && <hr className="text-white" />}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Buy Now Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-3 right-0"
        >
          <div className="flex gap-0">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Buy Now - $158.99
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#e5e5e5", rotate: 45 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 w-10 h-10 ml-4 transition-colors flex items-center justify-center"
            >
              <AiOutlineArrowUp className="text-black text-xl rotate-45" />
            </motion.button>
          </div>
        </motion.div>

        {/* Small circular images */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-8 left-10 flex items-center gap-4"
        >
          {[small1, small2, small3].map((img, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + (index * 0.15) }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-sm"
            >
              <img
                src={img}
                alt={`Feature ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Products;