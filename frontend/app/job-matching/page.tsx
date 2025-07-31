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

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  matchScore: number;
  postedDate: string;
  logo: string;
}

export default function JobMatchingPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    salary: '',
    experience: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const sampleJobs: Job[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
      description: "Join our innovative team building next-generation software solutions. We're looking for an experienced engineer with strong problem-solving skills.",
      requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "Team leadership"],
      matchScore: 95,
      postedDate: "2024-01-15",
      logo: "TC"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100K - $130K",
      description: "Lead product strategy and development for our cutting-edge AI products. Perfect for someone with technical background and business acumen.",
      requirements: ["3+ years PM experience", "Technical background", "Agile methodology", "Data analysis"],
      matchScore: 88,
      postedDate: "2024-01-14",
      logo: "IL"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataVision",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$90K - $120K",
      description: "Work with large datasets to extract meaningful insights and build predictive models that drive business decisions.",
      requirements: ["Python/R", "Machine Learning", "Statistics", "SQL"],
      matchScore: 82,
      postedDate: "2024-01-13",
      logo: "DV"
    },
    {
      id: 4,
      title: "UX Designer",
      company: "DesignHub",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$75K - $95K",
      description: "Create intuitive and beautiful user experiences for our mobile and web applications. Join a creative team passionate about user-centered design.",
      requirements: ["3+ years UX experience", "Figma/Sketch", "User research", "Prototyping"],
      matchScore: 76,
      postedDate: "2024-01-12",
      logo: "DH"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Remote",
      type: "Full-time",
      salary: "$95K - $125K",
      description: "Build and maintain scalable cloud infrastructure. Work with modern DevOps tools and practices in a fully remote environment.",
      requirements: ["AWS/Azure", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code"],
      matchScore: 79,
      postedDate: "2024-01-11",
      logo: "CT"
    },
    {
      id: 6,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Denver, CO",
      type: "Contract",
      salary: "$60 - $80/hr",
      description: "Develop responsive web applications using modern frontend technologies. Great opportunity for someone looking to work on diverse projects.",
      requirements: ["React/Vue.js", "TypeScript", "CSS/SASS", "REST APIs"],
      matchScore: 73,
      postedDate: "2024-01-10",
      logo: "WS"
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
    setJobs(sampleJobs);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesType = !filters.type || job.type === filters.type;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleApply = (jobId: number) => {
    if (!user) {
      router.push('/auth/signup');
      return;
    }
    // Simulate job application
    alert('Application submitted successfully!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-4-line animate-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-gray-600">Loading job matches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Job Match</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered job matching system analyzes your skills and preferences to find opportunities that align with your career goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search jobs or companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
            <div>
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Locations</option>
                <option value="san francisco">San Francisco, CA</option>
                <option value="new york">New York, NY</option>
                <option value="austin">Austin, TX</option>
                <option value="seattle">Seattle, WA</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <select
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
                <i className="ri-filter-line mr-2"></i>
                Filter Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> job matches
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{job.logo}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.matchScore >= 90 ? 'bg-green-100 text-green-800' :
                        job.matchScore >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.matchScore}% match
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <span className="font-medium text-gray-900">{job.company}</span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-briefcase-line mr-1"></i>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-money-dollar-circle-line mr-1"></i>
                        {job.salary}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-red-600 cursor-pointer">
                          <i className="ri-heart-line"></i>
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                          <i className="ri-share-line"></i>
                        </button>
                        <button
                          onClick={() => handleApply(job.id)}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section for Non-Users */}
        {!user && (
          <div className="bg-indigo-50 rounded-xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Personalized Job Matches</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Create an account and upload your resume to get AI-powered job recommendations tailored specifically to your skills and career goals.
            </p>
            <button
              onClick={() => router.push('/auth/signup')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
            >
              Sign Up for Better Matches
            </button>
          </div>
        )}
      </main>
    </div>
  );
}