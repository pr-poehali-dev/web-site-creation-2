import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { Link } from 'react-router-dom'

function About() {
  const team = [
    {
      name: 'Алексей Петров',
      position: 'Ведущий разработчик',
      description: 'Более 8 лет опыта в веб-разработке. Специализируется на React и Node.js',
      image: '/img/ae41a9ad-ce22-4b5c-86bc-eea3d22d48a3.jpg'
    },
    {
      name: 'Мария Иванова',
      position: 'UI/UX Дизайнер',
      description: 'Создаёт интуитивные и красивые интерфейсы. Эксперт в области пользовательского опыта',
      image: '/img/def0eb11-0293-4375-ba31-1d6ac49abf98.jpg'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Менеджер проектов',
      description: 'Обеспечивает своевременную и качественную реализацию проектов',
      image: '/img/ae41a9ad-ce22-4b5c-86bc-eea3d22d48a3.jpg'
    }
  ]

  const values = [
    {
      icon: 'Target',
      title: 'Ориентация на результат',
      description: 'Мы сосредоточены на достижении целей наших клиентов и создании продуктов, которые приносят реальную пользу'
    },
    {
      icon: 'Heart',
      title: 'Качество превыше всего',
      description: 'Каждый проект выполняется с особым вниманием к деталям и соблюдением высоких стандартов качества'
    },
    {
      icon: 'Users',
      title: 'Команда единомышленников',
      description: 'Наша сила в слаженной работе профессионалов, объединённых общими целями и ценностями'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Мы всегда в курсе последних тенденций и используем передовые технологии в наших проектах'
    }
  ]

  const stats = [
    { number: '100+', label: 'Успешных проектов' },
    { number: '50+', label: 'Довольных клиентов' },
    { number: '5+', label: 'Лет опыта' },
    { number: '24/7', label: 'Поддержка' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DigitalStudio
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Главная
              </Link>
              <Link to="/about" className="text-blue-600 font-semibold">
                О нас
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Контакты
              </Link>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Начать проект
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">О нашей</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                команде
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Мы — команда профессионалов, объединённых страстью к созданию 
              выдающихся цифровых решений. Наша миссия — помогать бизнесу 
              расти с помощью современных технологий.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Наша <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">история</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  DigitalStudio была основана в 2019 году с простой идеей: 
                  сделать высококачественную веб-разработку доступной для 
                  каждого бизнеса.
                </p>
                
                <p>
                  Начав как небольшая команда из трёх человек, мы быстро 
                  выросли и стали одной из ведущих студий разработки в России. 
                  За это время мы реализовали более 100 проектов различной 
                  сложности.
                </p>
                
                <p>
                  Сегодня мы продолжаем развиваться, внедряя новые технологии 
                  и подходы, чтобы предоставлять нашим клиентам самые 
                  современные решения.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/4dc0b419-2490-44b8-b1b3-8910aed0de2f.jpg" 
                alt="Наша команда за работой"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ценности</span>
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которые определяют нашу работу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">команда</span>
            </h2>
            <p className="text-xl text-gray-600">
              Познакомьтесь с профессионалами, которые воплощают ваши идеи в жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готовы работать с нами?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нашей командой и узнайте, как мы можем помочь 
            вашему бизнесу достичь новых высот
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Связаться с нами
              </Button>
            </Link>
            <Link to="/">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DigitalStudio
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Создаём цифровые решения, которые помогают бизнесу расти и развиваться
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Веб-разработка</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Мобильные приложения</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">UI/UX Дизайн</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Брендинг</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Портфолио</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Блог</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-3" />
                  hello@digitalstudio.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-3" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-3" />
                  Москва, Россия
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About