import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import TemplatesPage from './TemplatesPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
