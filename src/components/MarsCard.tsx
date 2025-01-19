import "../styles/MarsCard.css";

const MarsInfoCard = () => {
	const marsData = {
		type: "Planète tellurique",
		position: "4ème planète du système solaire",
		surnom: "Planète rouge",
		diameter: "6 792 km",
		mass: "6.39 × 10^23 kg",
		surfaceTemp: {
			min: "-140°C",
			max: "20°C",
			moyenne: "-63°C",
		},
		periodicity: {
			revolution: "687 jours terrestres",
			rotation: "24 heures et 37 minutes",
		},
		atmosphere: {
			composition: {
				co2: "95%",
				azote: "2.7%",
				argon: "1.6%",
				autres: "0.7%",
			},
			pression: "0.6% de celle de la Terre",
		},
		satellites: {
			nombre: "2 satellites naturels",
			noms: ["Phobos", "Deimos"],
		},
		composition: {
			noyau: "Fer et soufre",
			manteau: "Silicates",
			croute: "Riche en oxyde de fer (d'où sa couleur rouge)",
		},
		distance: {
			soleil: "227.9 millions km",
		},
		gravity: "3.72 m/s²",
		particularites: [
			"Plus grand volcan du système solaire (Mont Olympus)",
			"Calottes polaires de glace d'eau et CO2",
			"Traces d'eau liquide passée",
			"Tempêtes de poussière globales",
			"Présence possible de lacs souterrains gelés",
		],
		exploration: {
			rovers: ["Curiosity", "Perseverance"],
			statuts: "Planète la plus explorée après la Terre",
		},
	};

	return (
		<section className="mars-card">
			<article className="mars-card-header">
				<h1>Mars</h1>
				<p>{marsData.surnom}</p>
			</article>
			<article className="mars-card-content">
				<div className="mars-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{marsData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{marsData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{marsData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{marsData.mass}</p>
					</div>

					<div className="mars-temperature">
						<h2>Températures:</h2>
						<ul className="mars-temperature-list">
							<li>Minimale: {marsData.surfaceTemp.min}</li>
							<li>Maximale: {marsData.surfaceTemp.max}</li>
							<li>Moyenne: {marsData.surfaceTemp.moyenne}</li>
						</ul>
					</div>

					<div className="mars-periodicity">
						<h2>Périodes:</h2>
						<ul className="mars-periodicity-list">
							<li>Révolution: {marsData.periodicity.revolution}</li>
							<li>Rotation: {marsData.periodicity.rotation}</li>
						</ul>
					</div>

					<div className="mars-atmosphere">
						<h2>Composition:</h2>
						<ul className="mars-atmosphere-list">
							<li>CO2: {marsData.atmosphere.composition.co2}</li>
							<li>Azote: {marsData.atmosphere.composition.azote}</li>
							<li>Argon: {marsData.atmosphere.composition.argon}</li>
							<li>Autres: {marsData.atmosphere.composition.autres}</li>
						</ul>
						<p>Pression: {marsData.atmosphere.pression}</p>
					</div>

					<div className="mars-satellites">
						<h2>Satellites:</h2>
						<p>{marsData.satellites.nombre}</p>
						<ul className="mars-satellites-list">
							{marsData.satellites.noms.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div className="mars-composition">
						<h2>Composition:</h2>
						<ul className="mars-composition-list">
							<li>Noyau: {marsData.composition.noyau}</li>
							<li>Manteau: {marsData.composition.manteau}</li>
							<li>Croûte: {marsData.composition.croute}</li>
						</ul>
					</div>

					<div className="mars-distances">
						<h2>Distance:</h2>
						<ul className="mars-distances-list">
							<li>Du Soleil: {marsData.distance.soleil}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{marsData.gravity}</p>
					</div>

					<div className="mars-particularites">
						<h2>Particularités:</h2>
						<ul className="mars-particularites-list">
							{marsData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div className="mars-exploration">
						<h2>Exploration:</h2>
						<p>{marsData.exploration.statuts}</p>
						<h3>Rovers actifs:</h3>
						<ul className="mars-exploration-rovers">
							{marsData.exploration.rovers.map((rover) => (
								<li key={rover}>{rover}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MarsInfoCard;
