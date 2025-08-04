// DashboardCard.tsx
type DashboardCardProps = {
  title: string;
  value: string | number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
