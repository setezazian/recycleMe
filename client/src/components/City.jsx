import React from 'react';
import axios from 'axios';

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (
      <div className="city">
        <form className="city-input" action="items">
          <input
            name="city"
            type="text"
            placeholder="City Name"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default City;
