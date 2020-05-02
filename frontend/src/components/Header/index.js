import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/twitter.svg'
import { Container, Content, Profile } from './styles';

export default function Header() {


  return (
    <Container>
      <Content>
        <nav>
          <Link to="/timeline">
            <img src={Logo} alt="SocialNet"/>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Henrique Schmeller</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/profile">
              <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Henrique Schmeller"/>
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}