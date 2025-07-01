import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, PenTool, Heart, Coffee, Target, Calendar } from 'lucide-react'

const About = () => {
  const milestones = [
    {
      date: "Janeiro 2025",
      title: "Início da Jornada",
      description: "Comecei a escrever meu primeiro livro e criei este blog para documentar toda a experiência."
    },
    {
      date: "Fevereiro 2025",
      title: "Primeiros Capítulos",
      description: "Finalizei os três primeiros capítulos e recebi feedback inicial de beta readers."
    },
    {
      date: "Março 2025",
      title: "Revisão e Edição",
      description: "Processo intensivo de revisão e edição dos primeiros rascunhos."
    },
    {
      date: "Em breve...",
      title: "Lançamento",
      description: "Preparação para o lançamento autoral do meu primeiro livro!"
    }
  ]

  const interests = [
    "Literatura Contemporânea",
    "Ficção Científica",
    "Romance Histórico",
    "Poesia",
    "Desenvolvimento Pessoal",
    "Escrita Criativa"
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Sobre a Autora</h1>
        <p className="text-xl text-slate-600">
          Conheça a pessoa por trás das palavras e acompanhe minha jornada literária
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                Minha História
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                Olá! Sou uma escritora iniciante apaixonada por literatura e storytelling. 
                Sempre fui uma leitora voraz, mas foi apenas recentemente que decidi dar o 
                salto e começar a escrever minha própria história.
              </p>
              <p className="text-slate-700">
                Este blog nasceu da vontade de compartilhar minha jornada como autora estreante, 
                desde os primeiros rascunhos até o lançamento do meu primeiro livro. Aqui, 
                você encontrará não apenas o processo criativo, mas também resenhas honestas, 
                dicas de leitura e muito amor pela literatura.
              </p>
              <p className="text-slate-700">
                Acredito que a literatura tem o poder de transformar vidas, conectar pessoas 
                e criar pontes entre diferentes mundos. Meu objetivo é criar uma comunidade 
                acolhedora para todos os amantes dos livros, sejam leitores iniciantes ou 
                veteranos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coffee className="h-5 w-5 text-amber-600 mr-2" />
                Fatos Rápidos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm">Leitora desde os 8 anos</span>
              </div>
              <div className="flex items-center">
                <PenTool className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Escritora desde 2025</span>
              </div>
              <div className="flex items-center">
                <Target className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm">Meta: 50 livros/ano</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm">Gênero favorito: Ficção</span>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Interesses Literários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Writing Journey Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
            Linha do Tempo da Minha Jornada
          </CardTitle>
          <CardDescription>
            Acompanhe os marcos importantes do meu processo de escrita e publicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-blue-200 ml-1 mt-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-slate-800">{milestone.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {milestone.date}
                    </Badge>
                  </div>
                  <p className="text-slate-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-center">Minha Missão</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-center text-lg italic text-slate-700">
            "Criar uma ponte entre leitores e escritores, compartilhando a magia da literatura 
            e inspirando outros a descobrirem o poder transformador das palavras."
          </blockquote>
        </CardContent>
      </Card>

      {/* Contact CTA */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-12 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Vamos Conversar!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Adoraria ouvir sua opinião, sugestões de livros ou simplesmente bater um papo 
          sobre literatura. Entre em contato!
        </p>
        <a 
          href="/contato" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Entre em Contato
        </a>
      </div>
    </div>
  )
}

export default About

