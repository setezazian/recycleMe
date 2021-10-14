import React, { useState } from 'react';
import axios from 'axios';

const Items = (props) => {
  const [item, setItem] = useState('');
  const [data, setData] = useState({});

  // TODO: add useEffect to update data on each call

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
        <span className={data.is_recyclable ? undefined : 'notrecyclable'}>
          {data.is_recyclable
          ? `${data.name}s are recyclable in ${props.currentCity}. Select a photo to see details.`
          : `${data.name}s are not recyclable in ${props.currentCity}. Select a photo to see details.`}
        </span>
        <img src={data.image2_url} />
        <img src={data.image1_url} />
      </div>
    </div>
  );
}

export default Items;
