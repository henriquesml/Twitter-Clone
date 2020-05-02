import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHome, FaBell, FaPaperPlane } from 'react-icons/fa'

import Logo from '../../assets/twitter.svg'
import { HeaderMain } from './styles';

export default function Header() {

  const profile = useSelector(state => state.user.profile)

  return (
    <HeaderMain>
      <div className="wrapper">
        <nav>
          <ul>
            <li><FaHome color="#FFF" size={18}/> Home</li>
            <li><FaBell color="#FFF" size={18}/> Notificações</li>
            <li><FaPaperPlane color="#FFF" size={18}/> Mensagens</li>
          </ul>
        </nav>

        <img src={Logo} width="20px" alt="Twitter" />

        <div className="side">
          <input placeholder="Buscar..."/>
          <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt={profile.name}/>
          <button>Post</button>
        </div>
      </div>
      
    </HeaderMain>
  );
}