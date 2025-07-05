import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    trainingType: '',
    teamSize: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

    .then(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        trainingType: '',
        teamSize: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again!');
    });
  };

  const trainingTypes = [
    'SAP HCM',
    'SAP FICO',
    'SAP SD',
    'SAP MM',
    'SAP PP',
    'SAP ABAP',
    'SAP BASIS',
    'Others(please Share in down describe your needs box)'
  ];

  const teamSizes = [
    '0-1 people',
    '1-2 people',
    '2-3 people',
    '3-5 people',
    '5-10 people'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your team's capabilities? Let's discuss how our training programs can drive your business success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white h-fit">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4"><Mail className="h-6 w-6" /></div>
                  <div><div className="font-semibold">Email</div><div className="text-blue-100">madhupayroll@gmail.com</div></div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4"><Phone className="h-6 w-6" /></div>
                  <div><div className="font-semibold">Phone</div><div className="text-blue-100">+91 9948932100</div></div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4"><MapPin className="h-6 w-6" /></div>
                  <div><div className="font-semibold">Location</div><div className="text-blue-100">Hyderabad, India</div><div className="text-blue-200 text-sm">Remote & on-site</div></div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4"><Clock className="h-6 w-6" /></div>
                  <div><div className="font-semibold">Response Time</div><div className="text-blue-100">Within 24 hours</div></div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/madhu-sudhan-8b717012/" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition"><Linkedin className="h-5 w-5" /></a>
                  <a href="mailto:madhupayroll@gmail.com" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition"><Mail className="h-5 w-5" /></a>
                  <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition"><Calendar className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Why Choose Our Training?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><CheckCircle className="text-green-600 h-5 w-5 mr-3" /> Certified by SAP AG</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 h-5 w-5 mr-3" /> 25+ years experience</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 h-5 w-5 mr-3" /> 10000+ professionals trained</li>
                <li className="flex items-center"><CheckCircle className="text-green-600 h-5 w-5 mr-3" /> 75% success rate</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Training Consultation</h2>
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 border rounded-lg" />
                  <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-3 border rounded-lg" />
                  <input name="company" required value={formData.company} onChange={handleChange} placeholder="Company name" className="w-full px-4 py-3 border rounded-lg" />
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 border rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select name="trainingType" required value={formData.trainingType} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select a program</option>
                    {trainingTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
                  </select>
                  <select name="teamSize" required value={formData.teamSize} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select team size</option>
                    {teamSizes.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>
                <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Describe your needs..." className="w-full px-4 py-3 border rounded-lg resize-none" />
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition">
                  <Send className="h-5 w-5 inline mr-2" /> Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Training Formats</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Online live sessions via Zoom/Teams</li>
                  <li>• On-site training at your location</li>
                  <li>• Hybrid training programs</li>
                  <li>• Self-paced learning modules</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Next Steps</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free consultation call within 24 hours</li>
                  <li>• Custom training proposal</li>
                  <li>• Flexible scheduling options</li>
                  <li>• Post-training support included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
