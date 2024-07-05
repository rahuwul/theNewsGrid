import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className="grid grid-cols-2 gap-2">
   <Sidebar/>
   <Gridbody/>
   </div>
    </div>
  );
}

export default App;
