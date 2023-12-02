import { CFMSMB_series } from "../../utility/constants";
import ResidentialPricelist from "./ResidentialPricelist";

const CFMSMBResidentialpump = () => {
    return (
        <div>
            <div className="md:flex">
            <div className=" mx-6  ">
            <img className="mx-52" src={CFMSMB_series}></img>
            </div>
            <div className="text-center mx-6 p-12">
            <h2 className=" p-2 text-6xl font-bold my-20 ">CFMSMB Series – Water Pressure Pump</h2>
            <p className="text-4xl p-4">Water Pressure Pumps Residential | Single Pump Booster - Say Goodbye to Low Water Pressure</p>
            <p className="text-2xl px-40 py-6"> The price of an Residential Pressure Pump varies depending on its size, material, and pumping capacity.</p>
            </div>
            
          </div>
          <ResidentialPricelist/>

        </div>

    )
}

export default CFMSMBResidentialpump;
