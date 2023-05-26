import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './components/Home';
import Homes from './components/Homes';
import Orders from './components/Orders';
// import Contact from './components/Contact';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/homes" element={<Homes />} />
      </Routes>
    </Router>
  );
};

export default App;