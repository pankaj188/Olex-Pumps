import Footer from "./Footer";
import Products from "./Products";
import { banner } from "../utility/constants";
const Home = () => {

    return (
        <div className="flex flex-wrap overflow-x-clip">
        <div>
        <img className="" src={banner} alt="banner img"/>
        
        </div>
            < Products/>
            <Footer/>
        </div>
    )
};

export default Home;