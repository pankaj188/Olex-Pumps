import { Link } from "react-router-dom";
import { V50 } from "../../utility/constants";
import { V5 } from "../../utility/constants";
import { JANTA } from "../../utility/constants";
import { V4 } from "../../utility/constants";
import Footer from "../Footer";
import V50Agriculturepump from "./V50Agriculturepump";
import V5Agriculturepump from "./V5Agriculturepump";
import JantaAgriculturepump from "./JantaAgriculturepump";
import V4Agriculturepump from "./V4Agriculturepump";
const Agriculture = () => {
    return (
        <div className="">
            <div className="text-justify">
            <h1 className="text-center m-12 text-4xl md:text-6xl">Agricultural Pumps</h1>
            <p className="m-4 p-4 md:mx-28 my-8 text-xl md:text-2xl">Agricultural pumps are a crucial component in the agriculture industry, providing water for irrigation and other farming needs. There are various types, such as farm water pumps, irrigation water pumps, and booster pumps, each designed to meet specific needs. These pumps ensure a steady water supply to crops, improving their growth and yield. 
                The price of an agriculture water pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
            <div className="sm:flex">
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer ">
                <Link to="/V50Agriculturepump"><img src={V50}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-50 feet Per Stage Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/V5Agriculturepump"><img src={V5}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-5 Stainless Steel Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/JantaAgriculturepump"><img src={JANTA}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">Janta Series Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/V4Agriculturepump"><img src={V4}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-4 Stainless Steel Pumps</h2>
            </div>

            </div>
            
            
            
        </div>
        
    )
}

export default Agriculture;