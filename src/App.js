import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from "./components/Upload"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
