import React from 'react';
import './App.css';
import WhatDoesTheServerSay from './components/WhatDoesTheServerSay';
import Logo from './components/Logo';

function App() {
  let url = 'http://localhost:8050/';

  return (
    <div className="App">
      <Logo />
      <WhatDoesTheServerSay url={url} />
    </div>
  );
}

export default App;
