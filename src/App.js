import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";


function App() {
  const apikey=process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
   <Navbar/>
   <div className="flex">
   <Sidebar/>
   <Gridbody apikey={apikey}/>
   </div>
    </div>
  );
}

export default App;
