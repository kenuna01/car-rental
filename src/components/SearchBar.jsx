import { MapPin, Calendar, Clock, Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative -mt-8 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                Location
              </label>
              <input
                type="text"
                placeholder="Where do you need a car?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-blue-600" />
                Pick-up Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-600" />
                Duration
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                <option>1-3 days</option>
                <option>3-7 days</option>
                <option>1-2 weeks</option>
                <option>2+ weeks</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Cars</span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-sm text-gray-600">Popular:</span>
            <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors">
              SUVs
            </button>
            <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors">
              Luxury Sedans
            </button>
            <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors">
              Electric Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
