
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            STARTUP FIEMS
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            HUB DE INOVAÇÃO E CONEXÃO EM UM SÓ LUGAR!
          </p>
          
          {/* 3D Rocket illustration placeholder - using icon for now */}
          <div className="relative mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8 hover:scale-110 transition-transform duration-300">
              <Rocket className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full backdrop-blur-sm">
              Saiba Mais
            </Button>
          </div>

          {/* Partner logos */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold text-lg">Parceiros:</div>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-medium">SEBRAE</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-medium">FIEMS</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white font-medium">STARTUPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
