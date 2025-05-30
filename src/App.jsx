import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Register from './Register';
import Madomasi from './Madomasi'; // Changed back from Feedback

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/madomasi" element={<Madomasi />} />
      </Routes>
    </Router>
  );
}

export default App;

