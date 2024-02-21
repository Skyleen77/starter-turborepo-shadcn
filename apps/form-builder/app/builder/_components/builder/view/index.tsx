import { Column1 } from "../layouts/column-1";
import { Column2 } from "../layouts/column-2";
import { Column3 } from "../layouts/column-3";
import { useBuilder } from "@/context/BuilderContext";
import { DropZoneLine } from "./dropzone-line";
import { Fragment } from "react";

export const View = () => {
  const { layouts, selectedComponent, setSelectedComponent } = useBuilder();

  const renderLayout = (element: Layout) => {
    const props: LayoutComponentProps = {
      id: element?.id,
      selected: selectedComponent === element?.id,
      onClick: () => {
        setSelectedComponent(element?.id);
      },
    };

    switch (element.type) {
      case "column-1":
        return <Column1 {...props} />;
      case "column-2":
        return <Column2 {...props} />;
      case "column-3":
        return <Column3 {...props} />;

      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col flex-1 h-[calc(100vh-4rem)] p-3 overflow-y-auto"
      onClick={() => setSelectedComponent(null)}
    >
      {layouts.map((layout, index) => (
        <Fragment key={layout.id}>
          <DropZoneLine id={`form-${index}`} />
          <div key={layout.id}>{renderLayout(layout)}</div>
        </Fragment>
      ))}
      <DropZoneLine id={`form-${layouts.length}`} />
    </div>
  );
};
