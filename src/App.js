import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CurrencyDetails from './pages/CurrencyDetails/CurrencyDetails';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CurrencyDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
