
'use client';

import Link from 'next/link';
import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-indigo-600 mb-2 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
              CareerAI
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
          <p className="text-gray-600">Join thousands of professionals advancing their careers</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <SignupForm />
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
