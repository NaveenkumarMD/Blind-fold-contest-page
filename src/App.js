import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Components/Screens/Home';
import Main from './Components/Screens/Main';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
