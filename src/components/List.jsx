import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    headphones: []
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/headphones/")
      .then(res => {
        const headphones = res.data;
        this.setState({ headphones });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.headphones
            .map(headphone =>
              <li key={headphone.id}>{headphone.name}</li>
            )
        }
      </ul>
    )
  }
}