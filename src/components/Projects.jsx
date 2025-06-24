import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Star,
  Code,
  Heart,
  Shield,
  Home,
  Brain,
  FileText
} from 'lucide-react';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [likedProjects, setLikedProjects] = useState(new Set());
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 2,
      title: 'RentEasy',
      subtitle: 'Peer-to-Peer Rental Platform',
      description: 'A rental marketplace connecting people with items to rent and those who need them.',
      longDescription: 'Encourages a circular economy by enabling users to monetize unused items and offer affordable rentals.',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/25',
      tags: ['React', 'Node','Express', 'MongoDB', 'JWT Auth'],
      features: [
        'Secure payment processing',
        'Rating & review system',
        'Recommended item search',
        'Live chat interaction'
      ],
      image: '🏠',
      category: 'Web Platform'
    },
    {
      id: 3,
      title: 'NextRound',
      subtitle: 'AI Mock Interviewer',
      description: 'A smart platform for AI-driven mock interviews and feedback for job seekers.',
      longDescription: 'Simulates real interviews using  Gemini & OpenAI, giving detailed performance insights.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'shadow-purple-500/25',
      tags: ['React', 'Express', 'Firebase', 'OAuth', 'Speech API', 'Google Gemini', 'OpenAI'],
      features: [
        'AI-powered questioning',
        'Real-time feedback',
        'Performance analytics',
        'Individual-specific prep'
      ],
      image: '🧠',
      category: 'AI Web-Platform'
    },
    {
      id: 1,
      title: 'SafeRi',
      subtitle: 'Women Safety Path Recommendation',
      description: 'An intelligent safety-focused navigation platform that recommends the safest routes for women travelers.',
      longDescription: 'SafeRi uses AI to assess safety based on lighting, crowd, and incidents to guide women through safer routes.',
      icon: Shield,
      color: 'from-pink-500 to-rose-500',
      glowColor: 'shadow-pink-500/25',
      tags: ['React', 'Node', 'MySQL', 'Google Maps API'],
      features: [
        'AI-powered safety scoring',
        'Real-time crowd-sourced data',
        'Emergency contact integration',
        'Dark mode for night safety'
      ],
      image: '🛡️',
      category: 'AI Web-Platform'
    },
    {
      id: 4,
      title: 'Resume Screening App',
      subtitle: 'Intelligent Resume Analysis',
      description: 'AI-driven tool for parsing and ranking resumes automatically based on job fit.',
      longDescription: 'Uses NLP and ML to extract skills and rank candidates based on fit with job requirements.',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/25',
      tags: [ 'TypeScript','Python', 'TensorFlow', 'NLP', 'Flask'],
      features: [
        'Automated resume parsing',
        'Skills matching algorithm',
        'Candidate ranking system',
        'Bias-free screening'
      ],
      image: '📄',
      category: 'AI Web-Platform'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            Innovative solutions built with technologies, solving real-world problems.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`group px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 ${
                  activeProject === index
                    ? `bg-gradient-to-r ${project.color} text-white shadow-2xl ${project.glowColor}`
                    : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400'
                }`}
              >
                <span className="flex items-center">
                  <IconComponent className="w-5 h-5 mr-2" />
                  {project.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                activeProject === index
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95 absolute pointer-events-none'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-2xl ${project.glowColor}`}>
                      <project.icon className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400 text-lg">{project.subtitle}</p>
                      <p className="text-gray-500 text-sm">{project.category}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg">{project.description}</p>
                    <p className="text-gray-400">{project.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white flex items-center">
                      <Code className="w-5 h-5 mr-2 text-blue-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {/* {(project.title === 'RentEasy' || project.title === 'NextRound') && (
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition">
                        <ExternalLink className="w-5 h-5 mr-2 inline" />
                        Live Demo
                      </button>
                    )} */}
                    {/* <button className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-blue-400 transition">
                      <Github className="w-5 h-5 mr-2 inline" />
                      Source Code
                    </button> */}
                     <a
                      href={
                        project.title === 'RentEasy'
                          ? 'https://github.com/KrushnaHarde/rentEasy'
                          : project.title === 'NextRound'
                          ? 'https://github.com/Adit3107/NextRound'
                          : project.title === 'SafeRi'
                          ? 'https://github.com/Saanvi-B-star/Safe-routes-recommendation-project'
                          : project.title === 'Resume Screening App'
                          ? 'https://github.com/monalib2005/Resume-Screening'
                          : '#'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-blue-400 transition flex items-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                   </a>
                    <button
                      onClick={() => toggleLike(project.id)}
                      className="px-4 py-3 border-2 border-gray-600 rounded-full text-gray-300 hover:border-red-400 hover:text-red-400 transition"
                    >
                      <Heart className={`w-5 h-5 ${likedProjects.has(project.id) ? 'text-red-500 fill-current animate-pulse' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-8 rounded-3xl border border-gray-600/30 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-float">{project.image}</div>
                    <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full animate-pulse`}></div>
                  </div>
                  <div className="text-center text-gray-400 italic mt-6">
                    “Building the future one project at a time.”
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
