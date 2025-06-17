
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      company: 'NU',
      category: 'Fintech',
      description: 'Revolucionou o mercado financeiro brasileiro com soluções digitais inovadoras.',
      metrics: 'R$ 100M+ em receita',
      color: 'bg-purple-600'
    },
    {
      company: 'ECOMMERCE PRO',
      category: 'E-commerce',
      description: 'Plataforma que conecta pequenos comerciantes ao mercado digital.',
      metrics: '50K+ merchants',
      color: 'bg-blue-600'
    },
    {
      company: 'NU',
      category: 'Healthtech',
      description: 'Telemedicina que democratizou o acesso à saúde de qualidade.',
      metrics: '1M+ consultas',
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos casos de sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as startups que transformaram seus mercados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`h-2 ${story.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {story.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.company}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{story.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-purple-600">
                    {story.metrics}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
