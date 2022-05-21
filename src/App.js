import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './Components/Screens/Home';
import Main from './Components/Screens/Main';
import Startpage from './Components/Screens/Startpage';
import SubmittedCode from './Components/Screens/SubmittedCode';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Startpage />} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/main" exact element={<Main />} />
      <Route path="/code" exact element={<SubmittedCode/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
