import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { FeaturedCars } from "./components/FeaturedCars.jsx";
import { Features } from "./components/Features.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { Footer } from "./components/Footer.jsx";
import { AuthModal } from "./components/AuthModal.jsx";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={handleAuthClick} />
      <Hero />
      <SearchBar />
      <FeaturedCars />
      <Features />
      <HowItWorks />
      <Footer />

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={() =>
            setAuthMode(authMode === "login" ? "signup" : "login")
          }
        />
      )}
    </div>
  );
}

export default App;
