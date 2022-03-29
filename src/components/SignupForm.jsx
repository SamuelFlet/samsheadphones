import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
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
      <label htmlFor="username">Username&ensp;</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handle_username}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">Password&ensp;</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handle_password}
      />
      <br></br>
      <br></br>
      <Button type="submit" >Submit</Button>
    </form>
  );
}
