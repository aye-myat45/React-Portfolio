import { Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import Navbar from "./views/components/Navbar";
import './styles/_component.scss';
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Footer from "./views/components/Footer";

const App = (props) => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App;