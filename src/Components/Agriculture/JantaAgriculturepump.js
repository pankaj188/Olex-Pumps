import { Janta } from "../../utility/constants";
import AgriculturePricelist from "./AgriculturePricelist";

const JantaAgriculturepump = () => {
    return (
        <div>
            <div className="md:flex  p-4 ">
            <div className=" mx-6 ">
            <img className="m-4 md:mx-52 p-4" src={Janta}></img>
            </div>
            <div className="text-center m-2 md:mx-6 p-12 ">
            <h2 className=" p-2 text-2xl md:text-6xl font-bold my-20 ">Janta Series Borewell Submersible Pumps</h2>
            <p className=" text-xl md:text-4xl p-4 ">Agricultural Pumps | Agricultural Submersible Pumps</p>
            <p className="text-lg md:text-2xl md:px-40 py-6 "> The price of an agriculture water pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <AgriculturePricelist/>

        </div>

    )
}

export default JantaAgriculturepump;
