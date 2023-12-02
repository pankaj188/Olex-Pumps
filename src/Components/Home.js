import { useEffect, useState } from "react";
import { prodObj } from "../utility/api";
import Footer from "./Footer";
import Products from "./Products";
import { banner } from "../utility/constants";
const Home = () => {

    return (
        <div className="flex flex-wrap  sm:m-2 ">
        <div>
        <img className="" src={banner}/>
        
        </div>
            < Products/>
            <Footer/>
        </div>
    )
};

export default Home;