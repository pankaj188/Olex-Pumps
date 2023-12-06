import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <div className="flex justify-evenly shadow-md bg-blue-900  ">
                    <div className="flex space-x-4 md:place-items-center ">
                            <ul className="flex m-4  text-white  p-2  text-xl lg:text-3xl  ">
                            <Link to="/"><li className="px-4 md:px-40 hover:text-gray-400 ">Home</li></Link>
                            <li class="dropdown hover:text-gray-400 "><a class="dropdown-toggle" data-toggle="dropdown" >Products <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                            <Link  to="/agriculture"><li className="text-black ">Agriculture Pumps</li></Link>
                            <Link  to="/residential"><li className="text-black">Residential Pumps</li></Link>
                             </ul>
                            </li>
                            <Link  to="/about"><li className="px-4 md:px-40 hover:text-gray-400 ">About Us</li></Link>
                            <Link to="/contact"><li className="px-4 md:px-18 hover:text-gray-400 ">Contact Us</li></Link>         
                            </ul>
                    </div>
            </div>
            </nav>
    )
    };
    
    export default Navbar;











 

