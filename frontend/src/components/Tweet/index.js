import React from 'react';

import like from '../../assets/like.svg';
import api from '../../services/api';

import parseTwitterDate from '../../helpers/parseTwitterDate'

import { Container, Header, CurrentDate, Author, Content, ContentPost, Footer, Like } from './styles'

function Tweet({tweet}) {
  async function handleLike(id) {
    await api.post(`likes/${id}`);
  }

  return (
    <Container>
      <Header>
        <Author>{tweet.author} - </Author>
        <CurrentDate>
          {parseTwitterDate(tweet.createdAt)}
        </CurrentDate>
      </Header>
      
      <Content>
        <ContentPost>{tweet.content}</ContentPost>
      </Content>
      <Footer>
        <Like type="button" onClick={(e) => handleLike(tweet.id)}>
          <img src={like} alt="Like" />
          {tweet.likes}
        </Like>
      </Footer>
    </Container>
 );
}

export default React.memo(Tweet)
