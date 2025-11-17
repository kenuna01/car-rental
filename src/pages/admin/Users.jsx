import StatCard from "../../components/dashboard/StatCard.jsx";
import TablePlaceholder from "../../components/dashboard/TablePlaceholder.jsx";
import { Users, Star } from "lucide-react";

export default function AdminUsers() {
  const columns = ["Name", "Email", "Role", "Status", "Actions"];
  const rows = [
    [
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <div className="font-medium">Ava Johnson</div>
          <div className="text-xs text-gray-500">Member since 2023</div>
        </div>
      </div>,
      "ava.johnson@example.com",
      "Customer",
      <span className="text-sm text-green-600 font-semibold">Active</span>,
      <div className="flex items-center space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-600 hover:underline">
          Suspend
        </button>
      </div>,
    ],
    [
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <div className="font-medium">Liam Smith</div>
          <div className="text-xs text-gray-500">Member since 2022</div>
        </div>
      </div>,
      "liam.smith@example.com",
      "Owner",
      <span className="text-sm text-yellow-600 font-semibold">Pending</span>,
      <div className="flex items-center space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-600 hover:underline">
          Suspend
        </button>
      </div>,
    ],
    [
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <div className="font-medium">Sophia Lee</div>
          <div className="text-xs text-gray-500">Member since 2021</div>
        </div>
      </div>,
      "sophia.lee@example.com",
      "Customer",
      <span className="text-sm text-gray-600">Inactive</span>,
      <div className="flex items-center space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-600 hover:underline">
          Suspend
        </button>
      </div>,
    ],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Users"
          value="4,523"
          subtitle="Active this month"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Average Rating"
          value="4.8"
          subtitle="Across listings"
          icon={<Star className="w-6 h-6" />}
        />
        <div />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">User accounts</h2>
        <p className="text-sm text-gray-500">
          Manage users — search, edit, or suspend accounts.
        </p>
      </div>

      <TablePlaceholder columns={columns} rows={rows} />
    </div>
  );
}
