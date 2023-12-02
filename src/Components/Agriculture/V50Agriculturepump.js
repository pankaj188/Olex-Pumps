import { V_50 } from "../../utility/constants";
import AgriculturePricelist from "./AgriculturePricelist";
const V50Agriculturepump = () => {
    return (
        <div>
            <div className="md:flex p-2">
            <div className=" md:mx-6 py-2 ">
            <img className="md:mx-52" src={V_50}></img>
            </div>
            <div className="text-center mx-6 p-12">
            <h2 className=" p-2 md:text-6xl font-bold my-20 ">V-50 feet Per Stage Borewell Submersible Pumps</h2>
            <p className="md:text-4xl p-4">Agricultural Pumps | Agricultural Submersible Pumps</p>
            <p className="text-2xl md:px-40 py-6"> The price of an agriculture water pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <AgriculturePricelist/>

        </div>

    )
}

export default V50Agriculturepump;
