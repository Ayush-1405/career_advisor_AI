
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import ResumeUpload from './ResumeUpload';
import AnalysisResults from './AnalysisResults';

export default function ResumeAnalyzer() {
  const [analysisData, setAnalysisData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysisComplete = (data) => {
    setAnalysisData(data);
    setIsAnalyzing(false);
  };

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      const mockData = {
        score: 85,
        strengths: [
          'Strong technical skills in Java and React',
          'Excellent work experience progression',
          'Good educational background',
          'Relevant certifications'
        ],
        improvements: [
          'Add more quantifiable achievements',
          'Include keywords for ATS optimization',
          'Expand on leadership experience',
          'Add professional summary'
        ],
        skills: [
          { name: 'Java', level: 90 },
          { name: 'React', level: 85 },
          { name: 'Spring Boot', level: 80 },
          { name: 'JavaScript', level: 85 },
          { name: 'SQL', level: 75 },
          { name: 'AWS', level: 70 }
        ],
        atsScore: 78,
        recommendations: [
          'Software Engineer at Tech Companies',
          'Full Stack Developer',
          'Backend Developer',
          'Technical Lead'
        ]
      };
      handleAnalysisComplete(mockData);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Resume Analyzer</h1>
          <p className="text-xl text-gray-600">
            Get instant feedback on your resume with our advanced AI technology
          </p>
        </div>

        {!analysisData && !isAnalyzing && (
          <ResumeUpload onStartAnalysis={handleStartAnalysis} />
        )}

        {isAnalyzing && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Resume...</h3>
            <p className="text-gray-600">This may take a few moments</p>
          </div>
        )}

        {analysisData && (
          <AnalysisResults data={analysisData} onReset={() => setAnalysisData(null)} />
        )}
      </div>
    </div>
  );
}
