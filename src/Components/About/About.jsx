import './About.css';

function About() {
  return (
    <div id="About">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Water Research Portal</span>
          <h1>
            Advancing Science for<br />
            <span>Sustainable Water</span>
          </h1>
          <p>
            A dedicated platform for scientific research, water conservation,
            sustainable resource management, and environmental innovation.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container">
        <div className="about-section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80"
              alt="Water Research"
            />
          </div>
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              The Water Research Portal serves as a knowledge hub for
              researchers, environmental scientists, policymakers, students,
              and organisations working in the field of water resources.
            </p>
            <p>
              Our portal promotes research-driven solutions for water
              conservation, groundwater sustainability, climate resilience,
              water quality monitoring, and ecosystem protection.
            </p>
            <p>
              Through collaboration, innovation, and open scientific
              communication, we aim to support sustainable water management
              for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container" style={{ paddingTop: 0 }}>
        <div className="section-title">
          <h2>Our Mission &amp; Vision</h2>
          <p>Guiding principles that drive our research and innovation.</p>
          <span className="title-rule" />
        </div>
        <div className="mission-grid">
          <div className="card">
            <span className="card-icon">🌍</span>
            <h3>Our Mission</h3>
            <p>
              To advance scientific understanding of water systems and provide
              innovative solutions for sustainable water management and
              conservation.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🔬</span>
            <h3>Our Vision</h3>
            <p>
              To become a leading global platform for water research, fostering
              collaboration and knowledge sharing to address emerging water
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="research-section">
        <div className="container">
          <div className="section-title">
            <h2>Research Focus Areas</h2>
            <p>Key domains of scientific investigation.</p>
            <span className="title-rule" />
          </div>
          <div className="research-grid">
            {[
              { icon: '💧', title: 'Water Conservation', desc: 'Strategies for efficient water use and long-term sustainability.' },
              { icon: '🌊', title: 'Hydrology',          desc: 'Study of water movement, distribution, and the water cycle.' },
              { icon: '🏞️', title: 'Groundwater',        desc: 'Assessment and management of aquifer and subsurface systems.' },
              { icon: '🧪', title: 'Water Quality',      desc: 'Monitoring chemical, physical, and biological water properties.' },
              { icon: '🌱', title: 'Climate Change',     desc: 'Impact of climate variability on freshwater availability.' },
              { icon: '🛰️', title: 'GIS & Remote Sensing', desc: 'Spatial analysis and satellite data for resource planning.' },
            ].map(({ icon, title, desc }) => (
              <div className="research-card" key={title}>
                <span className="r-icon">{icon}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="container">
        <div className="section-title">
          <h2>Research Impact</h2>
          <p>Numbers that reflect decades of dedicated scientific work.</p>
          <span className="title-rule" />
        </div>
        <div className="stats">
          {[
            { value: '200+', label: 'Published Research Papers' },
            { value: '50+',  label: 'Ongoing Research Projects' },
            { value: '30+',  label: 'Partner Institutions' },
            { value: '15K+', label: 'Research Data Records' },
          ].map(({ value, label }) => (
            <div className="stat-box" key={label}>
              <h2>{value}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} <span>Water Research Portal</span>. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default About;
