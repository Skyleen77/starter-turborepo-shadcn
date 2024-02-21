import { useBuilder } from "@/context/BuilderContext";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@ui/lib/utils";

export const DropZoneLine = ({ id }) => {
  const { layouts } = useBuilder();
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: {
      type: "layout",
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-full transition py-1",
        (id === `form-${layouts.length}` || layouts.length <= 0) && "flex-1",
      )}
    >
      <div
        className={cn(
          "w-full transition h-1 rounded-full",
          isOver && "bg-secondary/50",
        )}
      />
    </div>
  );
};
