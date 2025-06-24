import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg md:text-xl font-light italic mb-6 text-gray-400 max-w-3xl mx-auto">
          “The best way to predict the future is to create it. I'm passionate about building technology that makes a positive impact on people's lives.”
        </p>

        <div className="flex justify-center gap-6 my-4">
          <a
            href="https://github.com/shreya-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shreya-datir-526002289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:shreyadatir88@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Shreya Datir. All rights reserved.</p>
      </div>
    </footer>
  );
}
