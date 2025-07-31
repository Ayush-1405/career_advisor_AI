
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  isAuthenticated: boolean;
}

export default function Home() {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600" style={{fontFamily: 'Pacifico, serif'}}>
                CareerAI
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Home</Link>
              <Link href="/resume-analyzer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Resume Analyzer</Link>
              <Link href="/career-advisor" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Career Advisor</Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Contact</Link>
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20people%20working%20with%20AI%20technology%2C%20modern%20office%20environment%20with%20digital%20interfaces%2C%20career%20development%20and%20growth%2C%20bright%20and%20clean%20background%20with%20soft%20lighting%2C%20professional%20atmosphere%20with%20technology%20elements%2C%20minimalist%20design&width=1920&height=800&seq=hero-career-ai&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Career
              <span className="text-indigo-600"> Guidance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your career journey with our advanced AI resume analyzer and personalized career advisor. Get expert insights, skill assessments, and job matching tailored to your unique profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/dashboard">
                    <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
                      Go to Dashboard
                    </button>
                  </Link>
                  <Link href="/resume-analyzer">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 cursor-pointer whitespace-nowrap">
                      Analyze Resume
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/signup">
                    <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
                      Get Started Free
                    </button>
                  </Link>
                  <Link href="/auth/login">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 cursor-pointer whitespace-nowrap">
                      Sign In
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Career Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to advance your career in one platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-text-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Analysis</h3>
              <p className="text-gray-600">AI-powered resume scanning with detailed feedback and improvement suggestions</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Guidance</h3>
              <p className="text-gray-600">Personalized career path recommendations based on your skills and goals</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skills Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your technical and soft skills</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Matching</h3>
              <p className="text-gray-600">Smart job recommendations that match your profile and preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to transform your career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Resume</h3>
              <p className="text-gray-600">Upload your resume and let our AI analyze your skills, experience, and career potential</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Personalized Insights</h3>
              <p className="text-gray-600">Receive detailed analysis, skill assessments, and career recommendations tailored to you</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advance Your Career</h3>
              <p className="text-gray-600">Apply insights to improve your profile and discover matching job opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-indigo-200">Resumes Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-indigo-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15K+</div>
              <div className="text-indigo-200">Career Transitions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-200">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of professionals who have advanced their careers with our AI-powered platform</p>
          <Link href="/resume-analyzer">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
              Start Free Analysis
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'Pacifico, serif'}}>CareerAI</h3>
              <p className="text-gray-400">AI-powered career guidance platform helping professionals achieve their career goals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resume-analyzer" className="hover:text-white cursor-pointer">Resume Analysis</Link></li>
                <li><Link href="/career-advisor" className="hover:text-white cursor-pointer">Career Guidance</Link></li>
                <li><Link href="/skills-assessment" className="hover:text-white cursor-pointer">Skills Assessment</Link></li>
                <li><Link href="/job-matching" className="hover:text-white cursor-pointer">Job Matching</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@careerai.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
