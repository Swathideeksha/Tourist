import React from "react";
import { useSearchParams } from "react-router-dom";
import Bushero from "../components/Bushero";
import Navbar from "../components/Navbar";
import TopRatedPrivateOperators from "../components/TopRatedPrivateOperators";
import AllBusesCard from "../components/AllBusesCard";
import Footer from "../components/Footer";

const Businfo = () => {
  const [searchParams] = useSearchParams();
  const showAll = searchParams.get('showAll') === 'true';

  return (
    <>
      <Navbar />
      <Bushero />
      {showAll ? <AllBusesCard /> : <TopRatedPrivateOperators />}
      <Footer />
    </>
  );
};

export default Businfo;
