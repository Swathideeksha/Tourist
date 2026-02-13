import React from "react";

const Footer = () => {
  return (
    <footer className="bg-deep-red text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 md:px-8 pt-6 md:pt-12 pb-4 md:pb-8">

        {/* TOP GRID - Always 4 columns */}
        <div className="grid grid-cols-4 gap-0 md:gap-6 lg:gap-12 mb-6 md:mb-12">

          {/* BRAND */}
          <div className="p-1 md:p-0">
            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-4">
              <div className="size-4 md:size-6 bg-karnataka-yellow rounded flex items-center justify-center text-deep-red">
                <span className="material-symbols-outlined text-[8px] md:text-sm">
                  temple_hindu
                </span>
              </div>
              <h2 className="text-[8px] md:text-base font-bold tracking-tight">
                Explore Karnataka
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed text-[7px] md:text-xs font-light hidden md:block">
              The authoritative travel and transportation guide for Karnataka,
              providing professional insights into the state's heritage and connectivity.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="p-1 md:p-0">
            <h4 className="text-karnataka-yellow font-bold mb-1 md:mb-3 uppercase text-[7px] md:text-[10px] tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-0.5 md:space-y-2 text-[7px] md:text-xs font-medium text-white/70">
              <li>Major Hubs</li>
              <li>UNESCO Sites</li>
              <li>KSRTC Network</li>
              <li>E-Visas & Permits</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="p-1 md:p-0">
            <h4 className="text-karnataka-yellow font-bold mb-1 md:mb-3 uppercase text-[7px] md:text-[10px] tracking-widest">
              Resources
            </h4>
            <ul className="space-y-0.5 md:space-y-2 text-[7px] md:text-xs font-medium text-white/70">
              <li>Helpline Services</li>
              <li>Ghat Safety Rules</li>
              <li>Department of Tourism</li>
              <li>Partner Logins</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="p-1 md:p-0">
            <h4 className="text-karnataka-yellow font-bold mb-1 md:mb-3 uppercase text-[7px] md:text-[10px] tracking-widest">
              Newsletter
            </h4>
            <p className="text-[7px] md:text-xs text-white/60 mb-1 md:mb-3 font-light">
              Subscribe for official updates.
            </p>

          
          
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-2 md:pt-4 border-t border-white/10 text-[7px] md:text-[10px] text-white/40 font-bold uppercase tracking-widest gap-1 md:gap-4 px-1 md:px-0">
          <p className="text-center md:text-left">
            © 2024 Explore Karnataka Information Portal.
          </p>

          <div className="flex items-center gap-2 md:gap-6">
            <span className="flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[8px] md:text-xs">public</span>
              Regional
            </span>
            <span>Legal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
