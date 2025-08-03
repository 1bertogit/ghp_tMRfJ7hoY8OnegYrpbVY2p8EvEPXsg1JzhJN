import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Award, Star, ArrowRight, Phone, Calendar, MapPin, Crown, Shield } from 'lucide-react'

export default function ClinicalFellowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 px-6 py-3 text-lg font-semibold">
              <Crown className="w-5 h-5 mr-2" />
              PROGRAMA EXCLUSIVO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Fellow</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              A experiência mais exclusiva do mundo: <strong>treinamento presencial hands-on</strong> 
              no consultório do Dr. Alexandre com <strong>pacientes reais</strong>
            </p>

            {/* Exclusivity Highlight */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
              <h2 className="text-2xl font-semibold mb-4">
                🏆 Limitado a Apenas 6 Cirurgiões Por Ano
              </h2>
              <p className="opacity-90 mb-6">
                Seleção rigorosa para garantir mentoria individualizada e resultados excepcionais
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">60h</div>
                  <div className="text-sm opacity-80">Presenciais Hands-On</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">30+</div>
                  <div className="text-sm opacity-80">Pacientes Reais</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">1:1</div>
                  <div className="text-sm opacity-80">Mentoria Exclusiva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Torna Este Programa Único
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muito além de um curso: uma transformação completa acompanhada pelo mestre
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cirurgias Reais com Pacientes</h3>
                  <p className="text-gray-600">
                    Acompanhe o Dr. Alexandre em 30+ procedimentos reais, desde a consulta inicial até o pós-operatório. 
                    Participe ativamente de cada etapa do processo.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentoria Personalizada</h3>
                  <p className="text-gray-600">
                    Receba feedback direto e personalizado do Dr. Alexandre sobre sua técnica, 
                    decisões cirúrgicas e desenvolvimento profissional.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acesso Total ao Método</h3>
                  <p className="text-gray-600">
                    Aprenda todos os segredos do Face Nose Code na prática, 
                    incluindo nuances que só podem ser transmitidas pessoalmente.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Imersão Completa</h3>
                  <p className="text-gray-600">
                    Uma semana intensiva no consultório premium do Dr. Alexandre, 
                    com acomodação em hotel 5 estrelas e traslados inclusos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acompanhamento Contínuo</h3>
                  <p className="text-gray-600">
                    6 meses de mentoria online exclusiva após o programa presencial, 
                    com revisão dos seus primeiros casos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificação Máxima</h3>
                  <p className="text-gray-600">
                    Certificado de Fellow reconhecido internacionalmente, 
                    estabelecendo você como especialista certificado no método.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estrutura do Programa
            </h2>
            <p className="text-xl text-gray-600">
              7 dias que transformarão sua carreira para sempre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                day: "Dias 1-2",
                title: "Imersão Teórica",
                activities: ["Revisão completa do método", "Análise de casos complexos", "Planejamento cirúrgico avançado"]
              },
              {
                day: "Dias 3-4",
                title: "Observação Ativa",
                activities: ["10 cirurgias observadas", "Participação em consultas", "Análise pré-operatória"]
              },
              {
                day: "Dias 5-6",
                title: "Hands-On Supervisionado",
                activities: ["5 cirurgias assistidas", "Execução supervisionada", "Feedback em tempo real"]
              },
              {
                day: "Dia 7",
                title: "Masterclass Exclusiva",
                activities: ["Casos mais complexos", "Discussão de complicações", "Certificação final"]
              }
            ].map((module, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Badge variant="outline" className="text-purple-600 border-purple-600 w-fit mb-2">
                    {module.day}
                  </Badge>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Critérios de Seleção
            </h2>
            <p className="text-xl text-gray-600">
              Este programa é destinado apenas aos profissionais mais comprometidos
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Requisitos Obrigatórios</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">CRM ativo em cirurgia plástica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Mínimo 3 anos de experiência</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Consultório próprio estruturado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Dedicação integral ao programa</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Perfil Ideal</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Visão de longo prazo</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Comprometimento com excelência</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Interesse em inovação</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Ambição de liderança</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Application */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 px-6 py-3 text-lg font-semibold">
              INVESTIMENTO EXCLUSIVO
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformação Sem Precedentes
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Um investimento na sua excelência profissional que se paga nos primeiros meses
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Opção Standard</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 30.000</div>
                  <div className="text-sm opacity-80">ou 12x de R$ 2.750</div>
                  <div className="mt-4 text-sm opacity-90">Programa completo + hospedagem</div>
                </div>
                
                <div className="border-l border-white/20 pl-8">
                  <h3 className="text-lg font-semibold mb-4">Opção Premium</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">R$ 50.000</div>
                  <div className="text-sm opacity-80">ou 12x de R$ 4.583</div>
                  <div className="mt-4 text-sm opacity-90">+ 1 ano de mentoria continuada</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 text-left">
                <h4 className="font-semibold mb-4">✅ Incluído no investimento:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div>• 60h de treinamento presencial</div>
                    <div>• Hospedagem 5 estrelas (7 noites)</div>
                    <div>• Todas as refeições inclusas</div>
                    <div>• Material didático exclusivo</div>
                  </div>
                  <div className="space-y-2">
                    <div>• Traslados aeroporto/hotel/clínica</div>
                    <div>• Certificação Internacional</div>
                    <div>• Acesso ao grupo VIP de Fellows</div>
                    <div>• Suporte técnico por 6 meses</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-yellow-900 px-12 py-6 rounded-xl text-xl font-semibold">
                  <Phone className="w-6 h-6 mr-3" />
                  Agendar Entrevista de Seleção
                </Button>
                
                <p className="text-sm opacity-80">
                  📞 Processo seletivo por videochamada • Vagas limitadíssimas
                </p>

                <div className="mt-8 p-4 bg-red-500/20 rounded-xl border border-red-400/30">
                  <p className="text-sm font-medium">
                    ⚠️ ATENÇÃO: Apenas 2 vagas disponíveis para 2024 • Próxima turma apenas em 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Previous Fellows */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Fellows
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos exclusivos dos 12 cirurgiões já certificados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Eduardo Martins",
                location: "São Paulo, SP",
                fellowship: "Fellow 2023",
                result: "ROI de 800% no primeiro ano",
                quote: "Nunca imaginei que existisse um nível tão avançado de cirurgia plástica. O Clinical Fellow me transformou no especialista que sempre quis ser. Meus resultados são incomparáveis.",
                avatar: "EM"
              },
              {
                name: "Dra. Patricia Mendonça", 
                location: "Miami, FL",
                fellowship: "Fellow 2022",
                result: "Consultório internacional",
                quote: "Graças ao programa, abri meu consultório em Miami e me tornei referência para brasileiros nos EUA. A credibilidade do certificado Dr. Alexandre abriu todas as portas.",
                avatar: "PM"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {testimonial.fellowship}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-sm font-medium text-purple-600 mt-1">{testimonial.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}