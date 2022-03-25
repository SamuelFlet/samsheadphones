import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddStudent = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [impedance, setImpedance] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [sensitivity, setSensitivity] = useState(null);
  const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("description", description);
    formField.append("impedance", impedance);
    formField.append("frequency", frequency);
    formField.append("sensitivity", sensitivity);
    await axios({
      method: "post",
      url: "https://backendhead.herokuapp.com/headphones/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="container">
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter the Headphone's Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Enter the Headphone's Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="Enter the Headphone's Impedance"
              name="impedance"
              value={impedance}
              onChange={(e) => setImpedance(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Enter the Headphone's Frequenct i.e (10Hz - 20KHz)"
              name="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="Enter the Headphone's Sensitivity"
              name="sensitivity"
              value={sensitivity}
              onChange={(e) => setSensitivity(e.target.value)}
            />
          </Form.Group>
          <Button onClick={addNewStudent} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddStudent;
