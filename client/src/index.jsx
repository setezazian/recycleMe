import React from 'react';
import ReactDOM from 'react-dom';

import data from './dummyData.js';
import City from './components/City.jsx';
import Item from './components/Item.jsx';

const App = () => (
  <div>
    <h1>mInteger</h1>
    <div className="app">
      <City />
      <Item />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));