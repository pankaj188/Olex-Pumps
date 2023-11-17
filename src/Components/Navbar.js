import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Agriculture from "./Agriculture";
import Residential from "./Residential";

const Navbar = () => {

    
    return(
            <div className="flex justify-evenly shadow-md bg-blue-900">
                    <div className="flex items-center">
                            <ul className="flex m-6  text-white text-3xl ">
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











 

