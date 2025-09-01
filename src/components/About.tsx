import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Group } from 'three';

function FloatingElements() {
  const groupRef = useRef<Group>(null);
  const meshRef1 = useRef<Mesh>(null);
  const meshRef2 = useRef<Mesh>(null);
  const meshRef3 = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
    }
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x += 0.01;
      meshRef1.current.rotation.y += 0.005;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.z += 0.008;
      meshRef2.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.x += 0.006;
      meshRef3.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef1} position={[-2, 1, 0]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#0ea5e9" wireframe />
      </mesh>
      
      <mesh ref={meshRef2} position={[2, 0, -1]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      
      <mesh ref={meshRef3} position={[0, -1.5, 0.5]}>
        <dodecahedronGeometry args={[0.5]} />
        <meshStandardMaterial color="#10b981" wireframe />
      </mesh>
    </group>
  );
}

export default function About() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gradient-accent mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating elegant, 
                  efficient solutions to complex problems. My journey in web development 
                  spans across modern JavaScript technologies and frameworks.
                </p>
                
                <p>
                  With expertise in the MERN stack, I build scalable applications that 
                  deliver exceptional user experiences. I believe in writing clean, 
                  maintainable code and staying up-to-date with industry best practices.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-3d p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient-primary">5</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              
              <div className="card-3d p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient-secondary">1</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="card-3d p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Learning Mode</div>
              </div>
              
              <div className="card-3d p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient-primary">∞</div>
                <div className="text-sm text-muted-foreground">Passion Level</div>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#10b981" />
              <FloatingElements />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}