import { V_5 } from "../../utility/constants";
import AgriculturePricelist from "./AgriculturePricelist";

const V5Agriculturepump = () => {
    return (
        <div>
            <div className="md:flex">
            <div className=" mx-6  ">
            <img className="md:mx-52" src={V_5}></img>
            </div>
            <div className="text-center mx-6 p-12">
            <h2 className=" p-2 md:text-6xl font-bold my-20 ">V-5 Stainless Steel Borewell Submersible Pumps</h2>
            <p className="md:text-4xl p-4">Agricultural Pumps | Agricultural Submersible Pumps</p>
            <p className="text-2xl md:px-40 py-6"> The price of an agriculture water pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <AgriculturePricelist/>

        </div>

    )
}

export default V5Agriculturepump;
