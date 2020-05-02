import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Logo from '../../assets/twitter.svg'
import { Container, Content, Profile } from './styles';

export default function Header() {

  const profile = useSelector(state => state.user.profile)

  return (
    <Container>
      <Content>
        <nav>
          Logo
        </nav>
        <aside>
          <Profile>
            <Link to="/profile">
              <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt={profile.name}/>
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}