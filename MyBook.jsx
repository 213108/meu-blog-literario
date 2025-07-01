import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  PenTool, 
  Calendar, 
  Target, 
  Heart, 
  Users,
  Star,
  Clock,
  CheckCircle,
  Edit,
  Eye,
  Rocket
} from 'lucide-react'

const MyBook = () => {
  const bookProgress = 75 // Percentage of completion

  const milestones = [
    {
      phase: "Planejamento",
      status: "completed",
      date: "Janeiro 2025",
      description: "Desenvolvimento da ideia, criação de personagens e estrutura da história",
      icon: <Target className="h-5 w-5" />
    },
    {
      phase: "Primeiro Rascunho",
      status: "completed", 
      date: "Fevereiro 2025",
      description: "Escrita dos primeiros capítulos e desenvolvimento da narrativa",
      icon: <PenTool className="h-5 w-5" />
    },
    {
      phase: "Revisão e Edição",
      status: "in-progress",
      date: "Março 2025",
      description: "Processo de revisão, edição e aprimoramento do texto",
      icon: <Edit className="h-5 w-5" />
    },
    {
      phase: "Beta Readers",
      status: "upcoming",
      date: "Abril 2025",
      description: "Feedback de leitores beta e ajustes finais na história",
      icon: <Eye className="h-5 w-5" />
    },
    {
      phase: "Publicação",
      status: "upcoming",
      date: "Maio 2025",
      description: "Lançamento oficial do livro e início da divulgação",
      icon: <Rocket className="h-5 w-5" />
    }
  ]

  const bookDetails = {
    title: "Entre Páginas e Sonhos",
    genre: "Ficção Contemporânea",
    targetPages: 280,
    currentPages: 210,
    synopsis: "Uma história sobre descoberta, coragem e o poder transformador da literatura. Acompanhe Maya, uma jovem bibliotecária que descobre um manuscrito misterioso que mudará sua vida para sempre.",
    themes: ["Autodescoberta", "Literatura", "Amizade", "Superação", "Mistério"]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'upcoming': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-600" />
      case 'upcoming': return <Calendar className="h-4 w-4 text-gray-600" />
      default: return <Calendar className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Meu Primeiro Livro</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Acompanhe a jornada completa da criação do meu primeiro livro, desde a ideia inicial 
          até o lançamento oficial
        </p>
      </div>

      {/* Book Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{bookDetails.title}</CardTitle>
                  <Badge variant="secondary">{bookDetails.genre}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Sinopse</h3>
                <p className="text-slate-700">{bookDetails.synopsis}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Temas Abordados</h3>
                <div className="flex flex-wrap gap-2">
                  {bookDetails.themes.map((theme, index) => (
                    <Badge key={index} variant="outline">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <PenTool className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{bookDetails.currentPages}</div>
                  <div className="text-sm text-slate-600">Páginas escritas</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{bookDetails.targetPages}</div>
                  <div className="text-sm text-slate-600">Meta de páginas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Progresso Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Conclusão</span>
                    <span>{bookProgress}%</span>
                  </div>
                  <Progress value={bookProgress} className="h-2" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{bookProgress}%</div>
                  <div className="text-sm text-slate-600">do livro concluído</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Capítulos:</span>
                <span className="font-semibold">18 de 24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Palavras:</span>
                <span className="font-semibold">~52,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tempo de escrita:</span>
                <span className="font-semibold">3 meses</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Revisões:</span>
                <span className="font-semibold">2ª versão</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            Cronograma de Desenvolvimento
          </CardTitle>
          <CardDescription>
            Acompanhe cada fase do processo de criação e publicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.status === 'completed' ? 'bg-green-100' :
                    milestone.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      milestone.icon
                    )}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-200 ml-5 mt-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-slate-800">{milestone.phase}</h3>
                    <Badge className={getStatusColor(milestone.status)}>
                      {milestone.status === 'completed' ? 'Concluído' :
                       milestone.status === 'in-progress' ? 'Em andamento' : 'Próximo'}
                    </Badge>
                  </div>
                  <p className="text-slate-600 text-sm mb-1">{milestone.description}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    {getStatusIcon(milestone.status)}
                    <span>{milestone.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Behind the Scenes */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            Bastidores da Criação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Inspirações</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Minha própria experiência como leitora apaixonada</li>
                <li>• Conversas com outros escritores iniciantes</li>
                <li>• A magia dos livros que mudaram minha vida</li>
                <li>• Histórias reais de superação e descoberta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Desafios</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Encontrar tempo para escrever na rotina</li>
                <li>• Superar o bloqueio criativo</li>
                <li>• Manter a consistência dos personagens</li>
                <li>• Equilibrar trabalho e paixão pela escrita</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beta Readers CTA */}
      <Card className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <CardHeader>
          <CardTitle className="text-center">Quer ser um Beta Reader?</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 max-w-2xl mx-auto">
            Em breve, estarei procurando leitores beta para dar feedback sobre o livro. 
            Se você tem interesse em ler uma prévia e ajudar no processo criativo, 
            inscreva-se na lista de espera!
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            <Users className="h-4 w-4 mr-2" />
            Quero ser Beta Reader
          </Button>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Seja o primeiro a saber do lançamento!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Inscreva-se na newsletter e receba atualizações exclusivas sobre o progresso do livro, 
          trechos inéditos e seja notificado assim que estiver disponível para compra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button className="bg-white text-orange-600 hover:bg-gray-100">
            Inscrever-se
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MyBook

