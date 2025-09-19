import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Icon from '@/components/ui/icon'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Современный веб-сайт",
    category: "web",
    image: "/img/ae41a9ad-ce22-4b5c-86bc-eea3d22d48a3.jpg",
    description: "Современный адаптивный веб-сайт с интерактивными элементами и плавными анимациями",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "Мобильное приложение",
    category: "mobile",
    image: "/img/def0eb11-0293-4375-ba31-1d6ac49abf98.jpg",
    description: "Интуитивное мобильное приложение с современным дизайном и удобной навигацией",
    tags: ["React Native", "UI/UX", "Mobile"]
  },
  {
    id: 3,
    title: "E-commerce платформа",
    category: "web",
    image: "/img/ae41a9ad-ce22-4b5c-86bc-eea3d22d48a3.jpg",
    description: "Полнофункциональная платформа электронной коммерции с системой платежей",
    tags: ["Next.js", "Commerce", "Payment"]
  },
  {
    id: 4,
    title: "Дизайн-система",
    category: "design",
    image: "/img/def0eb11-0293-4375-ba31-1d6ac49abf98.jpg",
    description: "Комплексная дизайн-система для корпоративных приложений",
    tags: ["Design System", "Components", "Figma"]
  }
]

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Figma", level: 92 },
  { name: "Tailwind CSS", level: 90 }
]

function Index() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeTab, setActiveTab] = useState('home')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const filters = [
    { key: 'all', label: 'Все проекты' },
    { key: 'web', label: 'Веб-сайты' },
    { key: 'mobile', label: 'Мобильные' },
    { key: 'design', label: 'Дизайн' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Портфолио
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {[
                { key: 'home', label: 'Главная', icon: 'Home' },
                { key: 'portfolio', label: 'Портфолио', icon: 'Briefcase' },
                { key: 'about', label: 'Обо мне', icon: 'User' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === item.key
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Создаю</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Цифровые
                  </span>
                  <br />
                  <span className="text-gray-900">Решения</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Веб-разработчик и дизайнер с 5+ годами опыта создания современных 
                  и функциональных цифровых продуктов
                </p>
                
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    onClick={() => setActiveTab('portfolio')}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  >
                    Смотреть работы
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setActiveTab('about')}
                    className="border-2 border-gray-300 hover:border-primary hover:text-primary px-8 py-4 text-lg"
                  >
                    Обо мне
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="relative z-10">
                  <img 
                    src="/img/4dc0b419-2490-44b8-b1b3-8910aed0de2f.jpg" 
                    alt="Творческое рабочее место"
                    className="rounded-2xl shadow-2xl w-full animate-float"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeTab === 'portfolio' && (
        <section className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Мои <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Проекты</span>
              </h2>
              <p className="text-xl text-gray-600">Современные решения для различных задач</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-0 bg-white/60 backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge className="bg-white/90 text-gray-900">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl">
                    <div className="space-y-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeTab === 'about' && (
        <section className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-4xl font-bold text-gray-900">
                  Обо <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">мне</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Привет! Я веб-разработчик и дизайнер с более чем 5-летним опытом 
                    создания современных цифровых решений.
                  </p>
                  
                  <p>
                    Специализируюсь на создании интерактивных веб-приложений, 
                    мобильных приложений и дизайн-систем. Моя цель — создавать 
                    продукты, которые не только красиво выглядят, но и решают 
                    реальные задачи пользователей.
                  </p>
                  
                  <p>
                    В работе использую современные технологии и следую лучшим 
                    практикам разработки, всегда стремясь к созданию качественного 
                    и поддерживаемого кода.
                  </p>
                </div>

                <div className="flex space-x-6">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                    <Icon name="Download" size={18} className="mr-2" />
                    Скачать CV
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 hover:border-primary">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </div>

              <div className="space-y-8 animate-slide-up">
                <h3 className="text-2xl font-semibold text-gray-900">Навыки</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <div className="flex space-x-6">
            {[
              { key: 'home', icon: 'Home' },
              { key: 'portfolio', icon: 'Briefcase' },
              { key: 'about', icon: 'User' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeTab === item.key
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index