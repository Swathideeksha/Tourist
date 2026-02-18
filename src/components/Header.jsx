import React from "react";
import ContactSupport from "./ContactSupport";

const Header = () => {
  const [showContactSupport, setShowContactSupport] = React.useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-karnataka-red backdrop-blur-lg border-b border-karnataka-yellow/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 md:py-5 gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14">
          <div className="flex items-center gap-3">
            <div className="size-9 bg-karnataka-yellow rounded-lg flex items-center justify-center text-karnataka-red shadow-lg">
              <span className="material-symbols-outlined text-2xl font-bold">
                temple_hindu
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">Explore Karnataka</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <a className="text-sm font-medium tracking-wide text-karnataka-yellow border-b-2 border-karnataka-yellow pb-1" href="#">Home</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Places</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Experience</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Route Map</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
          <div className="relative w-full md:block hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">search</span>
            <input
              className="bg-white/10 dark:bg-slate-800 border-none rounded-full pl-10 pr-6 py-2 text-sm w-full md:w-64 lg:w-64 focus:ring-1 focus:ring-karnataka-yellow/50 transition-all placeholder:text-white/60 text-white"
              placeholder="Search Karnataka..."
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 text-white hover:text-karnataka-yellow transition-all px-3 md:px-4 py-2">
            <span className="material-symbols-outlined text-lg">language</span>
            <span className="text-sm font-medium hidden md:block">English</span>
            <span className="material-symbols-outlined text-sm hidden md:block">expand_more</span>
          </button>
          <button 
            onClick={() => setShowContactSupport(true)}
            className="bg-karnataka-yellow text-karnataka-red px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-bold hover:bg-white hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Contact Support
          </button>
        </div>
      </div>
      <ContactSupport 
        isOpen={showContactSupport} 
        onClose={() => setShowContactSupport(false)} 
      />
    </header>
  );
};

export default Header;
