import { Outlet, NavLink } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader.jsx";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-72 bg-white border-r shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Your Dashboard</h2>
          <div className="text-sm text-gray-500">Manage your bookings</div>
        </div>
        <nav className="p-4 space-y-2">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="bookings"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            My Bookings
          </NavLink>
          <NavLink
            to="payments"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Payments
          </NavLink>
          <NavLink
            to="support"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-blue-50 rounded"
                : "block px-4 py-2 hover:bg-gray-100 rounded"
            }
          >
            Support
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <DashboardHeader title="Customer Dashboard" />
        <Outlet />
      </main>
    </div>
  );
}
