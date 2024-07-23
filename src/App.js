 import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Mode from './Components/Mode';
import Saved from './Components/Saved';

function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  const [country, setCountry] = useState('in');

  const [savedData,setSavedData]=useState([]);


  const handleSaveNews = (newsData) => {
     axios.post('http://localhost:3001/api/data', newsData)
      .then(response => setSavedData([...savedData, response.data]))
      .catch(error => console.error("cant save news",error));
  };
  

  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
  };
  const [dark,setDark]=useState(true);
  
  const changeMode = () => {
    setDark(!dark);
  };
  document.body.style.backgroundColor = dark?"#313131":"#A2E0D1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setSavedData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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
    <Route path='/saved' element={<Saved savedData={savedData} dark={dark}/>}></Route>
  </Routes>
   </div>
    </div>
    </Router>
  );
}

export default App;


