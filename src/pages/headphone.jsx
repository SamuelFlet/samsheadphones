import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Invoice() {
  const [data, setData] = useState({});

  let params = useParams();

  const axios = require("axios");

  useEffect(() => {
    axios
      .get("https://backendhead.herokuapp.com/reviews/")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  var rows = [];
  for (var i = 0; i < data.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    let num = data[i].headphone.toString();
    if (num === params.headphoneId) {
      rows.push(<div>{data[i].review}</div>);
    }
  }

  return <div>{rows}</div>;
}
