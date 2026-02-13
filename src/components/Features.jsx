const Features = () => {
  const data = [
    { 
      title: "Heritage Guides", 
      desc: "Expert historical insights",
      icon: (
        <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9m0 0H3.5m0 0H1m5.5 0a2.121 2.121 0 00-3 3M9 21a2.121 2.121 0 01-3-3m0 0a2 2 0 012-2h.5m0 0a2 2 0 012-2h6a2 2 0 012 2h.5a2 2 0 012 2v3m-7 0v2m0-2v2m0-2v2m7-2v2m0-2v2" />
        </svg>
      )
    },
    { 
      title: "Cultural Archive", 
      desc: "Traditions & festivals",
      icon: (
        <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
        </svg>
      )
    },
    { 
      title: "Regional Maps", 
      desc: "Interactive navigation",
      icon: (
        <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7.711m0 13v-2.28m6.553 2.28L21 20m0-14V5.618a1 1 0 00-1.553-.894L15 7.711m0 13V9.28M9 9h6m0 13v-2.28m6.553 2.28L21 20" />
        </svg>
      )
    },
    { 
      title: "Support", 
      desc: "24/7 tourist assistance",
      icon: (
        <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 py-8 md:py-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="text-yellow-500">
            {item.icon}
          </div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
