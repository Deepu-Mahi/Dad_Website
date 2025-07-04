import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, CheckCircle, Briefcase, Laptop } from 'lucide-react';

const Home: React.FC = () => {
  const programs = [
    {
      icon: Users,
      title: 'SAP HCM',
      description: 'Comprehensive SAP HCM training to streamline and elevate enterprise HR processes.',
      duration: '2 months',
    },
    {
      icon: Briefcase,
      title: 'SAP FICO',
      description: 'Financial accounting and controlling for enterprise operations.',
      duration: '2 months',
    },
    {
      icon: Laptop,
      title: 'SAP ABAP',
      description: 'Programming language for customizing and extending SAP systems.',
      duration: '2 months',
    },
  ];

  

  const stats = [
    { value: '10000+', label: 'Professionals Trained' },
    { value: '70+', label: 'Companies Served' },
    { value: '5+', label: 'Training Programs' },
    { value: '75%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">MadhuSudhan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Corporate Software Trainer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              SAP HCM | Personnel Administration | Organizational Management | Time Management | Payroll
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Empowering teams with practical software expertise through hands-on training programs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/programs"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Teams Through Expert Training
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 25 years of experience training Fortune 70 companies, I specialize in delivering practical, hands-on software training that drives real business results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I focus on SAP HCM, guiding teams through core modules like Personnel Administration, Organizational Management, Time Management, and Payroll — turning technical knowledge into business impact.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>SAP-Certified Professional – Certified by SAP AG in HCM Modules
</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <Award className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Award-Winning SAP HCM Trainer</h3>
                <p className="text-blue-100 mb-6">
                  Recognized for excellence in corporate training and curriculum development across multiple industries — with deep expertise in SAP HCM Schema & PCR, and honored as Best Employee, Best Delivery Consultant, and Best Troubleshooter.
                </p>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  <span>10000+ Professionals Trained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to upskill your team with the latest technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold">
                    Duration: {program.duration}
                  </span>
                  <Link
                    to="/programs"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

     

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Train Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can upskill your workforce and drive business success through expert software training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;