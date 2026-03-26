import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AdminProvider } from "./context/AdminContext";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import DiscoverMore from "./components/DiscoverMore";
import HillStations from "./components/HillStations";
import Beaches from "./components/Beaches";
import History from "./components/History";
import Religious from "./components/Religious";
import Businfo from "./pages/Businfo";
import BusDetails from "./pages/BusDetails";
import AllBuses from "./pages/AllBuses";
import AllBusesPage from "./pages/AllBusesPage";
import Routemap from "./pages/Routemap";
import DestinationDetails from "./pages/DestinationDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <AdminProvider>
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
          <Route path="/history" element={<History />} />
          <Route path="/religious" element={<Religious />} />
          <Route path="/businfo" element={<Businfo />} />
          <Route path="/bus/:id" element={<BusDetails />} />
          <Route path="/routemap" element={<Routemap />} />
          <Route path="/discover-more" element={<DiscoverMore />} />
          <Route path="/allbuses" element={<AllBusesPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
