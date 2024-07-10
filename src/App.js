import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  const [country, setCountry] = useState('');

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };
  return (
    <Router>
    <div className="App">
   <Navbar/>
   <div className="flex">
   <Sidebar onCountryChange={handleCountryChange} selectedCountry={country}/>
  <Routes>
    <Route path='/' element={<Gridbody category='general' country={country}/>}></Route>
    <Route path='/business' element={<Gridbody category='business' country={country}/>}></Route>
    <Route path='/entertainment' element={<Gridbody category='entertainment' country={country}/>}></Route>
    <Route path='/health' element={<Gridbody category='health' country={country}/>}></Route>
    <Route path='/science' element={<Gridbody category='science' country={country}/>}></Route>
    <Route path='/technology' element={<Gridbody category='technology' country={country}/>}></Route>
  </Routes>
   </div>
    </div>
    </Router>
  );
}

export default App;
