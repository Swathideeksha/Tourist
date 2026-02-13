import { useState } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Destinations from "../components/Destinations";
import DiscoverMore from "../components/DiscoverMore";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <Features />
      <Destinations search={search} />
      <DiscoverMore />
      <Footer />
    </>
  );
};

export default Home;
