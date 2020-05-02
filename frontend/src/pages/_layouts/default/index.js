import React from 'react';
import PropTypes from 'prop-types'

import Header from '../../../components/Header'

import { Wrapper, Scroll, Content, Profile, TimeLine, Widgets } from './styles'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Scroll>
      <Content className="wrapper">
        
        <Profile>
          <h1>Henrique</h1>
        </Profile>
        <TimeLine>
          {children}
        </TimeLine>
        <Widgets>
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
         
        </Widgets>
        
      </Content>
      </Scroll>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}