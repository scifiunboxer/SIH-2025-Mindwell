import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 text-center transform transition-transform duration-300 hover:-translate-y-2">
    <div className="inline-block p-4 bg-white/50 rounded-xl mb-4 shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/30 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pt-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="w-full animate-fade-in-up">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">
            A Safe Space for Your Mind.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            MindWell is a confidential and supportive platform for students, designed to help you navigate the challenges of college life. Your mental wellness is our priority.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 transform transition-transform duration-300 hover:scale-105">
              Get Started
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-purple-700 bg-white/50 rounded-xl shadow-lg hover:bg-white/80 transform transition-transform duration-300 hover:scale-105">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* THE FIX IS HERE. I HAVE COMPLETELY REWRITTEN THIS SECTION. */}
      <section className="py-8 bg-white/20 backdrop-blur-lg overflow-x-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="mx-8 text-xl font-semibold text-gray-700">Your mental health is a priority.</span>
            <span className="mx-8 text-xl font-semibold text-purple-700">You are not alone.</span>
            <span className="mx-8 text-xl font-semibold text-gray-700">It's okay to ask for help.</span>
            <span className="mx-8 text-xl font-semibold text-purple-700">Strength is seeking support.</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="mx-8 text-xl font-semibold text-gray-700">Your mental health is a priority.</span>
            <span className="mx-8 text-xl font-semibold text-purple-700">You are not alone.</span>
            <span className="mx-8 text-xl font-semibold text-gray-700">It's okay to ask for help.</span>
            <span className="mx-8 text-xl font-semibold text-purple-700">Strength is seeking support.</span>
          </div>
        </div>
      </section>
      <style>{`
        .marquee {
          display: flex;
          width: 200%; /* This is twice the screen width */
          animation: scroll-left-to-right 40s linear infinite;
        }
        .marquee-content {
          flex-shrink: 0;
          width: 100%; /* This is the full screen width */
          display: flex;
          justify-content: space-around;
        }
        @keyframes scroll-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Core Features</h2>
            <p className="mt-4 text-lg text-gray-600">Tools designed to support you, whenever you need them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>}
              title="AI First-Aid"
              description="Get immediate, supportive guidance from our trained AI assistant, 24/7."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
              title="Confidential Booking"
              description="Schedule sessions with on-campus counselors easily and privately."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
              title="Peer Support Forum"
              description="Connect with fellow students in a safe, anonymous, and moderated space."
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="p-8 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
            <FaqItem question="Is this service truly confidential?" answer="Absolutely. Confidentiality is our highest priority. Your interactions are encrypted and secure." />
            <FaqItem question="How is this different from other wellness apps?" answer="MindWell is designed specifically for the student experience, integrating with your institution's resources." />
            <FaqItem question="Is the AI assistant a real therapist?" answer="No. Our AI is a first-aid tool for immediate coping strategies, not a substitute for professional therapy." />
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-4 text-center border-t border-white/20">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-800">MindWell</h3>
          <p className="mt-2 text-gray-600">Built by a passionate team for SIH 2025.</p>
          <div className="mt-4 flex justify-center space-x-4 text-gray-500">
            <p>&copy; 2025 MindWell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;