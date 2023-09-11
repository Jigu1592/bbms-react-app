import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toplinks } from "./TopLinks";


const Topshow = () =>
{
     const [topheading, setTopHeading] = useState(" ");
    // const [topsubheading, setTopSubHeading] = useState(" ");
    
    return ( 
        <>
        {toplinks.map((link) =>(
            <div key={link.topname}>
                <div className="px-3 text-left  md:cursor-pointer group">
                    <div className="inline-block after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-500 hover:after:w-full">
                    <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 text-red-600" onClick={()=>{topheading !== link.name ?  setTopHeading(link.name) : setTopHeading("");
                        setTopHeading("");
                    }}>
                        {link.topname}
                        </h1>  

                    </div>
                    {link.topsubmenu && (
                        <div className="relative  z-50">
                            <div className=" absolute top-10 hidden group-hover:md:block hover:md:block md:transition-all md:duration-1000 z-50">
                                <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">
                                        </div>
                                </div>
                                <div className="bg-white p-5 grid grid-cols-3 gap-10 ml-[-200px] rounded-xl border-solid  border-red-500 shadow-inner">
                                {
                                    link.sublink.map((mysublink) => (
                                        <div>
                                            <h1>
                                                {mysublink.sublink.map(slink => (
                                                    <li className="text-sm text-gray-600 my-2.5 normal-case font-sans">
                                                        <Link to={slink.link} className="hover:text-primary">{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </h1>
                                        </div>
                                    ))
                                }
                                
                                
                                </div>

                            </div>

                        </div>
                        )
                    }


                </div>
            </div>
        ))}
        
        
        </>
    );

};

export default Topshow;