// == Import yarn
import React from 'react';
// import { Card, Image } from 'react-bootstrap';

// == style
import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <div className="home-header">
      <h1 className="home-title">Système de gestions de propriétées <br />  <span className="span-title">second life </span></h1>
    </div>
    <div className="home-section">
      <div className="WorkSample col-lg-4 col-12 valombreuse">
        <section className="home-item">
          <div className="home-item-title">Domaine valombreuse</div>
          <div className="home-item--overlay" />
        </section>
      </div>
      <div className="WorkSample col-lg-4 col-12 club">
        <section className="home-item">
          <div className="home-item-title">Douceur Créole Club</div>
          <div className="home-item--overlay" />
        </section>
      </div>
      <div className="WorkSample col-lg-4 col-12 paris">
        <section className="home-item">
          <div className="home-item-title">Domaine Paris</div>
          <div className="home-item--overlay" />
        </section>
      </div>
    </div>
    <section className="home-description">
      <div className="description-section">
        <article>
          <h2>Réservez</h2>
          <p className="paragraphe-description">Découvrez en temps réel les appartement de grand standing disponibles dans les domaines de Paris et Valombreuse.<br />
            Faire une demande de logement n'a jamais été aussi facile !
          </p>
        </article>
      </div>
      <div className="description-section">
        <article>
          <h2>Participez</h2>
          <p className="paragraphe-description">Le Douceur Créole Club vous attend avec ses nombreux événements.<br />
            Tout les weeks-ends un DJ vous attend dasn votre club préfére pour animé la soirée !
          </p>
        </article>
      </div>
    </section>

  </div>
);

// == Export
export default Home;
