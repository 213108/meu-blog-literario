import React, { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Search, X, Filter, BookOpen, User, Tag } from 'lucide-react'

const AdvancedSearch = ({ onSearch, placeholder = "Buscar livros, autores, gêneros..." }) => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef(null)

  // Mock data para demonstração
  const mockData = [
    { id: 1, title: "O Nome do Vento", author: "Patrick Rothfuss", genre: "Fantasia", type: "book" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Clássicos", type: "book" },
    { id: 3, title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", type: "book" },
    { id: 4, title: "Hábitos Atômicos", author: "James Clear", genre: "Desenvolvimento Pessoal", type: "book" },
    { id: 5, title: "A Garota no Trem", author: "Paula Hawkins", genre: "Mistério", type: "book" },
    { id: 6, title: "Circe", author: "Madeline Miller", genre: "Ficção", type: "book" },
    { id: 7, title: "Patrick Rothfuss", author: "", genre: "", type: "author" },
    { id: 8, title: "George Orwell", author: "", genre: "", type: "author" },
    { id: 9, title: "Fantasia", author: "", genre: "", type: "genre" },
    { id: 10, title: "Romance", author: "", genre: "", type: "genre" },
  ]

  const filterOptions = [
    { id: 'fiction', label: 'Ficção', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'romance', label: 'Romance', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'fantasy', label: 'Fantasia', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'mystery', label: 'Mistério', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'classics', label: 'Clássicos', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'selfhelp', label: 'Desenvolvimento Pessoal', icon: <BookOpen className="h-4 w-4" /> },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSuggestions([])
      return
    }

    const filtered = mockData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6)

    setSuggestions(filtered)
    setShowSuggestions(true)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    handleSearch(value)
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title)
    setShowSuggestions(false)
    if (onSearch) {
      onSearch(suggestion)
    }
  }

  const handleFilterToggle = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuggestions(false)
    if (onSearch) {
      onSearch({ query, filters: selectedFilters })
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'author': return <User className="h-4 w-4 text-blue-500" />
      case 'genre': return <Tag className="h-4 w-4 text-green-500" />
      default: return <BookOpen className="h-4 w-4 text-purple-500" />
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'author': return 'Autor'
      case 'genre': return 'Gênero'
      default: return 'Livro'
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="pl-10 pr-12 h-12 text-lg"
            onFocus={() => query && setShowSuggestions(true)}
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              onClick={() => {
                setQuery('')
                setSuggestions([])
                setShowSuggestions(false)
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filtros
            {selectedFilters.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedFilters.length}
              </Badge>
            )}
          </Button>

          {selectedFilters.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Limpar filtros
            </Button>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <Card>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.id}
                    type="button"
                    variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilterToggle(filter.id)}
                    className="justify-start"
                  >
                    {filter.icon}
                    <span className="ml-2">{filter.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Selected Filters Display */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filterId) => {
              const filter = filterOptions.find(f => f.id === filterId)
              return (
                <Badge
                  key={filterId}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {filter?.icon}
                  {filter?.label}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1"
                    onClick={() => handleFilterToggle(filterId)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )
            })}
          </div>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-lg">
          <CardContent className="p-0">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {getTypeIcon(suggestion.type)}
                <div className="flex-1">
                  <div className="font-medium">{suggestion.title}</div>
                  {suggestion.author && (
                    <div className="text-sm text-gray-500">por {suggestion.author}</div>
                  )}
                  {suggestion.genre && (
                    <div className="text-xs text-gray-400">{suggestion.genre}</div>
                  )}
                </div>
                <Badge variant="outline" className="text-xs">
                  {getTypeLabel(suggestion.type)}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default AdvancedSearch

