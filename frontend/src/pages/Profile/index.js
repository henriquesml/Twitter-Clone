import React from 'react';
import { Container, ProfileInfo } from './styles';

function Widgets() {
  return(
    <Container>
      <div className="profile">
        <ProfileInfo>
          <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"}/>
          <h1>Henrique Schmeller</h1>
        </ProfileInfo>
      </div>
    </Container>
  );
}

export default Widgets;