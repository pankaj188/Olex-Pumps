import copyright from "./copyright";

// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white m-2 p-12 sm:w-[300px] md:w-full">
      <div className="container mx-auto ">
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Social Media Section */}
          <div className="mb-8 md:mb-0 ">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-wrap space-x-4">
              <ul className="">
              <li className=""><a href="#" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>Facebook</li>
              
              <li className=""><a href="#" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>Twitter</li>
              <li className=""> <a href="#" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>Instagram</li>
              </ul>
              
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Other Sections */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Sections</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Contact Us</a>
              </li>
              {/* Add more sections as needed */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <p>123 Main Street</p>
            <p>Cityville, State 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//     return (
    
//     <div className="border-black border-8 grid-cols-4 gap-4  m-4 sm:m-2 w-[800px] md:w-full bg-blue-900  text-white md:flex justify-evenly  text-md-start  ">
     
//           <div className=" w-96 ml-80 sm:ml-40 p-4 justify-center m-4 ">
            
//             <h6 className="text-uppercase fw-bold p-4">Company name</h6>
//             <p>
//               Olex Pumps & Electricals LLP All Right Reserved. You can reach out to us anytime.
//             </p>
//           </div>
        
//           <div className="w-96 p-2 m-4 ml-80 sm:ml-40 ">
           
//             <h6 className="text-uppercase text-center fw-bold  p-4">Agriculture Products</h6>
//             <h2  className="text-white p-1">V5Agriculturepump</h2>
//             <h2 className="text-white p-1">V4Agriculturepump</h2>
//             <h3  className="text-white p-1">V50Agriculturepump</h3>
//             <h4  className="text-white p-1">JantaAgriculturepump</h4>
           
//           </div>
    
//           <div className="w-96 p-2 text-center m-4 ml-80 sm:ml-40 ">
           
//           <h6 className="text-uppercase text-center fw-bold  p-4">Residential Products</h6>
//             <h2  className="text-white p-1">CFMSMBResidentialpump</h2>
//             <h2 className="text-white p-1">DMBResidentialpump</h2>
//             <h3  className="text-white p-1">JCPResidentialpump</h3>
//             <h4  className="text-white p-1">V4Agriculturepump</h4>
//           </div>
       
//           <div className="w-96 p-4 text-center m-4 ml-80 sm:ml-40 ">
           
//             <h6 className="text-uppercase fw-bold p-4">Contact</h6>
//             <p><i className="fas fa-home mr-3"></i> 7667120905</p>
//             <p><i className="fas fa-envelope mr-3"></i> isapankaj@gmail.com</p>
//             <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
//             <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
//           </div>
          
//         <copyright/>
 
//     </div>
//     )
// }

// export default Footer;


