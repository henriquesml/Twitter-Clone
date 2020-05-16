import React from 'react';
import { Container } from './styles';

function Widgets() {
  return(
    <Container>
      <div className="topics">
        <h1>Assuntos do Momento</h1>
        <div className="posts">
        <div className="post">
            <h2>#ForaBolsonaro</h2>
            <h3>589 mil posts</h3>
        </div>

        <div className="post">
            <h2>#MoroTaCerto</h2>
            <h3>501 mil posts</h3>
        </div>
        </div>
      </div>
    </Container>
  );
}

export default Widgets;