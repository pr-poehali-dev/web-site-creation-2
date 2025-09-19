import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Здесь будет логика отправки формы
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      content: 'hello@digitalstudio.ru',
      description: 'Напишите нам на почту'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      description: 'Звоните в рабочее время'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Тверская, д. 1',
      description: 'Приезжайте в гости'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-18:00',
      description: 'Выходные: по договорённости'
    }
  ]

  const faqItems = [
    {
      question: 'Сколько времени занимает разработка сайта?',
      answer: 'Время разработки зависит от сложности проекта. Простой сайт-визитка — 1-2 недели, корпоративный сайт — 3-4 недели, интернет-магазин — 4-6 недель.'
    },
    {
      question: 'Предоставляете ли вы гарантию на работы?',
      answer: 'Да, мы предоставляем гарантию 6 месяцев на все выполненные работы. В течение этого времени исправляем любые выявленные ошибки бесплатно.'
    },
    {
      question: 'Какие технологии вы используете?',
      answer: 'Мы работаем с современными технологиями: React, Next.js, Node.js, Python, TypeScript. Выбор технологий зависит от требований проекта.'
    },
    {
      question: 'Можете ли вы доработать существующий сайт?',
      answer: 'Конечно! Мы можем доработать, модернизировать или полностью переделать ваш существующий сайт, улучшив его функциональность и дизайн.'
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
              <Link to="/contact" className="text-blue-600 font-semibold">
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Свяжитесь</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                с нами
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Готовы обсудить ваш проект? Напишите нам, и мы свяжемся с вами 
              в течение одного рабочего дня для бесплатной консультации.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900 mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Расскажите о вашем <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">проекте</span>
              </h2>
              
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                          Ваше имя *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Введите ваше имя"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                          Телефон
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="+7 (XXX) XXX-XX-XX"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="project" className="text-gray-700 font-medium mb-2 block">
                          Тип проекта
                        </Label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Выберите тип проекта</option>
                          <option value="website">Веб-сайт</option>
                          <option value="mobile">Мобильное приложение</option>
                          <option value="design">Дизайн</option>
                          <option value="consulting">Консультация</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                        Сообщение *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 text-lg"
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Часто задаваемые <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">вопросы</span>
              </h3>
              
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={index} className="border-0 bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900 flex items-start">
                        <Icon name="HelpCircle" size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed ml-8">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-3">
                  Не нашли ответ на свой вопрос?
                </h4>
                <p className="mb-4 opacity-90">
                  Свяжитесь с нами напрямую, и мы ответим на все ваши вопросы
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Как нас <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">найти</span>
            </h2>
            <p className="text-gray-600">
              Мы находимся в центре Москвы, рядом с метро Тверская
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">
                Интерактивная карта
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Москва, ул. Тверская, д. 1
              </p>
            </div>
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

export default Contact