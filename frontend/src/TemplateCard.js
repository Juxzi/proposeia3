import React from 'react';

import './App.css';

function TemplateCard({ template }) {
  const sections = Array.isArray(template.sections)
    ? template.sections
    : typeof template.sections === 'string'
    ? template.sections.split(',')
    : [];

  const icons = {
    contrat: '📑',
    rapport: '📊',
    proposition: '📄'
  };
  const icon = icons[template.type] || '📄';

  return (
    <div className="template-card" tabIndex="0">
      <div className="template-icon" aria-hidden="true">{icon}</div>
      <h3 className="template-title">{template.title}</h3>
      <p className="template-desc">{template.description}</p>
      <ul className="template-sections">
        {sections.map((s) => (
          <li key={s} className="template-section">{s.trim()}</li>
        ))}
      </ul>

    </div>
  );
}

export default TemplateCard;
