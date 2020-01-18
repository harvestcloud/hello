import React from 'react';
import './App.css';
import WhatDoesTheServerSay from './components/WhatDoesTheServerSay';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <WhatDoesTheServerSay url={window._env_.CLIENT_SERVER_BASE_URL} />
    </div>
  );
}

export default App;
