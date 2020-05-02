import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import socket from 'socket.io-client';

import twitterLogo from '../../assets/twitter.svg';
import Tweet from '../../components/Tweet';

import { Container, Form, Textarea, ListTwitters } from './styles'

export default function TimeLine() {
  const [post, setPost] = useState('')
  const [tweets, setTweets] = useState([])

  useEffect(() => {

    async function loadTweets(){
      const response = await api.get('tweets');

      setTweets(response.data);
      
    }
    loadTweets()
  }, [tweets])

  useEffect(() => {

    const io = socket('http://localhost:3333');
    
    io.on('tweet', data => {
      console.log(data)
    })

    io.on('like', data => {
      setTweets(tweets.map(
          tweet => (tweet.id === data.id ? data : tweet) 
        )
      );
    });


  }, [])

  async function handleNewTweet(e) {
    if (e.keyCode !== 13) return;

    await api.post('tweets', { content: post, user_id: 1})

    setPost('')
  }

  return (
    <Container>
      <img height={24} src={twitterLogo} alt="GoTwitter" />

      <Form>
        <Textarea
          value={post}
          onChange={e => setPost(e.target.value)}
          onKeyDown={handleNewTweet}
          placeholder="O que está acontecendo?"
          >
        </Textarea>
      </Form>

      <ListTwitters>
        { tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ListTwitters>
    </Container>
  );
}
