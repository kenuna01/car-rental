import TablePlaceholder from "../../components/dashboard/TablePlaceholder.jsx";

export default function MyBookings() {
  const columns = ["Booking", "Car", "Dates", "Price", "Status"];
  const rows = [
    [
      "BK-1001",
      "Tesla Model 3",
      "2024-11-01 → 2024-11-04",
      "$147",
      <span className="text-sm text-green-600">Active</span>,
    ],
    [
      "BK-1004",
      "BMW X5",
      "2024-12-05 → 2024-12-10",
      "$450",
      <span className="text-sm text-yellow-600">Upcoming</span>,
    ],
    [
      "BK-0999",
      "Honda Civic",
      "2024-08-10 → 2024-08-12",
      "$58",
      <span className="text-sm text-gray-600">Completed</span>,
    ],
  ];

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">My Bookings</h2>
        <p className="text-sm text-gray-500">Upcoming and past reservations.</p>
      </div>

      <TablePlaceholder columns={columns} rows={rows} />
    </div>
  );
}
