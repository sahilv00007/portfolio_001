import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Button } from '@/components/ui/button';

function ContactSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#0ea5e9" wireframe />
    </mesh>
  );
}

function FloatingRings() {
  const ring1Ref = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const ring3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.01;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += 0.008;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += 0.012;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -1]}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, 1]}>
        <torusGeometry args={[3, 0.03, 16, 100]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
    </>
  );
}

export default function Contact() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="card-3d p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gradient-secondary mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">sahil.verma@email.com</p>
              </div>
              
              <div className="card-3d p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gradient-accent mb-2">
                  LinkedIn
                </h3>
                <p className="text-muted-foreground">linkedin.com/in/sahilverma</p>
              </div>
              
              <div className="card-3d p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gradient-primary mb-2">
                  GitHub
                </h3>
                <p className="text-muted-foreground">github.com/sahil00007</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button  variant="hero" size="lg">
               <a href="https://www.linkedin.com/in/sahil-verma-714760320/" target='_blank'>Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
              <ContactSphere />
              <FloatingRings />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}