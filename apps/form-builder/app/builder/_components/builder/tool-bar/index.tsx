import { Button } from "@ui/components/ui/button";
import { Layers3, PencilRuler, Plus } from "lucide-react";

export const ToolBar = () => {
  return (
    <div className="h-full flex flex-col py-2 gap-y-2 items-center w-[55px] bg-white border-gray-200 dark:bg-gray-950 border-r dark:border-gray-800">
      <Button size="icon" variant="ghost-active">
        <Plus />
      </Button>
      <Button size="icon" variant="ghost">
        <PencilRuler />
      </Button>
      <Button size="icon" variant="ghost">
        <Layers3 />
      </Button>
    </div>
  );
};
