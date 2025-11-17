import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header({ onAuthClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">DriveShare</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#cars"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Browse Cars
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#list-car"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              List Your Car
            </a>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Admin
            </Link>
            <button
              onClick={() => onAuthClick("login")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => onAuthClick("signup")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a
              href="#cars"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Browse Cars
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#list-car"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              List Your Car
            </a>
            <button
              onClick={() => onAuthClick("login")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => onAuthClick("signup")}
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
