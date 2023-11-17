import logo from "../images/olexlogo.png"
import { Link } from "react-router-dom";

const Header = () => {

    
return(
        <div className="flex justify-between bg-gray-50">
                <div className="logo-container">
                <img className="w-52 h-48" alt= "logo" src={logo}/>
                
                </div>
                <div className="flex items-center">
                <Link to="/products"><h2 className="mr-[700px] text-3xl font-bold ">Olex Pumps & Electricals LLP</h2></Link>
                        <ul className="flex mx-12 p-6 text-2xl">
                                <li className="px-8 font-bold">Contact Us
                                <h4 className="font-normal">7667120905</h4>
                                </li>
                                <li className="px-10 m-1  font-bold">Email Us
                                <h4 className="font-normal">isapankaj@gmail.com</h4>
                                </li>     
                                
                        </ul>
                </div>
                
        
        </div>
)
};

export default Header;