
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Code, Lightbulb, ArrowRight } from 'lucide-react';

const Desafios = () => {
  const desafios = [
    {
      icon: Trophy,
      title: 'STARTUP CHALLENGE',
      subtitle: 'Desafio de Inovação',
      description: 'Competição anual para startups com as melhores soluções inovadoras do mercado.',
      image: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'TECH HACKATHON',
      subtitle: '48h de Development',
      description: 'Maratona de programação para criar soluções tecnológicas disruptivas.',
      image: 'bg-gradient-to-br from-blue-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'PITCH COMPETITION',
      subtitle: 'Battle das Ideias',
      description: 'Apresente sua startup para investidores e ganhe funding para seu projeto.',
      image: 'bg-gradient-to-br from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="desafios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DESAFIOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos nossos desafios e acelere seu crescimento empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {desafios.map((desafio, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`relative h-48 ${desafio.image} flex items-center justify-center`}>
                <desafio.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{desafio.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-4">{desafio.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{desafio.description}</p>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full group">
                  SAIBA MAIS
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Desafios;
