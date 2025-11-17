export default function DashboardHeader({ title, action }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">Overview and quick actions</p>
      </div>
      <div className="flex items-center space-x-3">
        {action}
        <button className="bg-white border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
          Settings
        </button>
      </div>
    </div>
  );
}
