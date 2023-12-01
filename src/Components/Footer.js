import copyright from "./copyright";
const Footer = () => {
    return (
    
    <div className=" grid-cols-4 gap-4  m-4 sm:m-2 w-[800px] md:w-full bg-blue-900  text-white md:flex justify-evenly  text-md-start  ">
     
          <div className=" w-96 ml-80 sm:ml-40 p-4 justify-center m-4 ">
            
            <h6 className="text-uppercase fw-bold p-4">Company name</h6>
            <p>
              Olex Pumps & Electricals LLP All Right Reserved. You can reach out to us anytime.
            </p>
          </div>
        
          <div className="w-96 p-2 m-4 ml-80 sm:ml-40 ">
           
            <h6 className="text-uppercase text-center fw-bold  p-4">Agriculture Products</h6>
            <h2  className="text-white p-1">V5Agriculturepump</h2>
            <h2 className="text-white p-1">V4Agriculturepump</h2>
            <h3  className="text-white p-1">V50Agriculturepump</h3>
            <h4  className="text-white p-1">JantaAgriculturepump</h4>
           
          </div>
    
          <div className="w-96 p-2 text-center m-4 ml-80 sm:ml-40 ">
           
          <h6 className="text-uppercase text-center fw-bold  p-4">Residential Products</h6>
            <h2  className="text-white p-1">CFMSMBResidentialpump</h2>
            <h2 className="text-white p-1">DMBResidentialpump</h2>
            <h3  className="text-white p-1">JCPResidentialpump</h3>
            <h4  className="text-white p-1">V4Agriculturepump</h4>
          </div>
       
          <div className="w-96 p-4 text-center m-4 ml-80 sm:ml-40 ">
           
            <h6 className="text-uppercase fw-bold p-4">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> 7667120905</p>
            <p><i className="fas fa-envelope mr-3"></i> isapankaj@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        <copyright/>
 
    </div>
    )
}

export default Footer;


