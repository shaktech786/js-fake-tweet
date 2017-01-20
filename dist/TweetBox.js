"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 In this module we have converted the TweetBox Component to an ES6 class that
 extends from React.Component so that it can inherit some methods that provide
 a small, strict API for managing state changes within React apps.

 This implementation is superior to the previous version of TweetBox, which used
 `ref`. That version is more similar to an older style of JavaScript that relies
 on DOM elements for storing state. This style gives us more control and a better
 separation of state and UI.

 The implementation below is unfinished. There are a few TODOs below that you must
 finish in order to complete this module.

 At any time, you can use the npm scripts we wrote in the last module to re-compile
 the app to check your syntax, and then refresh the browser to see changes.

 You may prefer to make a copy of this file and then remove all the comments from
 one of the copies to unclutter it a bit.
 */

var postTweet = function postTweet(tweet) {
  console.log(tweet);
};

/**
 All React components should begin as pure functional components like the previous
 version of TweetBox. Only when a component needs to modify its own state should
 it be converted to an ES6 class extending from React.Component.

 Notice that even though the TweetBox contains the `placeholder` prop, it is never
 mutated from within the component. It should remain a prop and should NOT be added
 to the mutable state.

 You should ALWAYS prefer props over mutable state. Most of your app should be
 controlled via props passed into components.

 - API for React Components
 https://facebook.github.io/react/docs/react-component.html

 - Best practices for using form fields in React
 http://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
 https://facebook.github.io/react/docs/forms.html#controlled-components
 */

var TweetBox = function (_React$Component) {
  _inherits(TweetBox, _React$Component);

  function TweetBox(props) {
    _classCallCheck(this, TweetBox);

    /*
     `this.state` is the the private, mutable state of this component.
      Here, the state of the component is represented by a single JavaScript object.
     The value `tweet` key is the mutable value of the textarea, representing the
     text of the tweet. Initialliy it is an empty string.
     */
    var _this = _possibleConstructorReturn(this, (TweetBox.__proto__ || Object.getPrototypeOf(TweetBox)).call(this, props));

    _this.state = {
      tweet: ""
    };

    /*
     This part is a small JavaScript oddity with out the `this` keyword is handled with
     React and ES6 classes.
      It is a bit confusing and I wouldn't worry too much about this part.
      http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
     */
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  /**
   Callback when the textarea's value is changed.
   */


  _createClass(TweetBox, [{
    key: "handleChange",
    value: function handleChange(event) {
      /*
       When invoked, `event.target.value` is the current value of the textarea. We
       need to modify the component's state here, which will eventually lead to a
       re-render and a UI update.
        API docs and example: https://facebook.github.io/react/docs/react-component.html#setstate
        TODO: Use `this.setState({tweet: <new value>});` to change the state of the component.
       */

      this.setState({ tweet: event.target.value });
    }

    /**
     Callback when the Tweet button is clicked.
     */

  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      /*
       When invoked, we need to post the tweet and reset the component's state back
       to empty so the textarea field is cleared.
        TODO: First, call the `postTweet` function, passing the current tweet state
       as the argument. You are allowed to get the state value using `this.state.tweet`
        TODO: Second, reset the tweet text back to empty string using `this.setState(<new state>)`
       */

      postTweet(this.state.tweet);
      this.setState({ tweet: "" });
    }

    /**
     React.Component's render method. Returns a single React element.
      https://facebook.github.io/react/docs/react-component.html#render
     */

  }, {
    key: "render",
    value: function render() {
      /*
       We are now using ES6 Destructuring Assignment syntax to destructure the props
       into individual variables.
       */
      var placeholder = this.props.placeholder;


      return React.createElement(
        "div",
        null,
        React.createElement("textarea", { placeholder: placeholder, value: this.state.tweet, rows: "5", cols: "60", onChange: this.handleChange }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            this.state.tweet.length
          ),
          React.createElement("input", { type: "button", value: "Tweet", onClick: this.handleSubmit })
        )
      );
    }
  }]);

  return TweetBox;
}(React.Component);