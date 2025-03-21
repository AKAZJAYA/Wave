import React, { useState, useEffect } from "react";
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
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-8 z-20">
        {/* Logo and text in one container */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-5 h-5 md:w-10 md:h-6" />
          <div className="text-white text-xl font-bold">WAVE</div>
        </div>
        <nav className="hidden md:flex gap-24 text-white">
          {["home", "about", "features", "faq"].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`relative hover:text-gray-300 transition-colors mx-4 ${
                activeNav === item ? "after:w-full" : "after:w-0"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all`}
              onClick={() => setActiveNav(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-0">
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
            Explore
          </button>
          <button className="bg-white rounded-full p-2 w-10 h-10 ml-4 hover:bg-gray-200 transition-colors flex items-center justify-center">
            <AiOutlineArrowUp className="text-black text-xl rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
