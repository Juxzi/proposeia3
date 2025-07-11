import React, { useState } from 'react';
import SectionEditor from './SectionEditor';
import './App.css';

function DocumentForm({ template }) {
  const variables = Array.isArray(template.variables)
    ? template.variables
    : typeof template.variables === 'string'
    ? template.variables.split(',')
    : [];
  const sections = Array.isArray(template.sections)
    ? template.sections
    : typeof template.sections === 'string'
    ? template.sections.split(',')
    : [];

  const [varValues, setVarValues] = useState(() => {
    const obj = {};
    variables.forEach((v) => (obj[v] = ''));
    return obj;
  });

  const [sectionTexts, setSectionTexts] = useState(() => {
    const obj = {};
    sections.forEach((s) => (obj[s] = ''));
    return obj;
  });

  const [status, setStatus] = useState('Brouillon');
  const [loading, setLoading] = useState('');
  const [lastMod, setLastMod] = useState(null);

  const handleVarChange = (name, value) => {
    setVarValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectionChange = (name, value) => {
    setSectionTexts((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (name) => {
    setLoading(name);
    // simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setSectionTexts((prev) => ({ ...prev, [name]: `Texte généré pour ${name}` }));
    setLoading('');
  };

  const handleSave = () => {
    setLastMod(new Date());
    setStatus('Brouillon');
  };

  const handleFinalize = () => {
    setLastMod(new Date());
    setStatus('Finalisé');
  };

  return (
    <form className="document-form">
      <h3>Variables</h3>
      {variables.map((v) => (
        <div className="form-group" key={v}>
          <label htmlFor={v}>{v}</label>
          <input
            id={v}
            value={varValues[v]}
            onChange={(e) => handleVarChange(v, e.target.value)}
            disabled={status === 'Finalisé'}
          />
        </div>
      ))}

      <h3>Sections</h3>
      {sections.map((s) => (
        <SectionEditor
          key={s}
          name={s}
          value={sectionTexts[s]}
          onChange={(val) => handleSectionChange(s, val)}
          onGenerate={() => handleGenerate(s)}
          loading={loading === s}
          readOnly={status === 'Finalisé'}
        />
      ))}

      <div className="actions">
        <button
          type="button"
          className="btn-secondary"
          onClick={handleSave}
          disabled={status === 'Finalisé'}
        >
          Sauvegarder en brouillon
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={handleFinalize}
          disabled={status === 'Finalisé'}
        >
          Finaliser le document
        </button>
        <a href="/templates" className="btn-cancel">
          Annuler
        </a>
      </div>
      <p className="status-info">
        Statut : {status}
        {lastMod && ` — Dernière modification : ${lastMod.toLocaleString()}`}
      </p>
    </form>
  );
}

export default DocumentForm;
