import { useEffect, useState } from "react";
import { prodObj } from "../utility/api";
import Footer from "./Footer";
import Products from "./Products";
const Home = () => {

const [homebanners,setHomeBanners] = useState(prodObj);

   


    // useEffect(() => {
    //     fetchData();

    // },[]);

    // const fetchData = async () => {
    //     const data = await fetch("https://www.crompton.co.in/wp-json/pull/home");
    //     const json = await data.json();

    //     // console.log(json);
    //    setHomeBanners(json);
    //     // console.log(homebanners.home_banners);
    // }

    // const {desktop_banner} = homebanners;

    return (
        <div className="flex flex-wrap ">
        <div>
        <img className=""src={"https://assets-global.website-files.com/64c908463c1228f3f465ba34/64c91cf0f03f79d0c973f923_Maven%20Movers%20(1)-p-2000.png"}/>
        
        </div>
           
            < Products/>
            {/* <img src={"https://www.products.crompton.co.in/water-heaters"}/> */}
            {/* {homebanners.map((pro) => (<ProductsCard products={pro}/>))} */}
            <Footer/>

        </div>
    )
};

export default Home;