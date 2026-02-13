import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import DiscoverMore from "./components/DiscoverMore";
import HillStations from "./components/HillStations";
import Beaches from "./components/Beaches";
import Businfo from "./pages/Businfo";
import Routemap from "./pages/Routemap";
import DestinationDetails from "./pages/DestinationDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/place-details" element={<PlaceDetails />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/hill-stations" element={<HillStations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/businfo" element={<Businfo />} />
        <Route path="/routemap" element={<Routemap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
