import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import SignupForm from "../components/SignupForm";
import "../styles/App.css";
var is_logged_in = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount() {
    if (this.state.logged_in && !is_logged_in) {
      is_logged_in = true;
      fetch("https://backendhead.herokuapp.com/core/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch("https://backendhead.herokuapp.com/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.user.username,
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch("https://backendhead.herokuapp.com/core/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.username,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
  };

  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
  };

  render() {
    if (this.state.logged_in) {
      return (
        <div className="App">
          <button onClick={this.handle_logout}>Logout</button>
          <h3>Hello, {this.state.username}</h3>
        </div>
      );
    }
    return (
      <div className="App">
        <LoginForm handle_login={this.handle_login} />
        <br></br>
        <SignupForm handle_signup={this.handle_signup} />
        <br></br>
        <h4>Usernames and Passwords are case sensitive</h4>
      </div>
    );
  }
}

export default App;
