import {CFMSMB } from "../../utility/constants";
import { CentrifugalDeep } from "../../utility/constants";
import { DMB } from "../../utility/constants";
import { RustFreeV4 } from "../../utility/constants";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import CFMSMBResidentialpump from "./CFMSMBResidentialpump";
import DMBResidentialpump from "./DMBResidentialpump";
import { JCP } from "../../utility/constants";
import V4Residentialpump from "./V4Residentialpump";
const Residential = () => {
    return (
        <div className="">
            <h1 className="text-center m-12 text-4xl md:text-6xl">Residential Pumps</h1>
            <p className="m-4 md:mx-28 my-8 text-xl md:text-2xl p-4">Residential pumps are essential for homeowners who need to maintain and regulate the water pressure in their homes. 
            A water pump for residential use can be used for various purposes, including providing drinking water, watering plants and gardens, filling swimming pools and hot tubs, and supporting multiple plumbing systems.</p>
            
            <div className="sm:flex text-justify">
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
                <Link to="/CFMSMBResidentialpump"><img src={CFMSMB}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">CFMSMB Series – Water Pressure Pump</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/JCPResidentialpump"><img src={CentrifugalDeep}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">JCP Centrifugal Deep Well Jet Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/V4Residentialpump"><img src={RustFreeV4}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">Rust free V4- Stainless Steel Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/DMBResidentialpump"><img src={DMB}></img></Link>
                <h2 className="text-center p-2 text-2JCPxl font-bold ">DMB Series Heavy Duty Pumps</h2>
            </div>

            </div>
            
            
            
        </div>
        
    )
}

export default Residential;