import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AssessmentCard } from "./AssessmentCard";
import { Search } from "lucide-react";

const SAMPLE_ASSESSMENTS = [
  {
    id: 1,
    title: "JavaScript Proficiency",
    description: "Comprehensive assessment of JavaScript fundamentals, ES6+ features, and problem-solving skills.",
    duration: 45,
    category: "Programming",
    timesUsed: 1234,
  },
  {
    id: 2,
    title: "Leadership Skills",
    description: "Evaluate leadership potential through situational judgment and behavioral questions.",
    duration: 30,
    category: "Soft Skills",
    timesUsed: 856,
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Test analytical skills using real-world data scenarios and statistical concepts.",
    duration: 60,
    category: "Analytics",
    timesUsed: 567,
  },
];

export const AssessmentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssessments = SAMPLE_ASSESSMENTS.filter(
    (assessment) =>
      assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fade-in space-y-6 p-6">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search assessments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            {...assessment}
            onClick={() => console.log("Selected assessment:", assessment.id)}
          />
        ))}
      </div>
    </div>
  );
};