
'use client';

import Link from 'next/link';

export default function QuickActions() {
  const actions = [
    {
      title: 'Analyze Resume',
      description: 'Upload and analyze your resume for improvements',
      icon: 'ri-file-text-line',
      href: '/resume-analyzer',
      color: 'blue'
    },
    {
      title: 'Get Career Advice',
      description: 'Receive personalized career guidance',
      icon: 'ri-lightbulb-line',
      href: '/career-advisor',
      color: 'green'
    },
    {
      title: 'Take Skills Test',
      description: 'Assess your technical and soft skills',
      icon: 'ri-bar-chart-line',
      href: '/skills-assessment',
      color: 'purple'
    },
    {
      title: 'Find Jobs',
      description: 'Discover matching job opportunities',
      icon: 'ri-search-line',
      href: '/job-matching',
      color: 'orange'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                action.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                action.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                action.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
                'bg-orange-100 group-hover:bg-orange-200'
              }`}>
                <i className={`${action.icon} ${
                  action.color === 'blue' ? 'text-blue-600' :
                  action.color === 'green' ? 'text-green-600' :
                  action.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-900">
                  {action.title}
                </p>
                <p className="text-xs text-gray-600 group-hover:text-indigo-700">
                  {action.description}
                </p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-indigo-600"></i>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
        <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
        <p className="text-sm text-indigo-100 mb-3">
          Get unlimited resume analyses and premium career insights
        </p>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 cursor-pointer whitespace-nowrap">
          Learn More
        </button>
      </div>
    </div>
  );
}
