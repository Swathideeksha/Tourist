import React from "react";

const operators = [
  {
    badge: "TRAVELER CHOICE",
    title: "Sea-Bird Multi-Axle",
    desc:
      "Pioneer in coastal Karnataka routes with premium Volvo and Scania sleeper coaches.",
    rating: "4.8/5",
    dark: true,
  },
  {
    badge: "NETWORK LEADER",
    title: "VRL I-Shift Volvo",
    desc:
      "Unmatched connectivity across North Karnataka with high-frequency schedules.",
    rating: "4.7/5",
    dark: false,
  },
];

const TopRatedPrivateOperators = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <h2 className="text-3xl font-serif font-bold text-gray-900">
          Top Rated Private Operators
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl">
          The most preferred private luxury services across Karnataka's major
          routes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {operators.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[32px] p-10 shadow-xl transition ${
              item.dark
                ? "bg-gradient-to-br from-[#5a0000] to-[#7a1c1c] text-white"
                : "bg-white text-gray-900"
            }`}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 text-xs tracking-widest font-semibold text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              {item.badge}
            </div>

            {/* Title */}
            <h3
              className={`mt-6 text-2xl font-bold ${
                item.dark ? "text-white" : "text-[#7a1c1c]"
              }`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-4 leading-relaxed ${
                item.dark ? "text-red-100" : "text-gray-600"
              }`}
            >
              {item.desc}
            </p>

            {/* Divider */}
            <div
              className={`my-8 h-px ${
                item.dark ? "bg-white/20" : "bg-gray-200"
              }`}
            />

            {/* Footer */}
            <div className="flex items-center justify-between">
              {/* Icons placeholder */}
              <div className="flex gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.dark ? "bg-white/10" : "bg-gray-100"
                  }`}
                >
                  ⚡
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.dark ? "bg-white/10" : "bg-gray-100"
                  }`}
                >
                  ❄️
                </div>
              </div>

              {/* Rating */}
              <p
                className={`text-xl font-bold ${
                  item.dark ? "text-yellow-400" : "text-[#7a1c1c]"
                }`}
              >
                {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedPrivateOperators;
