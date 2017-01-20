var TweetBox = function(props) {
  var placeholder = props.placeholder;
  var tweetText = React.createElement("textarea", {rows: 5, cols: 60, placeholder: placeholder});
  var tweetButton = React.createElement("input", {type: "button", value: "Tweet"});

  return React.createElement("div", null, [tweetText, tweetButton]);
};