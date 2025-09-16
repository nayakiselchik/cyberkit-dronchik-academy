import { Shield, Lock, Eye, Wifi, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CyberModuleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  difficulty: "початковий" | "середній" | "просунутий";
  isCompleted?: boolean;
}

const CyberModule = ({ title, description, icon, duration, difficulty, isCompleted }: CyberModuleProps) => {
  const difficultyColors = {
    "початковий": "bg-green-500/20 text-green-400",
    "середній": "bg-yellow-500/20 text-yellow-400", 
    "просунутий": "bg-red-500/20 text-red-400"
  };

  return (
    <Card className="bg-gradient-card border-border/50 hover:border-cyber-primary/30 transition-all duration-300 hover:shadow-glow group cursor-pointer">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-cyber-primary/10 text-cyber-primary group-hover:animate-float">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-cyber-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{duration}</p>
            </div>
          </div>
          {isCompleted && (
            <Badge className="bg-cyber-accent/20 text-cyber-accent border-cyber-accent/30">
              ✓ Завершено
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge className={`${difficultyColors[difficulty]} border-0`}>
            {difficulty}
          </Badge>
          <div className="text-xs text-muted-foreground">
            Тест: 3-5 питань
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CyberModule;