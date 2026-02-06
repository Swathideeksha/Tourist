import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#6b0000] px-10 py-4 flex justify-between items-center shadow-md">
      
      <div className="flex items-center gap-3 mb-8">
              <div className="size-8 bg-karnataka-yellow rounded flex items-center justify-center text-deep-red">
                <span className="material-symbols-outlined text-xl">
                  temple_hindu
                </span>
              </div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                Explore Karnataka
              </h2>
            </div>
 
      {/* Nav Links */}
      <ul className="flex gap-8 text-white font-medium relative">
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

      {/* Right side – ONLY Contact Support */}
      <div>
        <button className="bg-[#7a1c1c] border border-white/20 text-white px-4 py-2 rounded-full">
          Contact Support
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
