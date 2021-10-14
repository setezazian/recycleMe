import React, { useState } from 'react';
import City from './City.jsx';
import Items from './Items.jsx';

const App = () => {
  const [currentCity, setCurrentCity] = useState('');

  return (
    <div>
      <img src="recycle-me.jpg" />
      <div className="app">
        <City setCurrentCity={setCurrentCity} />
        <Items currentCity={currentCity} />
      </div>
    </div>
  );
}

export default App;