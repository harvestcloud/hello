import React from 'react';
import './App.css';
import WhatDoesTheServerSay from './components/WhatDoesTheServerSay';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <WhatDoesTheServerSay />
    </div>
  );
}

export default App;
