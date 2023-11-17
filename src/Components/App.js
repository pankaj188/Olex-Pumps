import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Agriculture from "./Agriculture";
import Residential from "./Residential";
import AgriculturePricelist from "./AgriculturePricelist";
import ResidentialPricelist from "./ResidentialPricelist";

const AppAppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

const appRouter = createBrowserRouter([
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
                    path: "/agriculturepricelist",
                    element: <AgriculturePricelist/>,
                  },
                  {
                    path: "/residentialpricelist",
                    element: <ResidentialPricelist/>,
                  },
                 
          ],
         

  },
  
]);

export default appRouter;
