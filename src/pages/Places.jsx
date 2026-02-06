import { useState } from "react";
import Navbar from "../components/Navbar";
import PlacesHero from "../components/PlaceHero";
import PlacesFilter from "../components/PlacesFilter";
import PlacesGrid from "../components/PlacesGrid";
import TransitCTA from "../components/TransitCTA";
import Footer from "../components/Footer";
import LikedCollections from "../components/LikedCollections";

const Places = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <PlacesHero />
      <PlacesFilter />
      <PlacesGrid search={search} />
      <LikedCollections />
      <TransitCTA />
      <Footer />
    </>
  );
};

export default Places;
