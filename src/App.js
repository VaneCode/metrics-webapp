import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CurrencyDetails from './pages/CurrencyDetails/CurrencyDetails';
import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Details" element={<CurrencyDetails />} />
    </Routes>
  </div>
);

export default App;
