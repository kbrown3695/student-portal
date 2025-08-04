// src/components/layout/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../shared/Footer';

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4">
          <Outlet /> {/* <-- Renders nested pages like profile */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
