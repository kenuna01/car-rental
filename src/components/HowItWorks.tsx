import { Search, Calendar, Key, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search & Compare',
    description: 'Browse our extensive collection of vehicles and compare prices, features, and reviews.'
  },
  {
    icon: Calendar,
    title: 'Book Your Ride',
    description: 'Select your dates, choose your car, and complete your booking in just a few clicks.'
  },
  {
    icon: Key,
    title: 'Pick Up',
    description: 'Collect your car from your chosen location. Quick verification and you are ready to go.'
  },
  {
    icon: CheckCircle,
    title: 'Drive & Return',
    description: 'Enjoy your journey and return the car at your convenience. Simple and hassle-free.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-blue-100">Get on the road in 4 simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 text-blue-200">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
