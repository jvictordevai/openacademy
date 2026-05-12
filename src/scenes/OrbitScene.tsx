import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

interface OrbiterProps {
  radius: number;
  speed: number;
  offset: number;
  tilt: number;
  color: string;
  size?: number;
}

function Orbiter({ radius, speed, offset, tilt, color, size = 0.18 }: OrbiterProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t) * Math.sin(tilt) * radius * 0.3;
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.4} roughness={0.3} />
    </mesh>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.4;
      ref.current.rotation.x += dt * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial color="#a78bfa" emissive="#5b21b6" emissiveIntensity={0.6} metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
      <meshBasicMaterial color="#8ab4ff" transparent opacity={0.12} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function OrbitScene() {
  const colors = ['#5b9bff', '#c084fc', '#fb923c', '#34d399', '#f472b6', '#facc15'];
  return (
    <Scene cameraPosition={[0, 1.6, 6]} cameraFov={55}>
      <Core />
      <OrbitRing radius={1.6} />
      <OrbitRing radius={2.4} />
      <OrbitRing radius={3.2} />
      {colors.map((c, i) => (
        <Orbiter
          key={i}
          radius={1.6 + (i % 3) * 0.8}
          speed={0.35 + (i % 3) * 0.08}
          offset={(i / colors.length) * Math.PI * 2}
          tilt={(i + 1) * 0.4}
          color={c}
        />
      ))}
    </Scene>
  );
}
