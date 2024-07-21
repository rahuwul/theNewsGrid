import React, { useState , useEffect, useRef} from 'react';
import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Mode from './Components/Mode';
import Saved from './Components/Saved';

function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  const [country, setCountry] = useState('in');
  
  const [savedNews, setSavedNews] = useState([]);
  const savedNewsRef = useRef(savedNews);
  useEffect(() => {
    savedNewsRef.current = savedNews;
  }, [savedNews]);
  const handleSaveNews = (newsData) => {
    setSavedNews((prevSavedNews) => {
      const updatedNews = [...prevSavedNews, newsData];
      console.log("All saved news:", updatedNews);
      savedNewsRef.current = updatedNews;
      return updatedNews;
    });
  };
  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };
  const [dark,setDark]=useState(true);
  
  const changeMode = () => {
    setDark(!dark);
  };
  document.body.style.backgroundColor = dark?"#313131":"#A2E0D1";


  return (
    <Router >
    <div className="App" >
      <Mode changeMode={changeMode} dark={dark}/>
   <Navbar  dark={dark}/>
   <div className="flex">
   <Sidebar onCountryChange={handleCountryChange} selectedCountry={country} dark={dark}/>
  <Routes>
    <Route path='/' element={<Gridbody category='general' country={country} dark={dark} apikey={apikey} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/business' element={<Gridbody category='business' country={country} dark={dark} apikey={apikey} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/entertainment' element={<Gridbody category='entertainment' country={country} apikey={apikey} dark={dark} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/health' element={<Gridbody category='health' country={country} dark={dark} apikey={apikey} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/science' element={<Gridbody category='science' country={country} dark={dark} apikey={apikey} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/technology' element={<Gridbody category='technology' country={country} dark={dark} apikey={apikey} onSaveNews={handleSaveNews}/>}></Route>
    <Route path='/saved' element={<Saved savedNews={savedNews} dark={dark}/>}></Route>
  </Routes>
   </div>
    </div>
    </Router>
  );
}

export default App;
