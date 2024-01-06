import React from 'react';
import { useUI } from './components/common/uiContext';

const App = () => {
  const { openModal } = useUI();
  return (
    <div>
      <h1>App</h1>
      <button onClick={openModal}>open Modal</button>
    </div>
  );
};

export default App;
