import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { Link } from 'react-router-dom'

function Index() {
  const features = [
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Начните работу за считанные минуты с нашей простой настройкой'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Ваши данные защищены современными технологиями шифрования'
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Эффективное сотрудничество в режиме реального времени'
    }
  ]

  const services = [
    {
      title: 'Веб-разработка',
      description: 'Создание современных и функциональных веб-сайтов',
      price: 'от 50 000 ₽',
      features: ['Адаптивный дизайн', 'SEO оптимизация', 'Быстрая загрузка']
    },
    {
      title: 'Мобильные приложения',
      description: 'Разработка iOS и Android приложений',
      price: 'от 150 000 ₽',
      features: ['Нативная разработка', 'Push уведомления', 'Аналитика']
    },
    {
      title: 'Дизайн',
      description: 'UI/UX дизайн и брендинг',
      price: 'от 30 000 ₽',
      features: ['Пользовательский опыт', 'Прототипирование', 'Фирменный стиль']
    }
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
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
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
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                🚀 Новые технологии
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Создаём</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Цифровое будущее
                </span>
                <br />
                <span className="text-gray-900">вместе</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Разрабатываем веб-сайты, мобильные приложения и цифровые решения, 
                которые помогают бизнесу расти и развиваться в современном мире
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Начать проект
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/4dc0b419-2490-44b8-b1b3-8910aed0de2f.jpg" 
                  alt="Цифровые технологии"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">нас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы сочетаем передовые технологии с глубоким пониманием бизнес-потребностей наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр цифровых решений для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Заказать
                  </Button>
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
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему проекту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Начать проект
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться
            </Button>
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

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Index