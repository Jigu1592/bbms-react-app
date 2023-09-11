import React, {useMemo} from "react";
import { useEffect } from "react";
import { useState } from "react";
import  image1 from "../../assets/slide-02.jpg";
import  image2 from "../../assets/slide-03.jpg"

const Slider = () =>
{

    const images = useMemo(() => [image1, image2], []);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(intervalId);
          };
        }, [images]);


    return (
        <>
        <div className="md:w-full md:h-full w-full ">
            <div>
                 <img src={images[currentIndex]} className="md:w-full md:h-full w-full" id="slideImg" alt={`Slide ${currentIndex + 1}`} />
                 
                 </div>     
        </div>
        <div>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    <h3>Hello</h3>
    
  </div>

        
        </>

    );
};

export default Slider;

