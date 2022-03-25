import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Table from "react-bootstrap/Table";
import NewHeadphone from "../components/new";

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
      <div className="App">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.headphones.map((headphone) => (
              <tr>
                <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`${headphone.id}`}
                  key={headphone.id}
                >
                  <td>{headphone.name}</td>
                </Link>
                <td>{headphone.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <NewHeadphone />
      </div>
    );
  }
}
