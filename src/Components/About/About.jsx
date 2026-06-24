function About(){
    return(
        <>
           <div id="About"> 
            <section className="hero">
                <div className="hero-content">
                    <h1>About Water Research Portal</h1>
                    <p>
                        A dedicated platform for advancing scientific research,
                        water conservation, sustainable resource management,
                        and environmental innovation.
                    </p>
                </div>
            </section>
    <section className="container">
        <div className="about-section">

            <div className="about-image">
                <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80"
                    alt="Water Research"/>
            </div>

            <div className="about-content">
                <h2>Who We Are</h2>
                <p>
                    The Water Research Portal serves as a knowledge hub for
                    researchers, environmental scientists, policymakers,
                    students, and organizations working in the field of water resources.
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
<section className="container">
    <div className="section-title">
        <h2>Our Mission & Vision</h2>
        <p>Guiding principles that drive our research and innovation.</p>
    </div>
    <div className="mission-grid">
        <div className="card">
            <h3>🌍 Our Mission</h3>
            <p>
                To advance scientific understanding of water systems
                and provide innovative solutions for sustainable water
                management and conservation.
            </p>
        </div>
        <div className="card">
            <h3>🔬 Our Vision</h3>
            <p>
                To become a leading global platform for water research,
                fostering collaboration and knowledge sharing to address
                emerging water challenges.
            </p>
        </div>
    </div>
</section>
<section className="research-section">

    <div className="container">

        <div className="section-title">
            <h2>Research Focus Areas</h2>
            <p>Key domains of scientific investigation.</p>
        </div>
        <div className="research-grid">
            <div className="research-card">
                <h4>💧 Water Conservation</h4>
                <p>Strategies for efficient water use and sustainability.</p>
            </div>
            <div className="research-card">
                <h4>🌊 Hydrology</h4>
                <p>Study of water movement and distribution.</p>
            </div>
            <div className="research-card">
                <h4>🏞 Groundwater</h4>
                <p>Assessment and management of aquifer systems.</p>
            </div>
            <div className="research-card">
                <h4>🧪 Water Quality</h4>
                <p>Monitoring chemical, physical, and biological properties.</p>
            </div>
            <div className="research-card">
                <h4>🌱 Climate Change</h4>
                <p>Impact of climate variability on water resources.</p>
            </div>
            <div className="research-card">
                <h4>🛰 GIS & Remote Sensing</h4>
                <p>Spatial analysis for water resource planning.</p>
            </div>
        </div>
    </div>
</section>
<section className="container">

    <div className="section-title">
        <h2>Research Impact</h2>
    </div>
    <div className="stats">

        <div className="stat-box">
            <h2>200+</h2>
            <p>Published Research Papers</p>
        </div>

        <div className="stat-box">
            <h2>50+</h2>
            <p>Ongoing Research Projects</p>
        </div>

        <div className="stat-box">
            <h2>30+</h2>
            <p>Partner Institutions</p>
        </div>

        <div className="stat-box">
            <h2>15K+</h2>
            <p>Research Data Records</p>
        </div>
    </div>
</section>
</div>
        </>
    );       
}
export default About;