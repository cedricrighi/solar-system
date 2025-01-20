import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface PlanetProps {
	position: [number, number, number];
	name: string;
	textureUrl: string;
	size: number;
	rotationSpeed: number;
	orbitSpeed: number;
	orbitRadius: number;
	setPlanetClicked: (planetId: string | null) => void;
}

const Planet = ({
	position,
	name,
	textureUrl,
	size,
	rotationSpeed,
	orbitSpeed,
	orbitRadius,
	setPlanetClicked,
}: PlanetProps) => {
	const meshRef = useRef<THREE.Mesh>(null);
	const orbitRef = useRef(0);

	const texture = useMemo(() => {
		return new THREE.TextureLoader().load(textureUrl);
	}, [textureUrl]);

	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.y += rotationSpeed * delta;
			orbitRef.current += orbitSpeed * delta;
			meshRef.current.position.x = Math.cos(orbitRef.current) * orbitRadius;
			meshRef.current.position.z = Math.sin(orbitRef.current) * orbitRadius;
			meshRef.current.position.y = 0;
		}
	});

	return (
		<group>
			<mesh
				ref={meshRef}
				position={position}
				onClick={() => setPlanetClicked(name)}
				onPointerOver={(e) => {
					e.stopPropagation();
					document.body.style.cursor = "pointer";
				}}
				onPointerOut={(e) => {
					e.stopPropagation();
					document.body.style.cursor = "auto";
				}}
			>
				<sphereGeometry args={[size, 32, 32]} />
				<meshStandardMaterial map={texture} metalness={0.4} roughness={0.7} />
			</mesh>
		</group>
	);
};

export default Planet;
