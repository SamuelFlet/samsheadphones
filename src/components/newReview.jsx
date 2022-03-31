import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Rating } from "react-simple-star-rating";

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
  const handleRating = (rate) => {
    setprice_rating(rate)
    // other logic
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
      <h5>Reviews</h5>
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


            <Form.Text className="text-muted">
              Please enter select a rating
            </Form.Text>
            <br></br>
            <Rating
              onClick={handleRating}
              ratingValue={price_rating}
              
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
