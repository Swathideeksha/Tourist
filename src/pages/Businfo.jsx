import React from "react";
import Bushero from "../components/Bushero";
import Navbar from "../components/Navbar";
import TopRatedPrivateOperators from "../components/TopRatedPrivateOperators";
import Footer from "../components/Footer";

const Businfo = () => {
  return (
    <>
      <Navbar />
      <Bushero />
      <TopRatedPrivateOperators />
      <Footer />
    </>
  );
};

export default Businfo;
