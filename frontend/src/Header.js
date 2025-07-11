import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="logo-title">
          <img src="/proposia.png" alt="Proposia logo" className="logo" />
          <h1 className="site-title">Proposia</h1>
        </div>
        <Link to="/login" className="btn-primary">Se connecter</Link>
      </div>
    </header>
  );
}

export default Header;
