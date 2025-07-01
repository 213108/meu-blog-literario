import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Feather, Heart, Instagram, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <div className="flex items-center space-x-1">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <Feather className="h-5 w-5 text-green-400" />
              </div>
              <span>Páginas em Construção</span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Um blog literário onde compartilho minha jornada como escritora iniciante, 
              resenhas de livros, dicas de leitura e muito mais. Venha fazer parte desta 
              comunidade de amantes da literatura!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-slate-300 hover:text-white transition-colors">Sobre a Autora</Link></li>
              <li><Link to="/resenhas" className="text-slate-300 hover:text-white transition-colors">Resenhas</Link></li>
              <li><Link to="/livros-essenciais" className="text-slate-300 hover:text-white transition-colors">Livros Essenciais</Link></li>
              <li><Link to="/meu-livro" className="text-slate-300 hover:text-white transition-colors">Meu Livro</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-300 text-sm mb-4">
              Receba atualizações sobre novos posts e o lançamento do meu livro!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> para amantes da literatura
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 Páginas em Construção. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

