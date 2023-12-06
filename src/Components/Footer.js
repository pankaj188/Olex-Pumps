import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

  return (
    <footer className="bg-blue-900 text-white p-4 sm:w-[300px] md:w-full">
      <div className="container mx-auto ">
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Social Media Section */}
          <div className="mb-8 md:mb-0 ">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-wrap space-x-4">
              <ul className="">
              <li className=""><a href="https://www.facebook.com/profile.php?id=100091877156188" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faFacebook} /></a>Facebook</li>
              
              <li className=""><a href="https://twitter.com/olexpumps" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faTwitter} />
              </a>Twitter</li>
              <li className=""> <a href="https://www.instagram.com/olexpumps/?next=%2F" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>Instagram</li>
              <li className=""> <a href="https://www.linkedin.com/company/olex-pumps/mycompany/verification/" className="hover:text-gray-300 pr-4">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>LinkedIn</li>
              </ul>
              
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Other Sections */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Sections</h2>
            <ul>
              <li>
              <Link  to="/"><li className="hover:text-gray-300 ">Home</li></Link>
              </li>
              <li>
              <Link  to="/about"><li className="hover:text-gray-300 ">About Us</li></Link>
              </li>
              <li>
              <Link  to="/contact"><li className="hover:text-gray-300 ">Contact Us</li></Link>
              </li>
              {/* Add more sections as needed */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>Email : <a href="mailto:olexpumps@gmail.com" className="text-white hover:text-gray-300 m-2 text-xl">olexpumps@gmail.com</a></p>
            <p>Phone : <a href="tel:+91-9773675780" className="text-white hover:text-gray-300 m-2">+91-9773675780</a></p>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <p>Office: </p>
            <p>1st Floor, Green Avenue, Bhagwat Nagar, Kumhrar, Patna, Bihar 820006</p>
          </div>
          
        </div>
        <div className="text-center mt-14 sm:text-lg md:text-2xl">© 2023 Olex Pumps LLP. All Right Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;