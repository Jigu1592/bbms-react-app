import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";






const NavLinks = () => 
{
    const [heading, setHeading] = useState(" ");
    const [subheading, setSubHeading] = useState(" ");
    
    return (
        <>
        {links.map((link) =>(
                <div key={link.name}>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <div className="inline-block after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-500 hover:after:w-full">
                        <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 text-gray-200" onClick={()=>{heading !== link.name ?  setHeading(link.name) : setHeading("");
                        setSubHeading("");
                    }}>
                        {link.name}
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                            <ion-icon name={`
                            ${
                                heading === link.name ? "chevron-up" : "chevron-down"
                            }`}></ion-icon>
                        </span>
                        </h1>
                        </div>
                        {/* {    heading
                        } */}
                        {link.submenu && (
                            <div>
                                <div className="absolute top-24 hidden group-hover:md:block hover:md:block md:transition-all md:duration-1000 ">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">
                                        </div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10 ml-[-200px] rounded-xl border-solid  border-red-500 shadow-inner">
                                        {
                                            link.sublink.map((mysublink) => (
                                                <div>
                                                        <h1 className="text-lg font-semibold text-red-600">{mysublink.Head}</h1>
                                                        {mysublink.sublink.map(slink=>(
                                                            <li className="text-sm text-gray-600 my-2.5 normal-case font-sans">
                                                                <Link to={slink.link} className="hover:text-primary">{slink.name}</Link>
                                                               
                                                            </li>
                                                        ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile Menu */}

                    <div className={`
                    ${heading === link.name ? "md:hidden" : "hidden"}
                    `}>
                        {
                            link.sublink.map((slinks)=>(
                                <div >
                                    <h1 onClick={()=>subheading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")} className="py-4 pl-7 text-red-600 bg-gray-200 font-semibold md:pr-0 pr-5 border-b border-red-600">{slinks.Head}</h1>
                                    
                                    <div className={`
                                    ${subheading === slinks.Head ? "md:hidden" : "hidden"}
                                    `}>
                                    {slinks.sublink.map((slink) => (
                                        <li className="py-3 pl-14 text-red-300">
                                            <Link to={slink.link}>{slink.name}</Link>
                                        </li>
                                    ))}
                                    </div>



                                </div>
                            ))
                        }
                    </div>




                </div>
            ))}
        </>);

};

export default NavLinks;