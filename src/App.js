import React, { useState, useEffect } from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const [name, setName] = useState('marcel');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log('we rn a fnckti');
  }, [textInput]);

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
