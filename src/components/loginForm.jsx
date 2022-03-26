import React, { useState } from 'react';

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_username = e =>{
    setUsername(e.target.value);
  }
  const handle_password = e =>{
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={e => props.handle_login(e, {username, password})}>
      <h4>Log In</h4>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handle_username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handle_password}
      />
      <input type="submit" />
    </form>
  );
}