import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PersonList extends React.Component {
  state = {
    headphones: [],
  };

  componentDidMount() {
    axios.get("https://backendhead.herokuapp.com/headphones/").then((res) => {
      const headphones = res.data;
      this.setState({ headphones });
    });
  }

  render() {
    return (
      <div>
        {this.state.headphones.map((headphone) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`${headphone.id}`}
            key={headphone.id}
          >
            {headphone.name}: {headphone.description}
          </Link>
        ))}
      </div>
    );
  }
}
