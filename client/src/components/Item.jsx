import React from 'react';
import axios from 'axios';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      amount: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/api/categories', {
      name: this.state.name,
      amount: this.state.amount
    })
      .then(response => {
        console.log(response);
        this.props.fetchCategories();
      })
      .catch(error => {
        console.log('error', error);
      });
  }


  render() {
    return (
      <div className="category-form">
        <div className="category-input">
          <input
            name="name"
            type="text"
            placeholder="Budget Category"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="amount"
            type="number"
            placeholder="Target Budget"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>+</button>
      </div>
    );
  }
}

export default Item;
