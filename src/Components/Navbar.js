import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Agriculture from "./Agriculture/Agriculture";
import Residential from "./Residential/Residential";


// Navbar.js

// Navbar.js

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-lg font-bold">Your Logo</div>

//         {/* Remove md:flex to make it visible on all screen sizes */}
//         <div className="flex space-x-4">
//           <a href="#" className="text-white hover:text-gray-300">Home</a>
//           <a href="#" className="text-white hover:text-gray-300">About</a>
//           <a href="#" className="text-white hover:text-gray-300">Services</a>
//           <a href="#" className="text-white hover:text-gray-300">Contact</a>
//         </div>

//         {/* Add a responsive menu for smaller screens */}
//         <div className="md:hidden">
//           {/* You can use a library like react-icons for a hamburger icon */}
//           <button className="text-white">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
    return(
        <nav>
            <div className="flex justify-evenly shadow-md bg-blue-900  m-1 block 2xl:hidden ">
                    <div className="flex space-x-4 items-center md:place-items-center space-x-4 ">
                            <ul className="flex m-6  text-white text-2xl md:3xl lg:text-4xl  ">
                            <Link  to="/"><li className="px-10 md:px-40 hover:text-gray-400">Home</li></Link>
                            <li class="dropdown hover:text-gray-400"><a class="dropdown-toggle" data-toggle="dropdown" >Products <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                            <Link  to="/agriculture"><li className="text-black">Agriculture Pumps</li></Link>
                            <Link  to="/residential"><li className="text-black">Residential Pumps</li></Link>
                             </ul>
                            </li>
                            <Link  to="/about"><li className="px-10 md:px-40 hover:text-gray-400">About Us</li></Link>
                            <Link to="/contact"><li className="px-10 md:px-18 hover:text-gray-400 ">Contact Us</li></Link>         
                            </ul>
                    </div>
            </div>
            </nav>
    )
    };
    
    export default Navbar;











 

