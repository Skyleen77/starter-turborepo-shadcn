import { Transform } from "@dnd-kit/utilities";

export const getElementDraggableStyle = (transform: Transform) => {
  let style = {
    transform: undefined,
  };

  if (transform && transform?.x && transform?.y) {
    style.transform = `translate(${transform?.x}px, ${transform?.y}px)`;
  } else {
    style.transform = undefined;
  }

  return style;
};
