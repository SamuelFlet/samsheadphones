import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Table from "react-bootstrap/Table";
import NewHeadphone from "../components/new";

export default function Headphones() {
  const [headphones, setHeadphone] = useState([]);

  const fetchData = () => {
    axios.get("https://backendhead.herokuapp.com/headphones/").then((res) => {
      setHeadphone(res.data);
    });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {headphones.map((headphone) => (
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
