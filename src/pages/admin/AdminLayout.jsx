import { Outlet, NavLink } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader.jsx";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-72 bg-white border-r shadow-sm">
        <div className="p-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Admin</h2>
            <div className="text-sm text-gray-500">Manage platform</div>
          </div>
        </div>
        <nav className="p-4 space-y-2">
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="cars"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="bookings"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Bookings
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <DashboardHeader title="Admin Dashboard" />
        <Outlet />
      </main>
    </div>
  );
}
