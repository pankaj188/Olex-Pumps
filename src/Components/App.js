import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Agriculture from "./Agriculture/Agriculture";
import Residential from "./Residential/Residential";
import AgriculturePricelist from "./Agriculture/AgriculturePricelist";
import ResidentialPricelist from "./Residential/ResidentialPricelist";
import V50Agriculturepump from "./Agriculture/V50Agriculturepump";
import V5Agriculturepump from "./Agriculture/V5Agriculturepump";
import JantaAgriculturepump from "./Agriculture/JantaAgriculturepump";
import V4Agriculturepump from "./Agriculture/V4Agriculturepump";
import CFMSMBResidentialpump from "./Residential/CFMSMBResidentialpump";
import DMBResidentialpump from "./Residential/DMBResidentialpump";
import JCPResidentialpump from "./Residential/JCPResidentialpump";
import V4Residentialpump from "./Residential/V4Residentialpump";

const AppAppLayout = () => {
  return (
    <div className="app ">
      <Header/>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

const appRouter = createHashRouter([
  {
          path: "/",
          element: <AppAppLayout/>,
          children: [
                  {
                          path: "/",
                          element: <Home/>,
                  },
                  {
                    path: "/about",
                    element: <About/>,
                  },
                  {
                    path: "/products",
                    element: <Products/>,
                  },
                  {
                    path: "/agriculture",
                    element: <Agriculture/>,
                  },
                  {
                    path: "/residential",
                    element: <Residential/>,
                  },
                  {
                    path: "/contact",
                    element: <Contact/>,
                  },
                  {
                    path: "V50Agriculturepump",
                    element: <V50Agriculturepump/>,
                  },
                  {
                    path: "V5Agriculturepump",
                    element: <V5Agriculturepump/>,
                  },
                  {
                    path: "V5Agriculturepump",
                    element: <V5Agriculturepump/>,
                  },
                  {
                    path: "V4Agriculturepump",
                    element: <V4Agriculturepump/>,
                  },
                  {
                    path: "/JantaAgriculturepump",
                    element: <JantaAgriculturepump/>,
                  },
                  {
                    path: "/CFMSMBResidentialpump",
                    element: <CFMSMBResidentialpump/>,
                  },
                  {
                    path: "/DMBResidentialpump",
                    element: <DMBResidentialpump/>,
                  },
                  {
                    path: "/JCPResidentialpump",
                    element: <JCPResidentialpump/>,
                  },
                  {
                    path: "/V4Residentialpump",
                    element: <V4Residentialpump/>,
                  },
          ],
         

  },
  
]);

export default appRouter;
