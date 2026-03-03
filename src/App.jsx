import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FranchiseModel from "./pages/FranchiseModel";
import Locations from "./pages/Locations";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/Chillpops-Franchise">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/franchise-model" element={<FranchiseModel />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
