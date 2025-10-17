import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const gradesData = [
  { assignment: "Midterm Exam", subject: "Mathematics", score: 92, maxScore: 100, date: "2024-10-15", grade: "A" },
  { assignment: "Lab Report", subject: "Physics", score: 88, maxScore: 100, date: "2024-10-12", grade: "B+" },
  { assignment: "Essay", subject: "English", score: 95, maxScore: 100, date: "2024-10-10", grade: "A" },
  { assignment: "Quiz 3", subject: "Chemistry", score: 85, maxScore: 100, date: "2024-10-08", grade: "B" },
  { assignment: "Project", subject: "Computer Science", score: 98, maxScore: 100, date: "2024-10-05", grade: "A+" },
];

export const GradesTable = () => {
  const getGradeBadgeVariant = (grade: string) => {
    if (grade.startsWith("A")) return "default";
    if (grade.startsWith("B")) return "secondary";
    return "outline";
  };

  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="p-6 bg-gradient-to-r from-primary to-accent">
        <h2 className="text-2xl font-bold text-white">Recent Grades</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Assignment</TableHead>
            <TableHead className="font-semibold">Subject</TableHead>
            <TableHead className="font-semibold">Score</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold text-right">Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gradesData.map((item, index) => (
            <TableRow key={index} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{item.assignment}</TableCell>
              <TableCell className="text-muted-foreground">{item.subject}</TableCell>
              <TableCell>
                <span className="font-semibold">{item.score}</span>
                <span className="text-muted-foreground">/{item.maxScore}</span>
              </TableCell>
              <TableCell className="text-muted-foreground">{item.date}</TableCell>
              <TableCell className="text-right">
                <Badge variant={getGradeBadgeVariant(item.grade)} className="font-bold">
                  {item.grade}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
