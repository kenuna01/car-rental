export default function Payments() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <p className="text-gray-600">Manage payment methods and view invoices.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold">Payment Methods</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 px-3 py-1 rounded">VISA</div>
                <div>
                  <div className="font-medium">Visa ending ••34</div>
                  <div className="text-xs text-gray-500">Expires 04/2026</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Primary</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 px-3 py-1 rounded">MC</div>
                <div>
                  <div className="font-medium">Mastercard ending ••88</div>
                  <div className="text-xs text-gray-500">Expires 11/2025</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Backup</div>
            </div>
            <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">
              Add Payment Method
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold">Invoices</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Invoice #INV-2024-001</div>
                <div className="text-xs text-gray-500">2024-10-01</div>
              </div>
              <div className="text-sm font-semibold">$147</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Invoice #INV-2024-002</div>
                <div className="text-xs text-gray-500">2024-08-12</div>
              </div>
              <div className="text-sm font-semibold">$58</div>
            </div>
            <button className="mt-3 px-3 py-1 bg-gray-100 text-gray-800 rounded">
              Download All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
