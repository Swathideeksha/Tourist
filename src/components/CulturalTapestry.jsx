import React from "react";

const CulturalTapestry = () => {
  return (
    <section className="py-12 md:py-24 bg-white white:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="w-10 h-1 bg-karnataka-yellow mx-auto mb-4 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 dark:text-red-500 mb-4">
            Cultural Tapestry
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl mx-auto px-4">
            The soul of Karnataka lives in its folk arts, literature, and grand
            celebrations that bring communities together in a riot of colors and rhythm.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

          {/* Card 1 */}
          <div className="relative bg-white white:bg-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 text-center">
            <span className="material-symbols-outlined text-4xl text-red-600 mb-4 md:mb-6 block">
              theater_comedy
            </span>
            <h3 className="text-xl font-semibold mb-4">Yakshagana</h3>
            <p className="text-slate-600 white:text-slate-400 leading-relaxed">
              A traditional theater form that combines dance, music, dialogue,
              and stunning costumes to narrate mythological epics.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-3xl bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white white:bg-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 text-center">
            <span className="material-symbols-outlined text-4xl text-red-600 mb-4 md:mb-6 block">
              castle
            </span>
            <h3 className="text-xl font-semibold mb-4">Mysuru Dasara</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The "Nada Habba" or State Festival, featuring a majestic elephant
              procession and the lighting of 100,000 bulbs at the Palace.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-3xl bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white white:bg-slate-800 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 text-center">
            <span className="material-symbols-outlined text-4xl text-red-600 mb-4 md:mb-6 block">
              menu_book
            </span>
            <h3 className="text-xl font-semibold mb-4">Literary Heritage</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Home to the highest number of Jnanpith Award winners, reflecting the
              intellectual depth of the Kannada language.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-3xl bg-gradient-to-r from-red-600 to-red-400"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CulturalTapestry;
