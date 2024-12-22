import { Badge } from "@/components/ui/badge";

interface SelectedAssessmentsProps {
  selectedAssessments: Array<{
    id: number;
    title: string;
  }>;
  onRemove: (id: number) => void;
}

export const SelectedAssessments = ({
  selectedAssessments,
  onRemove,
}: SelectedAssessmentsProps) => {
  if (selectedAssessments.length === 0) return null;

  return (
    <div className="bg-muted/50 p-4 rounded-lg animate-fade-in">
      <h3 className="font-medium mb-2">Selected Assessments:</h3>
      <div className="flex flex-wrap gap-2">
        {selectedAssessments.map(({ id, title }) => (
          <Badge
            key={id}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/60 transition-colors"
            onClick={() => onRemove(id)}
          >
            {title} ✕
          </Badge>
        ))}
      </div>
    </div>
  );
};