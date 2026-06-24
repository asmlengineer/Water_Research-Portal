function PH(){
    return(
        <>
         <div id="PH">
            <section className="hero">
                <h1>Water pH Level Analysis</h1>
                <p>
                    Monitoring pH levels is essential for assessing water quality,
                    ecosystem health, drinking water safety, and environmental sustainability.
                </p>
            </section>
                <section className="container">
                <div className="section-title">
                    <h2>pH classNameification of Water</h2>
                    <p>Understanding water acidity and alkalinity.</p>
                </div>

                <div className="ph-grid">
                    <div className="card acidic">
                        <h3>Acidic Water</h3>
                        <h2>pH &lt; 7</h2>
                        <p>
                            Acidic water may result from industrial discharge,
                            acid rain, or natural geological processes.
                        </p>
                    </div>
                    <div className="card neutral">
                        <h3>Neutral Water</h3>
                        <h2>pH = 7</h2>
                        <p>
                            Pure water is considered neutral and is ideal
                            for most aquatic ecosystems.
                        </p>
                    </div>
                <div className="card alkaline">
                    <h3>Alkaline Water</h3>
                    <h2>pH &gt; 7</h2>
                    <p>
                        Alkaline water contains dissolved minerals and
                        may occur naturally in groundwater sources.
                    </p>
                </div>
            </div>
            <div className="table-section">

                <div className="section-title">
                    <h2>Recent Water Sample Analysis</h2>
                </div>
                <table>
                    <tr>
                        <th>Sample ID</th>
                        <th>Location</th>
                        <th>pH Value</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>WTR-001</td>
                        <td>River Sample</td>
                        <td>6.5</td>
                        <td>Moderately Acidic</td>
                    </tr>

                    <tr>
                        <td>WTR-002</td>
                        <td>Groundwater</td>
                        <td>7.2</td>
                        <td>Safe</td>
                    </tr>

                    <tr>
                        <td>WTR-003</td>
                        <td>Lake Water</td>
                        <td>7.0</td>
                        <td>Neutral</td>
                    </tr>

                    <tr>
                        <td>WTR-004</td>
                        <td>Drinking Water</td>
                        <td>7.6</td>
                        <td>Acceptable</td>
                    </tr>

                    <tr>
                        <td>WTR-005</td>
                        <td>Industrial Area</td>
                        <td>5.8</td>
                        <td>Acidic</td>
                    </tr>
                </table>
            </div>
            <div className="note">
                <h3>Research Observation</h3>
                <p>
                    According to drinking water standards, a pH range of
                    <strong>6.5 to 8.5</strong> is generally considered acceptable.
                    Continuous monitoring helps identify pollution sources,
                    protect aquatic biodiversity, and ensure safe water quality.
                </p>
            </div>
        </section>
        </div>
        </>
    );
}   
export default PH;