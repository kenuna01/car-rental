import { Star, Users, Fuel, Settings } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric",
    image:
      "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    price: 89,
    rating: 4.9,
    reviews: 234,
    specs: { seats: 5, fuel: "Electric", transmission: "Auto" },
  },
  {
    id: 2,
    name: "BMW 5 Series",
    category: "Luxury Sedan",
    image:
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 125,
    rating: 4.8,
    reviews: 189,
    specs: { seats: 5, fuel: "Petrol", transmission: "Auto" },
  },
  {
    id: 3,
    name: "Range Rover Sport",
    category: "Luxury SUV",
    image:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 149,
    rating: 4.9,
    reviews: 312,
    specs: { seats: 7, fuel: "Diesel", transmission: "Auto" },
  },
  {
    id: 4,
    name: "Mercedes-Benz E-Class",
    category: "Luxury Sedan",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 135,
    rating: 4.7,
    reviews: 267,
    specs: { seats: 5, fuel: "Petrol", transmission: "Auto" },
  },
  {
    id: 5,
    name: "Audi Q7",
    category: "Premium SUV",
    image:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 119,
    rating: 4.8,
    reviews: 198,
    specs: { seats: 7, fuel: "Diesel", transmission: "Auto" },
  },
  {
    id: 6,
    name: "Porsche 911",
    category: "Sports Car",
    image:
      "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 299,
    rating: 5.0,
    reviews: 156,
    specs: { seats: 4, fuel: "Petrol", transmission: "Auto" },
  },
];

export function FeaturedCars() {
  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-lg text-gray-600">
            Discover our handpicked selection of premium cars
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                  {car.category}
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">
                    {car.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {car.reviews} reviews
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {car.specs.seats}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {car.specs.fuel}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {car.specs.transmission}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">
                      ${car.price}
                    </span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold">
            View All Cars
          </button>
        </div>
      </div>
    </section>
  );
}
