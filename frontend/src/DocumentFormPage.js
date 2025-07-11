import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import DocumentForm from './DocumentForm';
import './App.css';

function DocumentFormPage() {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    async function fetchTemplate() {
      try {
        const res = await fetch(`/api/templates/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setTemplate(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (token) {
      fetchTemplate();
    }
  }, [id, token]);

  if (!template) {
    return <p className="loading">Chargement...</p>;
  }

  return (
    <main className="document-page container">
      <header className="document-header">
        <img src="/proposia.png" alt="Proposia logo" className="logo" />
        <h2 className="document-title">{template.title}</h2>
        <Link to="/templates" className="btn-secondary">Retour à la bibliothèque</Link>
      </header>
      <section className="document-summary">
        <p className="template-desc">{template.description}</p>
        {Array.isArray(template.sections) && (
          <ul className="template-sections">
            {template.sections.map((s) => (
              <li key={s} className="template-section">{s}</li>
            ))}
          </ul>
        )}
      </section>
      <DocumentForm template={template} />
    </main>
  );
}

export default DocumentFormPage;
