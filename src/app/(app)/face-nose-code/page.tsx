import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Award, PlayCircle, Star, ArrowRight, Shield, Globe } from 'lucide-react'

export default function FaceNoseCodePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with VSL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-lg">
              <Award className="w-5 h-5 mr-2" />
              PROGRAMA FLAGSHIP
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Face Nose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Code</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              O único método no mundo que integra <strong>6-8 procedimentos em apenas 7 horas</strong>, 
              dominado por menos de 1% dos cirurgiões plásticos
            </p>
          </div>

          {/* VSL Area */}
          <div className="bg-black rounded-2xl aspect-video max-w-4xl mx-auto mb-12 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
              <Button size="lg" className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/30 px-8 py-6 rounded-2xl">
                <PlayCircle className="w-8 h-8 mr-3" />
                <span className="text-xl font-semibold">Assistir Apresentação Exclusiva</span>
              </Button>
            </div>
            {/* Placeholder for video */}
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded">
              45 min • Dr. Alexandre Calandrini
            </div>
          </div>

          {/* Urgency Timer */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                ⏰ Oferta Limitada - Turma Exclusiva
              </h3>
              <p className="text-red-600 mb-4">
                Apenas 12 vagas disponíveis para garantir mentoria personalizada
              </p>
              <div className="flex justify-center items-center space-x-4 text-2xl font-bold text-red-700">
                <div className="bg-white rounded-lg px-3 py-2 shadow">
                  <div>02</div>
                  <div className="text-xs">DIAS</div>
                </div>
                <div>:</div>
                <div className="bg-white rounded-lg px-3 py-2 shadow">
                  <div>14</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div>:</div>
                <div className="bg-white rounded-lg px-3 py-2 shadow">
                  <div>32</div>
                  <div className="text-xs">MIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O Problema Que Todo Cirurgião Enfrenta
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Pacientes insatisfeitos com resultados parciais de procedimentos isolados</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Múltiplas cirurgias geram custos extras e trauma desnecessário</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Competição feroz com outros profissionais oferecendo o mesmo</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Falta de diferenciação técnica no mercado saturado</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Solução Revolucionária
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p><strong>Pan Rejuvenescimento Integrado:</strong> 6-8 procedimentos harmonizados em uma única sessão</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p><strong>Resultados Extraordinários:</strong> Transformação completa que impressiona pacientes</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p><strong>Diferenciação Total:</strong> Técnica exclusiva que te posiciona como especialista único</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p><strong>Valorização Premium:</strong> Justifique honorários 3x superiores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Você Vai Dominar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que precisa para se tornar referência mundial em Pan Rejuvenescimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                module: "Módulo 1",
                title: "Fundamentos do Pan Rejuvenescimento",
                duration: "8 horas",
                topics: ["Anatomia facial integrada", "Princípios da harmonia", "Avaliação pré-operatória"]
              },
              {
                module: "Módulo 2", 
                title: "Técnica Face Nose Code",
                duration: "12 horas",
                topics: ["Protocolo exclusivo", "Sequência de procedimentos", "Instrumentação específica"]
              },
              {
                module: "Módulo 3",
                title: "Integração de Procedimentos",
                duration: "10 horas", 
                topics: ["Rinoplastia + Face lift", "Blefaroplastia integrada", "Harmonização completa"]
              },
              {
                module: "Módulo 4",
                title: "Gestão de Complicações",
                duration: "6 horas",
                topics: ["Prevenção de riscos", "Manejo de intercorrências", "Protocolos de segurança"]
              },
              {
                module: "Módulo 5",
                title: "Cases Clínicos Reais",
                duration: "15 horas",
                topics: ["50+ casos demonstrados", "Análise de resultados", "Discussão de técnicas"]
              },
              {
                module: "Módulo 6",
                title: "Mentoria Personalizada",
                duration: "20 horas",
                topics: ["Acompanhamento individual", "Review de casos próprios", "Certificação final"]
              }
            ].map((module, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {module.module}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
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

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que falam os cirurgiões que já dominam o método
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Ricardo Santos",
                location: "São Paulo, SP",
                result: "300% de aumento na demanda",
                quote: "O Face Nose Code revolucionou minha prática. Pacientes vêm de outros estados para meus procedimentos."
              },
              {
                name: "Dra. Marina Costa", 
                location: "Rio de Janeiro, RJ",
                result: "Honorários 4x maiores",
                quote: "Consegui me posicionar como especialista única. Meus procedimentos são reservados com 6 meses de antecedência."
              },
              {
                name: "Dr. Felipe Oliveira",
                location: "Belo Horizonte, MG", 
                result: "Reconhecimento internacional",
                quote: "Fui convidado para apresentar a técnica em congressos internacionais. Sou referência na região."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm font-medium text-blue-600 mt-1">{testimonial.result}</p>
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <div className="text-center">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-lg">
                INVESTIMENTO EXCLUSIVO
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Garanta Sua Transformação
              </h2>
              
              <div className="mb-8">
                <div className="text-lg text-gray-600 mb-2">De R$ 15.000 por</div>
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">R$ 10.000</div>
                <div className="text-gray-600">ou 12x de R$ 917 sem juros</div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Garantia Total</h4>
                    <p className="text-sm text-gray-600">30 dias de satisfação garantida</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Acesso Vitalício</h4>
                    <p className="text-sm text-gray-600">Conteúdo sempre atualizado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificação</h4>
                    <p className="text-sm text-gray-600">Reconhecimento internacional</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 rounded-xl text-xl font-semibold mb-4">
                Garantir Minha Vaga Agora
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <p className="text-sm text-gray-600">
                🔒 Pagamento 100% seguro • Últimas 3 vagas disponíveis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}