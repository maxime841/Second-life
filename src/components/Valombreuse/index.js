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
    <Card>
      <Card.Img variant="up" src={valombreuse} />
      <div>
        <Card.Header> Le domaine de Valombreuse</Card.Header>
        <Card.Body>
          <blockquote>
            <p>Différentes maisons aux choix seront proposées en locations dont 5
              grandes maisons meublés avec piscine selons les gouts de chacun. Pour ceux qui
              le désire nous avons 2 maisons vide pour ceux qui sont acharnés de leur propre
              décoration. <br />
              De plus, nous avons un complexe restaurant, onglerie, et bien être; pour profiter
              de bon moments de détentes, convivialitées et amusements en famille en couple
              ou seul. Des animations y seront implantées pour donner une distraction supplémentaire
              et ainsi vous satisfaire pleinement. <br />
              Un petit coin de Guadeloupe "Gwada" pour les intimes. En cours de préparation
              le domaine de valombreuse va débuter avec une parcelle de presque une demi sim Full.
              <br /> Il y aura des parties communes de style Tropical avec Falaises, Plages,
              jeux aquatiques, bateau, vivre une experience de cinema, profiter d'un spa et aussi
              un coin romantique pour se retrouver en couple. Parfois il y aura aussi des fiestas.
              <br /> Différentes maisons aux choix seront proposées en locations dont 8
              grandes Différentes maisons aux choix seront proposées en locations dont 8
              grandes maisons meublé avec piscine selons les gouts de chacun. <br />
              Vous n'aurais plus qu'a profiter de vos bons moments en famille en couple
              ou seul.maisons meublé avec piscine selons les gouts de chacun. <br />
              Vous n'aurais plus qu'a profiter de vos bons moments en famille en couple
              ou seul. <br />
              Vous êtes donc invité à venir découvrir ce lieu.<br />
            </p>
            <footer className="blockquote-footer">
              N'hésitez plus et vivez votre experience SL à fond !!!
            </footer>
          </blockquote>
        </Card.Body>
      </div>
    </Card>
  </div>
);

// == Export
export default Valombreuse;
