import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Users, BookOpen, PlayCircle, Star, ArrowRight, ArrowUp } from 'lucide-react'

export default function FaceNoseEssentialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              CURSO PREPARATÓRIO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Face Nose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">Essentials</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Domine os <strong>fundamentos essenciais</strong> do Pan Rejuvenescimento e 
              prepare-se para a <strong>transformação completa</strong> da sua prática
            </p>

            {/* Two-Path Entry Point */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                🎯 Dois Caminhos de Entrada
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">📚 Para Iniciantes</h4>
                  <p className="text-gray-600">Comece aqui e prepare-se para o Face Nose Code</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚀 Para Experientes</h4>
                  <p className="text-gray-600">Aperfeiçoe técnicas específicas do seu interesse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-gray-200 shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Por Que Começar Pelos Fundamentos?
              </h2>
              <p className="text-gray-600 mb-6">
                Mesmo cirurgiões experientes descobrem gaps fundamentais que limitam seus resultados
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Base Sólida</h4>
                    <p className="text-sm text-gray-600">Compreenda os princípios que tornam o Pan Rejuvenescimento possível</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Resultados Imediatos</h4>
                    <p className="text-sm text-gray-600">Aplique conhecimentos já na primeira semana</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Preparação Total</h4>
                    <p className="text-sm text-gray-600">Esteja pronto para o método completo Face Nose Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conteúdo do Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              12 semanas de conteúdo estruturado para sua evolução progressiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: "Semanas 1-2",
                title: "Anatomia Facial Integrada",
                duration: "6 horas",
                topics: ["Estruturas anatômicas", "Pontos de sustentação", "Envelhecimento facial"]
              },
              {
                week: "Semanas 3-4", 
                title: "Princípios da Harmonia",
                duration: "8 horas",
                topics: ["Proporções áureas", "Análise facial", "Planejamento integrado"]
              },
              {
                week: "Semanas 5-6",
                title: "3 Procedimentos Base",
                duration: "12 horas", 
                topics: ["Rinoplastia básica", "Lifting facial", "Blefaroplastia"]
              },
              {
                week: "Semanas 7-8",
                title: "Técnicas de Integração",
                duration: "10 horas",
                topics: ["Sequenciamento", "Tempo cirúrgico", "Recuperação otimizada"]
              },
              {
                week: "Semanas 9-10",
                title: "Casos Práticos",
                duration: "8 horas",
                topics: ["20 casos reais", "Análise de resultados", "Discussão de técnicas"]
              },
              {
                week: "Semanas 11-12",
                title: "Preparação Avançada",
                duration: "6 horas",
                topics: ["Próximos passos", "Face Nose Code prep", "Certificação"]
              }
            ].map((module, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-gray-600 border-gray-600 text-xs">
                      {module.week}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Seu Caminho Para a Excelência
              </h2>
              <p className="text-xl text-gray-600">
                Da base aos procedimentos mais avançados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 - Current */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Face Nose Essentials</h3>
                <p className="text-gray-600 mb-4">Base fundamental</p>
                <Badge className="bg-gray-600 text-white">VOCÊ ESTÁ AQUI</Badge>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              {/* Step 2 - Next */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Face Nose Code</h3>
                <p className="text-gray-600 mb-4">Método completo</p>
                <div className="space-y-2">
                  <Badge className="bg-blue-600 text-white">PRÓXIMO NÍVEL</Badge>
                  <p className="text-sm text-blue-600 font-medium">Desconto especial para alunos</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl">
                Ver Detalhes do Face Nose Code
                <ArrowUp className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Specific to Beginners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sucesso Desde o Início
            </h2>
            <p className="text-xl text-gray-600">
              Veja como o Essentials transformou carreiras em poucos meses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Carlos Mendes",
                location: "Brasília, DF",
                experience: "2 anos na especialidade",
                result: "50% mais consultas",
                quote: "O Essentials me deu a base que não tive na residência. Agora meus pacientes confiam mais nos meus resultados."
              },
              {
                name: "Dra. Ana Silva", 
                location: "Porto Alegre, RS",
                experience: "Recém-formada",
                result: "Primeira técnica avançada",
                quote: "Saí do curso fazendo procedimentos que antes considerava impossíveis para meu nível."
              },
              {
                name: "Dr. Roberto Costa",
                location: "Recife, PE", 
                experience: "5 anos na área",
                result: "Descoberta de gaps fundamentais",
                quote: "Percebi quantos detalhes importantes eu não conhecia. Isso elevou meus resultados tremendamente."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic text-sm">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.experience}</p>
                    <p className="text-xs font-medium text-green-600 mt-1">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border-2 border-gray-300">
            <div className="text-center">
              <Badge className="mb-6 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 text-lg">
                INVESTIMENTO ACESSÍVEL
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comece Sua Transformação
              </h2>
              
              <div className="mb-8">
                <div className="text-lg text-gray-600 mb-2">De R$ 5.997 por</div>
                <div className="text-5xl md:text-6xl font-bold text-gray-700 mb-2">R$ 3.997</div>
                <div className="text-gray-600">ou 12x de R$ 361 sem juros</div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
                <h4 className="font-semibold text-gray-900 mb-4">✅ O que está incluído:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>50+ horas de conteúdo</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Material didático completo</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Casos práticos reais</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Suporte da comunidade</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Acesso por 1 ano</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Certificado reconhecido</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-12 py-6 rounded-xl text-xl font-semibold">
                  Começar Agora
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                
                <Link href="/face-nose-code">
                  <Button variant="outline" size="lg" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-12 py-6 rounded-xl text-lg font-semibold">
                    Ou ir direto para o Face Nose Code
                    <ArrowUp className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                🔒 Pagamento 100% seguro • Garantia de 30 dias
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}