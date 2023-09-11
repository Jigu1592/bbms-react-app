import React from "react";
import { Link } from "react-router-dom";
import Topshow from "./Topshow";

const Topbar = () =>
{
    return (
        <>
        <nav className=" bg-gray-200 md:sticky md:top-0">
            {/* <div className="z-50 p-2 md:w-auto w-full flex justify-end">
                
            </div> */}
            <ul className="md:flex md:justify-end  flex justify-end text-red-600 font-medium items-center gap-8 pr-16">
                     <li className=" p-2 inline-block hover:text-red-800 hover:font-semibold"> 
                   
                    <Link to="/Signin" className="inline-block">Sign in</Link>
                         {/* <Link to="/App" className="py-7 px-3 inline-block">Home</Link>  */}
                    </li>
                    <li className=" p-2 inline-block  hover:text-red-800 hover:font-semibold"> 
                   
                    <Link to="/App" className="inline-block">Get Help</Link>
                         {/* <Link to="/App" className="py-7 px-3 inline-block">Home</Link>  */}
                    </li>
                    <li className=" p-2 inline-block  hover:text-red-800 hover:font-semibold"> 
                   
                    <Link to="/App" className="inline-block">Career</Link>
                         {/* <Link to="/App" className="py-7 px-3 inline-block">Home</Link>  */}
                    </li>
                    <Topshow />
                    </ul>

        </nav>
        </>
    );

};


export default Topbar;