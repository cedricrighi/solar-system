import "../styles/SunCard.css";

const SunInfoCard = () => {
	const sunData = {
		type: "Étoile naine jaune",
		age: "4.6 milliards d'années",
		diameter: "1.39 million km",
		mass: "1.989 × 10^30 kg",
		surfaceTemp: "5,500°C",
		coreTemp: "15 millions °C",
		composition: {
			hydrogen: "74.9%",
			helium: "23.8%",
			oxygen: "0.77%",
			carbon: "0.29%",
			autres: "0.24%",
		},
	};

	return (
		<section className="sun-card">
			<article className="sun-card-header">
				<h1>Le Soleil</h1>
			</article>
			<article className="sun-card-body">
				<div className="sun-card-body-content">
					<div>
						<h2>Type d'étoile: </h2>
						<p>{sunData.type}</p>
					</div>

					<div>
						<h2>Âge: </h2>
						<p>{sunData.age}</p>
					</div>

					<div>
						<h2>Diamètre: </h2>
						<p>{sunData.diameter}</p>
					</div>

					<div>
						<h2>Masse: </h2>
						<p>{sunData.mass}</p>
					</div>

					<div>
						<h2>Température de surface: </h2>
						<p>{sunData.surfaceTemp}</p>
					</div>

					<div>
						<h2>Température du noyau: </h2>
						<p>{sunData.coreTemp}</p>
					</div>

					<div>
						<h2>Composition: </h2>
						<ul className="sun-composition-list">
							<li>Hydrogène: {sunData.composition.hydrogen}</li>
							<li>Hélium: {sunData.composition.helium}</li>
							<li>Oxygène: {sunData.composition.oxygen}</li>
							<li>Carbone: {sunData.composition.carbon}</li>
							<li>Autres éléments: {sunData.composition.autres}</li>
						</ul>
					</div>
				</div>
			</article>
		</section>
	);
};

export default SunInfoCard;
