import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', onClick: () => setSearchTerm('') },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' }
  ];

  const NavLink = ({ to, label, onClick, mobile = false }) => (
    <Link 
      to={to}
      onClick={onClick}
      className={`relative font-medium transition-colors duration-200 group ${
        mobile 
          ? 'block px-3 py-2 text-white hover:text-red-400' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {label}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full" />
      )}
    </Link>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-2xl' 
        : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand */}
          <Link 
            to="/" 
            onClick={() => setSearchTerm('')}
            className="flex items-center space-x-2 sm:space-x-3 transition-transform duration-200 hover:scale-105"
          >
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CinemaSphere
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </div>
          
          {/* Search & Auth */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Search Bar - Hidden on mobile */}
            <div className={`relative transition-all duration-300 ${
              isFocused ? 'w-64 sm:w-80' : 'w-48 sm:w-64'
            } hidden sm:block`}>
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 hover:bg-white/15 text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Auth Section */}
            <SignedOut>
              <SignInButton 
                mode="modal"
                appearance={{
                  elements: {
                    modalContent: "bg-gray-800 border border-gray-700",
                    headerTitle: "text-white",
                    headerSubtitle: "text-gray-300",
                    socialButtonsBlockButton: "text-white border-gray-600 hover:bg-gray-700",
                    socialButtonsBlockButtonText: "text-white",
                    formFieldLabel: "text-white",
                    formFieldInput: "bg-gray-700 border-gray-600 text-white",
                    footerActionText: "text-gray-300",
                    footerActionLink: "text-white"
                  }
                }}
              >
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25 hover:scale-105 text-sm sm:text-base">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <Link 
                to="/profile" 
                className="hidden sm:block text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Profile
              </Link>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                    userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                    userButtonPopoverText: "text-white",
                    userButtonPopoverActionButton: "text-white hover:bg-gray-700",
                    userButtonPopoverActionButtonText: "text-white"
                  }
                }}
              />
            </SignedIn>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} mobile />
              ))}
              
              {/* Mobile Profile Link */}
              <SignedIn>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 text-white hover:text-red-400 font-medium"
                >
                  Profile
                </Link>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;