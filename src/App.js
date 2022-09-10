import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CurrencyDetails from './pages/CurrencyDetails/CurrencyDetails';
import './App.css';

const App = () => (
  <>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details" element={<CurrencyDetails />} />
        </Routes>
      </Router>
    </div>
  </>
);

export default App;
