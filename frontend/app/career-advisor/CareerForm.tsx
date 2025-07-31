
'use client';

import { useState } from 'react';

interface FormData {
  currentRole: string;
  experience: string;
  targetRole: string;
  skills: string[];
  interests: string[];
  timeline: string;
  location: string;
  workStyle: string;
}

interface CareerFormProps {
  onSubmit: (data: FormData) => void;
}

export default function CareerForm({ onSubmit }: CareerFormProps) {
  const [formData, setFormData] = useState<FormData>({
    currentRole: '',
    experience: '',
    targetRole: '',
    skills: [],
    interests: [],
    timeline: '',
    location: '',
    workStyle: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const skillOptions = [
    'Java', 'JavaScript', 'Python', 'React', 'Angular', 'Vue.js',
    'Spring Boot', 'Node.js', 'SQL', 'MongoDB', 'AWS', 'Docker',
    'Kubernetes', 'Git', 'Agile', 'Leadership', 'Communication'
  ];

  const interestOptions = [
    'Web Development', 'Mobile Development', 'Data Science', 'AI/ML',
    'Cloud Computing', 'DevOps', 'Cybersecurity', 'Game Development',
    'IoT', 'Blockchain', 'Product Management', 'Technical Writing'
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="space-y-8">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Role
              </label>
              <input
                type="text"
                value={formData.currentRole}
                onChange={(e) => setFormData({...formData, currentRole: e.target.value})}
                placeholder="e.g., Junior Software Developer"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-left pr-8"
                  onClick={() => {}}
                >
                  {formData.experience || 'Select experience level'}
                </button>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Role
              </label>
              <input
                type="text"
                value={formData.targetRole}
                onChange={(e) => setFormData({...formData, targetRole: e.target.value})}
                placeholder="e.g., Senior Full Stack Developer"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-left pr-8"
                  onClick={() => {}}
                >
                  {formData.timeline || 'Select timeline'}
                </button>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Skills</h3>
          <p className="text-sm text-gray-600 mb-4">Select all skills you currently have</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skillOptions.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  formData.skills.includes(skill)
                    ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                } border`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas of Interest</h3>
          <p className="text-sm text-gray-600 mb-4">Select areas you're interested in exploring</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interestOptions.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  formData.interests.includes(interest)
                    ? 'bg-green-100 text-green-800 border-green-300'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                } border`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Work Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="e.g., San Francisco, Remote"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Style
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-left pr-8"
                  onClick={() => {}}
                >
                  {formData.workStyle || 'Select work style'}
                </button>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
          >
            Generate Career Plan
          </button>
        </div>
      </div>
    </form>
  );
}
