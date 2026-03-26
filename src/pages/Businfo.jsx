import React from "react";
import Bushero from "../components/Bushero";
import Navbar from "../components/Navbar";
import TopRatedPrivateOperators from "../components/TopRatedPrivateOperators";
import ViewAllBusButton from "../components/ViewAllBusButton";
import Footer from "../components/Footer";

const Businfo = () => {
  return (
    <>
      <Navbar />
      <Bushero />
      <ViewAllBusButton />
      <TopRatedPrivateOperators />
      <Footer />
    </>
  );
};

export default Businfo;
