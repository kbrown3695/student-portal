const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Welcome, Student</span>
        <img src="/egerton-logo.png" alt="Egerton" className="h-10" />
      </div>
    </div>
  );
};

export default Navbar;
