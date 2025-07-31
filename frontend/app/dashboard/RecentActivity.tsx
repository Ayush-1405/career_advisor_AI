
'use client';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'resume_analysis',
      title: 'Resume Analysis Completed',
      description: 'Your resume has been analyzed with 87% match score',
      time: '2 hours ago',
      icon: 'ri-file-check-line',
      color: 'green'
    },
    {
      id: 2,
      type: 'job_application',
      title: 'Application Submitted',
      description: 'Applied to Senior Developer at TechCorp',
      time: '1 day ago',
      icon: 'ri-send-plane-line',
      color: 'blue'
    },
    {
      id: 3,
      type: 'skill_assessment',
      title: 'Skills Assessment Started',
      description: 'JavaScript fundamentals assessment in progress',
      time: '2 days ago',
      icon: 'ri-bar-chart-line',
      color: 'purple'
    },
    {
      id: 4,
      type: 'interview',
      title: 'Interview Scheduled',
      description: 'Technical interview with StartupXYZ on Friday',
      time: '3 days ago',
      icon: 'ri-calendar-event-line',
      color: 'orange'
    },
    {
      id: 5,
      type: 'profile_update',
      title: 'Profile Updated',
      description: 'Added new certification in React Development',
      time: '1 week ago',
      icon: 'ri-user-settings-line',
      color: 'indigo'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium cursor-pointer">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              activity.color === 'green' ? 'bg-green-100' :
              activity.color === 'blue' ? 'bg-blue-100' :
              activity.color === 'purple' ? 'bg-purple-100' :
              activity.color === 'orange' ? 'bg-orange-100' :
              'bg-indigo-100'
            }`}>
              <i className={`${activity.icon} ${
                activity.color === 'green' ? 'text-green-600' :
                activity.color === 'blue' ? 'text-blue-600' :
                activity.color === 'purple' ? 'text-purple-600' :
                activity.color === 'orange' ? 'text-orange-600' :
                'text-indigo-600'
              }`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
