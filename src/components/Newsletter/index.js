import React, {useState} from 'react';
import { Container } from './styles';

const Newsletter = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit =  (e) => {
    e.preventDefault();
    setInputValue('');
  }

  return (
    <Container>
      <div className="newsletter-wrapper">
        <div className="left-column"><span>//</span></div>
        <div className="right-column">
          <h2>RECEBA NOVIDADES DA NOSSA ÁREA<br/> DE PRODUTOS DIGITAIS.</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              value={inputValue} 
              onChange={e => setInputValue(e.target.value)}
              required
            />
            <button type="submit">CADASTRAR</button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Newsletter;