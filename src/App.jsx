import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}