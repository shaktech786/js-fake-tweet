import ReactDOM from "react-dom";
import React from "react";
import TweetBox from "./TweetBox";
import postTweet from "./postTweet";

ReactDOM.render(
  <TweetBox placeholder="What's up?" postTweet={postTweet}/>,
  document.getElementById("root")
);