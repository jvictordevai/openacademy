import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.4, 3]} />
        <meshBasicMaterial color="#5b9bff" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.42, 1]} />
        <meshBasicMaterial color="#c084fc" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (points.current) {
      points.current.rotation.y += dt * 0.02;
      points.current.rotation.x += dt * 0.005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial color="#8ab4ff" size={0.025} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export function GlobeScene() {
  return (
    <Scene cameraPosition={[0, 0, 8]} cameraFov={50}>
      <Globe />
      <Particles />
    </Scene>
  );
}
