import logo from "../images/olexlogo.png"
import { Link } from "react-router-dom";

const Header = () => {

    
return(
        <div className=" flex  text-center bg-gray-50 w-72 md:w-full m-4 sm:m-2 ">
                <div className="logo-container ">
                <img className="w-52 max-w-sm max-w-md h-48" alt= "logo" src={logo}/>
                </div>
                <Link to="/products"><div className="flex items-center md:place-items-center w-[300px] m-12 text-xl sm:text-3xl  font-bold ">Olex Pumps & Electricals LLP</div></Link>
                <div className=" flex invisible md:visible md:ml-56 xl:ml-[400px]  justify-start lg:justify-end ">
                     
                        <ul className="flex  pt-12 text-2xl   ">
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