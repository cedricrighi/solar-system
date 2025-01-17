import "../styles/MercuryCard.css";

const MercuryInfoCard = () => {
	const mercuryData = {
		type: "Planète tellurique",
		position: "1ère planète du système solaire",
		diameter: "4 879 km",
		mass: "3.285 × 10^23 kg",
		surfaceTemp: {
			min: "-180°C",
			max: "430°C",
			moyenne: "167°C",
		},
		periodicity: {
			revolution: "88 jours terrestres",
			rotation: "59 jours terrestres",
		},
		atmosphere: "Quasi inexistante (exosphère)",
		composition: {
			fer: "70%",
			silicates: "30%",
		},
		distance: {
			soleil: "57.9 millions km",
			terre: "77.3 millions km",
		},
		gravity: "3.7 m/s²",
	};

	return (
		<section className="mercury-card">
			<article className="mercury-card-header">
				<h1>Mercure</h1>
			</article>
			<article className="mercury-card-body">
				<div className="mercury-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{mercuryData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{mercuryData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{mercuryData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{mercuryData.mass}</p>
					</div>

					<div className="mercury-temperature">
						<h2>Températures:</h2>
						<ul className="mercury-temperature-list">
							<li>Minimale: {mercuryData.surfaceTemp.min}</li>
							<li>Maximale: {mercuryData.surfaceTemp.max}</li>
							<li>Moyenne: {mercuryData.surfaceTemp.moyenne}</li>
						</ul>
					</div>

					<div className="mercury-periodicity">
						<h2>Périodes:</h2>
						<ul className="mercury-periodicity-list">
							<li>Révolution: {mercuryData.periodicity.revolution}</li>
							<li>Rotation: {mercuryData.periodicity.rotation}</li>
						</ul>
					</div>

					<div>
						<h2>Atmosphère:</h2>
						<p>{mercuryData.atmosphere}</p>
					</div>

					<div className="mercury-composition">
						<h2>Composition:</h2>
						<ul className="mercury-composition-list">
							<li>Fer: {mercuryData.composition.fer}</li>
							<li>Silicates: {mercuryData.composition.silicates}</li>
						</ul>
					</div>

					<div className="mercury-distances">
						<h2>Distances:</h2>
						<ul className="mercury-distances-list">
							<li>Du Soleil: {mercuryData.distance.soleil}</li>
							<li>De la Terre: {mercuryData.distance.terre}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{mercuryData.gravity}</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MercuryInfoCard;
