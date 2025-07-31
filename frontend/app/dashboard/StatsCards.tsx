
'use client';

export default function StatsCards() {
  const stats = [
    {
      title: 'Resume Score',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: 'ri-file-text-line',
      color: 'blue'
    },
    {
      title: 'Profile Views',
      value: '234',
      change: '+12%',
      changeType: 'positive',
      icon: 'ri-eye-line',
      color: 'green'
    },
    {
      title: 'Applications Sent',
      value: '18',
      change: '+3',
      changeType: 'positive',
      icon: 'ri-send-plane-line',
      color: 'purple'
    },
    {
      title: 'Interview Invites',
      value: '5',
      change: '+2',
      changeType: 'positive',
      icon: 'ri-calendar-check-line',
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last month</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              stat.color === 'blue' ? 'bg-blue-50' :
              stat.color === 'green' ? 'bg-green-50' :
              stat.color === 'purple' ? 'bg-purple-50' :
              'bg-orange-50'
            }`}>
              <i className={`${stat.icon} text-xl ${
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'green' ? 'text-green-600' :
                stat.color === 'purple' ? 'text-purple-600' :
                'text-orange-600'
              }`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
