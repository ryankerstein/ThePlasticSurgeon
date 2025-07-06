import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-medical-blue hover:text-soft-blue transition-colors duration-200">
              <svg className="inline w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Plastic Surgery Specialist
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-medical-blue hover:text-soft-blue transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium"
              >
                Facilities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-medical-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-medical-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-medical-blue hover:text-soft-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="block px-3 py-2 text-gray-700 hover:text-medical-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Facilities
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-medical-blue text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
