import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-primary">Александр Волков</div>
          <div className="hidden md:flex gap-8">
            {['Портфолио', 'Цены', 'Обо мне', 'Отзывы'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Ваш Идеальный<br />Ведущий
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Превращаю каждое мероприятие в незабываемое событие.<br />
            Свадьбы, корпоративы, торжества — с роскошью и изысканностью.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => scrollToSection('цены')}
            >
              Узнать цены
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => scrollToSection('портфолио')}
            >
              Посмотреть работы
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section id="портфолио" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 200 успешных мероприятий. Каждое — уникально.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Свадьбы', count: '120+', image: 'https://cdn.poehali.dev/projects/d558a153-4cf8-4223-b38a-2152345b609e/files/53383f25-c6fb-45cc-98d3-ab7c543b53ff.jpg', desc: 'Романтичные церемонии' },
              { title: 'Корпоративы', count: '50+', image: 'https://cdn.poehali.dev/projects/d558a153-4cf8-4223-b38a-2152345b609e/files/be14dc41-b1b6-4f22-9d3b-586f508a7912.jpg', desc: 'Деловые события' },
              { title: 'Юбилеи', count: '30+', image: 'https://cdn.poehali.dev/projects/d558a153-4cf8-4223-b38a-2152345b609e/files/c2cba25b-ac82-4887-9cfd-3a2d621bd53b.jpg', desc: 'Праздничные торжества' },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                </div>
                <CardContent className="p-8 text-center relative -mt-20">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-bold mb-2">{item.title}</h3>
                    <div className="text-5xl font-serif font-bold text-primary mb-2">{item.count}</div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные тарифы. Индивидуальный подход.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '50 000',
                features: ['До 4 часов', 'Сценарий мероприятия', 'Координация программы', 'Профессиональный микрофон'],
              },
              {
                name: 'Премиум',
                price: '85 000',
                features: ['До 6 часов', 'Индивидуальный сценарий', 'Координация + декор-консультация', 'Оборудование премиум-класса', 'Свадебные игры'],
                featured: true,
              },
              {
                name: 'VIP',
                price: '150 000',
                features: ['Весь день', 'Эксклюзивный сценарий', 'Полная координация', 'Топовое оборудование', 'Артисты и шоу-программа', 'Видеосъемка'],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`${
                  plan.featured
                    ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary shadow-2xl shadow-primary/30 scale-105'
                    : 'bg-card border-border hover:border-primary/50'
                } transition-all duration-300 hover:shadow-xl animate-scale-in relative overflow-hidden`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-serif font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                    } transition-all`}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="обо мне" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Обо мне</h2>
              <p className="text-xl text-muted-foreground">Профессионал с душой</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-muted overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name="User" className="text-primary/30" size={120} />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Приветствую! Я Александр — ведущий с 8-летним опытом проведения премиальных мероприятий.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Моя миссия — создавать атмосферу, в которой каждый гость чувствует себя особенным. Я не просто веду
                  программу — я создаю эмоции, которые останутся с вами навсегда.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { label: 'Опыт работы', value: '8 лет' },
                    { label: 'Мероприятий', value: '200+' },
                    { label: 'Довольных клиентов', value: '100%' },
                    { label: 'Городов', value: '15+' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4 rounded-lg bg-card border border-border">
                      <div className="text-3xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят мои клиенты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Елена и Дмитрий',
                event: 'Свадьба',
                text: 'Александр превзошёл все наши ожидания! Гости до сих пор вспоминают нашу свадьбу. Профессионал высшего класса.',
                rating: 5,
              },
              {
                name: 'ООО "ТехноПром"',
                event: 'Корпоратив',
                text: 'Провели юбилей компании на высшем уровне. Программа была динамичной, никто не скучал. Рекомендуем!',
                rating: 5,
              },
              {
                name: 'Мария Петрова',
                event: 'Юбилей 50 лет',
                text: 'Спасибо за незабываемый вечер! Александр смог создать тёплую атмосферу и вовлечь всех гостей.',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.event}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-muted/50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Готовы к незабываемому событию?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь со мной, и я сделаю ваше мероприятие особенным
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/20"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (900) 123-45-67
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                host@example.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-serif font-bold text-primary">Александр Волков</div>
            <div className="text-muted-foreground">© 2024 Все права защищены</div>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  <Icon name={social as any} size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;