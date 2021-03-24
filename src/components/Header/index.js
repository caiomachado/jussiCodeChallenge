import React, {useState} from 'react';
import { Container } from './styles';

import {ReactComponent as JussiLogo} from '../../assets/logo/logo_jussi.svg';
import {ReactComponent as ShoppingCart} from '../../assets/icon/shopping-cart.svg';
import {ReactComponent as SearchIcon} from '../../assets/icon/search.svg';

import Menu from '../Menu';

import searchApi from '../../services/userSearch';

const Header = () => {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const searchUser = async () => {
    setLoading(true)
    try {
      const {data} = await searchApi.get(`/${inputValue}`);
      setLoading(false)
      alert('User found, check the console')
      console.log(data);
      setInputValue('')
    } catch (e) {
      setLoading(false)
      alert('User not found')
      setInputValue('')
    }
  }

  return (
    <Container>
      <div className="about-jussi">
        <JussiLogo className="jussi-logo"/>
        <a href="#solutions">
          <p>Nossas soluções</p>
        </a>
        <a href="#about">
          <p>Conheça a Jüssi</p>
        </a>
        <Menu media="small"/>
      </div>
      <div className="action-bar">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Buscar usuário do GitHub" 
            value={loading ? 'Loading...' : inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
          />
          <SearchIcon 
            className="search-icon" 
            onClick={inputValue ? searchUser : () => alert('Type in the username!')}
          />
        </div>
        <a href="#">
          <p>Login</p>
        </a>
        <ShoppingCart className="shopping-cart"/>
      </div>
      <Menu media="medium"/>
    </Container>
  )
}

export default Header;