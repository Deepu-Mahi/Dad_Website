import React from 'react';
import { Building2, Users, Award, Globe, ArrowRight, Hammer, Flame, Layers, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'BHEL',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      programs: ['SAP HCM']
    },
    {
      name: 'NTPC',
      logo: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      programs: ['SAP HCM']
    },
    {
      name: 'Coal India',
      logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      programs: ['SAP HCM']
    },
    {
      name: 'Singareni Collieries',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      programs: ['SAP HCM']
    },
    {
      name: 'NMDC',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      programs: ['SAP HCM']
    }
  ];

  const industries = [
    {
      name: 'Information Technology',
      icon: Globe,
      description: 'IT services, software development, and digital transformation'
    },
    {
      name: 'Mining',
      icon: Hammer,
      description: 'Coal, iron ore, and mineral extraction and processing'
    },
    {
      name: 'Oil & Gas',
      icon: Flame,
      description: 'Exploration, production, and refinery operations'
    },
    {
      name: 'Manufacturing',
      icon: Building2,
      description: 'Heavy machinery, equipment, and industrial products'
    },
    {
      name: 'Cement & Construction Materials',
      icon: Layers,
      description: 'Production and distribution of cement and related materials'
    },
    {
      name: 'Education & Training',
      icon: BookOpen,
      description: 'Corporate learning, academic institutions, and coaching'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      description: 'Consulting, legal, and business support services'
    }
  ];

  const stats = [
    { value: '70+', label: 'Companies Trained' },
    { value: '10000+', label: 'Professionals Certified' },
    { value: '7', label: 'Industries Served' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across various industries to deliver exceptional software training and drive digital transformation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Companies We've Trained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-gray-600 block mb-2">Programs Delivered:</span>
                    <div className="flex flex-wrap gap-2">
                      {client.programs.map((program, pIndex) => (
                        <span
                          key={pIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Companies Choose Us</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our proven track record of delivering results-driven training programs that directly impact business performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <Award className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-blue-100">Certified professionals with real-world experience</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <Users className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Customized Programs</h3>
                <p className="text-blue-100">Tailored training solutions for your specific needs</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6 mb-4">
                <Globe className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-blue-100">Measurable improvements in productivity and efficiency</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your organization achieve its training objectives and drive digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
