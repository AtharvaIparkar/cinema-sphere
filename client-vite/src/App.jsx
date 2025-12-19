import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import MovieDetail from './pages/MovieDetail.jsx';
import Profile from './pages/Profile.jsx';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log('Clerk Key:', clerkPubKey); // Debug log

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  if (!clerkPubKey) {
    return (
      <div className="min-h-screen bg-red-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
          <p>VITE_CLERK_PUBLISHABLE_KEY is missing from environment variables</p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      appearance={{
        baseTheme: "dark",
        variables: {
          colorPrimary: "#dc2626",
          colorBackground: "#111827",
          colorInputBackground: "#374151",
          colorInputText: "#ffffff",
          colorText: "#ffffff",
          colorTextSecondary: "#ffffff"
        },
        elements: {
          card: "bg-gray-900 border-gray-700",
          headerTitle: "text-white",
          headerSubtitle: "text-white",
          formButtonPrimary: "bg-red-600 hover:bg-red-700 text-white",
          formFieldLabel: "text-white",
          formFieldInput: "text-white bg-gray-800 border-gray-600",
          footerActionLink: "text-white hover:text-gray-300",
          modalContent: "bg-gray-900 text-white",
          modalCloseButton: "text-white hover:text-gray-300"
        }
      }}
    >
      <Router>
        <div className="min-h-screen bg-slate-900">
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;