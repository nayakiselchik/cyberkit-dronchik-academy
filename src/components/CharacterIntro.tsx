import dronchikImage from "@/assets/dronchik-character.jpg";

const CharacterIntro = () => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-xl p-6 mb-8">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img 
            src={dronchikImage} 
            alt="Dronchik - твій кібер-помічник" 
            className="w-20 h-20 rounded-full border-2 border-cyber-primary/30 animate-float"
          />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyber-accent rounded-full border-2 border-background animate-glow-pulse"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-cyber-primary mb-2">
            Познайомся з Dronchik! 🤖
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Привіт! Я Dronchik, твій персональний кібер-помічник. Разом ми вивчимо основи 
            кібербезпеки та навчимося захищати себе в цифровому світі. Готовий розпочати пригоду?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterIntro;