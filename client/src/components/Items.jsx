import React, { useState } from 'react';
import axios from 'axios';

const Items = (props) => {
  const [item, setItem] = useState('');
  const [data, setData] = useState({});

  const retrieveItem = () => {
    axios.get('/items', {
      params: {
        city: props.currentCity,
        item
      }
    })
    .then(function (response) {
      console.log(response);
      setData(response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div id="items" className={props.currentCity==='' ? 'hidden' : undefined}>
      <input
      type="text"
      name="item"
      placeholder="Search Item"
      value={item}
      onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => retrieveItem()}>Search</button>
      <div>
        {data.name}
        <img src={data.image_url} />
        {data.is_recyclable}
      </div>
    </div>
  );
}

export default Items;
