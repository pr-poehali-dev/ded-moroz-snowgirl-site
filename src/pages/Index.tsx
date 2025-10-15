import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`
    }));
    setSnowflakes(flakes);
  }, []);

  const services = [
    {
      icon: 'Home',
      title: 'Выезд на дом',
      description: 'Поздравим ваших близких прямо у вас дома с волшебной атмосферой'
    },
    {
      icon: 'Building2',
      title: 'Корпоративы',
      description: 'Организуем незабываемый праздник для вашей компании'
    },
    {
      icon: 'Gift',
      title: 'Вручение подарков',
      description: 'Торжественное вручение подарков от Деда Мороза и Снегурочки'
    },
    {
      icon: 'Camera',
      title: 'Фотосессия',
      description: 'Профессиональная фотосессия с главными героями праздника'
    }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: '5 000',
      duration: '30 минут',
      features: ['Поздравление', 'Вручение подарков', 'Фото на память']
    },
    {
      title: 'Стандарт',
      price: '8 000',
      duration: '1 час',
      features: ['Поздравление', 'Игры и конкурсы', 'Вручение подарков', 'Профессиональная фотосессия'],
      popular: true
    },
    {
      title: 'Премиум',
      price: '12 000',
      duration: '1.5 часа',
      features: ['Поздравление', 'Игры и конкурсы', 'Вручение подарков', 'Фотосессия', 'Видеосъемка', 'Музыкальное сопровождение']
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Дети были в восторге! Дед Мороз и Снегурочка создали настоящую сказку прямо у нас дома.',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      text: 'Заказывали на корпоратив - все прошло на высшем уровне! Коллеги остались довольны.',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Профессиональный подход, красивые костюмы, отличная программа. Рекомендую!',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ice via-white to-ice relative overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white text-2xl pointer-events-none animate-snowfall"
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration
          }}
        >
          ❄
        </div>
      ))}

      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            ❄️ Дед Мороз и Снегурочка
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg">
            <Icon name="Phone" className="mr-2" size={18} />
            Заказать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block animate-float">
            <div className="text-8xl mb-6">🎅</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            Волшебный Новый Год
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные Дед Мороз и Снегурочка подарят незабываемый праздник вашим детям
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all"
              onClick={() => scrollToSection('prices')}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Выбрать программу
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 transition-all"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выезжаем на дом и в офис по всему городу</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящую программу</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  price.popular 
                    ? 'border-4 border-secondary shadow-2xl shadow-secondary/30 scale-105' 
                    : 'hover:-translate-y-2'
                }`}
              >
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{price.title}</CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {price.price} ₽
                  </div>
                  <p className="text-muted-foreground">{price.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      price.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : 'bg-primary'
                    } hover:opacity-90`}
                    size="lg"
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Моменты праздника</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <div className="text-6xl">
                  {i % 3 === 0 ? '🎅' : i % 3 === 1 ? '🎄' : '🎁'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят наши клиенты</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="text-golden">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-ice">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами удобным способом</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Phone" className="text-white" size={32} />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-lg text-primary font-semibold">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Mail" className="text-white" size={32} />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-lg text-primary font-semibold">ded.moroz@magic.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                  <Icon name="MapPin" className="text-white" size={32} />
                </div>
                <h3 className="font-bold mb-2">Город</h3>
                <p className="text-lg text-primary font-semibold">Москва</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Забронируйте визит</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="date" 
                    placeholder="Дата визита" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Комментарий" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-4">❄️ 🎅 ❄️</div>
          <p className="text-lg mb-4 font-semibold">Дед Мороз и Снегурочка</p>
          <p className="opacity-90 mb-4">Создаём волшебство с 2010 года</p>
          <div className="flex justify-center gap-6 text-3xl mb-4">
            <a href="#" className="hover:scale-125 transition-transform">📱</a>
            <a href="#" className="hover:scale-125 transition-transform">💬</a>
            <a href="#" className="hover:scale-125 transition-transform">📧</a>
          </div>
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          size="lg" 
          className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-primary/50 animate-pulse"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
