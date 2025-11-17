export default function Profile() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/96?img=47"
            className="w-24 h-24 rounded-full mb-4"
            alt="avatar"
          />
          <div className="text-lg font-semibold">Ava Johnson</div>
          <div className="text-sm text-gray-500">ava.johnson@example.com</div>
          <div className="mt-4 flex space-x-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              Edit Profile
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded">
              Logout
            </button>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="font-semibold">Account</h2>
          <div className="mt-3 space-y-3">
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Membership</div>
              <div className="text-sm font-medium text-green-600">Premium</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Joined</div>
              <div className="text-sm">Mar 15, 2021</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Phone</div>
              <div className="text-sm">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="font-semibold">Usage</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-indigo-50 rounded p-3 text-center">
              <div className="text-xs text-gray-500">Trips</div>
              <div className="text-lg font-bold">12</div>
            </div>
            <div className="bg-amber-50 rounded p-3 text-center">
              <div className="text-xs text-gray-500">Spent</div>
              <div className="text-lg font-bold">$1.2k</div>
            </div>
            <div className="bg-emerald-50 rounded p-3 text-center">
              <div className="text-xs text-gray-500">Saved</div>
              <div className="text-lg font-bold">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
