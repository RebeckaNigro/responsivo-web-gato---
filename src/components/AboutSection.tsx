
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              QUEM SOMOS
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Somos o principal hub de inovação e empreendedorismo do estado, conectando startups, 
                investidores e mentores em um ecossistema vibrante de negócios.
              </p>
              <p>
                Nossa missão é acelerar o crescimento de startups através de mentoria especializada, 
                acesso a capital e uma rede sólida de parceiros estratégicos.
              </p>
              <p>
                Com mais de 5 anos de experiência, já ajudamos centenas de empreendedores a 
                transformar suas ideias em negócios de sucesso.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Startups Aceleradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Mentores Especialistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">R$ 10M+</div>
                <div className="text-sm text-gray-600">Investimentos Captados</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">EMPRESA</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Time especializado em inovação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6" />
                  <span>Foco em resultados mensuráveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Rocket className="w-6 h-6" />
                  <span>Metodologia própria de aceleração</span>
                </div>
              </div>
              
              {/* Placeholder for team image */}
              <div className="mt-8 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-full h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-12 h-12 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
