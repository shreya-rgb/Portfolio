import React, { useState, useEffect, useRef } from "react";
import { Brain, Target, Users, Coffee, Code } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: Brain,
      title: "Problem Solver",
      description:
        "Enjoy solving algorithmic challenges with logical and efficient solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Consistently focus on writing clean code and completing projects effectively.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Comfortable working in teams and communicating ideas clearly.",
    },
    {
      icon: Coffee,
      title: "Curious Learner",
      description:
        "Always exploring new tech stacks and adapting to evolving trends.",
    },
  ];

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
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Who I Am</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Computer Engineering student at PICT with a 9.86 CGPA and
                a deep interest in full-stack development and solving real-world
                problems with tech. With 500+ DSA problems solved on various
                platforms like LeetCode, CodeChef, HackerRank, I bring a strong
                foundation in logic and coding.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’ve worked on impactful projects like SafeRi (a women safety
                app with AI-based route guidance), RentEasy (a peer-to-peer
                rental platform), and more. I'm always learning, building, and
                pushing my limits.
              </p>
            </div>

            <div>
              <br />
              <br />
              <p className="text-gray-300 text-lg leading-relaxed">
                Learning and working with technology to build practical and
                efficient solutions.....
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 p-5 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <IconComponent className="w-6 h-6 text-purple-400 mb-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <h4 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
