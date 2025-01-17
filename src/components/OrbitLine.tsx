import * as THREE from "three";

interface OrbitLineProps {
	radius: number;
	color?: string;
}

export const OrbitLine = ({ radius, color = "#ffffff" }: OrbitLineProps) => {
	const points = [];
	const segments = 60;

	for (let i = 0; i <= segments; i++) {
		const theta = (i / segments) * Math.PI * 2;
		points.push(
			new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius),
		);
	}

	return (
		<line>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={points.length}
					array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
					itemSize={3}
				/>
			</bufferGeometry>
			<lineBasicMaterial color={color} transparent opacity={0.05} />
		</line>
	);
};
