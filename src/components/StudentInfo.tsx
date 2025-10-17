import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, GraduationCap, Calendar } from "lucide-react";

export const StudentInfo = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary via-primary-glow to-accent text-white shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-20 w-20 border-4 border-white/20">
          <AvatarFallback className="bg-white/10 text-2xl font-bold">JS</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">John Smith</h2>
          <p className="text-white/80">Student ID: 2024-001</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          <div>
            <p className="text-xs text-white/70">Class</p>
            <p className="font-semibold">12th Grade</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <div>
            <p className="text-xs text-white/70">Academic Year</p>
            <p className="font-semibold">2024-2025</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <div>
            <p className="text-xs text-white/70">Overall GPA</p>
            <p className="font-semibold text-xl">3.85</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
