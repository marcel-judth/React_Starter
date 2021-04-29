import Tweet from './Tweet';

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
