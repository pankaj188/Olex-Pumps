import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Agriculture from "./Agriculture/Agriculture";
import Residential from "./Residential/Residential";


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <div className="text-white text-xl font-semibold">
//           Your Logo
//         </div>

//         {/* Navbar Links (hidden on small and medium screens) */}
//         <div className={`hidden md:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : ''}`}>
//           <a href="#" className="text-white">Home</a>
//           <a href="#" className="text-white">About</a>
//           <a href="#" className="text-white">Services</a>
//           <a href="#" className="text-white">Contact</a>
//         </div>

//         {/* Mobile Menu Button (visible on small and medium screens) */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>

//       </div>

//       {/* Mobile Menu (hidden by default) */}
//       <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-gray-800 text-white p-4`}>
//         <a href="#" className="block py-2">Home</a>
//         <a href="#" className="block py-2">About</a>
//         <a href="#" className="block py-2">Services</a>
//         <a href="#" className="block py-2">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


const Navbar = () => {
    return(
            <div className="flex justify-evenly shadow-md bg-blue-900  m-1 ">
                    <div className="flex items-center md:place-items-center space-x-4 ">
                            <ul className="flex m-6  text-white text-4xl ">
                            <li className="px-40"><Link to="/">Home</Link></li>
                            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" >Products <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                            <li><Link to="/agriculture">Agriculture Pumps</Link></li>
                            <li><Link to="/residential">Residential Pumps</Link></li>
                             </ul>
                            </li>
                            <li className="px-40"><Link to="/about">About Us</Link></li>
                            <li className="px-18"><Link to="/contact">Contact Us</Link></li>         
                            </ul>
                    </div>
            </div>
    )
    };
    
    export default Navbar;











 

