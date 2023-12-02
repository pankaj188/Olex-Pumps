import { V4_Stainless } from "../../utility/constants";
import ResidentialPricelist from "./ResidentialPricelist";

const V4Residentialpump = () => {
    return (
        <div>
            <div className="md:flex">
            <div className=" mx-6  ">
            <img className="md:mx-52" src={V4_Stainless}></img>
            </div>
            <div className="text-center mx-6 p-12">
            <h2 className=" p-2 md:text-6xl font-bold my-20 ">Rust free V4- Stainless Steel Pumps</h2>
            <p className="md:text-4xl p-4">Water Pressure Pumps Residential | Residential Submersible Pump - Powerful Residential Water Pump</p>
            <p className="text-2xl md:px-40 py-6"> The price of an Residential Pressure Pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <ResidentialPricelist/>

        </div>

    )
}

export default V4Residentialpump;
