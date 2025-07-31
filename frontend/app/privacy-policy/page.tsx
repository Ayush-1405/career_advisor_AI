'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" style={{fontFamily: 'Pacifico, serif'}}>
                  CareerAI
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Home</Link>
              <Link href="/resume-analyzer" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Resume Analyzer</Link>
              <Link href="/career-advisor" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Career Advisor</Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 cursor-pointer">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">Sign In</button>
              </Link>
              <Link href="/auth/signup">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer whitespace-nowrap">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-indigo-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-700 mb-8">
                CareerAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered career guidance platform. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Professional information including work experience, education, and skills</li>
                <li>Resume content and career-related documents</li>
                <li>Career preferences and job search criteria</li>
                <li>Account credentials and profile information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Usage Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you use our service:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and interaction data</li>
                <li>Log files and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Provide AI-powered resume analysis and career guidance</li>
                <li>Match you with relevant job opportunities</li>
                <li>Improve our services and develop new features</li>
                <li>Send you service-related communications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Service Providers</h3>
              <p className="text-gray-700 mb-6">
                We may share your information with trusted third-party service providers who assist us in operating our platform, conducting business, or serving users. These parties are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Business Transfers</h3>
              <p className="text-gray-700 mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3 Legal Requirements</h3>
              <p className="text-gray-700 mb-8">
                We may disclose your information if required by law, regulation, legal process, or governmental request, or if we believe disclosure is necessary to protect our rights, property, or safety, or that of others.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement robust security measures to protect your information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training on data protection</li>
                <li>Secure data centers with physical and digital safeguards</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience. These technologies help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze usage patterns and improve our services</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
              <p className="text-gray-700 mb-8">
                You can control cookie preferences through your browser settings, though disabling cookies may affect platform functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
              <p className="text-gray-700 mb-8">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-8">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-8">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-8">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Email:</strong> privacy@careerai.com</li>
                  <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                  <li><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94107</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'Pacifico, serif'}}>CareerAI</h3>
              <p className="text-gray-400">AI-powered career guidance platform helping professionals achieve their career goals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resume-analyzer" className="hover:text-white cursor-pointer">Resume Analysis</Link></li>
                <li><Link href="/career-advisor" className="hover:text-white cursor-pointer">Career Guidance</Link></li>
                <li><Link href="/skills-assessment" className="hover:text-white cursor-pointer">Skills Assessment</Link></li>
                <li><Link href="/job-matching" className="hover:text-white cursor-pointer">Job Matching</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@careerai.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CareerAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}