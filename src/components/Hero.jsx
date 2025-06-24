import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Code, Terminal } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Computer Engineering Student",
    "Full Stack Developer",
    "Problem Solver",
    "Code Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-gray-600/30 animate-float">{'</>'}</div>
        <div className="absolute top-3/4 right-1/4 text-gray-600/30 animate-bounce delay-500">{'{}'}</div>
        <div className="absolute top-1/2 right-1/3 text-gray-600/30 animate-pulse delay-1000">console.log()</div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Profile Image */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
  <img
    src="/src/assets/profile.jpg" // Make sure your image is saved here
    alt="Shreya Datir"
    className="object-cover w-full h-full"
  />
</div>

        </div>
        
        {/* Name */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Shreya Datir
          </span>
        </h1>
        
        {/* Dynamic Role */}
       <div className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <p className="text-xl md:text-2xl text-gray-300 font-light flex flex-wrap justify-center gap-4">
    <Terminal className="w-6 h-6 text-green-400 mr-2" />
    {roles.map((role, idx) => (
      <span key={idx} className="px-2 py-1 bg-gray-700 rounded-full text-sm md:text-base">{role}</span>
    ))}
  </p>
</div>

        
        {/* Tagline */}
        <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Passionate about creating innovative solutions and turning complex problems into elegant code. 
          Building the future, one line at a time.
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
  href="https://myssdportfolio.netlify.app/Shreya_Datir_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
>
  <span className="flex items-center">
    <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
    Resume
  </span>
</a>

          
          <button className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
            <span className="flex items-center">
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </span>
          </button>
        </div>
        
        {/* Social Links */}
        <div className={`flex space-x-8 mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
             { icon: Github, href: "https://github.com/shreya-rgb", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shreya-datir-526002289/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shreyadatir88@gmail.com", label: "Email" }
].map(({ icon: Icon, href, label }, index) => (
            <a
              key={label}
              href={href}
              className="group relative p-4 bg-gray-800/50 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-typewriter {
          animation: typewriter 2s steps(20) infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}