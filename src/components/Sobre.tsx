
import { Users, Target, Award } from 'lucide-react';

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SOBRE A STARTUP FIEMS
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                A Startup FIEMS é o principal hub de inovação e empreendedorismo do estado, 
                conectando startups, investidores e mentores em um ecossistema vibrante de negócios.
              </p>
              <p>
                Nossa missão é acelerar o crescimento de startups através de mentoria especializada, 
                acesso a capital e uma rede sólida de parceiros estratégicos que impulsionam o 
                desenvolvimento empresarial.
              </p>
              <p>
                Com anos de experiência no mercado, já ajudamos centenas de empreendedores a 
                transformar suas ideias inovadoras em negócios de sucesso sustentável.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
                <p className="text-sm opacity-90">Profissionais experientes em inovação e negócios</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Foco em Resultados</h3>
                <p className="text-sm opacity-90">Metodologia comprovada para acelerar negócios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
