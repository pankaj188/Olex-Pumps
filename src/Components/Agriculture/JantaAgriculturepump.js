import { Janta } from "../../utility/constants";
import AgriculturePricelist from "./AgriculturePricelist";

const JantaAgriculturepump = () => {
    return (
        <div>
            <div className="flex">
            <div className=" mx-6  ">
            <img className="mx-52" src={Janta}></img>
            </div>
            <div className="text-center mx-6 p-12">
            <h2 className=" p-2 text-6xl font-bold my-20 ">Janta Series Borewell Submersible Pumps</h2>
            <p className="text-4xl p-4">Agricultural Pumps | Agricultural Submersible Pumps</p>
            <p className="text-2xl px-40 py-6"> The price of an agriculture water pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <AgriculturePricelist/>

        </div>

    )
}

export default JantaAgriculturepump;
