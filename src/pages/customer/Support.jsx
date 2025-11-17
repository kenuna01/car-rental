export default function Support() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="text-gray-600">Contact support or view help articles.</p>

      <div className="mt-6 bg-white shadow rounded p-6">
        <h3 className="font-semibold">Contact</h3>
        <p className="text-sm text-gray-500 mt-2">
          Open a ticket and our team will respond shortly.
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Ticket #TKT-1009</div>
              <div className="text-xs text-gray-500">
                Issue with pickup time
              </div>
            </div>
            <div className="text-sm text-yellow-600 font-semibold">Open</div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Ticket #TKT-0988</div>
              <div className="text-xs text-gray-500">Billing question</div>
            </div>
            <div className="text-sm text-green-600 font-semibold">Resolved</div>
          </div>
          <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">
            Open New Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
