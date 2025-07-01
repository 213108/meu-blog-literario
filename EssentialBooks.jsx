import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Star, Quote, Heart, Users, Brain, Sparkles } from 'lucide-react'

const EssentialBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', 'Clássicos', 'Desenvolvimento Pessoal', 'Literatura Brasileira', 'Ficção Moderna']

  const essentialBooks = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      category: "Clássicos",
      icon: <Brain className="h-6 w-6" />,
      reason: "Essencial para compreender os perigos do totalitarismo e a importância da liberdade de pensamento",
      description: "Uma distopia que permanece assustadoramente relevante, explorando temas de vigilância, controle mental e a natureza da verdade.",
      quote: "A liberdade é a liberdade de dizer que dois mais dois são quatro.",
      impact: "Crítica Social",
      difficulty: "Intermediário"
    },
    {
      id: 2,
      title: "O Pequeno Príncipe",
      author: "Antoine de Saint-Exupéry",
      category: "Clássicos",
      icon: <Heart className="h-6 w-6" />,
      reason: "Uma obra que nos ensina sobre amor, amizade e a importância de preservar a criança interior",
      description: "Uma fábula poética que toca o coração de leitores de todas as idades com suas lições sobre vida e relacionamentos.",
      quote: "Só se vê bem com o coração. O essencial é invisível aos olhos.",
      impact: "Filosofia de Vida",
      difficulty: "Fácil"
    },
    {
      id: 3,
      title: "Hábitos Atômicos",
      author: "James Clear",
      category: "Desenvolvimento Pessoal",
      icon: <Sparkles className="h-6 w-6" />,
      reason: "Transforma a maneira como pensamos sobre mudança e crescimento pessoal",
      description: "Um guia prático baseado em ciência para formar bons hábitos e quebrar os ruins através de pequenas mudanças.",
      quote: "Você não se eleva ao nível de seus objetivos. Você cai ao nível de seus sistemas.",
      impact: "Produtividade",
      difficulty: "Fácil"
    },
    {
      id: 4,
      title: "Dom Casmurro",
      author: "Machado de Assis",
      category: "Literatura Brasileira",
      icon: <Users className="h-6 w-6" />,
      reason: "Obra-prima da literatura brasileira que explora a psicologia humana com maestria",
      description: "Um romance que questiona a natureza da verdade e da memória através da narrativa de Bentinho.",
      quote: "O resto é saber se a Capitu da praia da Glória já estava dentro da de Mata-cavalos.",
      impact: "Psicologia Humana",
      difficulty: "Intermediário"
    },
    {
      id: 5,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Desenvolvimento Pessoal",
      icon: <Brain className="h-6 w-6" />,
      reason: "Oferece uma perspectiva fascinante sobre a história da humanidade e nosso futuro",
      description: "Uma jornada através da história humana, desde os primórdios até os desafios do século XXI.",
      quote: "A cultura tende a argumentar que proíbe apenas o que é antinatural. Mas do ponto de vista biológico, nada é antinatural.",
      impact: "Conhecimento Histórico",
      difficulty: "Intermediário"
    },
    {
      id: 6,
      title: "Cem Anos de Solidão",
      author: "Gabriel García Márquez",
      category: "Ficção Moderna",
      icon: <Sparkles className="h-6 w-6" />,
      reason: "Introduz o realismo mágico e conta a história da América Latina de forma única",
      description: "A saga da família Buendía em Macondo, misturando realidade e fantasia de forma magistral.",
      quote: "Era inevitável: o cheiro das amêndoas amargas lhe recordava sempre o destino dos amores contrariados.",
      impact: "Imaginação Literária",
      difficulty: "Avançado"
    }
  ]

  const filteredBooks = selectedCategory === 'Todos' 
    ? essentialBooks 
    : essentialBooks.filter(book => book.category === selectedCategory)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Livros Essenciais</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Uma curadoria especial de livros que considero fundamentais para qualquer pessoa que deseja 
          expandir seus horizontes e enriquecer sua jornada literária
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {book.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{book.title}</CardTitle>
                    <p className="text-gray-600">por {book.author}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="secondary">{book.category}</Badge>
                  <Badge className={getDifficultyColor(book.difficulty)}>
                    {book.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Por que é essencial:</h4>
                <p className="text-slate-600 text-sm">{book.reason}</p>
              </div>
              
              <CardDescription>{book.description}</CardDescription>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <Quote className="h-4 w-4 text-blue-600 mb-2" />
                <blockquote className="text-sm italic text-slate-700">
                  "{book.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-slate-700">{book.impact}</span>
                </div>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Onde encontrar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reading Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-center">Dicas para Aproveitar ao Máximo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Leia com Propósito</h3>
              <p className="text-sm text-slate-600">
                Antes de começar, reflita sobre o que você espera aprender ou sentir com a leitura
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Faça Conexões</h3>
              <p className="text-sm text-slate-600">
                Relacione o que está lendo com suas experiências pessoais e outros livros
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Compartilhe</h3>
              <p className="text-sm text-slate-600">
                Discuta suas impressões com outros leitores ou escreva sobre suas reflexões
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Qual livro você sugere?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Esta lista está sempre crescendo! Compartilhe comigo quais livros você considera 
          essenciais e por quê. Sua sugestão pode aparecer na próxima atualização.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          Enviar Sugestão
        </Button>
      </div>
    </div>
  )
}

export default EssentialBooks

