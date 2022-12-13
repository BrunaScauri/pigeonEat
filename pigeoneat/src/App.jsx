import React from 'react';
import './App.css';
import Header from './components/Header';
import pigeonWaits from './resources/pigeon_waits.webp';

function App() {
  return (
    <div>
      <Header />
      <div className="mainPhoto">
        <img className="mainImg" src={pigeonWaits} alt="pigeon is waiting" width="250" height="250" />
      </div>
    </div>
  );
}

export default App;
