import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '', password: ''};
  }

  username = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  password = () => {
    
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.setState({username: event.target.value})}/>
            </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
