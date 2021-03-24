import React, {useState} from 'react';
import { Container } from './styles';

import {ReactComponent as ShoppingCart} from '../../assets/icon/shopping-cart.svg';
import {FiMenu} from 'react-icons/fi'
import {IoIosCloseCircleOutline} from 'react-icons/io'


const Menu = ({media}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container media={media}>
      {!isMenuOpen ? (
        <FiMenu size={24} onClick={() => setIsMenuOpen(true)} className="menu-hamb-icon"/>
      ) : (
        <div className="menu">
          <IoIosCloseCircleOutline 
            size={24} 
            onClick={() => setIsMenuOpen(false)} 
            className="menu-hamb-icon"
          />
          <ul>
            <a href="#solutions" className="visible-a">
              <li>Nossas soluções</li>
            </a>
            <a href="#about" className="visible-a">
              <li>Conheça a Jüssi</li>
            </a>
            <a href="#" className="visible-a">
              <li>Login</li>
            </a>
            <a href="#" className="visible-a">
              <li className="flex-row">
                <p>Ver carrinho</p>
                <ShoppingCart className="shopping-cart"/>
              </li>
            </a>
          </ul>
        </div>
      )}
    </Container>
  )
}

export default Menu;