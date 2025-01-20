import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

interface SunProps {
	position: [number, number, number];
	textureUrl: string;
	setPlanetClicked: (planetId: string | null) => void;
}

const Sun = ({ position, textureUrl, setPlanetClicked }: SunProps) => {
	const meshRef = useRef<THREE.Mesh>(null);
	const textureLoader = new THREE.TextureLoader();
	const texture = useMemo(
		() => textureLoader.load(textureUrl),
		[textureUrl, textureLoader.load],
	);

	useFrame((_, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.2 * delta;
		}
	});

	return (
		<>
			<group
				onPointerOver={(e) => {
					e.stopPropagation();
					document.body.style.cursor = "pointer";
				}}
				onPointerOut={(e) => {
					e.stopPropagation();
					document.body.style.cursor = "auto";
				}}
			>
				<EffectComposer>
					<Bloom
						intensity={1.5}
						luminanceThreshold={0.9}
						luminanceSmoothing={0.1}
					/>
				</EffectComposer>
				<mesh
					ref={meshRef}
					position={position}
					onClick={() => {
						setPlanetClicked("Sun");
					}}
				>
					<sphereGeometry args={[1, 32, 32]} />
					<meshStandardMaterial
						emissive="orange"
						emissiveIntensity={2}
						map={texture}
						emissiveMap={texture}
					/>
				</mesh>
			</group>
		</>
	);
};

export default Sun;
