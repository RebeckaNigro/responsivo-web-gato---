
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Eye } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      titulo: '5 Dicas Para Acelerar Sua Startup',
      resumo: 'Descubra as principais estratégias utilizadas pelas startups de maior sucesso no mercado brasileiro.',
      data: '15 Jun 2024',
      visualizacoes: '2.5k',
      imagem: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      titulo: 'Como Conseguir Investimento Para Seu Negócio',
      resumo: 'Guia completo sobre como preparar sua startup para atrair investidores e conseguir funding.',
      data: '10 Jun 2024',
      visualizacoes: '1.8k',
      imagem: 'bg-gradient-to-br from-green-500 to-teal-500'
    },
    {
      titulo: 'Tendências de Inovação Para 2024',
      resumo: 'Análise das principais tendências tecnológicas que irão impactar o mercado de startups.',
      data: '05 Jun 2024',
      visualizacoes: '3.2k',
      imagem: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NOSSO BLOG
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdos exclusivos sobre empreendedorismo e inovação
            </p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8">
            VEJA MAIS
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <div className={`h-48 ${post.imagem} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.data}</span>
                      <Eye className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.visualizacoes}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{post.resumo}</p>
                
                <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors rounded-full">
                  Ler Mais
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

export default Blog;
