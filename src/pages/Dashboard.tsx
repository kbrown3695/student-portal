import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import DashboardCard from '../components/DashBoardCard';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard title="Reg. No" value="SC2023/00123" />
          <DashboardCard
            title="Current Programme"
            value="BSc Computer Science"
          />
          <DashboardCard title="Fee Balance" value="Ksh 15,000" />
          <DashboardCard title="Attempted Units" value={30} />
          <DashboardCard title="Registered Units" value={28} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
