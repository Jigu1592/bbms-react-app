// import React, { useState } from "react";
// //import Logo from "./Logo";
// //import NavLinks from "./NavLinks";
// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import Button from "./Button";
// import logo1 from "../../assets/logo.png";





// const Navbar = () =>
// {

// const [open, setOpen] = useState(false);

//     return (
//         <>
//         <nav className="bg-red-600 md:sticky md:top-10   rounded-sm   "> 
//             <div className="flex items-center font-medium justify-around">
//                 <div className="z-50 p-5 md:w-auto  w-full flex justify-between ">
//                     {/* <Logo /> */}

//                      <img src={logo1} alt="logo"  className="md:cursor-pointer md:h-16 md:pb-1 h-11"/>
                

//                   <div className="text-3xl text-white cursor-pointer md:hidden" onClick={() =>setOpen(!open)}>
//                   <ion-icon name={`${open ? "close": "menu"}`}></ion-icon>
//                   </div>
//                 </div> 
//                 <ul className="md:flex hidden uppercase text-gray-100   items-center gap-5 font-[Georgia]   ">
//                      <li className="inline-block after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-500 hover:after:w-full"> 
                   
//                     <Link to="/App" className="py-7 px-3 inline-block">Home</Link>
//                          {/* <Link to="/App" className="py-7 px-3 inline-block">Home</Link>  */}
//                     </li>
//                    <NavLinks />
                    
                 
//                 </ul>
//                 <div className="md:block hidden">
//                     <Button />
//                     </div>
                    

//             {/* Mobile Nav */}
//             <ul className={`
//             md:hidden bg-red-600 w-full h-full absolute bottom-0 py-24 pl-4 text-black
//             duration-500 ${open ? "right-0" : "right-[-100%]"} overflow-y-auto
//             `}>
//                     <li>
//                          <Link to="/App" className="py-7 px-3 inline-block text-white">Home</Link> 
//                     </li>
//                     <NavLinks />
//                   <div className="py-5"> <Button /></div>
//                     </ul>
//                     </div>
//         </nav>
//         </>
//     );

// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";
import logo1 from "../../assets/logo.png";
//import Slider from "../Slider/Slider";
import "../../App";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `
    bg-red-600 md:sticky md:top-10 rounded-sm
    ${isScrolled ? "shadow-navshadow" : ""}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img
              src={logo1}
              alt="logo"
              className="md:cursor-pointer md:h-16 md:pb-1 h-11"
            />

            <div
              className="text-3xl text-white cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase text-gray-100 items-center gap-5 font-[Georgia]">
            <li className="inline-block after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-500 hover:after:w-full">
              <Link to="" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>

          {/* Mobile Nav */}
          <ul
            className={`
              md:hidden bg-red-600 w-full h-full absolute bottom-0 py-24 pl-4 text-black
              duration-500 ${open ? "right-0" : "right-[-100%]"} overflow-y-auto
            `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block text-white">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
