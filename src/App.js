import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import DiscoverMore from "./components/DiscoverMore";
import HillStations from "./components/HillStations";
import Beaches from "./components/Beaches";
import Businfo from "./pages/Businfo";
import Routemap from "./pages/Routemap";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/discover-more" element={<DiscoverMore />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
<Route path="/hill-stations" element={<HillStations />} />
<Route path="/Beaches" element={<Beaches />} />
<Route path="/businfo" element={<Businfo />} />
<Route path="/routemap" element={<Routemap />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
