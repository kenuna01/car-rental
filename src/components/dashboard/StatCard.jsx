export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center space-x-4">
      <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
      </div>
    </div>
  );
}
