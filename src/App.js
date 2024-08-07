import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navcap from "./components/Navcap";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetailspage from "./pages/ProductDetailspage";

function App() {
  return (
    <Router>
      <Navcap />
      <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/contact" element={  <Contact/>} />
        <Route path="/productdetails" element={  <ProductDetailspage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
