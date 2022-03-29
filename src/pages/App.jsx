import React, { useState, useEffect } from "react";
import LoginForm from "../components/loginForm";
import SignupForm from "../components/SignupForm";
import "../styles/App.css";

var is_logged_in = false;

export default function App() {
  const [loggedin, setLoggedin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (loggedin && !is_logged_in) {
      is_logged_in = true;
      fetch("https://backendhead.herokuapp.com/core/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setUsername(json.username);
        });
    }
  });

  const handle_login = (e, data) => {
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
        setLoggedin(true);
        setUsername(json.user.username);
      });
  };

  const handle_signup = (e, data) => {
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
        setLoggedin(true);
        setUsername(json.username);
      });
  };

  const handle_logout = () => {
    localStorage.removeItem("token");
    setLoggedin(false);
    setUsername("");
  };

  if (loggedin) {
    return (
      <div className="App2">
        <button onClick={handle_logout}>Logout</button>
        <h3>Hello, {username}</h3>
      </div>
    );
  }
  return (
    <div>
      <h4>Usernames and Passwords are case sensitive</h4>
      <div className="App">
        <div style={{padding:"20px"}}>
          <LoginForm handle_login={handle_login} />
        </div>
        <div style={{padding:"20px"}}>
          <SignupForm handle_signup={handle_signup} />
        </div>
        <br></br>
      </div>
      
    </div>
  );
}
