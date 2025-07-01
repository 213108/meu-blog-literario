import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Star, Clock, BookOpen, Search, Filter } from 'lucide-react'
import AdvancedSearch from '@/components/AdvancedSearch'

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', 'Ficção', 'Romance', 'Fantasia', 'Mistério', 'Desenvolvimento Pessoal', 'Clássicos']

  const reviews = [
    {
      id: 1,
      title: "O Nome do Vento",
      author: "Patrick Rothfuss",
      category: "Fantasia",
      rating: 5,
      readTime: "8 min",
      excerpt: "Uma obra-prima da fantasia épica que nos transporta para o mundo de Kvothe, um jovem com um destino extraordinário...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "15 de Janeiro, 2025"
    },
    {
      id: 2,
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      category: "Romance",
      rating: 4,
      readTime: "10 min",
      excerpt: "Um clássico atemporal que explora temas de amor, classe social e primeiras impressões na Inglaterra do século XIX...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "10 de Janeiro, 2025"
    },
    {
      id: 3,
      title: "Hábitos Atômicos",
      author: "James Clear",
      category: "Desenvolvimento Pessoal",
      rating: 5,
      readTime: "6 min",
      excerpt: "Um guia prático e científico para formar bons hábitos e quebrar os ruins, transformando pequenas mudanças em resultados extraordinários...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "5 de Janeiro, 2025"
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      category: "Clássicos",
      rating: 5,
      readTime: "12 min",
      excerpt: "Uma distopia assombrosamente atual que nos faz refletir sobre vigilância, controle e a natureza da verdade...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "28 de Dezembro, 2024"
    },
    {
      id: 5,
      title: "A Garota no Trem",
      author: "Paula Hawkins",
      category: "Mistério",
      rating: 4,
      readTime: "7 min",
      excerpt: "Um thriller psicológico envolvente que nos mantém em suspense até a última página...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "20 de Dezembro, 2024"
    },
    {
      id: 6,
      title: "Circe",
      author: "Madeline Miller",
      category: "Ficção",
      rating: 5,
      readTime: "9 min",
      excerpt: "Uma reimaginação brilhante da mitologia grega através dos olhos da feiticeira Circe...",
      coverImage: "/api/placeholder/200/300",
      publishDate: "15 de Dezembro, 2024"
    }
  ]

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || review.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Resenhas de Livros</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Análises honestas e apaixonadas dos livros que marcaram minha jornada literária
        </p>
      </div>

      {/* Advanced Search */}
      <div className="space-y-6">
        <AdvancedSearch 
          onSearch={(searchData) => {
            if (typeof searchData === 'string') {
              setSearchTerm(searchData)
            } else {
              setSearchTerm(searchData.query || '')
              // Aqui você pode implementar lógica para filtros avançados
              console.log('Busca avançada:', searchData)
            }
          }}
          placeholder="Buscar resenhas por título, autor ou gênero..."
        />
      </div>
       {/* Category Filters */}
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-500" />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{review.category}</Badge>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-gray-500" />
                  <span className="text-xs text-gray-500">{review.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-16 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                    {review.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">por {review.author}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="mb-3 line-clamp-3">
                {review.excerpt}
              </CardDescription>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{review.publishDate}</span>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Ler resenha completa
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No results */}
      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Nenhuma resenha encontrada</h3>
          <p className="text-gray-500">Tente ajustar sua busca ou filtros</p>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Tem uma sugestão de livro?</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Adoraria saber quais livros você gostaria que eu resenhasse! 
          Envie suas sugestões e quem sabe ela não aparece na próxima resenha.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Enviar Sugestão
        </Button>
      </div>
    </div>
  )
}

export default Reviews

