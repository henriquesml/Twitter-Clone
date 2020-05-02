import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Logo from '../../assets/twitter.svg'
import { Container, Content, Profile } from './styles';

export default function Header() {

  const profile = useSelector(state => state.user.profile)
  console.log(profile)

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/profile">
              <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt={profile.name}/>
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}