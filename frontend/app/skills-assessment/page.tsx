'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

interface UserData {
  firstName?: string;
  lastName?: string;
  email: string;
  isAuthenticated: boolean;
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
}

export default function SkillsAssessmentPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const router = useRouter();

  const questions: Question[] = [
    {
      id: 1,
      category: "Technical Skills",
      question: "How would you rate your proficiency in programming languages?",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"]
    },
    {
      id: 2,
      category: "Communication",
      question: "How comfortable are you presenting to large groups?",
      options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"]
    },
    {
      id: 3,
      category: "Leadership",
      question: "Have you led a team or project before?",
      options: ["Never", "Once or twice", "Several times", "Regularly"]
    },
    {
      id: 4,
      category: "Problem Solving",
      question: "How do you approach complex problems?",
      options: ["Need guidance", "Work with others", "Can solve independently", "Lead problem-solving efforts"]
    },
    {
      id: 5,
      category: "Technical Skills",
      question: "What's your experience with data analysis?",
      options: ["No experience", "Basic knowledge", "Intermediate skills", "Advanced expertise"]
    },
    {
      id: 6,
      category: "Adaptability",
      question: "How well do you handle change in work environment?",
      options: ["Struggle with change", "Adapt slowly", "Adapt well", "Thrive in changing environments"]
    }
  ];

  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem('userAuth');
      if (authData) {
        const userData = JSON.parse(authData);
        if (userData.isAuthenticated) {
          setUser(userData);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const categories = {
      "Technical Skills": [],
      "Communication": [],
      "Leadership": [],
      "Problem Solving": [],
      "Adaptability": []
    } as any;

    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const score = question.options.indexOf(answer) + 1;
        if (!categories[question.category]) categories[question.category] = [];
        categories[question.category].push(score);
      }
    });

    const results = Object.keys(categories).map(category => {
      const scores = categories[category];
      const average = scores.length > 0 ? scores.reduce((a: number, b: number) => a + b, 0) / scores.length : 0;
      return {
        category,
        score: Math.round((average / 4) * 100),
        level: average <= 1.5 ? 'Beginner' : average <= 2.5 ? 'Intermediate' : average <= 3.5 ? 'Advanced' : 'Expert'
      };
    });

    return results;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-4-line animate-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!assessmentStarted && !showResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-bar-chart-line text-purple-600 text-3xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Skills Assessment</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take our comprehensive skills assessment to evaluate your technical and soft skills. 
              Get personalized insights and recommendations for your career development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <i className="ri-time-line text-blue-600 text-2xl mb-2"></i>
                <h3 className="font-semibold text-gray-900">10 Minutes</h3>
                <p className="text-sm text-gray-600">Quick assessment</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <i className="ri-question-line text-green-600 text-2xl mb-2"></i>
                <h3 className="font-semibold text-gray-900">6 Questions</h3>
                <p className="text-sm text-gray-600">Focused evaluation</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <i className="ri-trophy-line text-purple-600 text-2xl mb-2"></i>
                <h3 className="font-semibold text-gray-900">Detailed Results</h3>
                <p className="text-sm text-gray-600">Actionable insights</p>
              </div>
            </div>
            <button
              onClick={() => setAssessmentStarted(true)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
            >
              Start Assessment
            </button>
          </div>
        )}

        {assessmentStarted && !showResults && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-indigo-600 font-medium">
                  {questions[currentQuestion].category}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:border-indigo-300 cursor-pointer ${
                      answers[questions[currentQuestion].id] === option
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        answers[questions[currentQuestion].id] === option
                          ? 'border-indigo-500 bg-indigo-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[questions[currentQuestion].id] === option && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}

        {showResults && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-trophy-line text-green-600 text-3xl"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h1>
              <p className="text-gray-600 mb-8">
                Here are your personalized skill assessment results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculateResults().map((result, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{result.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.score >= 75 ? 'bg-green-100 text-green-800' :
                      result.score >= 50 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {result.level}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Score</span>
                      <span>{result.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          result.score >= 75 ? 'bg-green-500' :
                          result.score >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.score >= 75 ? 'Excellent! Keep up the great work.' :
                     result.score >= 50 ? 'Good foundation. Room for improvement.' :
                     'Consider focusing on development in this area.'}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-lightbulb-line text-indigo-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">Get Career Advice</h4>
                    <p className="text-sm text-gray-600">Receive personalized recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-file-text-line text-indigo-600 mt-1"></i>
                  <div>
                    <h4 className="font-medium text-gray-900">Analyze Your Resume</h4>
                    <p className="text-sm text-gray-600">See how your skills match your resume</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {user ? (
                  <>
                    <button
                      onClick={() => router.push('/career-advisor')}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
                    >
                      Get Career Advice
                    </button>
                    <button
                      onClick={() => router.push('/resume-analyzer')}
                      className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 cursor-pointer whitespace-nowrap"
                    >
                      Analyze Resume
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => router.push('/auth/signup')}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
                  >
                    Sign Up to Continue
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}