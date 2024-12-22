import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface SendButtonProps {
  count: number;
  onClick: () => void;
}

export const SendButton = ({ count, onClick }: SendButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="flex items-center gap-2 min-w-[200px]"
      disabled={count === 0}
    >
      <Send className="h-4 w-4" />
      Send to Candidate ({count}/10)
    </Button>
  );
};