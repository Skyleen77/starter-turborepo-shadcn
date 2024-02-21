import { useDraggable } from "@dnd-kit/core";
import { iconsList, layoutsList, titlesList } from "../constants";
import { ElementToAdd } from "./element-to-add";

const DraggableElement = ({ element, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.type,
    data: {
      element,
    },
  });

  let style = {
    transform: undefined,
  };

  if (transform && transform?.x && transform?.y) {
    style.transform = `translate(${transform?.x}px, ${transform?.y}px)`;
  } else {
    style.transform = undefined;
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export const LeftBar = () => {
  return (
    <div className="p-3 h-full w-[300px] bg-white border-gray-200 dark:bg-gray-950 border-r dark:border-gray-800">
      <div className="mb-5">
        <h3 className="text-xl font-medium">Components</h3>
        <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
          Drag and drop elements to build your form
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Layouts</h4>
          <div className="grid grid-cols-4 gap-x-2">
            {layoutsList.map((layout) => (
              <DraggableElement key={layout.type} element={layout}>
                <ElementToAdd
                  title={titlesList[layout.type]}
                  icon={iconsList[layout.type]}
                />
              </DraggableElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
