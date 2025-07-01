import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Reviews from './pages/Reviews'
import EssentialBooks from './pages/EssentialBooks'
import ReadingTechniques from './pages/ReadingTechniques'
import Sarau from './pages/Sarau'
import MyBook from './pages/MyBook'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/resenhas" element={<Reviews />} />
            <Route path="/livros-essenciais" element={<EssentialBooks />} />
            <Route path="/tecnicas-leitura" element={<ReadingTechniques />} />
            <Route path="/sarau" element={<Sarau />} />
            <Route path="/meu-livro" element={<MyBook />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

