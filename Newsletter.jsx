import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const Newsletter = ({ variant = 'default', className = '' }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor, insira um email válido.')
      return
    }

    setStatus('loading')
    
    // Simular chamada para API de newsletter
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aqui você integraria com serviços como Mailchimp, ConvertKit, etc.
      console.log('Email cadastrado:', email)
      
      setStatus('success')
      setMessage('Obrigada! Você receberá novidades em breve.')
      setEmail('')
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
      
    } catch (error) {
      setStatus('error')
      setMessage('Ops! Algo deu errado. Tente novamente.')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className}`}>
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1"
        />
        <Button 
          onClick={handleSubmit}
          disabled={status === 'loading' || !email}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Mail className="h-4 w-4 mr-2" />
          )}
          {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
        </Button>
        
        {message && (
          <div className={`flex items-center gap-2 text-sm mt-2 ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            {message}
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className={`max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle>Newsletter Literária</CardTitle>
        <CardDescription>
          Receba resenhas exclusivas, dicas de leitura e atualizações sobre meu livro
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            required
          />
          
          <Button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Inscrevendo...
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-2" />
                Quero receber novidades!
              </>
            )}
          </Button>
          
          {message && (
            <div className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
              status === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              {message}
            </div>
          )}
          
          <p className="text-xs text-gray-500 text-center">
            Sem spam, apenas conteúdo de qualidade. Cancele quando quiser.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default Newsletter

