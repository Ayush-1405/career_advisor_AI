
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalysisResultsProps {
  data: any;
  onReset: () => void;
}

export default function AnalysisResults({ data, onReset }: AnalysisResultsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analysis Complete</h2>
            <p className="text-gray-600">Here's your comprehensive resume analysis</p>
          </div>
          <button
            onClick={onReset}
            className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            <i className="ri-refresh-line mr-2"></i>
            Analyze Another Resume
          </button>
        </div>
      </div>

      {/* Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBg(data.score)} mb-4`}>
              <span className={`text-2xl font-bold ${getScoreColor(data.score)}`}>
                {data.score}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Overall Score</h3>
            <p className="text-gray-600 text-sm">Industry benchmark: 75+</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBg(data.atsScore)} mb-4`}>
              <span className={`text-2xl font-bold ${getScoreColor(data.atsScore)}`}>
                {data.atsScore}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">ATS Score</h3>
            <p className="text-gray-600 text-sm">Applicant Tracking System compatibility</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 mb-4">
              <i className="ri-target-line text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Job Matches</h3>
            <p className="text-gray-600 text-sm">{data.recommendations.length} suitable positions found</p>
          </div>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Skills Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.skills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="level" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <i className="ri-thumb-up-line text-green-600 mr-2"></i>
            Strengths
          </h3>
          <ul className="space-y-3">
            {data.strengths.map((strength, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <i className="ri-lightbulb-line text-orange-600 mr-2"></i>
            Improvements
          </h3>
          <ul className="space-y-3">
            {data.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-arrow-up-line text-orange-600 text-sm"></i>
                </div>
                <span className="text-gray-700">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Positions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.recommendations.map((position, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <h4 className="font-semibold text-gray-900 mb-2">{position}</h4>
              <p className="text-gray-600 text-sm mb-3">High compatibility with your profile</p>
              <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium cursor-pointer">
                View Similar Jobs →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
              Download Report
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 cursor-pointer whitespace-nowrap">
              Get Career Advice
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer whitespace-nowrap">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
