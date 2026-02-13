import React from "react";
import Bushero from "../components/Bushero";
import Navbar from "../components/Navbar";
import PrivateScheduledServices from "../components/PrivateScheduledServices";
import TopRatedPrivateOperators from "../components/TopRatedPrivateOperators";
import Footer from "../components/Footer";


const Businfo = () => {
 
  return (
    <>
      <Navbar />
      <Bushero />
      <PrivateScheduledServices />
      <TopRatedPrivateOperators />
      <Footer />
    </>
  );
};




export default Businfo;
