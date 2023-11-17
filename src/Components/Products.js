import { Link } from "react-router-dom";
import Agriculture from "./Agriculture/Agriculture";
import Residential from "./Residential/Residential";

const Products = () => {
    return (
        <div className="flex flex-wrap  m-2 "> 
            <div className="flex">
                <div className="mx-16 space-x-11 my-10 p-4 w-7/12 border-2 cursor-pointer shadow-md hover:bg-gray-200" ><Link to="/agriculture"><img className=""  src="https://d13bbii8ozdt01.cloudfront.net/uploads/2019/11/pump-listing-banner-agriculture-new_compressed.png"/></Link>
                <h2 className=" mx-16 my-1 p-6 text-4xl font-bold" >Agricultural Pumps</h2>
                <p className="">Agricultural pumps are a crucial component in the agriculture industry, providing water for irrigation and other farming needs. 
                    There are various types, such as farm water pumps,irrigation water pumps, and booster pumps, each designed to meet specific needs. 
                </p>
                </div>
                
                <div className="mx-28 space-x-10 my-10 w-7/12 p-4 shadow-md border-2 cursor-pointer hover:bg-gray-200"><Link to="/residential"> <img className="" src="https://d13bbii8ozdt01.cloudfront.net/uploads/2019/11/pump-listing-banner-residential-new_compressed.png"/></Link>
                <h2 className=" mx-16 my-1 p-6 text-4xl font-bold">Residential Pumps</h2>
                <p>Residential pumps are essential for homeowners who need to maintain and regulate the water pressure in their homes. A water pump for residential use can be used for various purposes, including providing drinking water, watering plants and gardens, 
                    filling swimming pools and hot tubs, and supporting multiple plumbing systems.</p>
                </div>
                
            </div>   
        </div>
    )
}

export default Products;