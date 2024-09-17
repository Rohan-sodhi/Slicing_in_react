import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Menu from "./Menu";
import Booking from "./Booking";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Booking" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;