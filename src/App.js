import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CurrencyDetails from './pages/CurrencyDetails/CurrencyDetails';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details" element={<CurrencyDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
