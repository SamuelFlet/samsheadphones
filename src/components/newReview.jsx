import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddStudent = () => {
  const [headphone, setHeadphone] = useState([]);
  const [author, setAuthor] = useState(null);
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState(null);
  const logged_in = useState(localStorage.getItem("token") ? true : false);
  let params = useParams();

  if (logged_in) {
    fetch("https://backendhead.herokuapp.com/core/current_user/", {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAuthor(json.id);
        setHeadphone(params.headphoneId);
      });
  }

  const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("headphone", headphone);
    formField.append("author", author);
    formField.append("review", review);
    formField.append("rating", rating);

    await axios({
      method: "post",
      url: "https://backendhead.herokuapp.com/reviews/",
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
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter the Headphone's Description"
              name="email"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
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
