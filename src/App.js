import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';


function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  return (
    <BrowserRouter>
    <div className="App">
   <Navbar/>
   <div className="flex">
   <Sidebar/>
   <Gridbody apikey={apikey}/>
   </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
