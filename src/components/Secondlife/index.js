import React from 'react';

// == style
import './secondlife.scss';

// == Import Compoments
import Header from 'src/components/Header';
import Club from 'src/components/Club';
import Location from 'src/components/Location';
import Home from 'src/components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Secondelife = () => (
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/club" element={<Club />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  </Router>
);

// == Export
export default Secondelife;
