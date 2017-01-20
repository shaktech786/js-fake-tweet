const TweetBox = props => {
  const placeholder = props.placeholder;

  const handleClick = () => {
    postTweet(tweetInput.value);
    tweetInput.value = "";
  };

  return (
    <div>
      <textarea rows="5" cols="60" placeholder={placeholder} ref={function(textareaElement){tweetInput = textareaElement}}></textarea>
      <input type="button" value="Tweet" onClick={handleClick}/>
    </div>
  );
};