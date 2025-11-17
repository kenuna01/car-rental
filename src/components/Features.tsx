import { Shield, Clock, MapPin, CreditCard, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified & Insured',
    description: 'All vehicles are fully insured and verified for your safety and peace of mind.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Book anytime, anywhere. Our cars are available round the clock for your convenience.'
  },
  {
    icon: MapPin,
    title: 'Multiple Locations',
    description: 'Pick up and drop off at convenient locations across the city.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Multiple payment options with secure transactions and transparent pricing.'
  },
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Dedicated customer support team available 24/7 to assist you.'
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    description: 'Competitive rates with no hidden fees. Best value for your money.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DriveShare?</h2>
          <p className="text-lg text-gray-600">Experience the difference with our premium car rental service</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-all" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
