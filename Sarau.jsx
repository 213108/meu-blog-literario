import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Mic, 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  BookOpen, 
  Coffee,
  Music,
  Lightbulb,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

const Sarau = () => {
  const [selectedTheme, setSelectedTheme] = useState('Poesia de Amor')

  const upcomingEvents = [
    {
      title: "Sarau de Poesia Marginal",
      date: "15 de Fevereiro, 2025",
      time: "19h00",
      location: "Café Literário Central",
      description: "Uma noite dedicada às vozes da periferia e à poesia que nasce das ruas",
      theme: "Poesia Marginal",
      spots: "12 vagas disponíveis"
    },
    {
      title: "Noite de Contos de Mistério",
      date: "28 de Fevereiro, 2025", 
      time: "20h00",
      location: "Livraria Sombras & Letras",
      description: "Histórias que arrepiam e prendem a atenção até a última palavra",
      theme: "Mistério & Terror",
      spots: "8 vagas disponíveis"
    }
  ]

  const themes = [
    {
      name: "Poesia de Amor",
      icon: <Heart className="h-5 w-5" />,
      description: "Versos que celebram o amor em todas as suas formas",
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Literatura Feminina",
      icon: <Users className="h-5 w-5" />,
      description: "Vozes femininas que marcaram a literatura mundial",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Poesia de Cordel",
      icon: <Music className="h-5 w-5" />,
      description: "A tradição nordestina em versos rimados e musicais",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Contos Urbanos",
      icon: <Coffee className="h-5 w-5" />,
      description: "Histórias que nascem do cotidiano das grandes cidades",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Literatura e Natureza",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Textos que celebram a conexão entre humanidade e natureza",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Sarau Livre",
      icon: <Star className="h-5 w-5" />,
      description: "Tema aberto para todas as formas de expressão literária",
      color: "bg-gray-100 text-gray-800"
    }
  ]

  const organizingSteps = [
    {
      step: 1,
      title: "Defina o Objetivo e Tema",
      description: "Escolha o propósito do sarau e um tema que inspire os participantes",
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Escolha Local e Data",
      description: "Encontre um espaço acolhedor e defina uma data que funcione para todos",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      step: 3,
      title: "Divulgue o Evento",
      description: "Use redes sociais, cartazes e boca a boca para atrair participantes",
      icon: <Users className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Prepare a Estrutura",
      description: "Organize microfone, cadeiras, iluminação e um ambiente acolhedor",
      icon: <Mic className="h-5 w-5" />
    },
    {
      step: 5,
      title: "Conduza com Carinho",
      description: "Crie um ambiente seguro onde todos se sintam à vontade para se expressar",
      icon: <Heart className="h-5 w-5" />
    }
  ]

  const participationTips = [
    "Escolha um texto que tenha significado pessoal para você",
    "Pratique a leitura em voz alta antes do evento",
    "Respeite o tempo limite (geralmente 3-5 minutos)",
    "Escute atentamente os outros participantes",
    "Não tenha medo de mostrar emoção na sua apresentação",
    "Traga cópias extras do seu texto para compartilhar"
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Sarau Literário</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Descubra a magia dos saraus literários - espaços onde palavras ganham vida 
          e corações se conectam através da literatura
        </p>
      </div>

      {/* What is Sarau */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-6 w-6 text-blue-600" />
            O que é um Sarau Literário?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 mb-4">
            Um sarau literário é um encontro cultural onde pessoas se reúnem para compartilhar 
            textos, poesias, contos e outras formas de expressão artística. É um espaço democrático 
            onde tanto escritores experientes quanto iniciantes podem apresentar suas criações 
            e se conectar com outros amantes da literatura.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <Mic className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Expressão</h3>
              <p className="text-sm text-slate-600">Compartilhe sua voz e suas palavras</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Comunidade</h3>
              <p className="text-sm text-slate-600">Conecte-se com outros apaixonados por literatura</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-semibold">Inspiração</h3>
              <p className="text-sm text-slate-600">Inspire-se e inspire outros com suas palavras</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upcoming">Próximos Eventos</TabsTrigger>
          <TabsTrigger value="themes">Temas</TabsTrigger>
          <TabsTrigger value="organize">Como Organizar</TabsTrigger>
          <TabsTrigger value="participate">Como Participar</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Próximos Saraus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">{event.theme}</Badge>
                    <span className="text-sm text-green-600 font-medium">{event.spots}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date} às {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Inscrever-se
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="themes" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Temas para Saraus</h2>
          <p className="text-slate-600">
            Explore diferentes temas que podem dar vida ao seu sarau e inspirar os participantes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTheme === theme.name ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedTheme(theme.name)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${theme.color}`}>
                      {theme.icon}
                    </div>
                    <CardTitle className="text-lg">{theme.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{theme.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="organize" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Como Organizar um Sarau</h2>
          <p className="text-slate-600">
            Passo a passo para criar um sarau memorável e acolhedor
          </p>
          <div className="space-y-6">
            {organizingSteps.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-blue-100 rounded text-blue-600">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      </div>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="participate" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Como Participar de um Sarau</h2>
          <p className="text-slate-600">
            Dicas para aproveitar ao máximo sua experiência em um sarau literário
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Dicas para uma Boa Apresentação</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {participationTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle>Primeira Vez em um Sarau?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Não se preocupe! Saraus são ambientes acolhedores onde todos são bem-vindos. 
                Você pode começar apenas ouvindo e, quando se sentir confortável, compartilhar 
                algo seu. Lembre-se: não existe texto "bom" ou "ruim" em um sarau - existe 
                apenas a beleza da expressão humana.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Encontrar Saraus Próximos
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Quer organizar seu próprio sarau?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Tenho experiência organizando saraus e adoraria ajudar você a criar um evento 
          inesquecível. Entre em contato para dicas personalizadas!
        </p>
        <Button className="bg-white text-purple-600 hover:bg-gray-100">
          Solicitar Consultoria
        </Button>
      </div>
    </div>
  )
}

export default Sarau

