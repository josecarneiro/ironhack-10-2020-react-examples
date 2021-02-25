import React from 'react';

// function Message(props) {
//   return <h1>{props.text}</h1>;
// }

class Message extends React.Component {
  render() {
    console.log('Message rendered');
    return <h1>{this.props.text}</h1>;
  }
}

export default Message;
