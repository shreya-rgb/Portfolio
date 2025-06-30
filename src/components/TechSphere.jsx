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
            // shape: "vring",
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







// import React, { useEffect, useState } from 'react';

// export default function TechSphere() {
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [categoryIndex, setCategoryIndex] = useState(0);

//   const quotes = [
//     "Code is like humor. When you have to explain it, it's bad.",
//     "Simplicity is the soul of efficiency.",
//     "First, solve the problem. Then, write the code.",
//     "Talk is cheap. Show me the code.",
//   ];

//   const categories = [
//     { label: "Frontend", items: ["React", "HTML", "CSS", "Tailwind"] },
//     { label: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL"] },
//     { label: "Tools", items: ["Git", "Postman", "Firebase", "GitHub"] },
//   ];

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://www.goat1000.com/tagcanvas.min.js';
//     script.async = true;
//     script.onload = () => {
//       if (window.TagCanvas) {
//         try {
//           window.TagCanvas.Start('myCanvas', 'tagList', {
//             textColour: '#ffffff',
//             outlineColour: '#0000',
//             reverse: true,
//             depth: 0.8,
//             maxSpeed: 0.05,
//             initial: [0.2, -0.1],
//             decel: 0.98,
//             fadeIn: 300,
//             wheelZoom: false,
//             dragControl: true,
//             textFont: 'Segoe UI, sans-serif',
//             textHeight: 18,
//             shape: 'vring',
//           });
//         } catch (e) {
//           console.log('TagCanvas error:', e);
//         }
//       }
//     };
//     document.body.appendChild(script);
//   }, []);

//   // Quote rotator
//   useEffect(() => {
//     const quoteTimer = setInterval(() => {
//       setQuoteIndex((prev) => (prev + 1) % quotes.length);
//     }, 4000);
//     return () => clearInterval(quoteTimer);
//   }, []);

//   // Category rotator
//   useEffect(() => {
//     const catTimer = setInterval(() => {
//       setCategoryIndex((prev) => (prev + 1) % categories.length);
//     }, 4000);
//     return () => clearInterval(catTimer);
//   }, []);

//   return (
//     <div className="flex items-center justify-center bg-black text-white px-8 py-4 min-h-screen space-x-8">

//       {/* Left: Quotes with blur effect */}
//       <div className="w-1/4 transition-all duration-300 ease-in-out blur-sm opacity-60 hover:blur-none hover:opacity-100 hover:scale-[1.02] cursor-default">
//         <p className="text-sm italic text-gray-300 transition-opacity duration-500">
//           “{quotes[quoteIndex]}”
//         </p>
//       </div>

//       {/* Center: Canvas */}
//       <div className="w-[400px] h-[400px] flex items-center justify-center">
//         <canvas
//           width="400"
//           height="300"
//           id="myCanvas"
//           className="m-0 p-0"
//         >
//           Your browser does not support canvas.
//         </canvas>
//       </div>

//       {/* Right: Animated tech categories */}
//       <div className="w-1/4 transition-all duration-300 ease-in-out blur-sm opacity-60 hover:blur-none hover:opacity-100 hover:scale-[1.02] cursor-default">
//         <h3 className="text-lg font-bold mb-1 text-blue-400">{categories[categoryIndex].label}</h3>
//         <ul className="list-disc list-inside text-sm text-gray-300">
//           {categories[categoryIndex].items.map((item) => (
//             <li key={item} className="opacity-90">{item}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Hidden Tag List */}
//       <div id="tagList" className="hidden">
//         <ul>
//           {[
//             'C++', 'Python', 'JavaScript', 'HTML', 'CSS',
//             'React.js', 'Node.js', 'Express.js', 'MongoDB',
//             'MySQL', 'Firebase', 'TailwindCSS', 'Git',
//             'GitHub', 'Postman', 'Bootstrap', 'REST APIs', 'Linux'
//           ].map((tech) => (
//             <li key={tech}><a href="#">{tech}</a></li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
