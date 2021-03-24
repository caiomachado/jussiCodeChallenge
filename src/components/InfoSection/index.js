import React from 'react';
import { Container } from './styles';

import fridgeImage from '../../assets/products/fridge.png'
import mixerImage from '../../assets/products/mixer.png'
import bottleImage from '../../assets/products/bottle.png'


const InfoSection = () => {
  return (
    <Container>
      <div className="introduction">
        <div className="left-column">
          <span>//</span>
        </div>
        <div className="right-column">
          <h1>CRIAMOS<br/>LOJAS QUE<br/> VENDEM MAIS.</h1>
          <p>
            A Jüssi é especialista na criação de lojas
            usando a plataforma VTEX. Precisa criar sua
            loja ou migrar de plataforma?
          </p>
          <a href="#">
            <button>
              Veja nossas soluções
            </button>
          </a>
        </div>
      </div>
      <div className="products-highlight">
        <div className="card left">
          <img src={fridgeImage} alt="Fridge"/>
          <button>Mais Detalhes</button>
        </div>
        <div className="card top">
          <img src={mixerImage} alt="Mixer"/>
          <button>Comprar em 12x</button>
        </div>
        <div className="card bottom-right">
          <img src={bottleImage} alt="Bottle"/>
          <button>Adicionar à sacola</button>
        </div>
      </div>
    </Container>
  )
}

export default InfoSection;