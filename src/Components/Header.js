import logo from "../images/olexlogo.png"
import { Link } from "react-router-dom";

const Header = () => {

    
return(
        <div className=" flex text-center md:bg-gray-50 w-72 md:w-full ">
                <div className="logo-container ">
                <Link to="/" ><img className="w-52  max-w-md h-48" alt= "logo" src={logo}/></Link>
                </div>
                <Link to="/"><div className="flex items-center md:place-items-center w-[300px] mt-20 m-2 text-xl md:text-3xl  font-bold ">Olex Pumps & Electricals LLP</div></Link>
                <div className=" flex invisible md:visible md:ml-50 xl:ml-[400px]  justify-start lg:justify-end ">
                     
                        <ul className="flex  pt-12 text-xl md:text-2xl">
                                <li className="px-8 font-bold">Contact Us
                                <h4 className="font-normal">+91-9773675780</h4>
                                </li>
                                <li className="px-10 font-bold">Email Us
                                <h4 className="font-normal">olexpumps@gmail.com</h4>
                                </li>           
                        </ul>
                </div>
                
        
        </div>
)
};

export default Header;