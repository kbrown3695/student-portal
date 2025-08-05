import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTittle';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const pageTitle = usePageTitle();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } md:block w-64 bg-white border-r overflow-y-auto overflow-x-hidden `}
      >
        <Sidebar />
      </div>

      {/* NavBar */}
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Page title */}
        <div className="px-6 pt-4">
          <h2
            className="text-lg font-medium text-gray-700"
            style={{ color: 'black' }}
          >
            {pageTitle}
          </h2>
        </div>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
