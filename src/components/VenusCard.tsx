import "../styles/VenusCard.css";

const VenusInfoCard = () => {
	const venusData = {
		type: "Planète tellurique",
		position: "2ème planète du système solaire",
		diameter: "12 104 km",
		mass: "4.867 × 10^24 kg",
		surfaceTemp: {
			moyenne: "462°C",
		},
		periodicity: {
			revolution: "225 jours terrestres",
			rotation: "243 jours terrestres (rotation rétrograde)",
		},
		atmosphere: {
			composition: "96.5% CO2, 3.5% N2",
			pression: "92 fois celle de la Terre",
		},
		composition: {
			noyau: "Fer et Nickel",
			manteau: "Roches silicatées",
			croute: "Basalte",
		},
		distance: {
			soleil: "108.2 millions km",
			terre: "38.2 millions km (au plus proche)",
		},
		gravity: "8.87 m/s²",
		particularites: [
			"Rotation rétrograde (d'est en ouest)",
			"Effet de serre le plus puissant du système solaire",
			"Souvent appelée 'jumelle de la Terre' pour sa taille",
		],
	};

	return (
		<section className="venus-card">
			<article className="venus-card-header">
				<h1>Vénus</h1>
			</article>
			<article className="venus-card-body">
				<div className="venus-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{venusData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{venusData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{venusData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{venusData.mass}</p>
					</div>

					<div>
						<h2>Température:</h2>
						<p>{venusData.surfaceTemp.moyenne}</p>
					</div>

					<div className="venus-temperature">
						<h2>Périodes:</h2>
						<ul className="venus-temperature-list">
							<li>Révolution: {venusData.periodicity.revolution}</li>
							<li>Rotation: {venusData.periodicity.rotation}</li>
						</ul>
					</div>

					<div className="venus-atmosphere">
						<h2>Atmosphère:</h2>
						<ul className="venus-atmosphere-list">
							<li>Composition: {venusData.atmosphere.composition}</li>
							<li>Pression: {venusData.atmosphere.pression}</li>
						</ul>
					</div>

					<div className="venus-composition">
						<h2>Composition:</h2>
						<ul className="venus-composition-list">
							<li>Noyau: {venusData.composition.noyau}</li>
							<li>Manteau: {venusData.composition.manteau}</li>
							<li>Croûte: {venusData.composition.croute}</li>
						</ul>
					</div>

					<div className="venus-distances">
						<h2>Distances:</h2>
						<ul className="venus-distances-list">
							<li>Du Soleil: {venusData.distance.soleil}</li>
							<li>De la Terre: {venusData.distance.terre}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{venusData.gravity}</p>
					</div>

					<div className="venus-particularites">
						<h2>Particularités:</h2>
						<ul className="venus-particularites-list">
							{venusData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default VenusInfoCard;
