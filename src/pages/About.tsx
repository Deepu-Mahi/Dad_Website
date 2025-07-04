import React from 'react';
import { Award, Users, Target, CheckCircle, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const certifications = [
    'SAP-Certified Professional – Certified by SAP AG in HCM Modules'
  ]

  const industries = [
  'Information Technology',
  'Mining',
  'Oil & Gas',
  'Manufacturing',
  'Cement & Construction Materials',
  'Education & Training',
  'Professional Services',
];


  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> MadhuSudhan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through expert software training and empowering teams to achieve their full potential
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-64 h-64 rounded-2xl mx-auto flex items-center justify-center mb-8 lg:mb-0">
              <div className="text-white text-6xl font-bold">MS</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate corporate software trainer with over 25 years of experience empowering teams across Fortune 70 companies and fast-growing organizations to transform their operations through targeted, hands-on SAP training.</p>
            <p className="text-lg text-gray-600 mb-6">
              My journey started in software development, where I quickly realized my true passion was in mentoring and enabling others. That insight led me into the world of corporate training — a space where I could combine my technical expertise with a deep commitment to impactful learning. </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, I specialize in SAP HCM, FICO, and ABAP, delivering practical, real-world training that helps professionals not just learn — but master — the skills needed to drive meaningful business outcomes. Whether it's streamlining HR operations, enhancing financial processes, or customizing enterprise solutions, I bring a results-driven approach backed by industry recognition, including multiple awards for excellence in delivery, consulting, and problem-solving. </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">10000+</div>
                  <div className="text-gray-600 text-sm">Professionals Trained</div>
                </div>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <div className="font-semibold text-gray-900">25+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Mission</h2>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            To bridge the gap between complex SAP systems and practical business use. I believe that with the right guidance and hands-on approach, every team can confidently master SAP tools — not just to learn, but to create real impact. I’m committed to making software training clear, effective, and directly aligned with business goals.

</p>
        </div>

        {/* Experience & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hands-On Learning</h3>
                  <p className="text-gray-600">Every session includes practical exercises and real-world scenarios to ensure immediate application.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customized Content</h3>
                  <p className="text-gray-600">Training programs tailored to your specific business needs and existing skill levels.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Post-training support and resources to ensure continued learning and implementation success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600">Focus on measurable outcomes and business impact, not just knowledge transfer.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Achievements</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Excellence in Training Award</div>
                    <div className="text-gray-600 text-sm">Corporate Learning Association </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">75% Training Success Rate</div>
                    <div className="text-gray-600 text-sm">Based on post-training assessments</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Top-Rated Instructor</div>
                    <div className="text-gray-600 text-sm">4.9/5 average rating across all programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-gray-700 font-medium">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-3 h-3 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;