import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Pencil,
  ScrollText,
  ClipboardCheck,
  Wallet,
  Receipt,
  BedDouble,
  FileText,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const location = useLocation();

  // Helper for rendering links
  const renderLink = (label: string, path: string, Icon: unknown) => {
    const isActive = location.pathname.startsWith(path);
    return (
      <Link
        to={path}
        key={path}
        className={`flex items-center px-4 py-2 rounded-md transition ${
          isActive
            ? 'bg-white text-green-800 font-semibold'
            : 'hover:bg-green-700'
        }`}
      >
        <Icon className="mr-3 h-5 w-5" />
        {label}
      </Link>
    );
  };

  const [openRegistration, setOpenRegistration] = useState(false);
  // const toggleRegistration = () => setOpenRegistration(!openRegistration);
  

  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen p-4 overflow-y-auto">
      {/* Logo */}
      <Link
        to="/dashboard"
        className="flex items-center gap-2 p-4 hover:bg-blue-100 rounded transition"
      >
        <img src="/egerton-logo.png" alt="Logo" className="h-8 w-8" />
        {/* <span className="text-lg font-bold text-blue-600">Student Portal</span> */}
      </Link>

      {/* Dashboard */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Dashboard
        </h2>
        {renderLink('Personal Profile', '/dashboard/profile', User)}
      </div>

      {/* Academic */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Academic
        </h2>

        {/* Registration (Expandable) */}
        <div
          className="flex items-center px-4 py-2 cursor-pointer hover:bg-green-700 rounded-md"
          onClick={() => setOpenRegistration(!openRegistration)}
        >
          <BookOpen className="mr-3 h-5 w-5" />
          <span>Registration</span>
          <span className="ml-auto">{openRegistration ? '▾' : '▸'}</span>
        </div>

        {/* Sub-links under Registration */}
        {openRegistration && (
          <div className="ml-8 mt-1 space-y-1">
            <Link
              to="/dashboard/academic/registration/finance"
              className={`block px-2 py-1 rounded-md text-sm hover:bg-green-700 ${
                location.pathname === '/dashboard/academic/registration/finance'
                  ? 'bg-white text-green-800 font-semibold'
                  : ''
              }`}
            >
              Finance Registration
            </Link>
          </div>
        )}

        {/* Requisition */}
        {renderLink('Requisition', '/dashboard/academic/requisition', Pencil)}
        {renderLink(
          'Course Evaluation',
          '/dashboard/academic/evaluation',
          ClipboardCheck
        )}
        {renderLink(
          'Clearance Request',
          '/dashboard/academic/clearance',
          ScrollText
        )}
      </div>

      {/* Financials */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Financials
        </h2>
        {renderLink('Fee Statement', '/dashboard/financials/statement', Wallet)}
        {renderLink(
          'Accommodation Statement',
          '/dashboard/financials/accommodation',
          BedDouble
        )}
        {renderLink('Receipts', '/dashboard/financials/receipts', Receipt)}
      </div>

      {/* Accommodation */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Accommodation
        </h2>
        {renderLink('Hostel Booking', '/dashboard/accommodation', BedDouble)}
      </div>

      {/* Examination */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Examination
        </h2>
        {renderLink('Transcript', '/dashboard/examination', FileText)}
      </div>

      {/* Settings */}
      <div className="mb-4">
        <h2 className="text-sm font-bold uppercase px-4 mb-1 text-gray-300">
          Settings
        </h2>
        {renderLink('Change Password', '/dashboard/settings', Settings)}
      </div>
    </aside>
  );
}
