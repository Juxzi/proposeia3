import React from 'react';
import AIButton from './AIButton';
import './App.css';

function SectionEditor({ name, value, onChange, onGenerate, loading, readOnly }) {
  return (
    <div className="section-card">
      <label htmlFor={name} className="section-label">{name}</label>
      <textarea
        id={name}
        className="section-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
      />
      <AIButton onClick={onGenerate} loading={loading} disabled={readOnly} />
    </div>
  );
}

export default SectionEditor;
