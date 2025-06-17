
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Search, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Plano PRO 360',
      subtitle: 'Completo',
      description: 'Tudo que você precisa para acelerar seu negócio com mentoria especializada e acesso completo.',
      features: ['Mentoria 1:1', 'Rede de contatos', 'Pitch deck review', 'Acesso eventos']
    },
    {
      icon: Search,
      title: 'Plano Descoberta',
      subtitle: 'Essencial',
      description: 'Para quem está começando e precisa validar sua ideia de negócio.',
      features: ['Validação de ideia', 'Market research', 'Análise competitiva', 'Suporte básico']
    },
    {
      icon: TrendingUp,
      title: 'Plano Aceleração',
      subtitle: 'Avançado',
      description: 'Para startups prontas para escalar e conquistar novos mercados.',
      features: ['Scale strategy', 'Funding support', 'Go-to-market', 'Partnerships']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSOS PLANOS PARA ACELERAR SEU NEGÓCIO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o momento da sua startup
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-4">{service.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
