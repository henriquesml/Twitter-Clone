import React, { useState, useEffect, useMemo } from 'react';

import api from '../../services/api';
import socket from 'socket.io-client';

import twitterLogo from '../../assets/twitter.svg';
import Tweet from '../../components/Tweet';

import { Container, Form, Button, Textarea, ListTwitters } from './styles'

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
    e.preventDefault()

    await api.post('tweets', { content: post, user_id: 1})

    setPost('')
  }

  const tweetsList = useMemo(() => {
    return tweets.map(tweet => ({
      id: tweet.id,
      author: tweet.user.name,
      createdAt: tweet.createdAt,
      content: tweet.content,
      likes: tweet.likes
    }))
  }, [tweets])

  return (
    <Container>
      <Form
        onSubmit={handleNewTweet}
      >
        <Textarea
          value={post}
          onChange={e => setPost(e.target.value)}
          
          placeholder="O que está acontecendo?"
          >
        </Textarea>
        <Button type="submit" >Enviar</Button>
      </Form>

      <ListTwitters>
        { tweetsList.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ListTwitters>
    </Container>
  );
}
