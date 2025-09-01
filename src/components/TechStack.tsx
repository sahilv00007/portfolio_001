import reactIcon from '@/assets/react-icon.png';
import nodejsIcon from '@/assets/nodejs-icon.png';
import mongodbIcon from '@/assets/mongodb-icon.png';
import expressIcon from '@/assets/express-icon.png';
import gitIcon from '@/assets/git-icon.png';

const techStack = [
  { 
    name: 'React', 
    icon: reactIcon,
    description: 'Building dynamic user interfaces with component-based architecture and modern hooks.'
  },
  { 
    name: 'Node.js', 
    icon: nodejsIcon,
    description: 'Server-side JavaScript runtime for scalable backend applications and APIs.'
  },
  { 
    name: 'MongoDB', 
    icon: mongodbIcon,
    description: 'NoSQL database for flexible, document-based data storage and retrieval.'
  },
  { 
    name: 'Express', 
    icon: expressIcon,
    description: 'Fast, minimalist web framework for Node.js backend development.'
  },
  { 
    name: 'Git', 
    icon: gitIcon,
    description: 'Version control system for tracking changes and collaborative development.'
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-secondary mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life with modern, scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div 
              key={tech.name} 
              className="card-3d p-8 rounded-xl text-center hover:scale-105 transition-all duration-500 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`}
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-gradient-primary mb-4">
                {tech.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}