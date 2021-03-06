import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewReview from "../components/newReview";
import { Rating } from "react-simple-star-rating";
import "../styles/headphone.css";

export default function Headphone() {
  const [data, setData] = useState({});
  const [hdata, sethData] = useState({});
  let params = useParams();

  const axios = require("axios");
  const fetchData = () => {
    const reviewAPI = "https://backendhead.herokuapp.com/reviews/";
    const headphoneAPI =
      "https://backendhead.herokuapp.com/headphones/" + params.headphoneId;

    const getReviews = axios.get(reviewAPI);
    const getHeadphone = axios.get(headphoneAPI);

    axios.all([getReviews, getHeadphone]).then(
      axios.spread((...allData) => {
        const allreview = allData[0].data;
        const headphones = allData[1].data;

        setData(allreview);
        sethData(headphones);
      })
    );
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var rows = [];
  for (var i = 0; i < data.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    let num = data[i].headphone.toString();
    if (num === params.headphoneId) {
      rows.push(
        <div>
          <p>{data[i].username}</p>
          <p id="title">
            <Rating initialValue={data[i].price_rating / 20} readonly />
            &ensp;{data[i].title}
          </p>
          <p>{data[i].date}</p>
          <p>{data[i].review}</p>
          
        </div>
      );
    }
  }

  return (
    <div className="center">
      <h1>{hdata.name}</h1>

      <br></br>
      <h2>{hdata.description}</h2>
      <br></br>
      <div className="display">
        <div>
          <p>Impedance</p>
          <p>{hdata.impedance} Ω</p>
        </div>
        <div>
          <p>Frequency</p>
          <p>{hdata.frequency}</p>
        </div>
        <div>
          <p>Sensitivity</p>
          <p>{hdata.sensitivity} dB</p>
        </div>
      </div>
      <h5>Reviews</h5>
      <div id="reviews">
        {rows}
      </div>

      <br></br>
      <NewReview />
    </div>
  );
}
