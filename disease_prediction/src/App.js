import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';

import Detection from './Detection';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/detection" element={<Detection/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
