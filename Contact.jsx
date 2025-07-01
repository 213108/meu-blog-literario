import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Twitter, 
  BookOpen,
  Heart,
  Send,
  Clock,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactReasons = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Sugestões de Livros",
      description: "Recomende livros para eu resenhar ou adicionar à lista de essenciais"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "Feedback do Blog",
      description: "Compartilhe suas impressões sobre o conteúdo e sugestões de melhoria"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Parcerias",
      description: "Propostas de colaboração, entrevistas ou projetos literários"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Conversa Geral",
      description: "Bate-papo sobre literatura, escrita ou qualquer assunto relacionado"
    }
  ]

  const socialLinks = [
    {
      platform: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      handle: "@paginasemconstrucao",
      url: "#",
      description: "Acompanhe meu dia a dia literário"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      handle: "@paginasconstrucao",
      url: "#", 
      description: "Pensamentos rápidos sobre livros"
    },
    {
      platform: "Email",
      icon: <Mail className="h-5 w-5" />,
      handle: "contato@paginasemconstrucao.com",
      url: "mailto:contato@paginasemconstrucao.com",
      description: "Para conversas mais longas"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Entre em Contato</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Adoraria ouvir de você! Seja para sugestões, feedback, parcerias ou apenas 
          para bater um papo sobre literatura
        </p>
      </div>

      {/* Contact Reasons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactReasons.map((reason, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-3">
                {reason.icon}
              </div>
              <CardTitle className="text-lg">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{reason.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-blue-600" />
              Envie uma Mensagem
            </CardTitle>
            <CardDescription>
              Preencha o formulário abaixo e responderei o mais breve possível
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-700 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600">
                  Obrigada pelo contato! Responderei em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de falar?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info & Social */}
        <div className="space-y-6">
          {/* Response Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                Tempo de Resposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Normalmente respondo em até <strong>24-48 horas</strong>. Se for algo urgente, 
                me mande uma mensagem direta nas redes sociais!
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Dica:</strong> Para sugestões de livros, inclua o gênero e por que 
                  você acha que eu deveria ler. Isso me ajuda muito na escolha!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
              <CardDescription>
                Me siga para acompanhar o dia a dia literário
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="p-2 bg-white rounded-lg">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">{social.platform}</div>
                    <div className="text-sm text-blue-600">{social.handle}</div>
                    <div className="text-xs text-slate-600">{social.description}</div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* FAQ Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Aceita livros para resenha?</h4>
                <p className="text-sm text-slate-600">
                  Sim! Envie detalhes sobre o livro e por que acha que seria interessante.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Faz parcerias com editoras?</h4>
                <p className="text-sm text-slate-600">
                  Estou aberta a parcerias que façam sentido para o blog e meus leitores.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Quando sai o livro?</h4>
                <p className="text-sm text-slate-600">
                  Previsão para maio de 2025! Inscreva-se na newsletter para ser avisado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Newsletter CTA */}
      <Card className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <CardHeader>
          <CardTitle className="text-center">Não Perca Nenhuma Novidade!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 max-w-2xl mx-auto">
            Inscreva-se na newsletter para receber atualizações sobre novos posts, 
            lançamentos de livros e conteúdo exclusivo diretamente no seu e-mail.
          </p>
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
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact

