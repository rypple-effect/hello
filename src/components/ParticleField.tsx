import { useMemo, useRef, Component, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useParallax } from "@/hooks/useParallax";

const PARTICLE_COUNT = 900;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#00d2ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("ParticleField disabled due to WebGL/Canvas error:", error);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/**
 * Fullscreen fixed-position canvas rendering a slowly drifting particle
 * field behind the hero content. Parallaxes at 0.2x scroll speed.
 */
export default function ParticleField() {
  const parallaxRef = useParallax<HTMLDivElement>(0.2);

  return (
    <div
      ref={parallaxRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    >
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "low-power" }}
          fallback={null}
        >
          <Particles />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
