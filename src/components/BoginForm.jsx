import React, { useState } from "react";

export default function Header(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_change = (e) => {
    setUsername(e.target.value);
  };
  const handle_change2 = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={(e) => props.handle_login(e)}>
      <h4>Log In</h4>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handle_change}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handle_change2}
      />
      <input type="submit" />
    </form>
  );
}
