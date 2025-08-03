'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Award, BookOpen, Users, Star } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg">Dr. Alexandre Calandrini</span>
              <span className="text-xs text-gray-600">Pan Rejuvenation Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cursos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Cursos
            </Link>
            <Link href="/metodo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Método
            </Link>
            <Link href="/depoimentos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Depoimentos
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sobre
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/cursos" className="text-gray-700 hover:text-blue-600 font-medium">
                Cursos
              </Link>
              <Link href="/metodo" className="text-gray-700 hover:text-blue-600 font-medium">
                Método
              </Link>
              <Link href="/depoimentos" className="text-gray-700 hover:text-blue-600 font-medium">
                Depoimentos
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">
                Sobre
              </Link>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}