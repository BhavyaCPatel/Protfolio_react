import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';

function Mainpage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Mainpage;
