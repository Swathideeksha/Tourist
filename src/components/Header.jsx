import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-karnataka-red backdrop-blur-lg border-b border-karnataka-yellow/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <div className="size-9 bg-karnataka-yellow rounded-lg flex items-center justify-center text-karnataka-red shadow-lg">
              <span className="material-symbols-outlined text-2xl font-bold">
                temple_hindu
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Explore Karnataka</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium tracking-wide text-karnataka-yellow border-b-2 border-karnataka-yellow pb-1" href="#">Home</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Places</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Experience</a>
            <a className="text-sm font-medium tracking-wide text-white/80 hover:text-karnataka-yellow transition-all pb-1 border-b-2 border-transparent" href="#">Route Map</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden xl:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">search</span>
            <input
              className="bg-white/10 dark:bg-slate-800 border-none rounded-full pl-10 pr-6 py-2 text-sm w-64 focus:ring-1 focus:ring-karnataka-yellow/50 transition-all placeholder:text-white/60 text-white"
              placeholder="Search Karnataka..."
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 text-white hover:text-karnataka-yellow transition-all px-4 py-2.5">
            <span className="material-symbols-outlined text-lg">language</span>
            <span className="text-sm font-medium">English</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="bg-karnataka-yellow text-karnataka-red px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:shadow-xl transition-all duration-300 whitespace-nowrap">
            Contact Support
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
