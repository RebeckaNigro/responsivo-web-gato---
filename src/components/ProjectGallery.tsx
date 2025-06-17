
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Smartphone } from 'lucide-react';

const ProjectGallery = () => {
  const projects = [
    {
      title: 'Living Lab Innovation',
      category: 'IoT & Smart Cities',
      description: 'Laboratório de inovação para desenvolvimento de soluções inteligentes para cidades.',
      tech: ['IoT', 'AI', 'Big Data'],
      image: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      title: 'Mapa Interativo',
      category: 'Geolocalização',
      description: 'Plataforma de mapeamento inteligente para otimização de rotas e logística.',
      tech: ['Maps API', 'React', 'Node.js'],
      image: 'bg-gradient-to-br from-green-500 to-blue-500'
    },
    {
      title: 'Mobile Solutions',
      category: 'Apps Nativos',
      description: 'Desenvolvimento de aplicativos mobile para diversos segmentos de mercado.',
      tech: ['React Native', 'Flutter', 'Swift'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'Startup Accelerator',
      category: 'Plataforma Web',
      description: 'Sistema completo para gestão e aceleração de startups e empreendimentos.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: 'E-commerce Platform',
      category: 'Marketplace',
      description: 'Marketplace completo para conectar vendedores e compradores.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Business Intelligence',
      description: 'Dashboard inteligente para análise de dados e tomada de decisões.',
      tech: ['D3.js', 'Python', 'Machine Learning'],
      image: 'bg-gradient-to-br from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos desenvolvidos em nosso ecossistema
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-white text-center">
                    <Code className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                  Ver Projeto
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
