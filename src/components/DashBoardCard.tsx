type DashboardCardProps = {
  title: string;
  value: string | number;
};

const DashboardCard = ({ title, value }: DashboardCardProps) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg text-center">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;
