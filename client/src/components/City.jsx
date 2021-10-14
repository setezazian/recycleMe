import React, { useState } from 'react';

const City = (props) => {
  const [city, setCity] = useState('');

  return (
    <div className="city">
      <div className="city-input">
        <input
          name="city"
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => props.setCurrentCity(city)}>Search</button>
      </div>
    </div>
  );
}

export default City;
