import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import TemplateCard from './TemplateCard';
import './App.css';

function TemplatesPage() {
  const { token } = useContext(AuthContext);
  const [templates, setTemplates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          setTemplates(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (token) {
      fetchTemplates();
    }
  }, [token]);

  const filtered = templates.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="templates-page container">
      <h2 className="templates-title">Modèles de documents</h2>
      <p className="templates-subtitle">
        Sélectionnez un modèle pour générer rapidement votre document professionnel personnalisé.
      </p>
      <input
        type="search"
        placeholder="Rechercher..."
        aria-label="Rechercher un modèle"
        className="template-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="templates-grid">
        {filtered.map((tpl) => (
          <TemplateCard key={tpl.id} template={tpl} />
        ))}
      </div>
    </main>
  );
}

export default TemplatesPage;
