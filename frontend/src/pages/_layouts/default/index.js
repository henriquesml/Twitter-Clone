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
         <h1>Widgets</h1>
        </Widgets>
        
      </Content>
      </Scroll>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}