import React, { useEffect, useRef, useState } from "react";

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
  {
    badge: "PREMIUM",
    title: "SRS Royal Engineers",
    desc:
      "Luxury Volvo coaches connecting Bengaluru to heritage circuits and beach destinations.",
    rating: "4.6/5",
    dark: true,
  },
  {
    badge: "HERITAGE ROUTES",
    title: "Sugama Tourist",
    desc:
      "Specialized routes to historical sites including Hampi, Badami, and Pattadakal.",
    rating: "4.5/5",
    dark: false,
  },
  {
    badge: "HILL STATIONS",
    title: "KSRTC Volvo Services",
    desc:
      "Premium connectivity to Coorg, Chikmagalur, and Ooty with air-conditioned coaches.",
    rating: "4.4/5",
    dark: true,
  },
  {
    badge: "COASTAL",
    title: "Orange Tours & Travels",
    desc:
      "Top-rated services to Udupi, Mangalore, and Goa with comfortable sleeper coaches.",
    rating: "4.6/5",
    dark: false,
  },
];

const TopRatedPrivateOperators = () => {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  // Determine slides per view based on viewport
  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      if (w < 640) return 1; // mobile
      if (w < 1024) return 2; // tablet
      return 3; // desktop
    };
    const update = () => setPerView(computePerView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Clamp current index when perView changes
  useEffect(() => {
    const maxIndex = Math.max(0, operators.length - perView);
    setCurrent((c) => Math.min(c, maxIndex));
  }, [perView]);

  const next = () => {
    const maxIndex = Math.max(0, operators.length - perView);
    setCurrent((c) => Math.min(c + 1, maxIndex));
  };
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  const translatePercent = -(100 / perView) * current;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            Top Rated Private Operators
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">
            The most preferred private luxury services across Karnataka's major
            routes.
          </p>
        </div>
        {/* Controls (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
            disabled={current === 0}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
            disabled={current >= Math.max(0, operators.length - perView)}
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Track viewport */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translatePercent}%)` }}
          >
            {operators.map((item, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ width: `calc(${100 / perView}% - ${16 * (perView - 1) / perView}px)` }}
              >
                <div
                  className={`relative rounded-2xl p-5 shadow-xl transition h-full ${
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
                    className={`mt-3 text-lg font-bold ${
                      item.dark ? "text-white" : "text-[#7a1c1c]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2 text-sm leading-snug ${
                      item.dark ? "text-red-100" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Divider */}
                  <div
                    className={`my-4 h-px ${
                      item.dark ? "bg-white/20" : "bg-gray-200"
                    }`}
                  />

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    {/* Icons placeholder */}
                    <div className="flex gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.dark ? "bg-white/10" : "bg-gray-100"
                        }`}
                      >
                        ⚡
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.dark ? "bg-white/10" : "bg-gray-100"
                        }`}
                      >
                        ❄️
                      </div>
                    </div>

                    {/* Rating */}
                    <p
                      className={`text-sm font-semibold ${
                        item.dark ? "text-yellow-400" : "text-[#7a1c1c]"
                      }`}
                    >
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls (mobile overlay) */}
        <div className="md:hidden mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
            disabled={current === 0}
          >
            ‹
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.max(1, operators.length - perView + 1) }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-[#7a1c1c]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 disabled:opacity-40"
            disabled={current >= Math.max(0, operators.length - perView)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRatedPrivateOperators;
