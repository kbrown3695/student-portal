import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    onToggleSidebar(); // Notify layout/sidebar
  };
  const goldColor = '#f7b84b';

  return (
    <nav className=" px-4 py-3 shadow-md flex items-center justify-between border-b border-gray-200"
      style={{ backgroundColor: goldColor }}>
      {/* ☰ Menu icon */}
      <button onClick={handleMenuClick} className="block md:hidden">
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Desktop Menu icon */}
      <button onClick={onToggleSidebar} className="hidden md:block">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Search bar aligned right */}
      <div className="flex-1 flex justify-end">
        <input
          type="text"
          placeholder="Search..."
          className="w-48 md:w-64 border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Avatar with dropdown */}
      <div className="relative ml-4">
        <img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-9 h-9 rounded-full border cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border">
            <button
              onClick={() => {
                setDropdownOpen(false);
                navigate('/dashboard/profile');
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Profile
            </button>
            <button
              onClick={() => {
                setDropdownOpen(false);
                navigate('/');
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
