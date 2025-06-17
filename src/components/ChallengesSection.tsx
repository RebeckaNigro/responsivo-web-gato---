
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Code, Lightbulb } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: Trophy,
      title: 'STARTUP CHALLENGE',
      subtitle: 'Desafio de Inovação',
      description: 'Competição anual para startups com as melhores soluções inovadoras.',
      image: '/placeholder-challenge-1.jpg'
    },
    {
      icon: Code,
      title: 'TECH HACKATHON',
      subtitle: '48h de Development',
      description: 'Maratona de programação para criar soluções tecnológicas disruptivas.',
      image: '/placeholder-challenge-2.jpg'
    },
    {
      icon: Lightbulb,
      title: 'PITCH COMPETITION',
      subtitle: 'Battle das Ideias',
      description: 'Apresente sua startup para investidores e ganhe funding.',
      image: '/placeholder-challenge-3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DESAFIOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos nossos desafios e acelere seu crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <challenge.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-4">{challenge.subtitle}</p>
                <p className="text-gray-600 mb-6">{challenge.description}</p>
                
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
                  Participar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
