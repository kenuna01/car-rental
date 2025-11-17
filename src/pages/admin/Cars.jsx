import StatCard from "../../components/dashboard/StatCard.jsx";
import TablePlaceholder from "../../components/dashboard/TablePlaceholder.jsx";
import { Car } from "lucide-react";

export default function AdminCars() {
  const columns = ["Photo", "Model", "Category", "Price/day", "Status"];
  const rows = [
    [
      <div className="flex items-center space-x-3">
        <img
          src="https://source.unsplash.com/collection/190727/80x60"
          alt="car"
          className="w-16 h-10 rounded object-cover"
        />
        <div>
          <div className="font-medium">Tesla Model 3</div>
          <div className="text-xs text-gray-500">VIN: 5YJ3E1EA7KF317XXX</div>
        </div>
      </div>,
      "Sedan",
      "$49/day",
      <span className="text-sm text-green-600 font-semibold">Available</span>,
      <div className="flex items-center space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-600 hover:underline">Remove</button>
      </div>,
    ],
    [
      <div className="flex items-center space-x-3">
        <img
          src="https://source.unsplash.com/collection/190726/80x60"
          alt="car"
          className="w-16 h-10 rounded object-cover"
        />
        <div>
          <div className="font-medium">Honda Civic</div>
          <div className="text-xs text-gray-500">VIN: 2HGFB2F50CH5XXXX</div>
        </div>
      </div>,
      "Compact",
      "$29/day",
      <span className="text-sm text-yellow-600 font-semibold">
        Maintenance
      </span>,
      <div className="flex items-center space-x-2">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-600 hover:underline">Remove</button>
      </div>,
    ],
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          title="Total Listings"
          value="312"
          subtitle="Available now"
          icon={<Car className="w-6 h-6" />}
        />
        <div />
        <div />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Vehicle inventory</h2>
        <p className="text-sm text-gray-500">
          Add, edit, or remove car listings.
        </p>
      </div>

      <TablePlaceholder columns={columns} rows={rows} />
    </div>
  );
}
