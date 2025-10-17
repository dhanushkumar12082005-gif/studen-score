import { Card } from "@/components/ui/card";

interface GradeCardProps {
  subject: string;
  grade: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export const GradeCard = ({ subject, grade, score, maxScore, percentage }: GradeCardProps) => {
  const getGradeColor = (percent: number) => {
    if (percent >= 90) return "text-success";
    if (percent >= 80) return "text-primary";
    if (percent >= 70) return "text-accent";
    return "text-destructive";
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-muted/20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg text-foreground">{subject}</h3>
        <span className={`text-2xl font-bold ${getGradeColor(percentage)}`}>{grade}</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Score</span>
          <span className="font-medium text-foreground">
            {score}/{maxScore}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="text-right text-sm font-medium text-muted-foreground">{percentage}%</div>
      </div>
    </Card>
  );
};
