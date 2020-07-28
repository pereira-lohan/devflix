import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';

const Menu = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='DevFlix logo' />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
