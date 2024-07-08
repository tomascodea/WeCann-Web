// components/Cogollo3D_2.tsx
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, SSAO } from '@react-three/postprocessing';
import { useMediaQuery } from '@chakra-ui/react';
import { Texture } from 'three';

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
        child.material.roughness = 0.7; // Añade rugosidad para un efecto más realista
        child.material.metalness = 0.2; // Ajusta la reflectividad del material
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} scale={[2, 2, 2]} position={[0, -1, 0]} />;
}

// Es necesario pre-cargar el modelo para evitar el problema de carga inicial
useGLTF.preload('/3D/Cogollos/Cogollo_2/cogollo_2.gltf');

export default function Cogollo3D_2() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const handleMouseDown = () => {
        if (!isMobile) {
          canvas.style.cursor = 'grabbing';
        }
      };
      const handleMouseUp = () => {
        if (!isMobile) {
          canvas.style.cursor = 'grab';
        }
      };

      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleMouseUp);

      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isMobile]);

  return (
    <Canvas
      ref={canvasRef}
      style={{ width: '100%', height: isMobile ? '350px' : '600px', maxHeight: '500px', cursor: isMobile ? 'default' : 'grab'}}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <Environment preset="sunset" /> {/* Añade un entorno para mejorar la iluminación global */}
      <Suspense fallback={null}>
        <Model url="/3D/Cogollos/Cogollo_2/cogollo_2.gltf" />
      </Suspense>
      {!isMobile && <OrbitControls enableZoom={false} />} {/* Deshabilita los controles en móvil */}
      {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.6} scale={10} blur={1} far={1.4} /> */}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        <SSAO
          radius={0.15}
          intensity={1.5}
          blendFunction={1}
          distanceScaling={false}
          depthAwareUpsampling={true}
          normalDepthBuffer={null as unknown as Texture}  // Puedes ajustar esto según tus necesidades
          worldDistanceThreshold={0.1}
          worldDistanceFalloff={0.1}
          worldProximityThreshold={0.1}
          worldProximityFalloff={0.1}
        />
      </EffectComposer>
    </Canvas>
  );
}
