
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  isAuthenticated: boolean;
}

interface DashboardHeaderProps {
  user: UserData;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userAuth');
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
                CareerAI
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-indigo-600 font-medium cursor-pointer">Dashboard</Link>
            <Link href="/resume-analyzer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Resume Analyzer</Link>
            <Link href="/career-advisor" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Career Advisor</Link>
            <Link href="/skills-assessment" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Skills Assessment</Link>
            <Link href="/job-matching" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Job Matching</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
              <i className="ri-notification-line text-xl"></i>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.firstName ? user.firstName.charAt(0) : user.email.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">
                  {user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user.email.split('@')[0]}
                </span>
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'User'}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    <i className="ri-user-line mr-2"></i>
                    Profile Settings
                  </Link>
                  <Link href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    <i className="ri-bill-line mr-2"></i>
                    Billing
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <i className="ri-logout-line mr-2"></i>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
