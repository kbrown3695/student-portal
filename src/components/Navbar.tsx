// src/components/Navbar.tsx
import { Menu } from 'lucide-react';

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <header className="w-full h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm">
      {/* Hamburger button */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 hover:text-black lg:hidden"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-semibold text-gray-800">Student Portal</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, Student</span>
        <img
          src="/public/avatar.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Navbar;
