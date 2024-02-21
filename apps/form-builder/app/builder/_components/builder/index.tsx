"use client";

import { LeftBar } from "./left-bar";
import { ToolBar } from "./tool-bar";
import { View } from "./view";
import { DndContext } from "@dnd-kit/core";
import { nanoid } from "nanoid";
import { arrayMove } from "@dnd-kit/sortable";
import { useBuilder } from "@/context/BuilderContext";

export const Builder = () => {
  const { layouts, setLayouts, setSelectedComponent } = useBuilder();

  const handleDragEnd = ({ active, over }) => {
    if (over) {
      const overIndex = parseInt(over.id.replace("form-", ""));
      const activeIndex = layouts.findIndex((el) => el.id === active.id);

      if (activeIndex !== -1) {
        // Réarranger les éléments
        setLayouts((prevElements) =>
          arrayMove(prevElements, activeIndex, overIndex),
        );
        setSelectedComponent(active.id);
      } else if (!isNaN(overIndex)) {
        // Ajouter un nouvel élément
        const newElement = { id: nanoid(), ...active.data.current.element };
        setLayouts((prevElements) => [
          ...prevElements.slice(0, overIndex),
          newElement,
          ...prevElements.slice(overIndex),
        ]);
        setSelectedComponent(newElement.id);
      }
    }
  };

  return (
    <div className="flex flex-row h-full overflow-hidden">
      <DndContext onDragEnd={handleDragEnd}>
        <ToolBar />
        <LeftBar />
        <View />
      </DndContext>
    </div>
  );
};
