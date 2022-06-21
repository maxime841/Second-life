/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

// == style
import './secondlife.scss';

// == Import Compoments
import Header from 'src/components/Header';
import Club from 'src/components/Club';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Valombreuse from 'src/components/Valombreuse';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Secondelife = () => (
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/domaineValombreuse" element={<Valombreuse />} />
        <Route path="/club" element={<Club />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

// == Export
export default Secondelife;
