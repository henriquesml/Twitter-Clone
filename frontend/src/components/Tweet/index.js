import React from 'react';

import like from '../../assets/like.svg';
import './Tweet.css';
import api from '../../services/api';

import { Container } from './styles'

export default function Tweet({tweet}) {

  async function handleLike(id) {
    await api.post(`likes/${id}`);
  }

  return (
    <Container>
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button type="button" onClick={() => handleLike(tweet.id)}>
          <img src={like} alt="Like" />
          {tweet.likes}
      </button>
    </Container>
 );
}
