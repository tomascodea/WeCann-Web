// components/Planta3D.tsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
    }
  });

  // Verifica y ajusta los materiales del modelo si es necesario
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.color.set('white'); // Ajusta el color base del material si es necesario
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} scale={[2, 2, 2]} position={[0, -1, 0]} />;
}

// Es necesario pre-cargar el modelo para evitar el problema de carga inicial
useGLTF.preload('/3D/cogollo.gltf');

export default function Planta3D() {
  return (
    <Canvas
      style={{ width: '100%', height: '800px' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" /> {/* Añade un entorno para mejorar la iluminación global */}
      <Suspense fallback={null}>
        <Model url="/3D/cogollo.gltf" />
      </Suspense>
    </Canvas>
  );
}
