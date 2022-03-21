import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("description", description);

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
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add a pair of Headphones</h2>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Headphone's Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter the Headphone's Description"
              name="email"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-block" onClick={addNewStudent}>
            Add Headphones
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
