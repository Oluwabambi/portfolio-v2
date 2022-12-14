import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Works from './components/Works';
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/portfolio" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Sidebar />
    </Router>
  );
}

export default App;
