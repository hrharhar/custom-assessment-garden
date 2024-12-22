import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SearchBar } from "./assessment/SearchBar";
import { SelectedAssessments } from "./assessment/SelectedAssessments";
import { AssessmentGrid } from "./assessment/AssessmentGrid";
import { SendButton } from "./assessment/SendButton";

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
    
    toast({
      title: "Assessment package created",
      description: `Created assessment package with ${selectedAssessments.length} assessments.`,
    });
  };

  const selectedAssessmentsData = SAMPLE_ASSESSMENTS.filter(
    (assessment) => selectedAssessments.includes(assessment.id)
  );

  return (
    <div className="fade-in space-y-6 p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between space-x-4 flex-col sm:flex-row gap-4 sm:gap-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <SendButton 
          count={selectedAssessments.length} 
          onClick={handleSendAssessment} 
        />
      </div>
      
      <SelectedAssessments
        selectedAssessments={selectedAssessmentsData}
        onRemove={handleAssessmentClick}
      />
      
      <AssessmentGrid
        assessments={filteredAssessments}
        selectedIds={selectedAssessments}
        onSelect={handleAssessmentClick}
      />
    </div>
  );
};