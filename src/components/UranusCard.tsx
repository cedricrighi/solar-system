import "../styles/Uranuscard.css";

const UranusInfoCard = () => {
	const uranusData = {
		type: "Planète géante de glace",
		position: "7ème planète du système solaire",
		surnom: "La Planète Couchée",
		diameter: "50 724 km (4 fois la Terre)",
		mass: "8.681 × 10^25 kg (14.5 fois la Terre)",
		surfaceTemp: {
			nuages: "-224°C",
			coeur: "4 727°C",
		},
		periodicity: {
			revolution: "84.02 années terrestres",
			rotation: "17 heures 14 minutes",
			info: "Rotation rétrograde avec axe incliné à 98°",
		},
		atmosphere: {
			composition: {
				hydrogene: "83%",
				helium: "15%",
				methane: "2%",
			},
			particularites: [
				"Couleur bleu-vert due au méthane",
				"Vents jusqu'à 900 km/h",
				"Stratification en bandes saisonnières",
			],
		},
		satellites: {
			nombre: "27 lunes confirmées",
			principaux: [
				"Titania (plus grande lune)",
				"Obéron (fortement cratérisé)",
				"Miranda (terrain chaotique)",
				"Ariel (canyons profonds)",
			],
		},
		anneaux: {
			description: "13 anneaux principaux sombres",
			composition: "Particules de glace et poussières sombres",
		},
		composition: {
			externe: "Atmosphère d'hydrogène, hélium et méthane",
			interne: "Manteau de glaces (eau, ammoniac, méthane)",
			particularite: "Noyau rocheux de taille relativement petite",
		},
		distance: {
			soleil: "2.87 milliards km (19.2 UA)",
		},
		gravity: "8.69 m/s²",
		particularites: [
			"Axe de rotation presque parallèle au plan orbital",
			"Champ magnétique fortement incliné",
			"Structure interne principalement composée de glaces",
			"Saisons extrêmes dues à l'inclinaison",
		],
		exploration: {
			sondes: ["Voyager 2 (unique survol en 1986)"],
		},
	};

	return (
		<section className="uranus-card">
			<article className="uranus-card-header">
				<h1>Uranus</h1>
				<p>{uranusData.surnom}</p>
			</article>
			<article className="uranus-card-content">
				<div className="uranus-card-body-content">
					<div>
						<h2>Type:</h2>
						<p>{uranusData.type}</p>
					</div>

					<div>
						<h2>Position:</h2>
						<p>{uranusData.position}</p>
					</div>

					<div>
						<h2>Diamètre:</h2>
						<p>{uranusData.diameter}</p>
					</div>

					<div>
						<h2>Masse:</h2>
						<p>{uranusData.mass}</p>
					</div>

					<div className="uranus-temperature">
						<h2>Températures:</h2>
						<ul className="uranus-temperature-list">
							<li>Nuages: {uranusData.surfaceTemp.nuages}</li>
							<li>Cœur: {uranusData.surfaceTemp.coeur}</li>
						</ul>
					</div>

					<div className="uranus-periodicity">
						<h2>Périodes:</h2>
						<ul className="uranus-periodicity-list">
							<li>Révolution: {uranusData.periodicity.revolution}</li>
							<li>Rotation: {uranusData.periodicity.rotation}</li>
							<li>{uranusData.periodicity.info}</li>
						</ul>
					</div>

					<div className="uranus-atmosphere">
						<h2>Atmosphère:</h2>
						<h2>Composition:</h2>
						<ul className="uranus-atmosphere-list">
							<li>Hydrogène: {uranusData.atmosphere.composition.hydrogene}</li>
							<li>Hélium: {uranusData.atmosphere.composition.helium}</li>
							<li>Méthane: {uranusData.atmosphere.composition.methane}</li>
						</ul>
						<h2>Caractéristiques:</h2>
						<ul className="uranus-atmosphere-particularites">
							{uranusData.atmosphere.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div className="uranus-satellites">
						<h2>Satellites:</h2>
						<p>{uranusData.satellites.nombre}</p>
						<h2>Lunes principales:</h2>
						<ul className="uranus-satellites-list">
							{uranusData.satellites.principaux.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div className="uranus-rings">
						<h2>Anneaux:</h2>
						<p>{uranusData.anneaux.description}</p>
						<p>
							<strong>Composition:</strong> {uranusData.anneaux.composition}
						</p>
					</div>

					<div className="uranus-composition">
						<h2>Composition:</h2>
						<ul className="uranus-composition-list">
							<li>Couches externes: {uranusData.composition.externe}</li>
							<li>Structure interne: {uranusData.composition.interne}</li>
							<li>{uranusData.composition.particularite}</li>
						</ul>
					</div>

					<div className="uranus-distances">
						<h2>Distances:</h2>
						<ul className="uranus-distances-list">
							<li>Du Soleil: {uranusData.distance.soleil}</li>
						</ul>
					</div>

					<div>
						<h2>Gravité:</h2>
						<p>{uranusData.gravity}</p>
					</div>

					<div className="uranus-particularites">
						<h2>Particularités:</h2>
						<ul className="uranus-particularites-list">
							{uranusData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div className="uranus-exploration">
						<h2>Exploration:</h2>
						<h2>Sondes spatiales:</h2>
						<ul className="uranus-exploration-sondes">
							{uranusData.exploration.sondes.map((sonde) => (
								<li key={sonde}>{sonde}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default UranusInfoCard;
