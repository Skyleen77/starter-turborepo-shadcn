import { useDraggable } from "@dnd-kit/core";
import { getElementDraggableStyle } from "../utils";
import { cn } from "@ui/lib/utils";

export const Column2 = ({ id, selected, onClick }: LayoutComponentProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      onMouseDown={onClick}
      className={cn(
        "w-full p-20 rounded-sm",
        selected && "outline outline-secondary/50",
      )}
      style={getElementDraggableStyle(transform)}
      {...attributes}
      {...listeners}
    >
      Column 2
    </div>
  );
};
