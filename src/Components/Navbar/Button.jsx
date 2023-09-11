import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () =>
{
    const history = useNavigate();

  const handleButtonClick = () => {
    // Use history.push() to navigate to the desired route
    history("/Finddonor");
  };
    return (
            <>
            <button className=" bg-white text-red-600 px-6 py-2 rounded-full" onClick={handleButtonClick}>
                Find Donor
            </button>
            
            </>
        
    );
}

export default Button;