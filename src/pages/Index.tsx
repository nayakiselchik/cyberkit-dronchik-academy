import { Shield, Lock, Eye, Wifi, RotateCcw, Star, Award, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CyberModule from "@/components/CyberModule";
import AchievementBadge from "@/components/AchievementBadge";
import CharacterIntro from "@/components/CharacterIntro";
import cyberShieldImage from "@/assets/cyber-shield.jpg";

const Index = () => {
  const modules = [
    {
      title: "Надійні паролі",
      description: "Дізнайся, як створювати складні паролі та використовувати менеджери паролів для захисту своїх акаунтів.",
      icon: <Lock className="w-6 h-6" />,
      duration: "3-5 хв",
      difficulty: "початковий" as const,
      isCompleted: false
    },
    {
      title: "Фішинг і шахрайські листи", 
      description: "Навчись розпізнавати підозрілі повідомлення та перевіряти справжність сайтів.",
      icon: <Eye className="w-6 h-6" />,
      duration: "4-6 хв",
      difficulty: "середній" as const,
      isCompleted: false
    },
    {
      title: "Соціальні мережі та приватність",
      description: "Налаштуй конфіденційність у соцмережах та дізнайся про ризики надмірного шерінгу.",
      icon: <Shield className="w-6 h-6" />,
      duration: "3-5 хв", 
      difficulty: "початковий" as const,
      isCompleted: false
    },
    {
      title: "Безпечне використання Wi-Fi",
      description: "Ознайомся з ризиками публічних мереж та дізнайся про переваги VPN.",
      icon: <Wifi className="w-6 h-6" />,
      duration: "4-5 хв",
      difficulty: "середній" as const,
      isCompleted: false
    },
    {
      title: "Оновлення та антивірус",
      description: "Зрозумій важливість регулярних оновлень та принципи роботи антивірусного ПЗ.",
      icon: <RotateCcw className="w-6 h-6" />,
      duration: "3-4 хв",
      difficulty: "початковий" as const,
      isCompleted: false
    }
  ];

  const achievements = [
    {
      title: "Майстер паролів",
      icon: "🔐",
      description: "Створив свій перший надійний пароль",
      earned: false
    },
    {
      title: "Антифішер",
      icon: "🎣",
      description: "Розпізнав фішингову атаку",
      earned: false
    },
    {
      title: "СуперVPN",
      icon: "🛡️",
      description: "Налаштував безпечне з'єднання",
      earned: false
    },
    {
      title: "Кібер-герой",
      icon: "🦸",
      description: "Завершив усі модулі курсу",
      earned: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src={cyberShieldImage} 
                alt="Cyberkit Logo" 
                className="w-24 h-24 rounded-full border-2 border-cyber-primary/30 shadow-glow animate-float"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-6">
              Cyberkit
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Навчальний ресурс з кібербезпеки.<br />
              Захисти себе в цифровому світі разом з <span className="text-cyber-primary font-semibold">Dronchik</span>!
            </p>
            
            <Button 
              size="hero" 
              variant="cyber" 
              className="mb-8 text-2xl"
            >
              🚀 Розпочати тестування
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12">
              <Card className="bg-gradient-card border-border/50 p-6">
                <div className="text-cyber-primary text-3xl mb-2">📚</div>
                <h3 className="font-semibold mb-2">5 Модулів</h3>
                <p className="text-sm text-muted-foreground">Від паролів до VPN</p>
              </Card>
              <Card className="bg-gradient-card border-border/50 p-6">
                <div className="text-cyber-accent text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Швидке навчання</h3>
                <p className="text-sm text-muted-foreground">3-6 хвилин на модуль</p>
              </Card>
              <Card className="bg-gradient-card border-border/50 p-6">
                <div className="text-cyber-secondary text-3xl mb-2">🏆</div>
                <h3 className="font-semibold mb-2">Геймифікація</h3>
                <p className="text-sm text-muted-foreground">Бейджі та досягнення</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Character Introduction */}
      <section className="container mx-auto px-4 py-12">
        <CharacterIntro />
      </section>

      {/* Learning Modules */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Модулі навчання
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Кожний модуль містить відео-лекцію та інтерактивний тест. Навчайся поступово та отримуй бейджі!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <CyberModule key={index} {...module} />
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Досягнення
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Збирай бейджі за правильні відповіді та стань справжнім кібер-героєм!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementBadge key={index} {...achievement} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="bg-gradient-cyber/10 border-cyber-primary/20 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-cyber-primary mb-4">
            Готовий стати кібер-експертом?
          </h3>
          <p className="text-muted-foreground mb-6">
            Розпочни свою подорож у світ кібербезпеки вже зараз!
          </p>
          <Button size="xl" variant="cyber">
            🎯 Розпочати тестування
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
