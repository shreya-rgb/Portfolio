import React, { useEffect } from 'react';

export default function TechSphere() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.goat1000.com/tagcanvas.min.js';
    script.async = true;
    script.onload = () => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas.Start('myCanvas', 'tagList', {
            textColour: '#ffffff',
            outlineColour: '#0000',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            initial: [0.2, -0.1],
            decel: 0.98,
            fadeIn: 300,
            wheelZoom: false,
            dragControl: true,
            textFont: 'Segoe UI, sans-serif',
            textHeight: 18,
          });
        } catch (e) {
          console.log('TagCanvas error:', e);
        }
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center py-0 bg-black text-white">
      {/* <h3 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
        Technologies I Use
      </h3> */}

      <canvas
        width="400"
        height="400"
        id="myCanvas"
        className="mb-6"
      >
        Your browser does not support canvas.
      </canvas>

      <div id="tagList" className="hidden">
        <ul>
          {[
            'C++', 'Python', 'JavaScript', 'HTML', 'CSS',
            'React.js', 'Node.js', 'Express.js', 'MongoDB',
            'MySQL', 'Firebase', 'TailwindCSS', 'Git',
            'GitHub', 'Postman', 'Bootstrap', 'REST APIs', 'Linux'
          ].map((tech) => (
            <li key={tech}><a href="#">{tech}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
