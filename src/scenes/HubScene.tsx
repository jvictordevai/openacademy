import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

function Node({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.6;
      ref.current.rotation.x += dt * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.28, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

function Hub() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.15;
  });

  const nodes: Array<{ pos: [number, number, number]; color: string }> = [
    { pos: [2.6, 0.8, 0], color: '#5b9bff' },
    { pos: [-2.6, 0.4, 0.6], color: '#c084fc' },
    { pos: [1.6, -1.2, 1.4], color: '#fb923c' },
    { pos: [-1.4, -0.8, -1.6], color: '#34d399' },
    { pos: [0.4, 1.8, -1.2], color: '#f472b6' },
    { pos: [-0.6, -1.6, 1.2], color: '#facc15' },
    { pos: [2.2, -0.4, -1.0], color: '#60a5fa' },
    { pos: [-2.0, 1.2, -0.6], color: '#a78bfa' },
  ];

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.7, 2]} />
        <meshStandardMaterial color="#a78bfa" emissive="#5b21b6" emissiveIntensity={0.7} metalness={0.6} roughness={0.2} />
      </mesh>
      {nodes.map((n, i) => (
        <group key={i}>
          <Node position={n.pos} color={n.color} />
          <Line start={[0, 0, 0]} end={n.pos} color={n.color} />
        </group>
      ))}
    </group>
  );
}

function Line({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.25 }),
        )
      }
    />
  );
}

export function HubScene() {
  return (
    <Scene cameraPosition={[0, 0.5, 7]} cameraFov={50}>
      <Hub />
    </Scene>
  );
}
