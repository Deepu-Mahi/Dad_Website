import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">MadhuSudhan</h2>
                <p className="text-gray-400">Corporate Software Trainer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering teams with practical software expertise through comprehensive training programs in SAP, Python, Cloud technologies, and more.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:madhupayroll@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+919912223430" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/madhu-sudhan-8b717012/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">About</Link>
              <Link to="/programs" className="block text-gray-300 hover:text-white transition-colors duration-200">Programs</Link>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Corporate Training</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Online Sessions</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Custom Programs</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Consultation</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mahi Supradeep. All rights reserved. Available for remote or on-site training.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;