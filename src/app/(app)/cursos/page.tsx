import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Users, BookOpen, ArrowRight, Star, Award, Target } from 'lucide-react'

export default function CursosPage() {
  const courses = [
    {
      id: 'rinoplastia-avancada',
      title: 'Rinoplastia Avançada',
      category: 'Nariz',
      duration: '15 horas',
      level: 'Intermediário',
      description: 'Técnicas avançadas de rinoplastia com foco em resultados naturais e funcionais',
      topics: ['Análise estética completa', 'Técnicas de preservação', 'Rinoplastia étnica', 'Casos complexos'],
      price: 'R$ 1.997'
    },
    {
      id: 'lifting-facial-moderno',
      title: 'Lifting Facial Moderno',
      category: 'Face',
      duration: '18 horas',
      level: 'Avançado',
      description: 'Métodos contemporâneos de rejuvenescimento facial com mínima invasividade',
      topics: ['SMAS profundo', 'Mini lifting', 'Lifting temporal', 'Recuperação acelerada'],
      price: 'R$ 1.997'
    },
    {
      id: 'blefaroplastia-especializada',
      title: 'Blefaroplastia Especializada',
      category: 'Olhos',
      duration: '12 horas',
      level: 'Intermediário',
      description: 'Especialização em cirurgia das pálpebras com técnicas inovadoras',
      topics: ['Blefaroplastia superior', 'Blefaroplastia inferior', 'Cantoplastia', 'Tratamento de bolsas'],
      price: 'R$ 1.997'
    },
    {
      id: 'harmonizacao-orofacial',
      title: 'Harmonização Orofacial',
      category: 'Estética',
      duration: '20 horas',
      level: 'Iniciante',
      description: 'Técnicas não-cirúrgicas para harmonização facial completa',
      topics: ['Preenchimento labial', 'Toxina botulínica', 'Fios de sustentação', 'Bioestimuladores'],
      price: 'R$ 1.997'
    },
    {
      id: 'otoplastia-masterclass',
      title: 'Otoplastia Masterclass',
      category: 'Orelhas',
      duration: '10 horas',
      level: 'Intermediário',
      description: 'Correção de orelhas de abano e outras deformidades auriculares',
      topics: ['Técnica de Mustardé', 'Técnica de Furnas', 'Casos pediátricos', 'Complicações'],
      price: 'R$ 1.997'
    },
    {
      id: 'cirurgia-mentoplastia',
      title: 'Cirurgia de Mentoplastia',
      category: 'Mento',
      duration: '8 horas',
      level: 'Intermediário',
      description: 'Técnicas de aumento e redução do mento para harmonia facial',
      topics: ['Implantes de mento', 'Osteotomias', 'Planejamento 3D', 'Resultados naturais'],
      price: 'R$ 1.997'
    },
    {
      id: 'lipoenxertia-facial',
      title: 'Lipoenxertia Facial',
      category: 'Preenchimento',
      duration: '16 horas',
      level: 'Avançado',
      description: 'Uso de gordura autóloga para rejuvenescimento e volumização facial',
      topics: ['Coleta de gordura', 'Processamento celular', 'Técnicas de injeção', 'Sobrevivência do enxerto'],
      price: 'R$ 1.997'
    },
    {
      id: 'cirurgia-frontal',
      title: 'Cirurgia da Região Frontal',
      category: 'Testa',
      duration: '14 horas',
      level: 'Avançado',
      description: 'Lifting de sobrancelhas e correção de rugas frontais',
      topics: ['Lifting endoscópico', 'Incisões minimamente invasivas', 'Preservação neural', 'Resultados duradouros'],
      price: 'R$ 1.997'
    },
    {
      id: 'reconstrucao-pos-trauma',
      title: 'Reconstrução Pós-Trauma',
      category: 'Reconstrutiva',
      duration: '22 horas',
      level: 'Experiente',
      description: 'Técnicas avançadas de reconstrução facial após traumas',
      topics: ['Fraturas complexas', 'Reconstrução de tecidos moles', 'Planejamento cirúrgico', 'Reabilitação'],
      price: 'R$ 1.997'
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Iniciante': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Avançado': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'Experiente': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              9 ESPECIALIZAÇÕES ÚNICAS
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cursos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Individuais</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Aprenda técnicas específicas de acordo com sua <strong>necessidade e nível</strong> de experiência. 
              Cada curso é uma <strong>especialização completa</strong> em sua área.
            </p>

            {/* Learning Path Guide */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 Como Escolher Seu Curso?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Identifique Sua Demanda</h4>
                    <p className="text-sm text-gray-600">Qual procedimento seus pacientes mais solicitam?</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Avalie Seu Nível</h4>
                    <p className="text-sm text-gray-600">Escolha cursos compatíveis com sua experiência</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comece a Aplicar</h4>
                    <p className="text-sm text-gray-600">Resultados imediatos na sua prática</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especializações Disponíveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada curso é uma formação completa com certificação reconhecida
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getLevelColor(course.level)} border text-xs`}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs text-purple-600 border-purple-600">
                      {course.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-gray-900 mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">O que você vai aprender:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-purple-600">{course.price}</div>
                      <div className="text-sm text-gray-500">ou 12x sem juros</div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      Mais Detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
            <div className="text-center">
              <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 text-lg">
                <Target className="w-5 h-5 mr-2" />
                OFERTA ESPECIAL
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kit Completo de Especializações
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Adquira todos os 9 cursos com <strong>desconto progressivo</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">3 Cursos</h3>
                  <div className="text-sm text-gray-600 mb-2">De R$ 5.991 por</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">R$ 4.497</div>
                  <div className="text-xs text-green-600">25% de desconto</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-purple-600 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    MAIS POPULAR
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 mt-2">6 Cursos</h3>
                  <div className="text-sm text-gray-600 mb-2">De R$ 11.982 por</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">R$ 7.997</div>
                  <div className="text-xs text-green-600">33% de desconto</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Todos (9)</h3>
                  <div className="text-sm text-gray-600 mb-2">De R$ 17.973 por</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">R$ 9.997</div>
                  <div className="text-xs text-green-600">44% de desconto</div>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-xl text-xl font-semibold">
                  Ver Detalhes dos Pacotes
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                
                <p className="text-sm text-gray-600">
                  ✅ Acesso vitalício • ✅ Certificados individuais • ✅ Suporte técnico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Main Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qual Caminho Escolher?
            </h2>
            <p className="text-xl text-gray-600">
              Compare as opções e encontre o melhor para seu momento profissional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Courses */}
            <Card className="border-2 border-purple-600 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <Badge className="bg-purple-600 text-white w-fit mx-auto mb-2">ESPECIALIZAÇÃO</Badge>
                <CardTitle className="text-xl">Cursos Individuais</CardTitle>
                <div className="text-3xl font-bold text-purple-600">R$ 1.997</div>
                <CardDescription>cada curso</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Foco em técnica específica
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Aplicação imediata
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Investimento menor
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Ideal para demandas específicas
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600">
                  Escolher Curso
                </Button>
              </CardContent>
            </Card>

            {/* Face Nose Essentials */}
            <Card className="border-2 border-gray-400 shadow-xl bg-white">
              <CardHeader className="text-center">
                <Badge variant="outline" className="border-gray-400 text-gray-600 w-fit mx-auto mb-2">PREPARATÓRIO</Badge>
                <CardTitle className="text-xl">Face Nose Essentials</CardTitle>
                <div className="text-3xl font-bold text-gray-600">R$ 3.997</div>
                <CardDescription>base fundamental</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Base sólida completa
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    3 procedimentos integrados
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Preparação para Face Nose Code
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Ideal para iniciantes
                  </li>
                </ul>
                <Link href="/face-nose-essentials">
                  <Button variant="outline" className="w-full border-gray-600 text-gray-600">
                    Saber Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Face Nose Code */}
            <Card className="border-2 border-blue-600 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center">
                <Badge className="bg-blue-600 text-white w-fit mx-auto mb-2">FLAGSHIP</Badge>
                <CardTitle className="text-xl">Face Nose Code</CardTitle>
                <div className="text-3xl font-bold text-blue-600">R$ 10.000</div>
                <CardDescription>método completo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Método revolucionário completo
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    6-8 procedimentos integrados
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Mentoria personalizada
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Transformação total da prática
                  </li>
                </ul>
                <Link href="/face-nose-code">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}