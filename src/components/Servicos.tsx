
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Code } from 'lucide-react';

const Servicos = () => {
  const servicos = [
    {
      icon: Users,
      title: 'Mentorias e Assessorias',
      description: 'Orientação especializada para desenvolver seu negócio com estratégias personalizadas.'
    },
    {
      icon: Globe,
      title: 'Conexão com o Mercado',
      description: 'Networking qualificado e oportunidades de parcerias estratégicas para expandir sua rede.'
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Projetos',
      description: 'Suporte técnico e metodológico para tirar suas ideias do papel e transformá-las em realidade.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSOS SERVIÇOS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{servico.title}</h3>
              <p className="text-gray-600 leading-relaxed">{servico.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
