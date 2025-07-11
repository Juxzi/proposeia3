import React from 'react';

import './App.css';

function Main() {
  return (
    <main className="main-content container">
      <h2 className="tagline">La solution pour vos propositions professionnelles</h2>
      <p className="subtitle">Générez rapidement des documents impeccables</p>
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">📄</div>
          <h3>Modèles personnalisables</h3>
          <p>Créez des modèles dynamiques adaptés à chaque client.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">⚡</div>
          <h3>Génération rapide</h3>
          <p>Produisez des documents en quelques clics.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">🔒</div>
          <h3>Sécurité garantie</h3>
          <p>Vos données sont chiffrées et protégées.</p>
        </div>
      </section>

    </main>
  );
}

export default Main;
