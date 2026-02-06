import React from "react";

const Footer = () => {
  return (
    <footer className="bg-deep-red text-white">
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 bg-karnataka-yellow rounded flex items-center justify-center text-deep-red">
                <span className="material-symbols-outlined text-xl">
                  temple_hindu
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                Explore Karnataka
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed text-sm font-light">
              The authoritative travel and transportation guide for Karnataka,
              providing professional insights into the state's heritage and connectivity.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-karnataka-yellow font-bold mb-8 uppercase text-xs tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li>Major Hubs</li>
              <li>UNESCO Sites</li>
              <li>KSRTC Network</li>
              <li>E-Visas & Permits</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-karnataka-yellow font-bold mb-8 uppercase text-xs tracking-widest">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li>Helpline Services</li>
              <li>Ghat Safety Rules</li>
              <li>Department of Tourism</li>
              <li>Partner Logins</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-karnataka-yellow font-bold mb-8 uppercase text-xs tracking-widest">
              Newsletter
            </h4>
            <p className="text-sm text-white/60 mb-6 font-light">
              Subscribe for official updates on seasonal festivals and transport schedules.
            </p>

            
           
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 text-[11px] text-white/40 font-bold uppercase tracking-widest">
          <p>
            © 2024 Explore Karnataka Information Portal. Official Guide.
          </p>

          <div className="flex items-center gap-10 mt-6 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">public</span>
              Regional Settings
            </span>
            <span>Legal & Privacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
