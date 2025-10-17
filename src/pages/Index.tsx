import { StudentInfo } from "@/components/StudentInfo";
import { GradeCard } from "@/components/GradeCard";
import { GradesTable } from "@/components/GradesTable";
import { PerformanceChart } from "@/components/PerformanceChart";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const courses = [
    { subject: "Mathematics", grade: "A", score: 92, maxScore: 100, percentage: 92 },
    { subject: "Physics", grade: "B+", score: 88, maxScore: 100, percentage: 88 },
    { subject: "English", grade: "A", score: 95, maxScore: 100, percentage: 95 },
    { subject: "Chemistry", grade: "B", score: 85, maxScore: 100, percentage: 85 },
    { subject: "Computer Science", grade: "A+", score: 98, maxScore: 100, percentage: 98 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img src={heroImage} alt="Academic Excellence" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-2">Student Grading Portal</h1>
            <p className="text-xl text-white/90">Track Your Academic Progress</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Student Info Card */}
          <StudentInfo />

          {/* Course Grades Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Course Grades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <GradeCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <PerformanceChart />

          {/* Detailed Grades Table */}
          <GradesTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
