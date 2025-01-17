import "../styles/Jupitercard.css";

const JupiterInfoCard = () => {
	const jupiterData = {
		type: "Planète géante gazeuse",
		position: "5ème planète du système solaire",
		surnom: "Le Roi des planètes",
		diameter: "139 820 km (11 fois la Terre)",
		mass: "1.899 × 10^27 kg (318 fois la Terre)",
		surfaceTemp: {
			nuages: "-110°C",
			coeur: "24 000°C",
		},
		periodicity: {
			revolution: "11.86 années terrestres",
			rotation: "9 heures 56 minutes",
			info: "Rotation la plus rapide du système solaire",
		},
		atmosphere: {
			composition: {
				hydrogene: "90%",
				helium: "9.5%",
				autres: "0.5%",
			},
			particularites: [
				"Grande tache rouge (tempête géante)",
				"Bandes nuageuses colorées",
				"Aurores permanentes aux pôles",
			],
		},
		satellites: {
			nombre: "95 lunes confirmées",
			principaux: [
				"Io (volcanique)",
				"Europe (océan sous-glaciaire)",
				"Ganymède (plus grande lune du système solaire)",
				"Callisto (fortement cratérisé)",
			],
		},
		anneaux: "Système d'anneaux fin et sombre",
		composition: {
			externe: "Couches d'hydrogène et d'hélium",
			interne: "Noyau rocheux et métallique",
			particularite: "Possible noyau d'hydrogène métallique",
		},
		distance: {
			soleil: "778.5 millions km (5.2 UA)",
			terre: {
				min: "588 millions km",
				max: "968 millions km",
			},
		},
		gravity: "24.79 m/s²",
		particularites: [
			"Plus grande planète du système solaire",
			"Champ magnétique le plus puissant des planètes",
			"Protection du système solaire interne contre les astéroïdes",
			"Émissions radio intenses",
			"Atmosphère perpétuellement turbulente",
		],
		exploration: {
			sondes: [
				"Pioneer 10 et 11",
				"Voyager 1 et 2",
				"Galileo",
				"Juno (en activité)",
			],
		},
	};

	return (
		<section className="jupiter-card">
			<article className="jupiter-card-header">
				<h1>Jupiter</h1>
				<p>{jupiterData.surnom}</p>
			</article>
			<article className="jupiter-card-content">
				<div className="jupiter-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{jupiterData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{jupiterData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{jupiterData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{jupiterData.mass}</p>
					</div>

					<div className="jupiter-temperature">
						<h2>Températures:</h2>
						<ul className="jupiter-temperature-list">
							<li>Nuages: {jupiterData.surfaceTemp.nuages}</li>
							<li>Cœur: {jupiterData.surfaceTemp.coeur}</li>
						</ul>
					</div>

					<div className="jupiter-periodicity">
						<h2>Périodes:</h2>
						<ul className="jupiter-periodicity-list">
							<li>Révolution: {jupiterData.periodicity.revolution}</li>
							<li>Rotation: {jupiterData.periodicity.rotation}</li>
							<li>{jupiterData.periodicity.info}</li>
						</ul>
					</div>

					<div className="jupiter-atmosphere">
						<h2>Atmosphère:</h2>
						<h2>Composition:</h2>
						<ul className="jupiter-atmosphere-list">
							<li>Hydrogène: {jupiterData.atmosphere.composition.hydrogene}</li>
							<li>Hélium: {jupiterData.atmosphere.composition.helium}</li>
							<li>Autres: {jupiterData.atmosphere.composition.autres}</li>
						</ul>
						<h2>Caractéristiques:</h2>
						<ul className="jupiter-atmosphere-particularites">
							{jupiterData.atmosphere.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="jupiter-satellites">
						<h2>Satellites:</h2>
						<p>{jupiterData.satellites.nombre}</p>
						<h2>Lunes principales:</h2>
						<ul className="jupiter-satellites-list">
							{jupiterData.satellites.principaux.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div>
						<h2>Anneaux:</h2>
						<p>{jupiterData.anneaux}</p>
					</div>

					<div className="jupiter-composition">
						<h2>Composition:</h2>
						<ul className="jupiter-composition-list">
							<li>Couches externes: {jupiterData.composition.externe}</li>
							<li>Structure interne: {jupiterData.composition.interne}</li>
							<li>{jupiterData.composition.particularite}</li>
						</ul>
					</div>

					<div className="jupiter-distances">
						<h2>Distances:</h2>
						<ul className="jupiter-distances-list">
							<li>Du Soleil: {jupiterData.distance.soleil}</li>
							<li>De la Terre:</li>
							<ul className="jupiter-distances-terre">
								<li>Minimum: {jupiterData.distance.terre.min}</li>
								<li>Maximum: {jupiterData.distance.terre.max}</li>
							</ul>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{jupiterData.gravity}</p>
					</div>

					<div className="jupiter-particularites">
						<h2>Particularités:</h2>
						<ul className="jupiter-particularites-list">
							{jupiterData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div className="jupiter-exploration">
						<h2>Exploration:</h2>
						<h2>Sondes spatiales:</h2>
						<ul className="jupiter-exploration-sondes">
							{jupiterData.exploration.sondes.map((sonde) => (
								<li key={sonde}>{sonde}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default JupiterInfoCard;
