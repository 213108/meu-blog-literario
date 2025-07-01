import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Clock, 
  Target, 
  Brain, 
  Eye, 
  PenTool, 
  Lightbulb, 
  CheckCircle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'

const ReadingTechniques = () => {
  const [activeTimer, setActiveTimer] = useState(null)
  const [timerMinutes, setTimerMinutes] = useState(25)

  const techniques = [
    {
      id: 1,
      title: "Leitura Ativa",
      icon: <Brain className="h-6 w-6" />,
      difficulty: "Iniciante",
      time: "Qualquer duração",
      description: "Técnica que envolve interação constante com o texto através de perguntas, anotações e reflexões.",
      benefits: ["Melhor compreensão", "Maior retenção", "Pensamento crítico"],
      steps: [
        "Defina um objetivo antes de começar a ler",
        "Faça perguntas sobre o conteúdo",
        "Anote pontos importantes e suas reflexões",
        "Conecte com conhecimentos prévios",
        "Resuma o que aprendeu ao final"
      ]
    },
    {
      id: 2,
      title: "Leitura Dinâmica",
      icon: <Eye className="h-6 w-6" />,
      difficulty: "Intermediário",
      time: "15-30 min de prática",
      description: "Conjunto de técnicas para aumentar a velocidade de leitura mantendo a compreensão.",
      benefits: ["Velocidade aumentada", "Menos fadiga", "Mais livros lidos"],
      steps: [
        "Elimine a subvocalização (não 'fale' as palavras mentalmente)",
        "Use um guia visual (dedo ou caneta)",
        "Leia grupos de palavras, não palavra por palavra",
        "Evite regredir (voltar a trechos já lidos)",
        "Pratique exercícios de expansão visual"
      ]
    },
    {
      id: 3,
      title: "Método SQ3R",
      icon: <Target className="h-6 w-6" />,
      difficulty: "Intermediário",
      time: "Varia conforme o texto",
      description: "Survey, Question, Read, Recite, Review - método estruturado para leitura acadêmica.",
      benefits: ["Organização", "Melhor memorização", "Estudo eficiente"],
      steps: [
        "Survey: Examine rapidamente o texto (títulos, subtítulos)",
        "Question: Formule perguntas sobre o conteúdo",
        "Read: Leia ativamente buscando respostas",
        "Recite: Recite ou escreva o que aprendeu",
        "Review: Revise e consolide o conhecimento"
      ]
    },
    {
      id: 4,
      title: "Técnica Pomodoro para Leitura",
      icon: <Clock className="h-6 w-6" />,
      difficulty: "Iniciante",
      time: "25 min + 5 min pausa",
      description: "Adaptação da técnica Pomodoro para sessões de leitura focada e produtiva.",
      benefits: ["Foco intenso", "Menos procrastinação", "Pausas regulares"],
      steps: [
        "Configure um timer para 25 minutos",
        "Leia com foco total, sem distrações",
        "Faça uma pausa de 5 minutos",
        "Repita o ciclo 3-4 vezes",
        "Faça uma pausa longa (15-30 min) após 4 ciclos"
      ]
    }
  ]

  const tips = [
    {
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
      title: "Ambiente Ideal",
      description: "Escolha um local bem iluminado, confortável e livre de distrações"
    },
    {
      icon: <PenTool className="h-5 w-5 text-blue-500" />,
      title: "Ferramentas Úteis",
      description: "Tenha sempre papel, caneta e marcadores de texto à disposição"
    },
    {
      icon: <Clock className="h-5 w-5 text-green-500" />,
      title: "Horário Consistente",
      description: "Estabeleça um horário fixo para leitura, mesmo que sejam poucos minutos"
    },
    {
      icon: <Target className="h-5 w-5 text-purple-500" />,
      title: "Metas Realistas",
      description: "Defina objetivos alcançáveis: páginas por dia ou livros por mês"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Técnicas de Leitura</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Descubra métodos comprovados para ler mais rápido, compreender melhor e 
          aproveitar ao máximo cada página que você vira
        </p>
      </div>

      {/* Techniques Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {techniques.map((technique) => (
          <Card key={technique.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {technique.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{technique.title}</CardTitle>
                    <p className="text-sm text-gray-500">{technique.time}</p>
                  </div>
                </div>
                <Badge className={getDifficultyColor(technique.difficulty)}>
                  {technique.difficulty}
                </Badge>
              </div>
              <CardDescription>{technique.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Benefícios:</h4>
                <div className="flex flex-wrap gap-2">
                  {technique.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Como aplicar:</h4>
                <ul className="space-y-2">
                  {technique.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Começar a praticar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pomodoro Timer */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Clock className="h-6 w-6 text-blue-600" />
            Timer de Leitura Focada
          </CardTitle>
          <CardDescription className="text-center">
            Use este timer para praticar a técnica Pomodoro durante suas sessões de leitura
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-blue-600">
              {String(timerMinutes).padStart(2, '0')}:00
            </div>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => setTimerMinutes(15)}
                variant={timerMinutes === 15 ? "default" : "outline"}
                size="sm"
              >
                15 min
              </Button>
              <Button 
                onClick={() => setTimerMinutes(25)}
                variant={timerMinutes === 25 ? "default" : "outline"}
                size="sm"
              >
                25 min
              </Button>
              <Button 
                onClick={() => setTimerMinutes(45)}
                variant={timerMinutes === 45 ? "default" : "outline"}
                size="sm"
              >
                45 min
              </Button>
            </div>
            <div className="flex justify-center gap-2">
              <Button className="bg-green-600 hover:bg-green-700">
                <Play className="h-4 w-4 mr-2" />
                Iniciar
              </Button>
              <Button variant="outline">
                <Pause className="h-4 w-4 mr-2" />
                Pausar
              </Button>
              <Button variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reiniciar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle>Dicas Extras para Potencializar sua Leitura</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{tip.title}</h3>
                  <p className="text-sm text-slate-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Tracking */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-center">Acompanhe seu Progresso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-slate-600">
              Que tal criar um diário de leitura para acompanhar sua evolução? 
              Anote quantas páginas leu, qual técnica usou e como se sentiu.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <PenTool className="h-4 w-4 mr-2" />
              Baixar Template de Diário
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Qual técnica funcionou melhor para você?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Compartilhe sua experiência com essas técnicas! Sua história pode inspirar 
          outros leitores a descobrirem novos métodos de leitura.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          Compartilhar Experiência
        </Button>
      </div>
    </div>
  )
}

export default ReadingTechniques

