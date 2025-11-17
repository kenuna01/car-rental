export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Platform settings and integrations.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold mb-2">General</h3>
          <p className="text-sm text-gray-500">
            Company name, timezone and default settings.
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Allow public listings</div>
              <div className="text-sm text-white bg-green-600 px-2 py-1 rounded">
                Enabled
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Default currency</div>
              <div className="text-sm font-medium">USD</div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <p className="text-sm text-gray-500">
            Payments, analytics and third party services.
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm">Stripe</div>
              <div className="text-sm text-green-600 font-semibold">
                Connected
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">Google Analytics</div>
              <div className="text-sm text-gray-500">Not connected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
