import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

function FlowField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1200;
  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      randoms[i] = Math.random();
    }
    return { positions, randoms };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const r = randoms[i];
      const speed = 0.4 + r * 0.4;
      arr[i * 3] += speed * 0.012;
      if (arr[i * 3] > 7) arr[i * 3] = -7;
      arr[i * 3 + 1] += Math.sin(t * 0.5 + r * 10) * 0.002;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.z = Math.sin(t * 0.1) * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#8ab4ff" size={0.04} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export function FlowScene() {
  return (
    <Scene cameraPosition={[0, 0, 6]} cameraFov={55}>
      <FlowField />
    </Scene>
  );
}
