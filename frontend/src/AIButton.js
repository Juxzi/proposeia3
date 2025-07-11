import React from 'react';
import './App.css';

function AIButton({ onClick, loading, disabled }) {
  return (
    <button
      type="button"
      className="btn-ai"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Rédaction en cours…' : 'Compléter avec l\u2019IA'}
    </button>
  );
}

export default AIButton;
