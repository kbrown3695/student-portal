import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menu = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/profile' },
    // { name: 'Timetable', path: '/timetable' },
    // { name: 'Results', path: '/results' },
    // { name: 'Library', path: '/library' },
    { name: 'Academic', path: '/academic' },
    { name: 'Financials', path: '/financials' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Examination', path: '/examination' },
    { name: 'Settings', path: '/settings' },
  ];
  

  return (
    <div className="w-64 h-screen bg-green-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Student Portal</h2>
      <nav>
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block py-2 hover:bg-green-700 px-3 rounded"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
