import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard";
import './App.css'
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="">
      
      <Navbar/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      
      <Route path='resume/*' element={ <Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Routes>

    </div>
  );
  // zety
}

export default App;
