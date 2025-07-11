import React from 'react';

import './App.css';

function Header() {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="logo-title">
          <img src="/proposia.png" alt="Proposia logo" className="logo" />
          <h1 className="site-title">Proposia</h1>
        </div>

      </div>
    </header>
  );
}

export default Header;
