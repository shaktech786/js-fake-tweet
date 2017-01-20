import ReactDOM from "react-dom";
import React from "react";
import TweetBox from "./TweetBox";
import postTweet from "./postTweet";

ReactDOM.render(
  <TweetBox placeholder="Write a fweet!" postTweet={postTweet}/>,
  document.getElementById("root")
);