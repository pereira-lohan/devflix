import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../Button';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='DevFlix logo' />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
