import React, { useState } from 'react';

export default function SignupForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_username = (e) => {
    setUsername(e.target.value);
  };
  const handle_password = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={(e) => props.handle_signup(e, {username, password})}>
      <h4>Sign Up</h4>
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
