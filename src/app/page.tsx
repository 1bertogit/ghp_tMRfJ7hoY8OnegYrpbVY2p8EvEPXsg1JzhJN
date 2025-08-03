import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, Users, Award, PlayCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Autoridade Mundial em Pan Rejuvenescimento
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Dr. Alexandre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Calandrini</span> Academy
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Decodifique o <strong>código secreto</strong> do Pan Rejuvenescimento que apenas <strong>menos de 1%</strong> dos cirurgiões plásticos dominam
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-12 border border-gray-200 shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Método Único: 6-8 Procedimentos em Apenas 7 Horas
              </h2>
              <p className="text-gray-600 mb-6">
                Transforme completamente a face dos seus pacientes com a técnica revolucionária de Pan Rejuvenescimento integrado
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Assistir Apresentação Exclusiva
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Conhecer os Cursos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Positioning */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Dr. Alexandre é Reconhecido Mundialmente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma trajetória única que revolucionou o Pan Rejuvenescimento facial
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>15+ Anos de Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mais de 10.000 procedimentos realizados com a técnica exclusiva de Pan Rejuvenescimento
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Método Exclusivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Criador da técnica Face Nose Code - o único método que integra 6-8 procedimentos em uma única sessão
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Resultados Comprovados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  98% de satisfação dos pacientes e reconhecimento internacional pela inovação em rejuvenescimento facial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Hierarchy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Caminhos de Aprendizado Para Todos os Níveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde o iniciante até o especialista, temos o programa ideal para sua evolução
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Face Nose Code - Flagship */}
            <Card className="border-2 border-blue-600 shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  FLAGSHIP
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-blue-900">Face Nose Code</CardTitle>
                <CardDescription className="text-lg">
                  O método completo de Pan Rejuvenescimento integrado
                </CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  R$ 10.000
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Técnica completa de 6-8 procedimentos integrados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Protocolo exclusivo Face Nose Code</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Mentoria direta com Dr. Alexandre</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Certificação internacional</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold">
                  Garantir Minha Vaga
                </Button>
              </CardContent>
            </Card>
            
            {/* Face Nose Essentials */}
            <Card className="border-2 border-gray-300 shadow-xl bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="border-gray-400 text-gray-600">
                  PREPARATÓRIO
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900">Face Nose Essentials</CardTitle>
                <CardDescription className="text-lg">
                  Fundamentos essenciais do Pan Rejuvenescimento
                </CardDescription>
                <div className="text-4xl font-bold text-gray-700 mt-4">
                  R$ 3.997
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Base teórica do Pan Rejuvenescimento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>3 procedimentos principais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Material didático completo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Acesso por 1 ano</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-2 border-gray-600 text-gray-600 hover:bg-gray-50 py-4 rounded-xl text-lg font-semibold">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Individual Courses & Clinical Fellow */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Cursos Individuais</CardTitle>
                <CardDescription>
                  9 especializações específicas
                </CardDescription>
                <div className="text-2xl font-bold text-gray-700">
                  R$ 1.997 <span className="text-sm font-normal">cada</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Aprenda técnicas específicas de acordo com sua necessidade e interesse
                </p>
                <Button variant="outline" className="w-full">
                  Ver Todos os Cursos
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-600 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-fit mb-2">
                  PREMIUM
                </Badge>
                <CardTitle className="text-xl text-purple-900">Clinical Fellow</CardTitle>
                <CardDescription>
                  Programa de imersão presencial
                </CardDescription>
                <div className="text-2xl font-bold text-purple-600">
                  R$ 30.000 - R$ 50.000
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Treinamento hands-on no consultório do Dr. Alexandre com pacientes reais
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Transformando Carreiras Pelo Mundo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.500+</div>
              <div className="text-gray-600">Cirurgiões Treinados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Países Alcançados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-xl text-lg font-semibold">
            <PlayCircle className="w-6 h-6 mr-3" />
            Assistir Depoimentos Exclusivos
          </Button>
        </div>
      </section>
    </div>
  )
}
