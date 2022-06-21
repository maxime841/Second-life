// == Import yarn
import React from 'react';
import { Card } from 'react-bootstrap';

// == style
import './location.scss';

// == Composant
const Location = () => (
  <div className="home">
    <div className="home-header">
      <h1 className="home-title">Système de gestions de propriétées second life</h1>
      <p>Bienvenue sur SecondeLife My Home, le site qui vous permet de louer des
        locations de nos propriétées et de nos évènements dans notre clubs
        en quelques clics !
      </p>
    </div>
    <Card>
      <Card.Img variant="up" src="https://thepressfree.com/wp-content/uploads/2021/11/b476637fe3882e288a3bc9be294fa3a8-800x445.jpeg" />
      <div>
        <Card.Header> Le domaine de Valombreuse</Card.Header>
        <Card.Body>
          <blockquote>
            <p>Différentes maisons aux choix seront proposées en locations dont 8
              grandes maisons meublé avec piscine selons les gouts de chacun. <br />
              Vous n'aurais plus qu'a profiter de vos bons moments en famille en couple
              ou seul.
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

    <Card>
      <Card.Img variant="up" src="https://thepressfree.com/wp-content/uploads/2021/11/b476637fe3882e288a3bc9be294fa3a8-800x445.jpeg" />
      <div>
        <Card.Header> Le douceur Kreyol Club</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Un club qui va vous permettre de vous évadez lors de nos soirées.
              <br /> Un panel de dj animeront nos soirées sous divers style musicaux variés,
              tel que le dancehall, soca, bouyon, reggeaton, trap et divers musiques éléctroniques.
              <br /> Le club est récement ouvert et on vous proposera entre une et deux soirées
              par semaine. Si vous vous ennuyés, et que vous voulez faire des connaissances
              venez dans notre club pour y rencontrer des personnes sympathiques. <br />
              Vous êtes donc invité à venir découvrir ce lieu.<br />
            </p>
            <footer className="blockquote-footer">
              N'hésitez plus et vivez votre experience SL a fond!!!
            </footer>
          </blockquote>
        </Card.Body>
      </div>
    </Card>
  </div>
);

// == Export
export default Location;
