import React from 'react';
import PropTypes from 'prop-types'

import Header from '../../../components/Header'

import { Wrapper, Scroll, Content, TimeLine } from './styles'

import Widgets from '../../Widgets'

import Profile from '../../Profile'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Scroll>
      <Content className="wrapper">
        <Profile/>
        <TimeLine>
          {children}
        </TimeLine>
        <Widgets />
      </Content>
      </Scroll>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}