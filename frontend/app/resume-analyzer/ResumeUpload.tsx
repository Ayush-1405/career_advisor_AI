
'use client';

import { useState } from 'react';

interface ResumeUploadProps {
  onStartAnalysis: () => void;
}

export default function ResumeUpload({ onStartAnalysis }: ResumeUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Resume</h2>
          <p className="text-gray-600">Support for PDF, DOC, and DOCX files up to 10MB</p>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragOver ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
            <i className="ri-upload-cloud-line text-indigo-600 text-2xl"></i>
          </div>
          {uploadedFile ? (
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">File Selected</p>
              <p className="text-gray-600 mb-4">{uploadedFile.name}</p>
              <button
                onClick={() => setUploadedFile(null)}
                className="text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Choose Different File
              </button>
            </div>
          ) : (
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Drag and drop your resume here
              </p>
              <p className="text-gray-600 mb-4">or</p>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <span className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 whitespace-nowrap">
                  Browse Files
                </span>
              </label>
            </div>
          )}
        </div>

        {uploadedFile && (
          <div className="mt-8 text-center">
            <button
              onClick={onStartAnalysis}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 cursor-pointer whitespace-nowrap"
            >
              Start AI Analysis
            </button>
          </div>
        )}
      </div>

      {/* Sample Analysis Preview */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <i className="ri-check-line text-green-600"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Resume Score</h4>
              <p className="text-gray-600 text-sm">Overall rating based on industry standards</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-lightbulb-line text-blue-600"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Improvement Suggestions</h4>
              <p className="text-gray-600 text-sm">Specific recommendations to enhance your resume</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="ri-bar-chart-line text-purple-600"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Skills Analysis</h4>
              <p className="text-gray-600 text-sm">Detailed breakdown of your technical skills</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="ri-search-line text-orange-600"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">ATS Optimization</h4>
              <p className="text-gray-600 text-sm">Tips to pass applicant tracking systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
