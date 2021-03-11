import { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    console.log('Constructor runs');
  }

  handleLikeButtonClick = () => {
    console.log('Event handling method runs');
    this.setState({
      liked: !this.state.liked
    });
  };

  // Runs when the result from the render method
  // is mounted into the DOM
  componentDidMount() {
    console.log('componentDidMount runs');
  }

  // Runs every time there's a change to the state
  // or to the props being passed to the component
  componentDidUpdate(previousProps, previousState) {
    console.log(previousProps, this.props);
    console.log(previousState, this.state);
    if (previousState.liked !== this.state.liked) {
      console.log(
        'The change in "liked" status triggered the component did update method.'
      );
    }
    console.log('componentDidUpdate runs');
  }

  // Runs right before component is taken out of the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount runs');
  }

  render() {
    console.log('Render runs');
    return (
      <button onClick={this.handleLikeButtonClick}>
        {this.state.liked ? 'Liked' : 'Not Liked'} {this.props.message}
      </button>
    );
  }
}

export default LikeButton;
