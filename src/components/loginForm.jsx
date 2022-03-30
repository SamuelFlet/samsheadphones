import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_username = (e) => {
    setUsername(e.target.value);
  };
  const handle_password = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Label>Log In</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="name"
              value={username}
              onChange={handle_username}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="description"
              value={password}
              onChange={handle_password}
            />
          </FloatingLabel>
        </Form.Group>
        <Button
          variant="outline-primary"
          onClick={(e) => props.handle_login(e, { username, password })}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
