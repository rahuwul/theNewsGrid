import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  return (
    <Router>
    <div className="App">
   <Navbar/>
   <div className="flex">
   <Sidebar/>
  <Routes>
    <Route path='/' element={<Gridbody category='general'/>}></Route>
    <Route path='/business' element={<Gridbody category='business'/>}></Route>
    <Route path='/entertainment' element={<Gridbody category='entertainment'/>}></Route>
    <Route path='/health' element={<Gridbody category='health'/>}></Route>
    <Route path='/science' element={<Gridbody category='science'/>}></Route>
    <Route path='/technology' element={<Gridbody category='technology'/>}></Route>
  </Routes>
   </div>
    </div>
    </Router>
  );
}

export default App;
