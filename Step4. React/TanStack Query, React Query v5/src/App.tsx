import React from 'react';
import fetchData from './api/fetchUser';

const App = () => {
  const data = fetchData();
  console.log(data);
  return <div>App</div>;
};

export default App;
