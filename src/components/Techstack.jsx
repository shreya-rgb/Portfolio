import React, { useState, useEffect, useRef } from 'react';
import { Code, Settings, Server, Brain } from 'lucide-react';

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Technologies I work on during my learning journey and project experience.
          </p>
          <br />
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Box 1 - From Left */}
          <div
            className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Code className="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-gray-300 text-sm">C++, Java, Python, JavaScript, HTML/CSS</p>
          </div>

          {/* Box 2 - From Left */}
          <div
            className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Settings className="w-8 h-8 mx-auto mb-3 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Frameworks & Tools</h3>
            <p className="text-gray-300 text-sm">React.js, Node.js, Express.js, TailwindCSS, GitHub, Postman, REST APIs</p>
          </div>

          {/* Box 3 - From Right */}
          <div
            className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Brain className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-2">Core Areas</h3>
            <p className="text-gray-300 text-sm">DSA, Web Development, Basic Machine Learning</p>
          </div>

          {/* Box 4 - From Right */}
          <div
            className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Server className="w-8 h-8 mx-auto mb-3 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <p className="text-gray-300 text-sm">MongoDB, MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
