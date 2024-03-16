import './App.css';
import './media.css'
import Home from './presentation/home';
import Gifts from './presentation/gifts';
import Celebrate from "./presentation/celebrate"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="gifts" element={<Gifts/>} />
        <Route path="celebrate" element={<Celebrate/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
