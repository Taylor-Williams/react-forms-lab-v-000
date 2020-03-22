import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {remainingChars: this.props.maxChars};
  }

  countChars = (event) =>{
    this.setState({
      remainingChars: this.props.maxChars - this.target.count
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.countChars}/>
        <p>characters remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
