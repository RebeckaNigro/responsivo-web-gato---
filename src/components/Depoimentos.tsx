
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'Maria Silva',
      cargo: 'CEO, TechStart Innovations',
      foto: '/placeholder-pessoa-1.jpg',
      texto: 'A Startup FIEMS foi fundamental para o crescimento da nossa empresa. O suporte técnico e as mentorias especializadas nos ajudaram a estruturar nosso negócio e conseguir investimento.',
      estrelas: 5
    },
    {
      nome: 'João Santos',
      cargo: 'Founder, GreenTech Solutions',
      foto: '/placeholder-pessoa-2.jpg',
      texto: 'Participar dos programas da Startup FIEMS mudou completamente nossa perspectiva de mercado. A rede de contatos e as oportunidades de negócio foram excepcionais.',
      estrelas: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSOS CLIENTES SATISFEITOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {depoimento.nome.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{depoimento.nome}</h3>
                    <p className="text-gray-600">{depoimento.cargo}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(depoimento.estrelas)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-purple-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {depoimento.texto}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
