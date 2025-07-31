
'use client';

interface RoadmapPhase {
  phase: string;
  tasks: string[];
}

interface Skill {
  name: string;
  current: number;
  target: number;
  priority: string;
}

interface Resource {
  title: string;
  type: string;
  link: string;
}

interface AdviceData {
  currentRole: string;
  targetRole: string;
  timeline: string;
  successRate: number;
  roadmap: RoadmapPhase[];
  skills: Skill[];
  resources: Resource[];
}

interface CareerAdviceProps {
  data: AdviceData;
  onReset: () => void;
}

export default function CareerAdvice({ data, onReset }: CareerAdviceProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Personalized Career Plan</h2>
            <p className="text-gray-600">
              From {data.currentRole} to {data.targetRole} in {data.timeline}
            </p>
          </div>
          <button
            onClick={onReset}
            className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            <i className="ri-refresh-line mr-2"></i>
            New Plan
          </button>
        </div>
      </div>

      {/* Success Rate */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-sm p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Success Probability</h3>
            <p className="text-green-100">Based on your profile and market conditions</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{data.successRate}%</div>
            <div className="text-green-100">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Career Roadmap */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Career Roadmap</h3>
        <div className="space-y-8">
          {data.roadmap.map((phase, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{phase.phase}</h4>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <i className="ri-checkbox-blank-circle-line text-indigo-400 mt-1 mr-2 flex-shrink-0"></i>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < data.roadmap.length - 1 && (
                <div className="absolute left-4 top-10 w-0.5 h-16 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Gap Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Skills Development Plan</h3>
        <div className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    skill.priority === 'High' ? 'bg-red-100 text-red-800' :
                    skill.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {skill.priority} Priority
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Current: {skill.current}%</div>
                  <div className="text-sm text-gray-600">Target: {skill.target}%</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Level</span>
                  <span>{skill.current}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${skill.current}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Target Level</span>
                  <span>{skill.target}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${skill.target}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.resources.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {resource.type}
                  </span>
                </div>
                <i className="ri-external-link-line text-gray-400"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Next Steps</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
            Download Plan
          </button>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 cursor-pointer whitespace-nowrap">
            Schedule Check-in
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer whitespace-nowrap">
            Find Mentors
          </button>
        </div>
      </div>
    </div>
  );
}
