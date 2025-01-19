import "../styles/Neptunecard.css";

const NeptuneInfoCard = () => {
	const neptuneData = {
		type: "Planète géante de glace",
		surnom: "La Planète du Vent",
		diameter: "49 244 km (3.9 fois la Terre)",
		mass: "1.024 × 10^26 kg (17 fois la Terre)",
		surfaceTemp: {
			nuages: "-214°C",
			coeur: "7 000°C",
		},
		periodicity: {
			revolution: "164.79 années terrestres",
			rotation: "16 heures 6 minutes",
		},
		atmosphere: {
			composition: {
				hydrogene: "80%",
				helium: "19%",
				methane: "1%",
			},
			particularites: [
				"Vents supersoniques jusqu'à 2 200 km/h",
				"Grande Tache Sombre (tempête cyclonique)",
				"Bandes nuageuses dynamiques",
			],
		},
		satellites: {
			nombre: "14 lunes confirmées",
			principaux: [
				"Triton (plus grande lune  )",
				"Néréide (orbite très elliptique)",
				"Naïade (lune intérieure)",
				"Thalassa (petite lune proche)",
			],
		},
		anneaux: {
			description: "5 anneaux principaux",
			composition: "Poussières de glace et particules organiques",
			particularites: ["Anneaux fins et faibles", "Découverts en 1984"],
		},
		composition: {
			externe: "Atmosphère d'hydrogène, hélium et méthane",
			interne: "Manteau de glaces, eau et ammoniac",
			particularite: "Noyau rocheux riche en fer et nickel",
		},
		distance: {
			soleil: "4.5 milliards km (30.1 UA)",
		},
		gravity: "11.15 m/s²",
		particularites: [
			"Vents les plus rapides du système solaire",
			"Champ magnétique 27 fois plus puissant que la Terre",
			"Seule planète trouvée par calcul mathématique",
		],
		exploration: {
			sondes: ["Voyager 2 (unique survol en 1989)"],
		},
	};

	return (
		<section className="neptune-card">
			<article className="neptune-card-header">
				<h1>Neptune</h1>
				<p>{neptuneData.surnom}</p>
			</article>
			<article className="neptune-card-content">
				<div className="neptune-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{neptuneData.type}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{neptuneData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{neptuneData.mass}</p>
					</div>

					<div className="neptune-temperature">
						<h2>Températures:</h2>
						<ul className="neptune-temperature-list">
							<li>Nuages: {neptuneData.surfaceTemp.nuages}</li>
							<li>Cœur: {neptuneData.surfaceTemp.coeur}</li>
						</ul>
					</div>

					<div className="neptune-periodicity">
						<h2>Périodes:</h2>
						<ul className="neptune-periodicity-list">
							<li>Révolution: {neptuneData.periodicity.revolution}</li>
							<li>Rotation: {neptuneData.periodicity.rotation}</li>
						</ul>
					</div>

					<div className="neptune-atmosphere">
						<h2>Atmosphère:</h2>
						<h2>Composition:</h2>
						<ul className="neptune-atmosphere-list">
							<li>Hydrogène: {neptuneData.atmosphere.composition.hydrogene}</li>
							<li>Hélium: {neptuneData.atmosphere.composition.helium}</li>
							<li>Méthane: {neptuneData.atmosphere.composition.methane}</li>
						</ul>
						<h2>Caractéristiques:</h2>
						<ul className="neptune-atmosphere-particularites">
							{neptuneData.atmosphere.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="neptune-satellites">
						<h2>Satellites:</h2>
						<p>{neptuneData.satellites.nombre}</p>
						<h2>Lunes principales:</h2>
						<ul className="neptune-satellites-list">
							{neptuneData.satellites.principaux.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div className="neptune-rings">
						<h2>Anneaux:</h2>
						<p>{neptuneData.anneaux.description}</p>
						<p>
							<strong>Composition:</strong> {neptuneData.anneaux.composition}
						</p>
						<ul className="neptune-rings-particularites">
							{neptuneData.anneaux.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="neptune-composition">
						<h2>Composition:</h2>
						<ul className="neptune-composition-list">
							<li>Couches externes: {neptuneData.composition.externe}</li>
							<li>Structure interne: {neptuneData.composition.interne}</li>
							<li>{neptuneData.composition.particularite}</li>
						</ul>
					</div>

					<div className="neptune-distances">
						<h2>Distances:</h2>
						<ul className="neptune-distances-list">
							<li>Du Soleil: {neptuneData.distance.soleil}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{neptuneData.gravity}</p>
					</div>

					<div className="neptune-particularites">
						<h2>Particularités:</h2>
						<ul className="neptune-particularites-list">
							{neptuneData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div className="neptune-exploration">
						<h2>Exploration:</h2>
						<h2>Sondes spatiales:</h2>
						<ul className="neptune-exploration-sondes">
							{neptuneData.exploration.sondes.map((sonde) => (
								<li key={sonde}>{sonde}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default NeptuneInfoCard;
