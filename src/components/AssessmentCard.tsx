import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Plus, Check } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
  duration: number;
  category: string;
  timesUsed: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export const AssessmentCard = ({
  title,
  description,
  duration,
  category,
  timesUsed,
  isSelected,
  onClick,
}: AssessmentCardProps) => {
  return (
    <Card 
      className={`hover-scale glass-card cursor-pointer h-full ${
        isSelected ? 'border-primary shadow-primary/20' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          {isSelected ? (
            <Check className="h-5 w-5 text-primary" />
          ) : (
            <Plus className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{timesUsed}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};