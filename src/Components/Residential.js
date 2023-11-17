import {CFMSMB } from "../utility/constants";
import { CentrifugalDeep } from "../utility/constants";
import { DMB } from "../utility/constants";
import { RustFreeV4 } from "../utility/constants";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Residential = () => {
    return (
        <div className="">
            <h1 className="text-center m-12 text-6xl">Residential Pumps</h1>
            <p className="mx-28 my-8 text-2xl ">Residential pumps are essential for homeowners who need to maintain and regulate the water pressure in their homes. 
            A water pump for residential use can be used for various purposes, including providing drinking water, watering plants and gardens, filling swimming pools and hot tubs, and supporting multiple plumbing systems.</p>
            
            <div className="flex ">
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
                <Link to="/residentialpricelist"><img src={CFMSMB}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-50 feet Per Stage Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/residentialpricelist"><img src={CentrifugalDeep}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-5 Stainless Steel Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/residentialpricelist"><img src={RustFreeV4}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">Janta Series Borewell Submersible Pumps</h2>
            </div>
            <div className=" p-4 m-10 shadow-md bg-gray-50 hover:bg-gray-200 cursor-pointer">
            <Link to="/residentialpricelist"><img src={DMB}></img></Link>
                <h2 className="text-center p-2 text-2xl font-bold ">V-4 Stainless Steel Pumps</h2>
            </div>

            </div>
            
            
            
        </div>
        
    )
}

export default Residential;