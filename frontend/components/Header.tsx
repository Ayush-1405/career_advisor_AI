
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  isAuthenticated: boolean;
}

export default function Header() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const authData = localStorage.getItem('userAuth');
    if (authData) {
      const userData = JSON.parse(authData);
      if (userData.isAuthenticated) {
        setUser(userData);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userAuth');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
                CareerAI
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Home</Link>
            <Link href="/resume-analyzer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Resume Analyzer</Link>
            <Link href="/career-advisor" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Career Advisor</Link>
            <Link href="/skills-assessment" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Skills Assessment</Link>
            <Link href="/job-matching" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Job Matching</Link>
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Dashboard</button>
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.firstName ? user.firstName.charAt(0) : user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    {user.firstName ? user.firstName : user.email.split('@')[0]}
                  </span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 cursor-pointer text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/login">
                  <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Sign In</button>
                </Link>
                <Link href="/auth/signup">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
                    Get Started
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
