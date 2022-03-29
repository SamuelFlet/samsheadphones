import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

var is_logged_in = false;

const AddStudent = () => {
  const [headphone, setHeadphone] = useState([]);
  const [author, setAuthor] = useState(null);
  const [review, setReview] = useState(null);
  const [price_rating, setprice_rating] = useState(0);
  const logged_in = useState(localStorage.getItem("token") ? true : false);
  let params = useParams();

  if (logged_in && !is_logged_in) {
    is_logged_in = true;
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
    formField.append("price_rating", price_rating);

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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter your review here"
              name="name"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Text className="text-muted">
              Please enter a rating (0-5)
            </Form.Text>
            <Form.Control
              type="number"
              placeholder="Enter your rate (Out of 5)"
              name="price_rating"
              min="0"
              max="5"
              value={price_rating}
              onChange={(e) => setprice_rating(e.target.value)}
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
