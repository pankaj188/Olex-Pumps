import { Link } from "react-router-dom";
import Agriculture from "./Agriculture/Agriculture";
import Residential from "./Residential/Residential";

const Products = () => {
    return (
        <div className="flex flex-wrap sm:m-2 "> 
            <div className="sm:flex ">
                <div className=" m-2 sm:mx-16 space-x-11 my-10 p-4 w-[320px] md:w-7/12 border-2 cursor-pointer shadow-md hover:bg-gray-200" ><Link to="/agriculture"><img className=""  src="https://d13bbii8ozdt01.cloudfront.net/uploads/2019/11/pump-listing-banner-agriculture-new_compressed.png"/></Link>
                <h2 className=" mx-16 my-1 p-6 text-xl sm:text-4xl font-bold" >Agricultural Pumps</h2>
                <p className="text-sm sm:text-xl">Agricultural pumps are a crucial component in the agriculture industry, providing water for irrigation and other farming needs. 
                    There are various types, such as farm water pumps,irrigation water pumps, and booster pumps, each designed to meet specific needs. 
                </p>
                </div>
                
                <div className=" m-2 sm:mx-24 space-x-10 my-10 w-[320px] md:w-7/12 p-4 shadow-md border-2 cursor-pointer hover:bg-gray-200"><Link to="/residential"> <img className="" src="https://d13bbii8ozdt01.cloudfront.net/uploads/2019/11/pump-listing-banner-residential-new_compressed.png"/></Link>
                <h2 className=" mx-16 my-1 p-6 text-xl font-bold sm:text-4xl">Residential Pumps</h2>
                <p className="text-sm sm:text-xl">Residential pumps are essential for homeowners who need to maintain and regulate the water pressure in their homes. A water pump for residential use can be used for various purposes, including providing drinking water, watering plants and gardens, 
                    filling swimming pools and hot tubs, and supporting multiple plumbing systems.</p>
                </div>
                
            </div>   
        </div>
    )
}

export default Products;