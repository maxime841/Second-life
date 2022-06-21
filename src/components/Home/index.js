// == Import yarn
import React from 'react';
// import { Card, Image } from 'react-bootstrap';

// == style
import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <div className="home-header">
      <h1 className="home-title">Système de gestions de propriétées second life</h1>
      <p>Bienvenue sur SecondeLife My Home, le site qui vous permet de louer des
        locations de nos propriétées et de nos évènements dans notre clubs
        en quelques clics !
      </p>
    </div>
    <div className="home-section">
      <div className="WorkSample col-lg-4 col-12">
        <section> className="home-item-valombreuse">
          <div className="home-item-title">Domaine valombreuse</div>
          <div className="home-item--overlay" />
        </section>
      </div>
      <div className="WorkSample col-lg-4 col-12">
        <section className="home-item-club">
          <div className="home-item-title">Douceur Créole Club</div>
          <div className="home-item--overlay" />
        </section>
      </div>
      <div className="WorkSample col-lg-4 col-12">
        <section className="home-item-paris">
          <div className="home-item-title">Domaine Paris</div>
          <div className="home-item--overlay" />
        </section>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
