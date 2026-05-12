import { type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { type CameraProps } from '@react-three/fiber';

interface SceneProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  className?: string;
}

export function Scene({
  children,
  cameraPosition = [0, 0, 8],
  cameraFov = 45,
  className,
}: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: cameraPosition, fov: cameraFov } as CameraProps}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#070815']} />
      <fog attach="fog" args={['#070815', 12, 35]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#8ab4ff" />
      <pointLight position={[-10, -5, 5]} intensity={0.6} color="#c084fc" />
      {children}
    </Canvas>
  );
}
