import React from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'; 
import Navbar from "./Components/Navbar/Navbar1";
import Slider from "./Components/Slider/Slider";
import Topbar from "./Components/Topbar/Topbar";
import Finddonor from "./Components/Pages/Finddonor";
import Signin from "./Components/Pages/Signin";


const App = () =>
{
  return (
    <>
    <Router>
      <Topbar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Slider />} /> 
      <Route path="/Finddonor" element={<Finddonor />} /> 
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  </Router>  
  </>  
  );
}

export default App;