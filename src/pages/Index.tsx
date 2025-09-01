import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
