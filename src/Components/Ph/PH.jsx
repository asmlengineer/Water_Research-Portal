import './PH.css';

const samples = [
  { id: 'WTR-001', location: 'River Sample',    ph: 6.5, status: 'Moderately Acidic', badge: 'badge-acidic'     },
  { id: 'WTR-002', location: 'Groundwater',     ph: 7.2, status: 'Safe',              badge: 'badge-safe'       },
  { id: 'WTR-003', location: 'Lake Water',      ph: 7.0, status: 'Neutral',           badge: 'badge-neutral'    },
  { id: 'WTR-004', location: 'Drinking Water',  ph: 7.6, status: 'Acceptable',        badge: 'badge-acceptable' },
  { id: 'WTR-005', location: 'Industrial Area', ph: 5.8, status: 'Acidic',            badge: 'badge-acidic'     },
];

function PH() {
  return (
    <div id="PH">

      {/* Hero */}
      <section className="hero">
        <span className="hero-eyebrow">Water Quality Analysis</span>
        <h1>
          Water <span>pH Level</span> Analysis
        </h1>
        <p>
          Monitoring pH levels is essential for assessing water quality,
          ecosystem health, drinking water safety, and environmental sustainability.
        </p>
      </section>

      <section className="container">

        {/* pH Classification Cards */}
        <div className="section-title">
          <h2>pH Classification of Water</h2>
          <p>Understanding water acidity and alkalinity.</p>
          <span className="title-rule" />
        </div>

        <div className="ph-grid">
          <div className="card acidic">
            <span className="card-icon">🔴</span>
            <h3>Acidic Water</h3>
            <span className="card-ph-value">pH &lt; 7</span>
            <p>
              Acidic water may result from industrial discharge,
              acid rain, or natural geological processes.
            </p>
          </div>

          <div className="card neutral">
            <span className="card-icon">🟢</span>
            <h3>Neutral Water</h3>
            <span className="card-ph-value">pH = 7</span>
            <p>
              Pure water is considered neutral and is ideal
              for most aquatic ecosystems.
            </p>
          </div>

          <div className="card alkaline">
            <span className="card-icon">🔵</span>
            <h3>Alkaline Water</h3>
            <span className="card-ph-value">pH &gt; 7</span>
            <p>
              Alkaline water contains dissolved minerals and
              may occur naturally in groundwater sources.
            </p>
          </div>
        </div>

        {/* pH Scale Bar */}
        <div className="ph-scale-wrap">
          <h3>The pH Scale (0 – 14)</h3>
          <div className="ph-bar" aria-label="pH colour gradient from acidic to alkaline" />
          <div className="ph-labels">
            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="ph-legend">
            <span><span className="dot" style={{ background: '#e63946' }} />Acidic (0–6)</span>
            <span><span className="dot" style={{ background: '#2a9d8f' }} />Neutral (7)</span>
            <span><span className="dot" style={{ background: '#4361ee' }} />Alkaline (8–14)</span>
          </div>
        </div>

        {/* Sample Table */}
        <div className="table-section">
          <div className="section-title">
            <h2>Recent Water Sample Analysis</h2>
            <p>Field measurements collected across monitoring sites.</p>
            <span className="title-rule" />
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sample ID</th>
                  <th>Location</th>
                  <th>pH Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {samples.map(({ id, location, ph, status, badge }) => (
                  <tr key={id}>
                    <td><strong>{id}</strong></td>
                    <td>{location}</td>
                    <td><strong>{ph}</strong></td>
                    <td>
                      <span className={`status-badge ${badge}`}>{status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Research Note */}
        <div className="note">
          <h3>🔬 Research Observation</h3>
          <p>
            According to drinking water standards, a pH range of{' '}
            <strong>6.5 to 8.5</strong> is generally considered acceptable.
            Continuous monitoring helps identify pollution sources,
            protect aquatic biodiversity, and ensure safe water quality
            for communities and ecosystems alike.
          </p>
        </div>

      </section>
    </div>
  );
}

export default PH;
