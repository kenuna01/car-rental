import StatCard from "../../components/dashboard/StatCard.jsx";
import TablePlaceholder from "../../components/dashboard/TablePlaceholder.jsx";
import { Calendar } from "lucide-react";

export default function AdminBookings() {
  const columns = ["Booking ID", "User", "Car", "Dates", "Status"];
  const rows = [
    [
      "BK-1001",
      "Ava Johnson",
      "Tesla Model 3",
      "2024-11-01 → 2024-11-04",
      <span className="text-sm text-green-600 font-semibold">Confirmed</span>,
      <div className="text-sm text-blue-600">View</div>,
    ],
    [
      "BK-1002",
      "Liam Smith",
      "Honda Civic",
      "2024-10-15 → 2024-10-17",
      <span className="text-sm text-yellow-600 font-semibold">Pending</span>,
      <div className="text-sm text-blue-600">View</div>,
    ],
    [
      "BK-1003",
      "Sophia Lee",
      "Toyota RAV4",
      "2024-09-20 → 2024-09-22",
      <span className="text-sm text-gray-600">Cancelled</span>,
      <div className="text-sm text-blue-600">View</div>,
    ],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Active Bookings"
          value="1,204"
          subtitle="Today"
          icon={<Calendar className="w-6 h-6" />}
        />
        <div />
        <div />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Bookings</h2>
        <p className="text-sm text-gray-500">
          View and manage bookings, refunds, and disputes.
        </p>
      </div>

      <TablePlaceholder columns={columns} rows={rows} />
    </div>
  );
}
