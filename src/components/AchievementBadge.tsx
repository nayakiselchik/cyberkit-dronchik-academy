import { Badge } from "@/components/ui/badge";

interface AchievementBadgeProps {
  title: string;
  icon: string;
  description: string;
  earned?: boolean;
}

const AchievementBadge = ({ title, icon, description, earned }: AchievementBadgeProps) => {
  return (
    <div className={`p-4 rounded-lg border transition-all duration-300 ${
      earned 
        ? 'bg-gradient-shield border-cyber-accent/30 shadow-glow-accent' 
        : 'bg-muted/5 border-border/30 opacity-60'
    }`}>
      <div className="text-center">
        <div className={`text-3xl mb-2 ${earned ? 'animate-float' : ''}`}>
          {icon}
        </div>
        <h4 className={`font-medium text-sm ${earned ? 'text-cyber-accent' : 'text-muted-foreground'}`}>
          {title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
        {earned && (
          <Badge className="mt-2 bg-cyber-accent/20 text-cyber-accent border-cyber-accent/30 text-xs">
            Отримано
          </Badge>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;