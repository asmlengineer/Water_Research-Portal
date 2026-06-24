import './Home.css';

function Home(){
    return(
        <> 
         <div id="home">   
            <section className="hero">
                <div className="hero-content">
                    <h1>Advancing Water Science & Sustainability</h1>
                    <p>Explore research, innovations, datasets, and publications for sustainable water management.</p>
                   
                </div>
            </section>
            <section className="about">
                <h2>About the Portal</h2>
                <p>
                    The Water Research Portal serves as a central platform for water-related studies,
                    environmental monitoring, hydrological analysis, policy development, and sustainable
                    water resource management.
                </p>
            </section>
            <section className="research">
                <h2>Research Areas</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Water Quality</h3>
                        <p>Monitoring pollution, contamination levels, and treatment technologies.</p>
                    </div>

                    <div className="card">
                        <h3>Hydrology</h3>
                        <p>Study of water cycles, groundwater systems, and watershed management.</p>
                    </div>

                    <div className="card">
                        <h3>Climate Impact</h3>
                        <p>Assessing climate change effects on water availability and ecosystems.</p>
                    </div>

                    <div className="card">
                        <h3>Smart Water Systems</h3>
                        <p>IoT, AI, and data-driven technologies for efficient water management.</p>
                    </div>
                    <div className="card">
                        <h3>Water Drinage System</h3>
                        <p>water drainage system is a planned network of pipes, channels, and structures designed to collect, convey, and safely discharge excess water from a property, land, or building</p>
                    </div>
                    <div className="card">
                        <h3>Ocean Water</h3>
                        <p>Ocean water is a complex mixture of about 96.5% water and 2.5% salts, along with dissolved gases and organic materials. Focus on Tech that how to make it pure for Drinking </p>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="stat">
                    <h3>150+</h3>
                    <p>Research Projects</p>
                </div>

                <div className="stat">
                    <h3>500+</h3>
                    <p>Publications</p>
                </div>

                <div className="stat">
                    <h3>50+</h3>
                    <p>Partner Institutes</p>
                </div>

                <div className="stat">
                    <h3>10K+</h3>
                    <p>Portal Users</p>
                </div>
            </section>

            <section className="publications">
                <h2>Latest Publications</h2>

                <div className="publication-list">

                    <div className="publication">
                        <a href="https://www.researchgate.net/publication/397550307_Historic_assessment_of_groundwater_sustainability"><h3>Groundwater Sustainability Assessment</h3>
                        <p>Published: June 2026</p></a>
                    </div>

                    <div className="publication">
                       <a href="https://www.sciencedirect.com/science/article/pii/S0043135426007281"> <h3>
                        AI-Based Water Quality Prediction Models</h3>
                        <p>Published: May 2026</p></a>
                    </div>

                    <div className="publication">
                        <a href="https://www.tandfonline.com/doi/full/10.1080/15715124.2026.2643466"><h3>Climate Change and River Basin Management</h3>
                        <p>Published: April 2026</p></a>
                    </div>

                </div>
            </section>
            </div>
                </>
            );
        }
export default Home;