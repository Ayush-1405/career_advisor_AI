
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import CareerForm from './CareerForm';
import CareerAdvice from './CareerAdvice';

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

interface AdviceData {
  currentRole: string;
  targetRole: string;
  timeline: string;
  successRate: number;
  roadmap: {
    phase: string;
    tasks: string[];
  }[];
  skills: {
    name: string;
    current: number;
    target: number;
    priority: string;
  }[];
  resources: {
    title: string;
    type: string;
    link: string;
  }[];
}

export default function CareerAdvisor() {
  const [advice, setAdvice] = useState<AdviceData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFormSubmit = (formData: FormData) => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const mockAdvice: AdviceData = {
        currentRole: formData.currentRole,
        targetRole: formData.targetRole,
        roadmap: [
          {
            phase: 'Phase 1: Foundation Building (0-6 months)',
            tasks: [
              'Master advanced Java concepts and Spring framework',
              'Build 2-3 full-stack projects with React and Java',
              'Obtain Oracle Java SE certification',
              'Contribute to open-source projects'
            ]
          },
          {
            phase: 'Phase 2: Skill Enhancement (6-12 months)',
            tasks: [
              'Learn cloud platforms (AWS/Azure)',
              'Master DevOps tools (Docker, Kubernetes)',
              'Develop leadership and communication skills',
              'Mentor junior developers'
            ]
          },
          {
            phase: 'Phase 3: Career Advancement (12-18 months)',
            tasks: [
              'Apply for senior developer positions',
              'Build a professional network',
              'Showcase projects through portfolio',
              'Interview preparation and practice'
            ]
          }
        ],
        skills: [
          { name: 'Java', current: 85, target: 95, priority: 'High' },
          { name: 'Spring Boot', current: 80, target: 90, priority: 'High' },
          { name: 'React', current: 75, target: 85, priority: 'Medium' },
          { name: 'Cloud Platforms', current: 40, target: 80, priority: 'High' },
          { name: 'DevOps', current: 30, target: 70, priority: 'Medium' },
          { name: 'Leadership', current: 50, target: 80, priority: 'High' }
        ],
        resources: [
          { title: 'Advanced Java Programming Course', type: 'Course', link: '#' },
          { title: 'Spring Boot Mastery', type: 'Book', link: '#' },
          { title: 'AWS Certification Guide', type: 'Certification', link: '#' },
          { title: 'Tech Leadership Blog', type: 'Blog', link: '#' }
        ],
        timeline: '12-18 months',
        successRate: 85
      };
      setAdvice(mockAdvice);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Career Advisor</h1>
          <p className="text-xl text-gray-600">
            Get personalized career guidance and roadmap based on your goals
          </p>
        </div>

        {!advice && !isGenerating && (
          <CareerForm onSubmit={handleFormSubmit} />
        )}

        {isGenerating && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Career Plan...</h3>
            <p className="text-gray-600">Our AI is analyzing your profile and creating a personalized roadmap</p>
          </div>
        )}

        {advice && (
          <CareerAdvice data={advice} onReset={() => setAdvice(null)} />
        )}
      </div>
    </div>
  );
}
