'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminDashboard from './AdminDashboard';

interface AdminUser {
  email: string;
  role: 'admin';
  isAuthenticated: boolean;
}

export default function AdminPage() {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  // Demo admin credentials
  const ADMIN_CREDENTIALS = {
    email: 'admin@careerai.com',
    password: 'admin123'
  };

  useEffect(() => {
    const checkAdminAuth = () => {
      const adminData = localStorage.getItem('adminAuth');
      if (adminData) {
        const adminInfo = JSON.parse(adminData);
        if (adminInfo.isAuthenticated && adminInfo.role === 'admin') {
          setAdmin(adminInfo);
        }
      }
      setLoading(false);
    };

    checkAdminAuth();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (credentials.email === ADMIN_CREDENTIALS.email && credentials.password === ADMIN_CREDENTIALS.password) {
      const adminInfo = {
        email: credentials.email,
        role: 'admin' as const,
        isAuthenticated: true,
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem('adminAuth', JSON.stringify(adminInfo));
      setAdmin(adminInfo);
      setShowLoginForm(false);
    } else {
      setError('Invalid admin credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setAdmin(null);
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-4-line animate-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link href="/">
              <h1 className="text-3xl font-bold text-indigo-600 mb-2 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
                CareerAI
              </h1>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h2>
            <p className="text-gray-600">Sign in to access the admin dashboard</p>
          </div>

          {!showLoginForm ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-admin-line text-3xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Administrator Access</h3>
              <p className="text-gray-600 mb-6">
                This area is restricted to authorized administrators only.
              </p>
              <button
                onClick={() => setShowLoginForm(true)}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
              >
                Admin Login
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Demo: admin@careerai.com / admin123
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admin Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="ri-admin-line text-gray-400"></i>
                    </div>
                    <input
                      type="email"
                      required
                      value={credentials.email}
                      onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      placeholder="Enter admin email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="ri-lock-line text-gray-400"></i>
                    </div>
                    <input
                      type="password"
                      required
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowLoginForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
                  CareerAI
                </h1>
              </Link>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                Admin Panel
              </span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <button className="text-indigo-600 font-medium cursor-pointer">Dashboard</button>
              <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Users</button>
              <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Analytics</button>
              <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Settings</button>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                <i className="ri-notification-line text-xl"></i>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <i className="ri-admin-line text-white text-sm"></i>
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  Admin
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 cursor-pointer text-sm"
                >
                  <i className="ri-logout-line mr-1"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, monitor system performance, and configure platform settings</p>
        </div>

        <AdminDashboard />
      </main>
    </div>
  );
}