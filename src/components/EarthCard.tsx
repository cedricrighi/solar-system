import "../styles/EarthCard.css";

const EarthInfoCard = () => {
	const earthData = {
		type: "Planète tellurique",
		position: "3ème planète du système solaire",
		diameter: {
			equatorial: "12 742 km",
			polaire: "12 696 km",
		},
		mass: "5.972 × 10^24 kg",
		surfaceTemp: {
			min: "-89.2°C",
			max: "56.7°C",
			moyenne: "15°C",
		},
		periodicity: {
			revolution: "365.26 jours",
			rotation: "23 heures 56 minutes",
		},
		atmosphere: {
			composition: {
				azote: "78%",
				oxygene: "21%",
				argon: "0.93%",
				autres: "0.07%",
			},
			couches: [
				"Troposphère",
				"Stratosphère",
				"Mésosphère",
				"Thermosphère",
				"Exosphère",
			],
		},
		composition: {
			noyau: {
				interne: "Fer solide et nickel",
				externe: "Fer et nickel liquides",
			},
			manteau: "Roches silicatées",
			croute: "Roches continentales et océaniques",
		},
		distance: {
			soleil: "149.6 millions km (1 UA)",
			lune: "384 400 km",
		},
		gravity: "9.81 m/s²",
		particularites: [
			"Seule planète connue abritant la vie",
			"71% de la surface couverte d'eau liquide",
			"Présence d'un champ magnétique protecteur",
			"Une lune naturelle",
		],
	};

	return (
		<section className="earth-card">
			<article className="earth-card-header">
				<h1>Terre</h1>
			</article>
			<article className="earth-card-body">
				<div className="earth-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{earthData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{earthData.position}</p>
					</div>

					<div className="earth-diameter">
						<h2>Diamètre:</h2>
						<ul className="earth-diameter-list">
							<li>Équatorial: {earthData.diameter.equatorial}</li>
							<li>Polaire: {earthData.diameter.polaire}</li>
						</ul>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{earthData.mass}</p>
					</div>

					<div className="earth-temperature">
						<h2>Températures:</h2>
						<ul className="earth-temperature-list">
							<li>Minimale: {earthData.surfaceTemp.min}</li>
							<li>Maximale: {earthData.surfaceTemp.max}</li>
							<li>Moyenne: {earthData.surfaceTemp.moyenne}</li>
						</ul>
					</div>

					<div className="earth-periodicity">
						<h2>Périodes:</h2>
						<ul className="earth-periodicity-list">
							<li>Révolution: {earthData.periodicity.revolution}</li>
							<li>Rotation: {earthData.periodicity.rotation}</li>
						</ul>
					</div>

					<div className="earth-atmosphere">
						<h2>Composition:</h2>
						<ul className="earth-atmosphere-list">
							<li>Azote: {earthData.atmosphere.composition.azote}</li>
							<li>Oxygène: {earthData.atmosphere.composition.oxygene}</li>
							<li>Argon: {earthData.atmosphere.composition.argon}</li>
							<li>Autres gaz: {earthData.atmosphere.composition.autres}</li>
						</ul>
						<h2>Couches atmosphériques:</h2>
						<ul className="earth-atmosphere-couches">
							{earthData.atmosphere.couches.map((couche) => (
								<li key={couche}>{couche}</li>
							))}
						</ul>
					</div>

					<div className="earth-composition">
						<h2>Structure interne:</h2>
						<ul className="earth-composition-list">
							<li>Noyau interne: {earthData.composition.noyau.interne}</li>
							<li>Noyau externe: {earthData.composition.noyau.externe}</li>
							<li>Manteau: {earthData.composition.manteau}</li>
							<li>Croûte: {earthData.composition.croute}</li>
						</ul>
					</div>

					<div className="earth-distances">
						<h2>Distances:</h2>
						<ul className="earth-distances-list">
							<li>Du Soleil: {earthData.distance.soleil}</li>
							<li>De la Lune: {earthData.distance.lune}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{earthData.gravity}</p>
					</div>

					<div className="earth-particularites">
						<h2>Particularités:</h2>
						<ul className="earth-particularites-list">
							{earthData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default EarthInfoCard;
