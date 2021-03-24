import React from 'react';
import { Container } from './styles';

import CompanyJussi from '../../assets/company/image-jussi.png';

const About = () => {
  return (
    <Container id="about">
      <div className="about-company">
        <h2>OLÁ, SOMOS<br /> A JÜSSI</h2>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando 
          o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada 
          exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, 
          User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <a href="#">
          <button>Conheça a Jüssi</button>
        </a>
      </div>
      <div className="company-photo">
        <img src={CompanyJussi} alt="Jussi's Hall"/>
      </div>
    </Container>
  )
}

export default About;