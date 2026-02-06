import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Destinations from "../components/Destinations";
import RouteBanner from "../components/RouteBanner";
import Footer from "../components/Footer";
import DiscoverMore from "../components/DiscoverMore";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <Features />
      <Destinations search={search} />
      <DiscoverMore/>
      <RouteBanner />
      <Footer />
    
    </>
  );
};

export default Home;
