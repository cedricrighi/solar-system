import { Canvas } from "@react-three/fiber";
import { MapControls, Stars } from "@react-three/drei";
import "../styles/SolarSystem.css";
import { Sun } from "./Sun";
import { Planet } from "./Planet";
import { OrbitLine } from "./OrbitLine";
import { useState } from "react";
import SunCard from "./SunCard";
import MercuryCard from "./MercuryCard";
import EarthCard from "./EarthCard";
import MarsCard from "./MarsCard";
import VenusCard from "./VenusCard";
import JupiterCard from "./JupiterCard";
import SaturnCard from "./SaturnCard";
import UranusCard from "./UranusCard";

export const SolarSystem = () => {
	const planets = [
		{
			id: 1,
			name: "Mercury",
			position: [2, 0, 0] as [number, number, number],
			textureUrl: "/textures/mercurymap.jpg",
			size: 0.08,
			rotationSpeed: 0.005,
			orbitSpeed: 0.06,
			orbitRadius: 2,
		},
		{
			id: 2,
			name: "Venus",
			position: [3, 0, 0] as [number, number, number],
			textureUrl: "/textures/venusmap.jpg",
			size: 0.1,
			rotationSpeed: 0.004,
			orbitSpeed: 0.0225,
			orbitRadius: 3,
		},
		{
			id: 3,
			name: "Earth",
			position: [4, 0, 0] as [number, number, number],
			textureUrl: "/textures/earthmap.jpg",
			size: 0.1,
			rotationSpeed: 0.005,
			orbitSpeed: 0.015,
			orbitRadius: 4,
		},
		{
			id: 4,
			name: "Mars",
			position: [5, 0, 0] as [number, number, number],
			textureUrl: "/textures/marsmap.jpg",
			size: 0.08,
			rotationSpeed: 0.0045,
			orbitSpeed: 0.012,
			orbitRadius: 5,
		},
		{
			id: 5,
			name: "Jupiter",
			position: [8, 0, 0] as [number, number, number],
			textureUrl: "/textures/jupitermap.jpg",
			size: 0.2,
			rotationSpeed: 0.005,
			orbitSpeed: 0.009,
			orbitRadius: 8,
		},
		{
			id: 6,
			name: "Saturn",
			position: [10, 0, 0] as [number, number, number],
			textureUrl: "/textures/saturnmap.jpg",
			size: 0.15,
			rotationSpeed: 0.004,
			orbitSpeed: 0.007,
			orbitRadius: 10,
		},
		{
			id: 7,
			name: "Uranus",
			position: [12, 0, 0] as [number, number, number],
			textureUrl: "/textures/uranusmap.jpg",
			size: 0.1,
			rotationSpeed: 0.005,
			orbitSpeed: 0.005,
			orbitRadius: 12,
		},
		{
			id: 8,
			name: "Neptune",
			position: [14, 0, 0] as [number, number, number],
			textureUrl: "/textures/neptunemap.jpg",
			size: 0.1,
			rotationSpeed: 0.0045,
			orbitSpeed: 0.003,
			orbitRadius: 14,
		},
	];

	const [planetClicked, setPlanetClicked] = useState<string | null>(null);

	return (
		<>
			<Canvas
				camera={{
					position: [0, 5, 0],
					fov: 75,
					near: 0.1,
					far: 1000,
				}}
				className="solar-system-canvas"
			>
				<ambientLight intensity={0.5} />
				<pointLight
					position={[0, 10, 0]}
					intensity={5}
					distance={200}
					decay={0}
				/>

				<MapControls
					enableZoom={true}
					enableRotate={false}
					enableDamping={false}
					panSpeed={1.5}
					zoomSpeed={1.2}
				/>

				<Stars radius={100} depth={50} count={1000} factor={2} fade />

				<Sun
					position={[0, 0, 0]}
					textureUrl="/textures/sunmap.jpg"
					setPlanetClicked={setPlanetClicked}
				/>

				{planets.map((planet) => (
					<group key={planet.id}>
						<OrbitLine radius={planet.orbitRadius} />
						<Planet
							name={planet.name}
							position={planet.position}
							textureUrl={planet.textureUrl}
							size={planet.size}
							rotationSpeed={planet.rotationSpeed}
							orbitSpeed={planet.orbitSpeed}
							orbitRadius={planet.orbitRadius}
							setPlanetClicked={setPlanetClicked}
						/>
					</group>
				))}
			</Canvas>
			{planetClicked === "Sun" && <SunCard />}
			{planetClicked === "Mercury" && <MercuryCard />}
			{planetClicked === "Venus" && <VenusCard />}
			{planetClicked === "Earth" && <EarthCard />}
			{planetClicked === "Mars" && <MarsCard />}
			{planetClicked === "Jupiter" && <JupiterCard />}
			{planetClicked === "Saturn" && <SaturnCard />}
			{planetClicked === "Uranus" && <UranusCard />}
			{planetClicked === "Neptune" && <NeptuneCard />}
		</>
	);
};
