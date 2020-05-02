import React from 'react';
import PropTypes from 'prop-types'

import Header from '../../../components/Header'

import { Wrapper, Scroll, Content } from './styles'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Scroll>
          {children}
        </Scroll>
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}