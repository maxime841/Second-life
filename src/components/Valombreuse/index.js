// == Import yarn
import React from 'react';
import { Card } from 'react-bootstrap';

import valombreuse from '../../../public/image/DomaineValombreuse.png';

// == style
import './valombreuse.scss';

// == Composant
const Valombreuse = () => (
  <div className="valombreuse">
    <h1 className="valombreuse-title">Le domaine de Valombreuse</h1>
    <p className="valombreuse-content">Bienvenue sur notre land éxotique le domaine de
      valombreuse. Vous y trouverez un descriptif de la land dans la carte suivante.
    </p>
    <a className="valombreuse-link" href="/homeValombreuse">
      <Card className="valombreuse-card">
        <Card.Img className="valombreuse_picture" variant="up" src={valombreuse} />
        <div>
          <Card.Header className="valombreuse-subtitle"> Le domaine de Valombreuse</Card.Header>
          <Card.Body className="valombreuse-body">
            <blockquote>
              <p className="valombreuse-content">Différentes maisons aux choix seront proposées en locations dont 5
                grandes maisons meublés avec piscine selons les gouts de chacun. Pour ceux qui
                le désire nous avons 2 maisons vide pour ceux qui souhaitent faire leur propre
                décoration. <br />
                De plus, nous avons un complexe restaurant, onglerie, et bien être; pour profiter
                de bon moments de détentes, convivialitées et amusements en famille en couple
                ou seul. Des animations y seront implantées pour donner une distraction
                supplémentaire et ainsi vous satisfaire pleinement. <br />
                Un petit coin de Guadeloupe "Gwada" pour les intimes. En cours de préparation
                le domaine de valombreuse va débuter avec une parcelle de presque une demi sim Full.
                <br /> Il y a des parties communes de style Tropical avec Falaises, Plages,
                jeux aquatiques, bateau, vivre une experience de cinema, et aussi
                un coin romantique pour se retrouver en couple.
                <br />
                Vous êtes donc invité à venir découvrir ce lieu.<br />
              </p>
              <footer className="blockquote-footer">
                N'hésitez plus et vivez votre experience SL à fond !!!
              </footer>
            </blockquote>
          </Card.Body>
        </div>
      </Card>
    </a>
  </div>
);

// == Export
export default Valombreuse;
