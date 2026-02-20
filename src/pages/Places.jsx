import { useState } from "react";
import Navbar from "../components/Navbar";
import PlacesHero from "../components/PlaceHero";
import PlacesFilter from "../components/PlacesFilter";
import PlacesGrid from "../components/PlacesGrid";
import Footer from "../components/Footer";
import LikedCollections from "../components/LikedCollections";


const Places = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Places");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <PlacesHero />

      <PlacesFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="px-4 lg:px-10 mt-6">
        <PlacesGrid
          search={search}
          activeCategory={activeCategory}
        />
      </div>

      <LikedCollections />
      <Footer />
    </>
  );
};

export default Places;
