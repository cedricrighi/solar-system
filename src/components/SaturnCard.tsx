import "../styles/Saturncard.css";

const SaturnInfoCard = () => {
	const saturnData = {
		type: "Planète géante gazeuse",
		position: "6ème planète du système solaire",
		surnom: "Le Seigneur des Anneaux",
		diameter: "116 460 km (9.5 fois la Terre)",
		mass: "5.683 × 10^26 kg (95.2 fois la Terre)",
		surfaceTemp: {
			nuages: "-139°C",
			coeur: "11 700°C",
		},
		periodicity: {
			revolution: "29.46 années terrestres",
			rotation: "10 heures 42 minutes",
			info: "Rotation rapide causant un aplatissement visible aux pôles",
		},
		atmosphere: {
			composition: {
				hydrogene: "96.3%",
				helium: "3.25%",
				autres: "0.45%",
			},
			particularites: [
				"Vents violents atteignant 1800 km/h",
				"Tempêtes hexagonales aux pôles",
				"Bandes nuageuses moins visibles que Jupiter",
			],
		},
		satellites: {
			nombre: "146 lunes confirmées",
			principaux: [
				"Titan (plus grande lune, atmosphère dense)",
				"Encelade (geysers de glace)",
				"Mimas (cratère géant)",
				"Rhéa (surface glacée)",
			],
		},
		anneaux: {
			description: "Système d'anneaux le plus spectaculaire",
			composition: "Glace, roches et poussières",
			particularites: [
				"7 anneaux principaux",
				"Épaisseur moyenne de 20 mètres",
				"Étendus sur 280 000 km",
			],
		},
		composition: {
			externe: "Couches d'hydrogène et d'hélium",
			interne: "Noyau rocheux et métallique",
			particularite: "Densité inférieure à celle de l'eau",
		},
		distance: {
			soleil: "1.43 milliard km (9.5 UA)",
			terre: {
				min: "1.2 milliard km",
				max: "1.67 milliard km",
			},
		},
		gravity: "10.44 m/s²",
		particularites: [
			"Seule planète moins dense que l'eau",
			"Plus grand système d'anneaux du système solaire",
			"Tempête hexagonale permanente au pôle nord",
			"Plus grande lune avec atmosphère (Titan)",
			"Structure interne possiblement en couches",
		],
		exploration: {
			sondes: [
				"Pioneer 11",
				"Voyager 1 et 2",
				"Cassini-Huygens (mission majeure)",
			],
		},
	};

	return (
		<section className="saturn-card">
			<article className="saturn-card-header">
				<h1>Saturne</h1>
				<p>{saturnData.surnom}</p>
			</article>
			<article className="saturn-card-content">
				<div className="saturn-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{saturnData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{saturnData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{saturnData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{saturnData.mass}</p>
					</div>

					<div className="saturn-temperature">
						<h2>Températures:</h2>
						<ul className="saturn-temperature-list">
							<li>Nuages: {saturnData.surfaceTemp.nuages}</li>
							<li>Cœur: {saturnData.surfaceTemp.coeur}</li>
						</ul>
					</div>

					<div className="saturn-periodicity">
						<h2>Périodes:</h2>
						<ul className="saturn-periodicity-list">
							<li>Révolution: {saturnData.periodicity.revolution}</li>
							<li>Rotation: {saturnData.periodicity.rotation}</li>
							<li>{saturnData.periodicity.info}</li>
						</ul>
					</div>

					<div className="saturn-atmosphere">
						<h2>Atmosphère:</h2>
						<h2>Composition:</h2>
						<ul className="saturn-atmosphere-list">
							<li>Hydrogène: {saturnData.atmosphere.composition.hydrogene}</li>
							<li>Hélium: {saturnData.atmosphere.composition.helium}</li>
							<li>Autres: {saturnData.atmosphere.composition.autres}</li>
						</ul>
						<h2>Caractéristiques:</h2>
						<ul className="saturn-atmosphere-particularites">
							{saturnData.atmosphere.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="saturn-satellites">
						<h2>Satellites:</h2>
						<p>{saturnData.satellites.nombre}</p>
						<h2>Lunes principales:</h2>
						<ul className="saturn-satellites-list">
							{saturnData.satellites.principaux.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div className="saturn-rings">
						<h2>Anneaux:</h2>
						<p>{saturnData.anneaux.description}</p>
						<p>Composition: {saturnData.anneaux.composition}</p>
						<ul className="saturn-rings-particularites">
							{saturnData.anneaux.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="saturn-composition">
						<h2>Composition:</h2>
						<ul className="saturn-composition-list">
							<li>Couches externes: {saturnData.composition.externe}</li>
							<li>Structure interne: {saturnData.composition.interne}</li>
							<li>{saturnData.composition.particularite}</li>
						</ul>
					</div>

					<div className="saturn-distances">
						<h2>Distances:</h2>
						<ul className="saturn-distances-list">
							<li>Du Soleil: {saturnData.distance.soleil}</li>
							<li>De la Terre:</li>
							<ul className="saturn-distances-terre">
								<li>Minimum: {saturnData.distance.terre.min}</li>
								<li>Maximum: {saturnData.distance.terre.max}</li>
							</ul>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{saturnData.gravity}</p>
					</div>

					<div className="saturn-particularites">
						<h2>Particularités:</h2>
						<ul className="saturn-particularites-list">
							{saturnData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div className="saturn-exploration">
						<h2>Exploration:</h2>
						<h2>Sondes spatiales:</h2>
						<ul className="saturn-exploration-sondes">
							{saturnData.exploration.sondes.map((sonde) => (
								<li key={sonde}>{sonde}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default SaturnInfoCard;
