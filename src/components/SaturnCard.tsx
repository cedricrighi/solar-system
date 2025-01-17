const SaturnInfoCard = () => {
	const saturnData = {
		type: "Planète géante gazeuse",
		position: "6ème planète du système solaire",
		surnom: "La planète aux anneaux",
		diameter: {
			equatorial: "116 460 km",
			polaire: "108 728 km",
			info: "Aplatissement le plus important du système solaire",
		},
		mass: "5.683 × 10^26 kg (95 fois la Terre)",
		densite: "0.687 g/cm³ (seule planète moins dense que l'eau)",
		surfaceTemp: {
			moyenne: "-138°C",
			coeur: "11 700°C",
		},
		periodicity: {
			revolution: "29.46 années terrestres",
			rotation: "10 heures 34 minutes",
		},
		atmosphere: {
			composition: {
				hydrogene: "96.3%",
				helium: "3.25%",
				methane: "0.45%",
				autres: "traces d'ammoniac et d'éthane",
			},
			particularites: [
				"Vents violents jusqu'à 1800 km/h",
				"Tempêtes hexagonales aux pôles",
				"Aurores boréales",
			],
		},
		anneaux: {
			principaux: ["A", "B", "C"],
			composition: "Glace d'eau, roches et poussières",
			epaisseur: "10 à 100 mètres",
			etendue: "136 800 km de largeur",
			particularites: [
				"Plus beaux et plus visibles du système solaire",
				"Découverts par Galilée en 1610",
				"Plus de 1000 annelets individuels",
			],
		},
		satellites: {
			nombre: "83 lunes confirmées",
			principaux: [
				"Titan (plus grande lune, atmosphère dense)",
				"Encelade (geysers de glace)",
				"Mimas (ressemble à l'Étoile de la Mort)",
				"Rhéa",
				"Japet",
				"Téthys",
			],
		},
		composition: {
			externe: "Hydrogène et hélium liquides",
			intermediaire: "Hydrogène métallique",
			noyau: "Roche et glace, environ 15-18 fois la masse de la Terre",
		},
		distance: {
			soleil: "1.4 milliard km (9.5 UA)",
			terre: {
				min: "1.2 milliard km",
				max: "1.6 milliard km",
			},
		},
		gravity: "10.44 m/s²",
		particularites: [
			"Système d'anneaux le plus spectaculaire",
			"Plus grande lune avec atmosphère (Titan)",
			"Seule planète géante moins dense que l'eau",
			"Changement de saisons marqué (inclinaison de 26.7°)",
		],
		exploration: {
			sondes: ["Pioneer 11", "Voyager 1 et 2", "Cassini-Huygens (1997-2017)"],
			decouvertes: "Mission Cassini : océans sous-glaciaires sur Encelade",
		},
	};

	return (
		<div>
			<div>
				<h1>Saturne</h1>
				<p>{saturnData.surnom}</p>
			</div>
			<div>
				<div>
					<div>
						<h3>Type</h3>
						<p>{saturnData.type}</p>
					</div>

					<div>
						<h3>Position</h3>
						<p>{saturnData.position}</p>
					</div>

					<div>
						<h3>Diamètre</h3>
						<ul>
							<li>Équatorial: {saturnData.diameter.equatorial}</li>
							<li>Polaire: {saturnData.diameter.polaire}</li>
							<li>{saturnData.diameter.info}</li>
						</ul>
					</div>

					<div>
						<h3>Masse et Densité</h3>
						<p>Masse: {saturnData.mass}</p>
						<p>Densité: {saturnData.densite}</p>
					</div>

					<div>
						<h3>Températures</h3>
						<ul>
							<li>Moyenne: {saturnData.surfaceTemp.moyenne}</li>
							<li>Cœur: {saturnData.surfaceTemp.coeur}</li>
						</ul>
					</div>

					<div>
						<h3>Périodes</h3>
						<ul>
							<li>Révolution: {saturnData.periodicity.revolution}</li>
							<li>Rotation: {saturnData.periodicity.rotation}</li>
						</ul>
					</div>

					<div>
						<h3>Atmosphère</h3>
						<h4>Composition:</h4>
						<ul>
							<li>Hydrogène: {saturnData.atmosphere.composition.hydrogene}</li>
							<li>Hélium: {saturnData.atmosphere.composition.helium}</li>
							<li>Méthane: {saturnData.atmosphere.composition.methane}</li>
							<li>Autres: {saturnData.atmosphere.composition.autres}</li>
						</ul>
						<h4>Particularités:</h4>
						<ul>
							{saturnData.atmosphere.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div>
						<h3>Système d'Anneaux</h3>
						<p>
							Anneaux principaux: {saturnData.anneaux.principaux.join(", ")}
						</p>
						<p>Composition: {saturnData.anneaux.composition}</p>
						<p>Épaisseur: {saturnData.anneaux.epaisseur}</p>
						<p>Étendue: {saturnData.anneaux.etendue}</p>
						<h4>Caractéristiques:</h4>
						<ul>
							{saturnData.anneaux.particularites.map((part) => (
								<li key={part}>{part}</li>
							))}
						</ul>
					</div>

					<div>
						<h3>Satellites</h3>
						<p>{saturnData.satellites.nombre}</p>
						<h4>Lunes principales:</h4>
						<ul>
							{saturnData.satellites.principaux.map((lune) => (
								<li key={lune}>{lune}</li>
							))}
						</ul>
					</div>

					<div>
						<h3>Composition</h3>
						<ul>
							<li>Couches externes: {saturnData.composition.externe}</li>
							<li>
								Couches intermédiaires: {saturnData.composition.intermediaire}
							</li>
							<li>Noyau: {saturnData.composition.noyau}</li>
						</ul>
					</div>

					<div>
						<h3>Distances</h3>
						<ul>
							<li>Du Soleil: {saturnData.distance.soleil}</li>
							<li>De la Terre:</li>
							<ul>
								<li>Minimum: {saturnData.distance.terre.min}</li>
								<li>Maximum: {saturnData.distance.terre.max}</li>
							</ul>
						</ul>
					</div>

					<div>
						<h3>Gravité</h3>
						<p>{saturnData.gravity}</p>
					</div>

					<div>
						<h3>Particularités</h3>
						<ul>
							{saturnData.particularites.map((particularite) => (
								<li key={particularite}>{particularite}</li>
							))}
						</ul>
					</div>

					<div>
						<h3>Exploration</h3>
						<h4>Sondes spatiales:</h4>
						<ul>
							{saturnData.exploration.sondes.map((sonde) => (
								<li key={sonde}>{sonde}</li>
							))}
						</ul>
						<p>{saturnData.exploration.decouvertes}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SaturnInfoCard;
