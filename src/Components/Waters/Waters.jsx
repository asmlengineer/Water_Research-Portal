import './Waters.css';
function Waters(){
    return(
        <>   
          <div id="Water"> 
            <section className="hero">
                <h1>Water Types & Seasonal Suitability</h1>
                <p>
                    A scientific classNameification of water types, bottled water cap colors,
                    and seasonal water recommendations for health and sustainability.
                </p>
            </section>
            <section className="container">
                <div className="section-title">
                    <h2>Types of Water</h2>
                </div>
                <div className="grid">
                    <div className="card pure">
                        <h3>💧 Purified Water</h3>
                        <p>
                            Treated through filtration and purification processes to remove impurities.
                            Suitable for daily drinking and safe consumption.
                        </p>
                    </div>
                    <div className="card mineral">
                        <h3>⛰ Mineral Water</h3>
                        <p>
                            Naturally sourced water containing essential minerals like calcium and magnesium.
                            Beneficial for bone health and hydration.
                        </p>
                    </div>
                    <div className="card alkaline">
                        <h3>⚗ Alkaline Water</h3>
                        <p>
                            Has higher pH level (above 7). Believed to help neutralize acidity in the body
                            and improve hydration balance.
                        </p>
                    </div>
                    <div className="card iodine">
                        <h3>🧪 Iodized Water</h3>
                        <p>
                            Water treated with iodine in controlled amounts for disinfection and safety,
                            especially in emergency or rural supply systems.
                        </p>
                    </div>
                     <div className="card pure">
                        <h3>💧 Spring Water</h3>
                        <p>
                           Bottled directly from natural, underground springs. It usually contains natural minerals like calcium and magnesium, and many prefer it for its fresh taste.
                        </p>
                    </div>
                     <div className="card pure">
                        <h3>💧 Distilled Water </h3>
                        <p>
                            Distilled Water: A type of purified water that has been boiled into steam and condensed back into liquid, removing virtually all minerals and salts. 
                        </p>
                    </div>
                     <div className="card pure">
                        <h3>💧 Tap  Water</h3>
                        <p>
                             The most affordable and common source, piped directly to homes. It is treated by public agencies to meet safety standards, though trace minerals and contaminants may vary by region.
                        </p>
                    </div>
                     <div className="card pure">
                        <h3>💧 Brackish  Water</h3>
                        <p>
                            A mixture of freshwater and saltwater. It is typically found in estuaries where rivers meet the sea
                        </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="section-title">
                    <h2>Bottle Cap Color Meaning</h2>
                </div>
                <div className="caps-grid">
                    <div className="cap">
                        <div className="cap-circle blue"></div>
                        <h3>Blue Cap</h3>
                        <p>Standard purified drinking water (most commonly used).</p>
                    </div>
                    <div className="cap">
                        <div className="cap-circle green"></div>
                        <h3>Green Cap</h3>
                        <p>Mineral-rich or natural spring water with added nutrients.</p>
                    </div>
                    <div className="cap">
                        <div className="cap-circle red"></div>
                        <h3>Red Cap</h3>
                        <p>Flavored or enhanced water with electrolytes or additives.</p>
                    </div>
                    <div className="cap">
                        <div className="cap-circle yellow"></div>
                        <h3>Yellow Cap</h3>
                        <p>Special-purpose water (sports hydration or functional water).</p>
                    </div>
                </div>
            </section>
            <section className="season">
                <div className="container">
                    <div className="section-title">
                        <h2>Seasonal Water Suitability</h2>
                    </div>
                    <div className="season-grid">
                        <div className="season-card">
                            <h3>🌞 Summer Season</h3>
                            <p>
                                Prefer <strong>cold purified water</strong> or electrolyte-rich water.
                                Helps maintain hydration and prevents heat stroke.
                            </p>
                        </div>
                        <div className="season-card">
                            <h3>🌧 Monsoon Season</h3>
                            <p>
                                Drink <strong>boiled or filtered water</strong> to avoid waterborne diseases
                                caused by contamination.
                            </p>
                        </div>
                        <div className="season-card">
                            <h3>❄ Winter Season</h3>
                            <p>
                                Use <strong>room temperature mineral water</strong> to support digestion
                                and maintain body balance.
                            </p>
                        </div>
                        <div className="season-card">
                            <h3>🍃 Spring/Autumn</h3>
                            <p>
                                Balanced intake of <strong>natural mineral or alkaline water</strong>
                                is ideal for maintaining overall health.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
          </div>  
        </> 
   );
}
export default Waters;