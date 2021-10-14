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
    <div id="items" className={props.currentCity === '' ? 'hidden' : undefined}>
      <input
      type="text"
      name="item"
      placeholder="Search Item"
      value={item}
      onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => retrieveItem()}>Search</button>
      <div id="item" className={Object.keys(data).length === 0 ? 'hidden' : undefined}>
        {data.is_recyclable === 1
        ? `${data.name}s are recycalble in ${props.currentCity}. Select a photo to see details.`
        : `${data.name}s are not recycalble in ${props.currentCity}. Select a photo to see details.`}
        <img src={data.image2_url} />
        <img src={data.image1_url} />
      </div>
    </div>
  );
}

export default Items;
