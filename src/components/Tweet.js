import TweetList from './TweetList';
import '../styles/styles.scss';
import styled from 'styled-components';

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <TweetStyle className="tweet">
      <h2 className="tweet-title">Name {name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </TweetStyle>
  );
};

const TweetStyle = styled.div`
  background: 'red';
`;

export default Tweet;
