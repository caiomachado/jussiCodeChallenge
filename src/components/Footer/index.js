import React from 'react';
import { Container } from './styles';

import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import LogoWPP from '../../assets/logo/logo-wpp.svg';

const Footer = () => {
  return (
    <Container>
      <div className="wpp-logo">
        <img src={LogoWPP} alt="WPP Company Logo"/>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/agencia.jussi/" target="_blank" rel="noreferrer">
          <FaFacebookF className="icon" size={22} color="white"/>
        </a>
        <a href="https://www.instagram.com/jussi/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" size={22} color="white"/>
        </a>
        <a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="icon" size={22} color="white"/>
        </a>
      </div>
    </Container>
  )
}

export default Footer;