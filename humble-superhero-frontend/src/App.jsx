import React, { useState } from 'react';
import './App.css';
import SuperheroList from './components/SuperheroList';

function App() {

  return (
    <div className="App">
      <div>
        <SuperheroList />
      </div>
    </div>
  );
}

export default App;
