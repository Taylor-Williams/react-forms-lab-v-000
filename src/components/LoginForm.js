import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.setState({username: event.target.value})} />
            </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.setState({username: event.target.value})} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={event => event.preventDefault()}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
