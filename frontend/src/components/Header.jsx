import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/Logo.png";
import { AiOutlineArrowUp } from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "features", "faq"];
      const scrollPosition = window.scrollY + 100; // offset to trigger earlier
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Nav (Optional) */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-8 z-20"
      >
        {/* Logo and text in one container */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src={logo} 
            alt="Logo" 
            className="w-5 h-5 md:w-10 md:h-6" 
          />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-white text-xl font-bold"
          >
            WAVE
          </motion.div>
        </motion.div>
        
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex gap-24 text-white"
        >
          {["home", "about", "features", "faq"].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item}`} 
              whileHover={{ scale: 1.1 }}
              // transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className={`relative hover:text-gray-300 transition-colors mx-4 ${
                activeNav === item ? "after:w-full" : "after:w-0"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all`}
              onClick={() => setActiveNav(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </motion.nav>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-0"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold transition-colors"
          >
            Explore
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.9, rotate: 45 }}
            className="bg-white rounded-full p-2 w-10 h-10 ml-4 transition-colors flex items-center justify-center"
          >
            <AiOutlineArrowUp className="text-black text-xl rotate-45" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
