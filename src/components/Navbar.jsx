import { NavLink } from "react-router-dom";
import { useState } from "react";
import ContactSupport from "./ContactSupport";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactSupport, setShowContactSupport] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#6b0000] px-4 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center shadow-lg border-b border-yellow-400/20">
      
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-karnataka-yellow rounded flex items-center justify-center text-deep-red">
            <span className="material-symbols-outlined text-xl">
              temple_hindu
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            Explore Karnataka
          </h2>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
 
      {/* Nav Links - Desktop */}
      <ul className={`flex gap-4 md:gap-8 text-white font-medium relative ${isMenuOpen ? 'flex-col items-start mt-4 w-full' : 'hidden md:flex'}`}>
        {[
          { name: "Home", path: "/" },
          { name: "Places", path: "/places" },
          { name: "Bus Info", path: "/businfo" },
          { name: "Route Map", path: "/Routemap" },
        ].map((item) => (
          <li key={item.name} className="relative">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `pb-2 transition ${
                  isActive
                    ? "text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-yellow-400 after:rounded-full"
                    : "hover:text-yellow-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right side – Contact Support & Admin */}
      <div className={`${isMenuOpen ? 'mt-4 w-full' : 'hidden md:block'} flex items-center gap-3`}>
        <a 
          href="/admin/login"
          className="text-white/80 hover:text-white p-2 rounded-full transition"
          title="Admin Panel"
        >
          <span className="material-symbols-outlined">admin_panel_settings</span>
        </a>
        <button 
          onClick={() => setShowContactSupport(true)}
          className="bg-[#7a1c1c] border border-white/20 text-white px-4 py-2 rounded-full text-sm md:text-base"
        >
          Contact Support
        </button>
      </div>
      <ContactSupport 
        isOpen={showContactSupport} 
        onClose={() => setShowContactSupport(false)} 
      />
    </nav>
  );
};

export default Navbar;
