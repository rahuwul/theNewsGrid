import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className="flex">
   <Sidebar/>
   <Gridbody/>
   </div>
    </div>
  );
}

export default App;
