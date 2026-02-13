const Features = () => {
  const data = [
    { title: "Heritage Guides", desc: "Expert historical insights" },
    { title: "Cultural Archive", desc: "Traditions & festivals" },
    { title: "Regional Maps", desc: "Interactive navigation" },
    { title: "Support", desc: "24/7 tourist assistance" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 py-8 md:py-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition"
        >
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
