import { AssessmentCard } from "@/components/AssessmentCard";

interface Assessment {
  id: number;
  title: string;
  description: string;
  duration: number;
  category: string;
  timesUsed: number;
}

interface AssessmentGridProps {
  assessments: Assessment[];
  selectedIds: number[];
  onSelect: (id: number) => void;
}

export const AssessmentGrid = ({
  assessments,
  selectedIds,
  onSelect,
}: AssessmentGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assessments.map((assessment) => (
        <AssessmentCard
          key={assessment.id}
          {...assessment}
          isSelected={selectedIds.includes(assessment.id)}
          onClick={() => onSelect(assessment.id)}
        />
      ))}
    </div>
  );
};