// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur border-b border-gray-800 shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white">
//           <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//             Shreya
//           </span>
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="hover:text-blue-400 transition-all duration-300"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4">
//           <ul className="flex flex-col space-y-4 text-gray-300 font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block hover:text-blue-400 transition-all duration-300"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
