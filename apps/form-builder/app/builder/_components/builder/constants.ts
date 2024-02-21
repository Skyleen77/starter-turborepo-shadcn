import { Columns2, Columns3, Square, TextCursorInput } from "lucide-react";

export const titlesList = {
  "column-1": "Column",
  "column-2": "Column 2",
  "column-3": "Column 3",
  "input-text": "Input text",
};

export const iconsList = {
  "column-1": Square,
  "column-2": Columns2,
  "column-3": Columns3,
  "input-text": TextCursorInput,
};

export const layoutsList = [
  {
    type: "column-1",
    dataType: "layout",
  },
  {
    type: "column-2",
    dataType: "layout",
  },
  {
    type: "column-3",
    dataType: "layout",
  },
];

export const elementsList = [
  {
    type: "input-text",
    inputType: "text",
    label: "Label",
    placeholder: "Enter your text",
    dataType: "element",
  },
];

export const dropzoneId = {
  layout: "form",
  element: "layout",
};
