import React from 'react';
import { Container } from './styles';

import ArrowRight from '../../assets/icon/arrow-right.svg';
import LogoBrastemp from '../../assets/logo/logo-brastemp.svg';
import LogoCompraCerta from '../../assets/logo/logo-consul-compra-certa.svg';
import LogoConsul from '../../assets/logo/logo-consul.svg';
import LogoTheBar from '../../assets/logo/logo-thebar.svg';

const Stores = () => {
  return (
    <Container>
      <p>Nossas principais lojas VTEX</p>
      <img src={ArrowRight} alt="Right Arrow Icon" className="rotate-small"/>
      <img src={LogoBrastemp} alt="Brastemp Logo"/>
      <img src={LogoCompraCerta} alt="Consul Compra Certa Logo"/>
      <img src={LogoConsul} alt="Consul Logo"/>
      <img src={LogoTheBar} alt="The Bar Logo"/>
    </Container>
  )
}

export default Stores;