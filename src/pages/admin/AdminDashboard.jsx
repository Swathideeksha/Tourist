import { useState, useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const AdminDashboard = () => {
  const { admin, token, loading } = useAdmin();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    places: { total: 0, saved: 0 },
    buses: { total: 0 },
    analytics: { pageViews: 0, visitors: 0, placesVisited: 0, busesViewed: 0 },
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (!loading && !admin) {
      navigate("/admin/login");
    }
  }, [admin, loading, navigate]);

  useEffect(() => {
    if (admin && token) {
      fetchStats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, token]);

  const fetchStats = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Fetch places stats
      const placesRes = await fetch(`${API_URL}/places-management/stats/summary`, { headers });
      const placesData = await placesRes.json();

      // Fetch buses stats
      const busesRes = await fetch(`${API_URL}/buses-management/stats/summary`, { headers });
      const busesData = await busesRes.json();

      // Fetch analytics overview
      const analyticsRes = await fetch(`${API_URL}/analytics/overview`, { headers });
      const analyticsData = await analyticsRes.json();

      setStats({
        places: {
          total: placesData.totalPlaces || 0,
          saved: placesData.totalSaved || 0,
        },
        buses: {
          total: busesData.totalBuses || 0,
        },
        analytics: {
          pageViews: analyticsData.totals?.pageViews || 0,
          visitors: analyticsData.totals?.visitors || 0,
          placesVisited: analyticsData.totals?.placesVisited || 0,
          busesViewed: analyticsData.totals?.busesViewed || 0,
        },
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoadingStats(false);
    }
  };

  if (loading || loadingStats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">Welcome, {admin?.username}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            onClick={() => navigate("/admin/places")}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Places</p>
                <h3 className="text-3xl font-bold text-gray-800">{stats.places.total}</h3>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 text-2xl">place</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Manage tourist places</p>
          </div>

          <div
            onClick={() => navigate("/admin/buses")}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Buses</p>
                <h3 className="text-3xl font-bold text-gray-800">{stats.buses.total}</h3>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-2xl">directions_bus</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Manage bus services</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Saved</p>
                <h3 className="text-3xl font-bold text-gray-800">{stats.places.saved}</h3>
              </div>
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-yellow-600 text-2xl">favorite</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Places saved by users</p>
          </div>
        </div>

        {/* Analytics Section */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Traffic Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 text-sm">Page Views</p>
            <p className="text-2xl font-bold text-gray-800">{stats.analytics.pageViews}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 text-sm">Unique Visitors</p>
            <p className="text-2xl font-bold text-gray-800">{stats.analytics.visitors}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 text-sm">Places Viewed</p>
            <p className="text-2xl font-bold text-gray-800">{stats.analytics.placesVisited}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-500 text-sm">Buses Viewed</p>
            <p className="text-2xl font-bold text-gray-800">{stats.analytics.busesViewed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
