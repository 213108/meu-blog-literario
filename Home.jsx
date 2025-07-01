import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, PenTool, Users, Star, ArrowRight, Quote } from 'lucide-react'

const Home = () => {
  const featuredPosts = [
    {
      title: "Minha Jornada Como Escritora Iniciante",
      excerpt: "Compartilho os primeiros passos da minha trajetória literária, os desafios e as descobertas...",
      category: "Diário de Escrita",
      readTime: "5 min"
    },
    {
      title: "Resenha: O Nome do Vento",
      excerpt: "Uma análise profunda da obra-prima de Patrick Rothfuss que conquistou milhões de leitores...",
      category: "Resenhas",
      readTime: "8 min"
    },
    {
      title: "5 Técnicas para Ler Mais Rápido",
      excerpt: "Dicas práticas para otimizar sua leitura sem perder a compreensão do texto...",
      category: "Técnicas",
      readTime: "6 min"
    }
  ]

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Resenhas Autênticas",
      description: "Análises honestas e detalhadas de livros de diversos gêneros"
    },
    {
      icon: <PenTool className="h-8 w-8 text-green-600" />,
      title: "Jornada Autoral",
      description: "Acompanhe meu processo de escrita e publicação do primeiro livro"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Comunidade Literária",
      description: "Conecte-se com outros amantes da literatura e participe de discussões"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Dicas Exclusivas",
      description: "Técnicas de leitura, escrita e organização de saraus literários"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Bem-vindos às{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Páginas em Construção
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Um blog literário onde compartilho minha jornada como escritora iniciante, 
            resenhas apaixonadas e dicas para aprimorar sua experiência com a literatura.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/sobre">
              Conheça Minha História
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/resenhas">
              Explore as Resenhas
              <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-none">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <blockquote className="text-lg italic text-slate-700 mb-4">
                "Um livro é um sonho que você segura em suas mãos."
              </blockquote>
              <cite className="text-slate-500">— Neil Gaiman</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">O que você encontrará aqui</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conteúdo cuidadosamente criado para leitores e escritores apaixonados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">Posts em Destaque</h2>
          <Button asChild variant="outline">
            <Link to="/resenhas">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0">
                  Ler mais
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Acompanhe Minha Jornada Literária</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Inscreva-se na newsletter e seja o primeiro a saber sobre o lançamento do meu livro 
              e receba conteúdo exclusivo sobre literatura e escrita.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

