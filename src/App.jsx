import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />

        {/* Dashboard layout routes */}
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
