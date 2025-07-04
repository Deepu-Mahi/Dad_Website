import React from 'react';
import {
  Clock,
  Users,
  MapPin,
  Database,
  Code,
  Cloud,
  Calculator,
  BarChart,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Add this

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Database,
      title: 'SAP HCM',
      description:
        'Manage end-to-end HR operations including payroll, time, and personnel administration.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: Code,
      title: 'SAP FICO',
      description:
        'Handle financial accounting and controlling to drive organizational financial insights.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: Cloud,
      title: 'SAP SD',
      description:
        'Manage sales, order processing, and distribution to streamline customer transactions.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: Calculator,
      title: 'SAP MM',
      description:
        'Control procurement and inventory to ensure efficient materials management.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: BarChart,
      title: 'SAP PP',
      description:
        'Plan and manage production processes for optimized manufacturing workflows.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: Globe,
      title: 'SAP ABAP',
      description:
        'Develop custom programs and enhance SAP functionality using ABAP language.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
    {
      icon: Database,
      title: 'SAP BASIS',
      description:
        'Administer SAP systems, manage servers, and ensure smooth technical operations.',
      duration: '2 months',
      format: 'Online/In-person',
      participants: 'Up to 10',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Training{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to upskill your team with cutting-edge technologies and best practices
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <program.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{program.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-600 col-span-2">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{program.format}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Request This Program
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Programs CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Program?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Every organization has unique training needs. I can design and deliver custom training programs tailored specifically to your team's requirements and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Discuss Custom Training
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
