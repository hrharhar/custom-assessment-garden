import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "./AssessmentCard";
import { Search, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  const [selectedAssessments, setSelectedAssessments] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredAssessments = SAMPLE_ASSESSMENTS.filter(
    (assessment) =>
      assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAssessmentClick = (assessmentId: number) => {
    if (selectedAssessments.includes(assessmentId)) {
      setSelectedAssessments(selectedAssessments.filter(id => id !== assessmentId));
    } else {
      if (selectedAssessments.length >= 10) {
        toast({
          title: "Maximum assessments reached",
          description: "You can only select up to 10 assessments.",
          variant: "destructive",
        });
        return;
      }
      setSelectedAssessments([...selectedAssessments, assessmentId]);
    }
  };

  const handleSendAssessment = () => {
    if (selectedAssessments.length === 0) {
      toast({
        title: "No assessments selected",
        description: "Please select at least one assessment to send.",
        variant: "destructive",
      });
      return;
    }
    
    // This would typically integrate with your backend
    toast({
      title: "Assessment package created",
      description: `Created assessment package with ${selectedAssessments.length} assessments.`,
    });
  };

  return (
    <div className="fade-in space-y-6 p-6">
      <div className="flex items-center justify-between space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search assessments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          onClick={handleSendAssessment}
          className="flex items-center gap-2"
          disabled={selectedAssessments.length === 0}
        >
          <Send className="h-4 w-4" />
          Send to Candidate ({selectedAssessments.length}/10)
        </Button>
      </div>
      
      {selectedAssessments.length > 0 && (
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Selected Assessments:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedAssessments.map((id) => {
              const assessment = SAMPLE_ASSESSMENTS.find(a => a.id === id);
              return (
                <Badge
                  key={id}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleAssessmentClick(id)}
                >
                  {assessment?.title} ✕
                </Badge>
              );
            })}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            {...assessment}
            isSelected={selectedAssessments.includes(assessment.id)}
            onClick={() => handleAssessmentClick(assessment.id)}
          />
        ))}
      </div>
    </div>
  );
};